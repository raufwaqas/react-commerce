import { CompanyLogo, Inav, Icart } from '../../../../types';

export const Logo: CompanyLogo[] = [
  {
    url: 'https://d3studio.se/react/w-a-klinique-loga.svg',
    title: 'W&A Klinique',
  },
];
export const NavItem: Inav[] = [
  {
    name: 'HEM',
    path: '/',
    slug: '',
  },
  {
    name: 'PRODUKT',
    path: '/produkt',
    slug: 'produkt',
  },
  {
    name: 'OM OSS',
    path: '/omoss',
    slug: 'omoss',
  },
  {
    name: 'KONTAKTA OSS',
    path: 'kontakt',
    slug: '/kontakt',
  },
];

export let cart: Icart[] = [
  {
    icon: '/my-app/src/assets/icons/cart-icon.svg',
  },
];
