// src/utilities/initialData.ts

import { Dates, grapes, lemon, Mango, Onion, Orange, pomegranates, potato, potatoes, strawberries } from "../assets";

interface FarmSection {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}
// types.ts
export interface ProductType {
  name: string;
  color: string; // Hex code for the color
}

export interface Product {
  name: string;
  category: string;
  description: string;
  types: ProductType[];
}


export const farmSections: FarmSection[] = [
  {
    id: 1,
    name: 'Organic Vegetables',
    description: 'Fresh and organic vegetables grown with love.',
    image: '/assets/images/organic-vegetables.jpg',
  },
  // Add more sections
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ahmed Eldesouky',
    position: 'Founder',
    bio: 'Ahmed has over 20 years of experience in organic farming.',
    image: '/assets/images/ahmed.jpg',
  },
  // Add more team members
];


// Define the initial data

export const initialProducts = [
  {
     id: '1',
     name: 'Mango',
    category: 'Fruits',
    description: 'Support the Aleph Zero core team through community and marketing initiatives while accumulating rewards.',
    types: [
      { type: 'Yasmina', color: '#2112f3', months: ['Jul', 'Aug','Sep',] },
      { type: 'Naaom', color: '#00eac7', months: [ 'Aug','Sep','Oct',] },
      { type: 'Awees', color: '#a6f074', months: [ 'Aug','Sep','Oct',] },
      { type: 'Crimson', color: '#03d1b5', months: ['Aug','Sep',] },
      { type: 'Osten', color: '#03d1b5', months: ['Aug','Sep',] },
      { type: 'Keitt', color: '#03d1b5', months: ['Sep','Oct', 'Nov',] },
    ],
    img: Mango,
  },
  {
     id: '20',
     name: 'Pomegranate',
    category: 'Fruits',
    description: 'A rich source of antioxidants and vitamins, perfect for a healthy diet.',
    types: [

      { type: 'Wonderful', color: '#9c27b0', months: [ 'Sep','Oct', 'Nov', 'Dec'] },
      { type: 'Assiuty', color: '#673ab7', months: ['Sep','Oct', 'Nov', 'Dec'] },
      { type: 'Early 116', color: '#673ab7', months: ['Jul', 'Aug',] },
    ],
    img: pomegranates,
  },
  // {
  //    id: '3',
  //    name: 'Frozen Strawberry',
  //   category: 'Fruits',
  //   description: 'Deliciously sweet strawberries preserved at peak freshness.',
  //   types: [
  //     { type: 'Yasmina', color: '#ff5722', months: ['Jan', 'Feb', 'Mar'] },
  //     { type: 'Naaom', color: '#ff9800', months: ['Apr', 'May', 'Jun'] },
  //     { type: 'Awees', color: '#ffc107', months: ['Jul', 'Aug', 'Sep'] },
  //     { type: 'Crimson', color: '#ffeb3b', months: ['Oct', 'Nov', 'Dec'] },
  //   ],
  //   img: strawberries,
  // },
  {
     id: '8',
     name: 'Oranges',
    category: 'Fruits',
    description: 'Deliciously sweet strawberries preserved at peak freshness.',
    types: [
      { type: 'Navel', color: '#ff5722', months: ['Jan', 'Feb', 'Dec'] },
      { type: 'Valencia', color: '#ff9800', months: ['Apr', 'May', 'Jun'] },
      { type: 'Baladi', color: '#ffc107', months: ['Jul', 'Aug', 'Sep'] },
    ],
    img: Orange,
  },
  {
     id: '9',
     name: 'Lemon',
    category: 'Fruits',
    description: 'Deliciously sweet strawberries preserved at peak freshness.',
    types: [
      { type: 'Adalia', color: '#ff5722', months: ['Jan', 'Feb', 'Dec','Oct','Nov','Dec'] },
    ],
    img: lemon,
  },
  {
     id: '4',
     name: 'Sweet Potatoes',
    category: 'Vegetables',
    description: 'Nutritious and versatile, sweet potatoes are a great addition to any meal.',
    types: [
      { type: 'Beauregard', color: '#8bc34a', months: ['Jan', 'Feb', 'Mar','Aug', 'Sep','Oct','Nov','Dec'] },
      { type: 'White flesh', color: '#cddc39', months: ['Jan', 'Feb', 'Mar','Aug', 'Sep','Oct','Nov','Dec'] },
      { type: 'Orange flesh ', color: '#ffeb3b', months: ['Jan', 'Feb', 'Mar','Aug', 'Sep','Oct','Nov','Dec'] },
    ],
    img: potato,
  },
  {
     id: '10',
     name: 'Strawberry',
    category: 'Vegetables',
    description: 'Nutritious and versatile, sweet potatoes are a great addition to any meal.',
    types: [
      { type: 'Fesival', color: '#8bc34a', months: ['Jan', 'Feb', 'Mar','Dec'] },
      { type: 'Fortuna', color: '#cddc39', months: ['Jan','Nov','Dec'] },
      { type: 'Sensation', color: '#ffeb3b', months: ['Jan', 'Nov','Dec'] },
      { type: 'Winter Star', color: '#ffeb3b', months: ['Jan', 'Feb', 'Mar','Dec'] },
    ],
    img: strawberries,
  },
  {
     id: '5',
     name: 'Red Onion',
    category: 'Vegetables',
    description: 'A kitchen staple that adds flavor and depth to any dish.',
    types: [
      { type: 'Italian Red', color: '#9e9e9e', months: ['Apr', 'May','Jun','Jul','Aug','Sep'] },
    ],
    img: Onion,
  },
  {
     id: '6',
     name: 'Grapes',
    category: 'Fruits',
    description: 'Naturally sweet and packed with nutrients, dates are a healthy snack.',
    types: [
      { type: 'Early Sweet', color: '#ff5722', months: ['Apr', 'May', 'Jun'] },
      { type: 'Superior', color: '#ff9800', months: ['May', 'Jun', 'Jul','Aug'] },
      { type: 'Red', color: '#ffc107', months: [ 'Aug', 'Sep','Oct'] },
      { type: 'Black', color: '#ffeb3b', months: ['Jul','Aug','Sep'] },
    ],
    img: grapes,
  },
  {
    id: '7',
    name: 'Potatoes',
   category: 'Vegetables',
   description: 'Nutritious and versatile, sweet potatoes are a great addition to any meal.',
   types: [
     { type: 'Aspuntia', color: '#8bc34a', months: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul'] },
     { type: 'Mondial', color: '#cddc39', months: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul'] },
     { type: 'Hermes ', color: '#ffeb3b', months: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul'] },
     { type: 'Lady Rosetta ', color: '#ffeb3b', months: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul'] },
     { type: 'Kara ', color: '#ffeb3b', months: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul'] },
   ],
   img: potatoes,
 },
];

export default initialProducts;
