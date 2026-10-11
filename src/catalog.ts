export type Category = 'normal'|'translucido'|'neon'|'fluorescente'|'fosforescente'|'pastel'|'brillante'|'Bio'|'pendiente';
export type BeadColor = { id:string; colorCode:string; name:string; originalName:string; category:Category; hex:string; verified:boolean; source:string; bagReference?:string; bagImage?:string };
const official = 'https://cdn.shopify.com/s/files/1/0726/3771/0492/files/Midi_-_Colour_palette.pdf';
const midiBags = 'https://hama.dk/en/products/1000-midi-beads-in-bag';
const chart2026 = 'https://cdn.shopify.com/s/files/1/0726/3771/0492/files/colour-chart-number.pdf?v=1777215620';
// Códigos y nombres de la carta Hama Midi 2023 y la paleta oficial Midi actual.
const rows: [string,string,string,Category,string][] = [
['01','Blanco','White','normal','#F4F2EA'],['02','Crema','Cream','normal','#F0D9A5'],['03','Amarillo','Yellow','normal','#F5D927'],['04','Naranja','Orange','normal','#F18420'],['05','Rojo','Red','normal','#D92532'],['06','Rosa','Pink','normal','#E96C9A'],['07','Morado','Purple','normal','#713A8D'],['08','Azul','Blue','normal','#184C99'],['09','Azul claro','Light blue','normal','#48A9DF'],['10','Verde','Green','normal','#31854C'],['11','Verde claro','Light green','normal','#88BE53'],['12','Marrón','Brown','normal','#7B4B2D'],
['13','Rojo translúcido','Translucent red','translucido','#E85A55'],['14','Amarillo translúcido','Translucent yellow','translucido','#F4D64D'],['15','Azul translúcido','Translucent blue','translucido','#67B5D1'],['16','Verde translúcido','Translucent green','translucido','#77BE79'],['17','Gris','Grey','normal','#96999B'],['18','Negro','Black','normal','#25272B'],['19','Transparente','Clear','translucido','#D5E3DE'],['20','Marrón rojizo','Reddish brown','normal','#914C39'],['21','Marrón claro','Light brown','normal','#C58B57'],['22','Rojo oscuro','Dark red','normal','#9D1E38'],['24','Morado translúcido','Translucent purple','translucido','#9E79AD'],['26','Rosa mate','Matt rose','normal','#E0A0A8'],['27','Beige','Beige','normal','#D7C3A1'],['28','Verde oscuro','Dark green','normal','#185B38'],['29','Granate','Claret','normal','#782344'],['30','Burdeos','Burgundy','normal','#632641'],['31','Turquesa','Turquoise','normal','#24A9A4'],
['32','Fucsia neón','Neon fuchsia','neon','#F53C98'],['33','Cereza','Cerise','normal','#B9294F'],['34','Amarillo neón','Neon yellow','neon','#E8F02B'],['35','Rojo neón','Neon red','neon','#FF3F43'],['36','Azul neón','Neon blue','neon','#17C6E8'],['37','Verde neón','Neon green','neon','#45D537'],['38','Naranja neón','Neon orange','neon','#FF711D'],['42','Verde fluorescente','Fluorescent green','fluorescente','#9BDC36'],['43','Amarillo pastel','Pastel yellow','pastel','#F8E9A4'],['44','Rojo pastel','Pastel red','pastel','#F1A19B'],['45','Morado pastel','Pastel purple','pastel','#B7A3D1'],['46','Azul pastel','Pastel blue','pastel','#A4D1E9'],['47','Verde pastel','Pastel green','pastel','#BCD99D'],['48','Rosa pastel','Pastel pink','pastel','#F2C1D0'],['49','Azul azure','Azure','normal','#009EB9'],
['55','Brilla en la oscuridad verde','Glow in the dark - green','fosforescente','#A7D856'],['56','Brilla en la oscuridad rojo','Glow in the dark - red','fosforescente','#F17A77'],['57','Brilla en la oscuridad azul','Glow in the dark - blue','fosforescente','#7C9BC7'],['60','Marrón osito','Teddybear brown','normal','#99684A'],['61','Dorado','Gold','brillante','#C6A54B'],['62','Plateado','Silver','brillante','#AFB4B8'],['63','Bronce','Bronze','brillante','#A8794D'],['64','Perla','Pearl','brillante','#E8DED1'],['70','Gris claro','Light grey','normal','#C7C9C8'],['71','Gris oscuro','Dark grey','normal','#585B5D'],['72','Rosa translúcido','Translucent pink','translucido','#E79BB6'],['73','Aqua translúcido','Translucent aqua','translucido','#81D1D0'],['74','Lila translúcido','Translucent lilac','translucido','#C0A8D0'],['75','Nougat claro','Light nougat','normal','#D9B58C'],['76','Nougat','Nougat','normal','#B98761'],['77','Blanco nublado','Cloudy white','normal','#E8E7DD'],['78','Melocotón claro','Light peach','normal','#F5C3A4'],['79','Albaricoque','Apricot','normal','#F0A06F'],['82','Ciruela','Plum','normal','#71416D'],['83','Azul petróleo','Petrol blue','normal','#176A7C'],['84','Verde oliva','Olive green','normal','#767C38'],['95','Rosa pastel','Pastel rose','pastel','#F2CCD5'],['96','Lila pastel','Pastel lilac','pastel','#D3C0E2'],['97','Azul hielo pastel','Pastel ice blue','pastel','#C8E4EF'],['98','Menta pastel','Pastel mint','pastel','#C0E3D1'],['101','Eucalipto','Eucalyptus','normal','#A9C39B'],['102','Verde bosque','Forest green','normal','#356B2D'],['103','Amarillo claro','Light yellow','normal','#FFE660'],['104','Verde lima','Lime','normal','#BCD122'],['105','Albaricoque claro','Light apricot','normal','#F5B58D'],['106','Violeta claro','Light violet','normal','#B49BC6'],['107','Azul lavanda','Lavender blue','normal','#9BA9D8'],['108','Lila claro','Light lavender','normal','#C7B3D9'],['109','Gris topo','Taupe grey','normal','#8C817B'],['110','Marrón topo','Taupe brown','normal','#8A7468'],['111','Rojo granate','Maroon red','normal','#7A293D'],['112','Azul cielo','Sky blue','normal','#75B9E8'],['113','Azul empolvado','Dusty blue','normal','#7F9EBC'],['114','Mostaza','Mustard','normal','#D8A92F'],['115','Rosa fucsia','Fuchsia pink','normal','#D52B82'],['116','Gris azulado','Blue grey','normal','#8C9BA5'],['117','Ciruela oscuro','Dark plum','normal','#593649'],['118','Lila grisáceo','Greyish lilac','normal','#9C8DAB'],['119','Verde brillante','Bright green','normal','#55B95B'],['120','Verde manzana','Apple green','normal','#9ACB3C'],['121','Rojo cereza','Cherry red','normal','#C92E43'],['122','Ciruela rojiza','Plum red','normal','#913C5C'],['123','Arena','Sand','normal','#D8C5A6'],['124','Acacia','Acacia','normal','#B7A56E'],['125','Petrol polvoriento','Dusty petrol','normal','#4F7E83']
];
const verifiedColors: BeadColor[] = rows.map(([colorCode,name,originalName,category,hex])=>({id:`hama-midi-${colorCode}`,colorCode,name,originalName,category,hex,verified:true,source:official}));
export const retailerSource = 'https://www.hamabeads.es/9-1000';
const retailerOnlyNames = new Set(['101','102','103','104','105','106','107','123','124','125']);
const catalogCodes2026 = new Set(['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','24','26','27','28','29','30','31','32','34','35','36','37','38','42','43','44','45','46','47','48','49','55','56','60','61','62','63','64','70','71','72','73','74','75','76','77','78','79','82','83','84','95','96','97','98','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122']);
const knownMidiBags = new Set(['123','124','125']);
// URLs de imagen extraídas de la galería oficial Hama y asociadas por SKU.
const officialBagImages:Record<string,string>={
  '01':'https://hama.dk/cdn/shop/files/207-01_2.png?v=1773138841&width=640',
  '02':'https://hama.dk/cdn/shop/files/207-02_2.png?v=1773138841&width=640',
  '03':'https://hama.dk/cdn/shop/files/207-03_2.png?v=1773138841&width=640',
  '04':'https://hama.dk/cdn/shop/files/207-04.png?v=1773138841&width=640',
  '05':'https://hama.dk/cdn/shop/files/207-05.png?v=1773138841&width=640',
  '06':'https://hama.dk/cdn/shop/files/207-06.png?v=1773138841&width=640',
  '07':'https://hama.dk/cdn/shop/files/207-07.png?v=1773138841&width=640',
  '08':'https://hama.dk/cdn/shop/files/207-08.png?v=1773138841&width=640',
  '09':'https://hama.dk/cdn/shop/files/207-09.png?v=1773138841&width=640',
  '10':'https://hama.dk/cdn/shop/files/207-10.png?v=1773138841&width=640',
  '11':'https://hama.dk/cdn/shop/files/207-11.png?v=1773138841&width=640',
  '12':'https://hama.dk/cdn/shop/files/207-12_2.png?v=1773138841&width=640',
  '13':'https://hama.dk/cdn/shop/files/207-13_2.png?v=1773138841&width=640',
  '14':'https://hama.dk/cdn/shop/files/207-14_2.png?v=1773138841&width=640',
  '15':'https://hama.dk/cdn/shop/files/207-15_2.png?v=1773138841&width=640',
  '16':'https://hama.dk/cdn/shop/files/207-16_2.png?v=1773138841&width=640',
  '17':'https://hama.dk/cdn/shop/files/207-17_2.png?v=1773138841&width=640',
  '18':'https://hama.dk/cdn/shop/files/207-18_2.png?v=1773138841&width=640',
  '19':'https://hama.dk/cdn/shop/files/207-19_2.png?v=1773138841&width=640',
  '20':'https://hama.dk/cdn/shop/files/207-20.png?v=1773138841&width=640',
  '21':'https://hama.dk/cdn/shop/files/207-21_2.png?v=1773138841&width=640',
  '22':'https://hama.dk/cdn/shop/files/207-22_2.png?v=1773138841&width=640',
  '24':'https://hama.dk/cdn/shop/files/207-24.png?v=1773138841&width=640',
  '26':'https://hama.dk/cdn/shop/files/207-26_2.png?v=1773138841&width=640',
  '27':'https://hama.dk/cdn/shop/files/207-27_2.png?v=1773138841&width=640',
  '28':'https://hama.dk/cdn/shop/files/207-28_2.png?v=1773138841&width=640',
  '29':'https://hama.dk/cdn/shop/files/207-29_2.png?v=1773138841&width=640',
  '30':'https://hama.dk/cdn/shop/files/207-30_2.png?v=1773138841&width=640',
  '31':'https://hama.dk/cdn/shop/files/207-31_2.png?v=1773138841&width=640',
  '32':'https://hama.dk/cdn/shop/files/207-32.png?v=1773138841&width=640',
  '34':'https://hama.dk/cdn/shop/files/207-34_2.png?v=1773138841&width=640',
  '35':'https://hama.dk/cdn/shop/files/207-35_2.png?v=1773138841&width=640',
  '36':'https://hama.dk/cdn/shop/files/207-36_2.png?v=1773138841&width=640',
  '37':'https://hama.dk/cdn/shop/files/207-37_2.png?v=1773138841&width=640',
  '38':'https://hama.dk/cdn/shop/files/207-38_2.png?v=1773138841&width=640',
  '43':'https://hama.dk/cdn/shop/files/207-43_2.png?v=1773138841&width=640',
  '44':'https://hama.dk/cdn/shop/files/207-44_2.png?v=1773138841&width=640',
  '45':'https://hama.dk/cdn/shop/files/207-45_2.png?v=1773138841&width=640',
  '46':'https://hama.dk/cdn/shop/files/207-46_2.png?v=1773138841&width=640',
  '47':'https://hama.dk/cdn/shop/files/207-47_2.png?v=1773138841&width=640',
  '48':'https://hama.dk/cdn/shop/files/207-48_2.png?v=1773138841&width=640',
  '49':'https://hama.dk/cdn/shop/files/207-49_2.png?v=1773138841&width=640',
  '55':'https://hama.dk/cdn/shop/files/207-55.png?v=1773138841&width=640',
  '56':'https://hama.dk/cdn/shop/files/207-56.png?v=1773138841&width=640',
  '60':'https://hama.dk/cdn/shop/files/207-60_2.png?v=1773138841&width=640',
  '61':'https://hama.dk/cdn/shop/files/207-61_2.png?v=1773138841&width=640',
  '62':'https://hama.dk/cdn/shop/files/207-62_2.png?v=1773138841&width=640',
  '63':'https://hama.dk/cdn/shop/files/207-63_2.png?v=1773138841&width=640',
  '64':'https://hama.dk/cdn/shop/files/207-64_2.png?v=1773138841&width=640',
  '70':'https://hama.dk/cdn/shop/files/207-70_2.png?v=1773138841&width=640',
  '71':'https://hama.dk/cdn/shop/files/207-71_2.png?v=1773138841&width=640',
  '72':'https://hama.dk/cdn/shop/files/207-72_2.png?v=1773138841&width=640',
  '73':'https://hama.dk/cdn/shop/files/207-73_2.png?v=1773138841&width=640',
  '74':'https://hama.dk/cdn/shop/files/207-74_2.png?v=1773138841&width=640',
  '75':'https://hama.dk/cdn/shop/files/207-75_2.png?v=1773138841&width=640',
  '76':'https://hama.dk/cdn/shop/files/207-76_2.png?v=1773138841&width=640',
  '77':'https://hama.dk/cdn/shop/files/207-77_2.png?v=1773138841&width=640',
  '78':'https://hama.dk/cdn/shop/files/207-78.png?v=1773138841&width=640',
  '79':'https://hama.dk/cdn/shop/files/207-79_2.png?v=1773138841&width=640',
  '82':'https://hama.dk/cdn/shop/files/207-82.png?v=1774950998&width=640',
  '83':'https://hama.dk/cdn/shop/files/207-83_2.png?v=1773138841&width=640',
  '84':'https://hama.dk/cdn/shop/files/207-84_2.png?v=1773138841&width=640',
  '95':'https://hama.dk/cdn/shop/files/207-95_2.png?v=1773138841&width=640',
  '96':'https://hama.dk/cdn/shop/files/207-96_2.png?v=1773138841&width=640',
  '97':'https://hama.dk/cdn/shop/files/207-97_2.png?v=1773138841&width=640',
  '98':'https://hama.dk/cdn/shop/files/207-98_2.png?v=1773138841&width=640',
  '101':'https://hama.dk/cdn/shop/files/207-101_2.png?v=1773138841&width=640',
  '102':'https://hama.dk/cdn/shop/files/207-102_2.png?v=1773138841&width=640',
  '103':'https://hama.dk/cdn/shop/files/207-103.png?v=1773138841&width=640',
  '104':'https://hama.dk/cdn/shop/files/207-104_2.png?v=1773138841&width=640',
  '105':'https://hama.dk/cdn/shop/files/207-105.png?v=1773138841&width=640',
  '106':'https://hama.dk/cdn/shop/files/207-106.png?v=1773138841&width=640',
  '107':'https://hama.dk/cdn/shop/files/207-107.png?v=1773138841&width=640',
  '108':'https://hama.dk/cdn/shop/files/207-108.png?v=1773138841&width=640',
  '109':'https://hama.dk/cdn/shop/files/207-109.png?v=1773138841&width=640',
  '110':'https://hama.dk/cdn/shop/files/207-110.png?v=1773138841&width=640',
  '111':'https://hama.dk/cdn/shop/files/207-111_c0665f3e-4201-4f43-bdc0-51d217010eaa.png?v=1773138841&width=640',
  '112':'https://hama.dk/cdn/shop/files/207-112.jpg?v=1773138841&width=640',
  '113':'https://hama.dk/cdn/shop/files/207-113.jpg?v=1773138841&width=640',
  '114':'https://hama.dk/cdn/shop/files/207-114.jpg?v=1773138841&width=640',
  '115':'https://hama.dk/cdn/shop/files/207-115.jpg?v=1773138841&width=640',
  '116':'https://hama.dk/cdn/shop/files/207-116.jpg?v=1773138841&width=640',
  '117':'https://hama.dk/cdn/shop/files/207-117.png?v=1773138841&width=640',
  '118':'https://hama.dk/cdn/shop/files/207-118_3399b885-3e68-401c-a283-4cc13a9e07c2.png?v=1773138841&width=640',
  '119':'https://hama.dk/cdn/shop/files/207-119.png?v=1773138841&width=640',
  '120':'https://hama.dk/cdn/shop/files/207-120.png?v=1776248103&width=640',
  '121':'https://hama.dk/cdn/shop/files/207-121.png?v=1776248101&width=640',
  '122':'https://hama.dk/cdn/shop/files/207-122_c06f16c5-c5d6-49ca-9ba8-8132f9e2b114.png?v=1776248136&width=640',
  '123':'https://hama.dk/cdn/shop/files/207-123.jpg?v=1787057139&width=640',
  '124':'https://hama.dk/cdn/shop/files/207-124.jpg?v=1787058037&width=640',
  '125':'https://hama.dk/cdn/shop/files/207-125.jpg?v=1787058037&width=640',
};
// Las filas históricas contienen más de una revisión para algunos códigos.
// Una tarjeta por código evita duplicados sin tocar los stocks guardados por ID.
const latestColorByCode = new Map<string, BeadColor>();
for (const color of verifiedColors) latestColorByCode.set(color.colorCode, color);
export const catalog: BeadColor[] = [...latestColorByCode.values()].filter(c=>(c.colorCode==='57'||catalogCodes2026.has(c.colorCode)||knownMidiBags.has(c.colorCode))).map(c=>{
  const result = officialBagImages[c.colorCode] ? {...c,bagImage:officialBagImages[c.colorCode]} : c;
  if(['101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122'].includes(c.colorCode)) return {...result,verified:true,source:midiBags} ;
  if(knownMidiBags.has(c.colorCode)) return {...result,name:`Código ${c.colorCode} · nombre por verificar`,originalName:'Nombre pendiente de reconciliar con Hama',category:'pendiente' as Category,verified:false,source:midiBags} ;
  if(retailerOnlyNames.has(c.colorCode)) return {...c,verified:false,source:retailerSource};
  return c;
}).sort((a,b)=>Number(a.colorCode)-Number(b.colorCode));
export const pendingMidiCodes = ['123','124','125'];
export const pendingCount = catalog.filter(c=>!c.verified).length;
export const catalogVersion = 'Hama 2026';
export const catalogSources = [midiBags,official,chart2026,'https://hama.dk/en/pages/colour-chart',retailerSource];
export const categoryLabels:Record<Category,string>={normal:'Normal',translucido:'Translúcido',neon:'Neón',fluorescente:'Fluorescente',fosforescente:'Brilla en la oscuridad',pastel:'Pastel',brillante:'Brillante',Bio:'Bio · Midi',pendiente:'Pendiente de verificar'};
