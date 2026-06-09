export const company = {
  name: 'Kashi Nath Steels',
  shortName: 'KN Steels',
  established: '2006',
  location: 'Ghaziabad, Uttar Pradesh',
  address: 'D-34/1, Yadav Nagar, Bulandshahr Road Industrial Area, Ghaziabad, UP 201009',
  phone: '+91 9891117879',
  email: 'sales@kashinathsteels.com',
  description:
    'Wholesale steel trading and processing partner for bars, pipes, plates, coils, and structural products.'
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const filterGroups = [
  {
    key: 'material',
    label: 'Material',
    options: ['Mild Steel', 'Galvanized', 'Stainless Steel', 'Alloy Steel']
  },
  {
    key: 'form',
    label: 'Form',
    options: ['Bar', 'Pipe', 'Plate', 'Beam', 'Coil', 'Sheet', 'Rod']
  },
  {
    key: 'finish',
    label: 'Finish',
    options: ['Hot Rolled', 'Cold Rolled', 'Rustproof', 'Coated']
  }
];

export const galleryImages = [
  '/images/company-01.jpg',
  '/images/company-02.jpg',
  '/images/company-03.jpg',
  '/images/company-04.jpg',
  '/images/company-05.jpg',
  '/images/company-06.jpg',
];