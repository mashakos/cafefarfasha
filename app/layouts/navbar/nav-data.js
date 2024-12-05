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
    url: `${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    url: `${config.facebook}`,
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
