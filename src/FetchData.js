
const productData = [
    {
        id: 1,
        image: '/images/img.webp',
        name: '1982',
        description: 'Neutral - Woody Citrus',
        price: 28000,
        quantity:1
    },
    {
      id: 2,
      image: '/images/img2.webp',
      name: 'GOLD NOIR',
      description: 'Neutral - Oriental',
      price:29000,
      quantity:1
    },
    {
      id: 3,
      image: '/images/img3.webp',
      name: 'JOUR 8',
      description: 'Neutral - Leather',
      price: 50000,
      quantity:1
    },
    {
      id: 4,
      image: './images/img4.webp',
      name: 'JOUR 5',
      description: 'For Her -Floral Woody',
      price: 50000,
      quantity:1
    },
    {
      id: 5,
      image: '/images/img5.webp',
      name: 'ONE OF A KIND',
      description: 'For Him - Woody Aromatic',
      price: 29000,
      quantity:1
    },
    {
      id: 6,
      image: '/images/img6.webp',
      name: 'ORIENTAL SOUL',
      description: 'Neutral - Oriental',
      price: 29000,
      quantity:1
    },
    {
      id: 7,
      image: '/images/img7.webp',
      name: 'SILKY SANDALWOOD',
      description: 'Neutral - Woody Spicy',
      price: 37000,
      quantity:1
    },
    {
      id: 8,
      image: '/images/img8.webp',
      name: 'WHITE ROSE',
      description: 'For Her -Floral Musky',
      price: 37000,
      quantity:1
    }
]


export async function getProducts(){
    return productData;
}


