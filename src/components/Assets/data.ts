import p1_img from './path/to/image1.jpg';
import p2_img from './path/to/image2.jpg';
import p3_img from './path/to/image3.jpg';
import p4_img from './path/to/image4.jpg';

interface Product {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}

const data_product: Product[] = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 50.00,
    old_price: 80.50,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: 85.00,
    old_price: 120.50,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price: 60.00,
    old_price: 100.50,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 100.00,
    old_price: 150.00,
  },
];

export default data_product;