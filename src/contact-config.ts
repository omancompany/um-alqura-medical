import configured from './generated/contact.json';
export const contact = configured as typeof configured & {jokesEnabled?:boolean};
export const whatsappUrl = 'https://wa.me/' + contact.whatsapp;

// Existing public social identity, centralized pending owner content review.
export const socials={instagramUsername:'@umalqura_poly',instagramUrl:'https://www.instagram.com/umalqura_poly/'};
