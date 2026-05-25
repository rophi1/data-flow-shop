export interface Bundle {
  id: string;
  network: 'MTN GH' | 'Telecel' | 'AT';
  name: string;
  dataAmount: string;
  price: number;
  validity: string;
  type: 'SME' | 'Gifting' | 'Corporate';
}

export const bundles: Bundle[] = [
  // MTN GH
  { id: 'mtn-gh-1gb', network: 'MTN GH', name: 'MTN SME', dataAmount: '1GB', price: 10, validity: '30 Days', type: 'SME' },
  { id: 'mtn-gh-2gb', network: 'MTN GH', name: 'MTN SME', dataAmount: '2GB', price: 19, validity: '30 Days', type: 'SME' },
  { id: 'mtn-gh-5gb', network: 'MTN GH', name: 'MTN SME', dataAmount: '5GB', price: 45, validity: '30 Days', type: 'SME' },
  { id: 'mtn-gh-10gb', network: 'MTN GH', name: 'MTN SME', dataAmount: '10GB', price: 85, validity: '30 Days', type: 'SME' },

  // Telecel
  { id: 'telecel-1gb', network: 'Telecel', name: 'Telecel CG', dataAmount: '1GB', price: 12, validity: '30 Days', type: 'Corporate' },
  { id: 'telecel-2gb', network: 'Telecel', name: 'Telecel CG', dataAmount: '2GB', price: 22, validity: '30 Days', type: 'Corporate' },
  { id: 'telecel-5gb', network: 'Telecel', name: 'Telecel CG', dataAmount: '5GB', price: 50, validity: '30 Days', type: 'Corporate' },

  // AT
  { id: 'at-1gb', network: 'AT', name: 'AT CG', dataAmount: '1GB', price: 11, validity: '30 Days', type: 'Corporate' },
  { id: 'at-2gb', network: 'AT', name: 'AT CG', dataAmount: '2GB', price: 20, validity: '30 Days', type: 'Corporate' },
  { id: 'at-5gb', network: 'AT', name: 'AT CG', dataAmount: '5GB', price: 48, validity: '30 Days', type: 'Corporate' },
];