import React from 'react';
import Btn from './react-commerce/src/components/Buttons/Btn';

export interface DataType {
  id: number;
  artnr: number;
  img: string;
  name: string;
  price: number;
  ean: number | string;
  volume: string;
  desc: string;
  shortdesc: string;
  ingredients: string;
  tag: string;
  colorgroup: string;
  timestamp: number;
  isSelected?: boolean;
  label: string;
  slug: string;
  category: string;
}
interface IProductCard {
  id: String;
  img: string;
  name: String;
  price: Number;
  shortdesc?: String;
  label: String;
  colorgroup?: String;
  slug?: String;
}

interface IProductPageProps {
  artnr: number;
  name: string;
  img: string;
  price: number;
  volume: string;
  ingredients: String;
  colorgroup: string;
  ean: number;
  shortdesc: string;
  isSelected: boolean;
  onClick: Function;
  quantity: number;
}

interface IProductTitleSectionProps {
  name: string;
  artnr: number | string;
  price: number;
  shortdesc: string;
  ean: number | string;
  isSelected?: boolean;
  volume: string;
  qty: number;
  onClick: Function;
}
interface ImageGalleryProps {
  img: string;
  name: string;
  colorgroup: string;
  shortdesc?: string;
}

interface BreadcrumbProps {
  title: String;
  path: String;
  pagepath: string;
  sectionpath: string;
  tabIndex?: number;
}

interface IProductPageProps {
  artnr: number;
  name: string;
  img: string;
  price: number;
  volume: string;
  ingredients: String;
  colorgroup: string;
  ean: number;
  shortdesc: string;
  isSelected: boolean;
  onClick: Function;
  quantity: number;
}

interface Ibrand {
  url: string;
  title: string;
}
interface IPaymentIcon {
  icon: string;
  title: string;
}
interface ISocialIcon {
  icon: string;
  url: string;
  title: string;
}

export interface BreadcrumbProps {
  title: String;
  path: String;
  pagepath: string;
  sectionpath: string;
  tabIndex?: number;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  leftIcon?: string;
  rightIcon?: string;
  bgcolor: string;
  onClick?: () => void;
}
interface CompanyLogo {
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
export interface ICarousel {
  img: string;
  name: string;
  produktbild: string;
  shortdesc: string;
  colorgroup: string;
  ean: number | string;
  artnr: number;
}
interface ISocialmedia {
  url: string;
  title: string;
  link: string;
}
