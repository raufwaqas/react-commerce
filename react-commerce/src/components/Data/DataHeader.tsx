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
    path: '/home',
    slug: 'home',
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
    path: '/kontakt',
    slug: 'kontakt',
  },
  {
    name: 'KUND VAGN',
    path: '/cart',
    slug: 'cart',
  },
  {
    name: 'KASSA',
    path: '/checkout',
    slug: 'checkout',
  },
];

export let cart: Icart[] = [
  {
    icon: '/my-app/src/assets/icons/cart-icon.svg',
  },
];
