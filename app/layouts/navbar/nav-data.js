import config from '~/config.json';

export const navLinks = [
  {
    label: 'Fizzy Drinks',
    pathname: '/searchfizzy',
  },
  {
    label: 'Drinks & Cocktails',
    pathname: '/searchdrinkscocktails',
  },
  {
    label: 'Hot Beverages',
    pathname: '/searchhotbeverages',
  },
  {
    label: 'Desserts',
    pathname: '/searchdesserts',
  },
  // {
  //   label: 'Details',
  //   pathname: '/#details',
  // },
  {
    label: 'Hookahs & Extras',
    pathname: '/searchhookahs',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `https://www.instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    url: `https://www.facebook.com/${config.facebook}`,
    icon: 'facebook',
  },
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Tiktok',
    url: `https://tiktok.com/${config.tiktok}`,
    icon: 'tiktok',
  },
];
