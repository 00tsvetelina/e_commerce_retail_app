import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './products/product';
import { Shipping } from './shipping/shipping';

export class InMemoryData implements InMemoryDbService {

  createDb(): { products: Product[], shipping: Shipping[]} {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Air Force',
        productCode: 'GDN-0011',
        releaseDate: 'September 19, 2023',
        description: 'Air Force Unisex Black Shoes',
        price: 119.99,
        starRating: 4.2,
        imageUrl: 'assets/images/air.png',
        category: 'Black',
        tags: ['rake', 'leaf', 'yard', 'home']
      },
      {
        id: 2,
        productName: 'Air Jordan',
        productCode: 'GDN-0023',
        releaseDate: 'September 01, 2023',
        description: 'Air Jordan Unisex Lightgrey Shoes',
        price: 149.99,
        starRating: 3.9,
        imageUrl: 'assets/images/jordan.png',
        category: 'Lightgrey'
      },
      {
        id: 5,
        productName: 'Blazer',
        productCode: 'TBX-0048',
        releaseDate: 'October 11, 2023',
        description: 'Blazer Unisex Lightgrey Shoes',
        price: 119.9,
        starRating: 4.9,
        imageUrl: 'assets/images/blazer.png',
        category: 'Lightgrey',
        tags: ['blazer', 'lightgrey', 'unisex']
      },
      {
        id: 8,
        productName: 'Crater',
        productCode: 'TBX-0022',
        releaseDate: 'October 10, 2023',
        description: 'Crater Unisex Black Shoes',
        price: 109.95,
        starRating: 3.2,
        imageUrl: 'assets/images/crater.png',
        category: 'Black'
      },
      {
        id: 10,
        productName: 'Hippie',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2023',
        description: 'Hippie Unisex Gray Shoes',
        price: 99.95,
        starRating: 4.6,
        imageUrl: 'assets/images/hippie.png',
        category: 'Gray'
      }
    ];

    const shipping: Shipping[] = [
      {
        type: "Overnight",
        price: 25.99
      },
      {
        type: "2-Day",
        price: 9.99
      },
      {
        type: "Postal",
        price: 2.99
      }
];

return { products,
  shipping }

}    }


    


