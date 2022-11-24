import images from './images';

const wines = [
  {
    title: 'Sharjah Shake',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Avocado Shake',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Chikkoo Shake',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Pomegrenate Juice',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Virgin Mojito',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Fruit Cocktail',
    price: '$20',
    tags: 'Apple | Pomegranate | soda | lime',
  },
  {
    title: "Vegetable Cocktail",
    price: '$16',
    tags: 'Tomatoes | Beetroot | Slice of lime',
  },
  {
    title: 'Special Cocktail',
    price: '$10',
    tags: 'Apple | Citrus juice | Sugar',
  },
  {
    title: 'Melon Cocktail',
    price: '$31',
    tags: 'Water Melon | Musk Melon | Sweet Melon',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Guava | Sweet Melon | Carrot | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
