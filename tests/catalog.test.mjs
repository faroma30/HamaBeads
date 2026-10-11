import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync(new URL('../src/catalog.ts', import.meta.url), 'utf8');
const parsed = [...source.matchAll(/\['(\d{2,3})','([^']*)','([^']*)','([^']*)','(#[0-9A-Fa-f]{6})'\]/g)];
const codes = parsed.map(m => m[1]);
const official2026 = '01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 24 26 27 28 29 30 31 32 34 35 36 37 38 42 43 44 45 46 47 48 49 55 56 60 61 62 63 64 70 71 72 73 74 75 76 77 78 79 82 83 84 95 96 97 98 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122'.split(' ');

test('el catálogo activo tiene 93 códigos únicos y concilia las fuentes', () => {
  const currentSet = source.match(/const catalogCodes2026 = new Set\(\[([^\]]+)\]\)/)?.[1] ?? '';
  const current = [...currentSet.matchAll(/'(\d{2,3})'/g)].map(m => m[1]);
  const bagSet = source.match(/const knownMidiBags = new Set\(\[([^\]]+)\]\)/)?.[1] ?? '';
  const bags = [...bagSet.matchAll(/'(\d{2,3})'/g)].map(m => m[1]);
  assert.equal(current.length, 89);
  assert.equal(new Set(current).size, current.length);
  assert.equal(current.includes('57'), false, '57 no pertenece a la carta 2026');
  assert.equal(current.includes('33'), false, '33 está excluido del catálogo actual');
  assert.ok(codes.includes('57'), '57 se conserva desde la carta histórica Midi');
  assert.ok(codes.includes('33'), '33 se conserva como referencia histórica');
  for (const code of ['123','124','125']) assert.ok(bags.includes(code), `falta SKU Midi ${code}`);
  const historicalMidi = new Set(['57']);
  const active = [...new Set([...current, ...historicalMidi, ...bags])].sort((a,b)=>Number(a)-Number(b));
  assert.equal(current.length, 89, 'la carta PDF contiene 89 códigos, no 88');
  assert.equal(active.length, 93, '89 de 2026 + 57 histórico + 3 SKU = 93');
  assert.equal(active.includes('33'), false);
  assert.ok(active.includes('57'));
  assert.deepEqual(active, [...active].sort((a,b)=>Number(a)-Number(b)));
  const idSource = source.match(/export const catalog: BeadColor\[\] = ([\s\S]*?)\.sort\(/)?.[1] ?? '';
  assert.match(idSource, /catalogCodes2026/);
  assert.match(idSource, /knownMidiBags/);
  assert.ok(source.includes("c.colorCode==='57'||catalogCodes2026.has(c.colorCode)"));
  assert.match(source, /latestColorByCode/);
  const rawActiveRows = codes.filter(code => code === '57' || current.includes(code) || bags.includes(code));
  assert.ok(rawActiveRows.length >= active.length, 'las filas repetidas se deduplican antes de mostrar el catálogo');
  assert.equal(new Set(rawActiveRows).size, active.length);
  for (const code of official2026) assert.ok(active.includes(code), `falta ${code}`);
  assert.deepEqual(active, [...active].sort((a,b)=>Number(a)-Number(b)));
});

test('123–125 siguen pendientes en nombre y tono', () => {
  for (const code of ['123','124','125']) {
    assert.ok(source.includes('Código ${c.colorCode} · nombre por verificar'));
  }
  assert.match(source, /verified:false,source:midiBags/);
});

test('cada foto oficial se asigna solo al SKU idéntico y 42/57 conservan fallback', () => {
  const imageBlock = source.match(/const officialBagImages:Record<string,string>=\{([\s\S]*?)\n\};/)?.[1] ?? '';
  const images = [...imageBlock.matchAll(/'([0-9]{2,3})':'(https:\/\/[^']+)'/g)];
  assert.equal(images.length, 91);
  assert.equal(new Set(images.map(([,code]) => code)).size, images.length);
  for (const [,code,url] of images) assert.match(url, new RegExp(`/207-${code}(?:_|\\.|-)`), `la foto de ${code} debe corresponder al mismo SKU`);
  assert.ok(!images.some(([,code]) => code === '42' || code === '57'));
  assert.match(source, /officialBagImages\[c\.colorCode\]/);
  const app = fs.readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8');
  assert.match(app, /loading="lazy"/);
  assert.match(app, /onError=\{\(\)=>setFailed\(true\)\}/);
  assert.match(app, /Imagen pendiente/);
  assert.match(app, /width=1200/);
});

test('el catálogo activo exportado conserva bagImage en los 91 SKUs con foto', async () => {
  // Importa el TypeScript con el runner nativo de Node, disponible en Node 22+.
  const { catalog } = await import('../src/catalog.ts');
  assert.equal(catalog.length, 93);
  const withImage = catalog.filter(color => color.bagImage);
  assert.equal(withImage.length, 91);
  for (const code of ['01','02','03','05','18','95','98','101','108','125']) {
    const color = catalog.find(item => item.colorCode === code);
    assert.ok(color, `falta el código ${code}`);
    assert.ok(color.bagImage, `el código ${code} perdió bagImage`);
    assert.match(color.bagImage, new RegExp(`/207-${code}(?:_|\\.|-)`));
  }
  for (const code of ['42','57']) {
    const color = catalog.find(item => item.colorCode === code);
    assert.ok(color);
    assert.equal(color.bagImage, undefined);
  }
});

test('service worker cachea con límite las imágenes oficiales', () => {
  const config = fs.readFileSync(new URL('../vite.config.ts', import.meta.url), 'utf8');
  assert.match(config, /hama-product-images/);
  assert.match(config, /maxEntries: 100/);
  assert.match(config, /30 \* 24 \* 60 \* 60/);
});

test('todos los registros tienen HEX legible e ID estable con ceros conservados', () => {
  for (const m of parsed) {
    assert.match(m[5], /^#[0-9A-Fa-f]{6}$/);
    assert.match(m[1], /^\d{2,3}$/);
    assert.ok(m[2].length > 0 && m[3].length > 0);
  }
});

test('la app incluye migración aditiva y preserva stocks por ID', () => {
  const storage = fs.readFileSync(new URL('../src/storage.ts', import.meta.url), 'utf8');
  assert.match(storage, /const stock:Record<string,Stock>=\{\.\.\.parsed\.stock\}/);
  assert.match(storage, /stock\[color\.id\]=v===0\|\|v===50\|\|v===100\?v:null/);
  assert.match(storage, /Object\.entries\(stock\)/);
  assert.match(storage, /hama-midi-\\d\{2,3\}/);
});
