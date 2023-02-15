
const productData = [
    {
        id: 1,
        image: '/images/img.webp',
        name: '1982',
        description: 'Neutral - Woody Citrus',
        price: '50000AMD',
    },
    {
      id: 2,
      image: '/images/img1.webp',
      name: 'CRAZY IN LOVE',
      description: 'For Her - Floral Fruity',
      price: '50000AMD',
    },
    {
      id: 3,
      image: '/images/img2.webp',
      name: 'GOLD NOIR',
      description: 'Neutral - Oriental',
      price:'50000AMD'
    },
    {
      id: 4,
      image: '/images/img3.webp',
      name: 'JOUR 8',
      description: '',
      price: '50000AMD',
    },
    {
      id: 5,
      image: './images/img4.webp',
      name: 'JOUR 5',
      description: '',
      price: '50000AMD',
    },
    {
      id: 6,
      image: '/images/img5.webp',
      name: 'ONE OF A KIND',
      description: 'For Him - Woody Aromatic',
      price: '50000AMD',
    },
    {
      id: 7,
      image: '/images/img6.webp',
      name: 'ORIENTAL SOUL',
      description: 'Neutral - Oriental',
      price: '50000AMD',
    },
    {
      id: 8,
      image: '/images/img7.webp',
      name: 'SILKY SANDALWOOD',
      description: '',
      price: '50000AMD',
    },
    {
      id: 9,
      image: '/images/img8.webp',
      name: 'WHITE ROSE',
      description: '',
      price: '50000AMD',
    }
]


export async function getProducts(){
    return productData;
}
