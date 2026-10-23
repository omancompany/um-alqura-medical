export function validateContact(c) {
 if(c.publicationMode==='existing-public-content') {
  const required=["phone", "whatsapp", "addressAr", "addressEn", "hoursAr", "hoursEn", "privacyText", "mapQuery", "siteUrl"];
  const errors=required.filter(k=>typeof c[k]!=='string'||!c[k].trim());
  if(c.contentApproved!==true)errors.push('owner content approval');
  if(c.siteUrl!=='https://omancompany.github.io')errors.push('approved Pages origin');
  if(!/^968[0-9]{8}$/.test(c.phone||'')||c.whatsapp!==c.phone)errors.push('published phone');if(c.privacyApproved!==true)errors.push('privacy approval');if(c.mapQuery!=='مجمع أم القرى الطبي Umalqura Polyclinic, Barka, Muscat, Oman')errors.push('published map query');
  if(errors.length)throw Error('Existing public content invalid: '+errors.join(', '));return c;
 }

 const required=['phone','whatsapp','email','addressAr','addressEn','hoursAr','hoursEn','siteUrl','privacyText'];
 const errors=required.filter(k=>typeof c[k]!=='string'||!c[k].trim()||/XXXX|placeholder|TODO/i.test(c[k]));
 if(!/^968[0-9]{8}$/.test(c.phone||''))errors.push('phone');
 if(!/^968[0-9]{8}$/.test(c.whatsapp||''))errors.push('whatsapp');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email||''))errors.push('email');
 try {if(new URL(c.siteUrl).protocol!=='https:')throw Error()}catch{errors.push('siteUrl')}
 if(c.contentApproved!==true||c.privacyApproved!==true)errors.push('owner content/privacy approval');
 if(!c.mapQuery||!/^(-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?)$/.test(c.mapQuery)&&!c.mapQuery.startsWith('place_id:'))errors.push('exact map coordinates/place_id');
 if(errors.length)throw Error('Production contact configuration required: '+[...new Set(errors)].join(', '));return c;
}
