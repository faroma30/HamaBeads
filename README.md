# HamaStock

Inventario local Hama Beads Midi de 5 mm, desarrollado con React, TypeScript y Vite.

## Comandos en Windows PowerShell

```powershell
cd 'C:\Users\farom\Downloads\Proyectos\Stock Hama Beads'
npm install
npm run test
npm run build
npm run dev
```

Si se crea un `package-lock.json`, consérvalo en las siguientes instalaciones y usa `npm ci` para reproducir las dependencias exactas.

## Catálogo

El catálogo activo tiene 93 códigos únicos: 89 referencias de la carta numérica Hama 2026, el 57 de la paleta histórica Hama Midi y los SKU individuales 123, 124 y 125 de la tienda oficial. La cifra anterior de 88 para la carta 2026 estaba infracontada; por eso `88 + 1 + 3` daba 92. El 57 no está entre los 89 de 2026, por lo que el total corregido es `89 + 1 + 3 = 93`. El 33 se conserva en la matriz histórica pero está excluido del catálogo activo. Las filas repetidas de códigos en la matriz se consolidan por código al formar el catálogo. Los IDs antiguos del inventario se preservan en `localStorage` y en los backups.

Los nombres y tonos de 123–125 están marcados como pendientes de confirmación; Hama confirma que existen como variantes del producto de bolsa Midi. El 57 se mantiene como referencia histórica individual Midi. Los HEX son muestras aproximadas, no valores oficiales.

Fuentes: [carta numérica 2026](https://cdn.shopify.com/s/files/1/0726/3771/0492/files/colour-chart-number.pdf?v=1777215620), [bolsas Midi individuales Hama](https://hama.dk/en/products/1000-midi-beads-in-bag), [palette Midi Hama](https://cdn.shopify.com/s/files/1/0726/3771/0492/files/Midi_-_Colour_palette.pdf).

## Instalación en GitHub Pages

En PowerShell configura el nombre del repositorio antes de compilar:

```powershell
$env:GITHUB_PAGES='true'
npm run build
```

La aplicación no se ha publicado. El service worker y el modo sin conexión requieren servir la compilación mediante HTTPS (localhost es válido en desarrollo).

## Diagnóstico de npm (entorno actual)

Node 24.21.0 y npm 11.19.0 están disponibles; el registro es `https://registry.npmjs.org/` y `strict-ssl` está activado. En el entorno de desarrollo DNS devuelve host desconocido para `registry.npmjs.org`; no hay proxy configurado, `node_modules` y `package-lock.json` no existen, y la caché local no contiene React/Vite. No se modificaron DNS, proxy, certificados ni el registro npm.

La prueba que puede ejecutarse sin instalar paquetes es:

```powershell
node --test tests/catalog.test.mjs
```

Esto no reemplaza el build ni pruebas de navegador. Cuando el DNS funcione, ejecuta `npm install`, `npm run test`, `npm run build` y después `npm run dev` para validar en navegador.
