interface Ibrand {
  url: string;
  title: string;
}
interface Inav {
  name: string;
  path: string;
  slug: string;
}

interface Icart {
  icon: string;
}

export const brand: Ibrand[] = [
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
