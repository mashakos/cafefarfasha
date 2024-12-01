import config from '~/config.json';

export const navLinks = [
  {
    label: 'Fizzy Drinks',
    pathname: '/searchfizzy',
  },
  {
    label: 'drinks & cocktails',
    pathname: '/searchdrinkscocktails',
  },
  {
    label: 'hot beverages',
    pathname: '/searchhotbeverages',
  },
  // {
  //   label: 'Details',
  //   pathname: '/#details',
  // },
  {
    label: 'hookahs & extras',
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
];
