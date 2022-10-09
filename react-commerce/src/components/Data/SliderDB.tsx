export interface ICarousel {
  img: string;
  name: string;
  produktbild: string;
  shortdesc: string;
  colorgroup: string;
  ean: number | string;
  artnr: number;
}

export let Carousel: ICarousel[] = [
  {
    artnr: 101492,
    img: 'https://d3studio.se/react/img/slider/model02.png',
    name: 'Sensitive Balance Face Fluid',
    produktbild: 'https://d3studio.se/react/img/600px/101492.png',
    shortdesc: 'Lätt, mild och lugnande ansiktskräm',
    colorgroup: 'group2',
    ean: 7319861014921,
  },
  {
    artnr: 101488,
    img: 'https://d3studio.se/react/img/slider/slider-img.png',
    name: 'Ultra Soft Cleansing Milk P',
    produktbild: 'https://d3studio.se/react/img/600px/101488.png',
    shortdesc: 'Mild och skonsam ansiktsrengöring för torr hy som effektivt ',
    colorgroup: 'group3',
    ean: 7319861014884,
  },
];
