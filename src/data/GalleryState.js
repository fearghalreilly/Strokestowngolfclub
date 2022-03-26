import { uuid } from 'uuidv4';
import img1 from '../img/image1.jpg'
import img2 from '../img/image2.jpg'
import img3 from '../img/image3.jpg'
import img4 from '../img/image4.jpg'
import img5 from '../img/icon3.jpg'
import img6 from '../img/icon4.jpg'


export const GalleryState = () => {
  return [

    {

      url: "/gallery/1",
      title: "Captains Drive In 2021/2022",
      mainImg: img5,
      imgs:[
        {
          
          img: img5,
          id: uuid(),
        
        },
        {
            img: img6,
            id: uuid(),
          },
          {
            img: img5,
            id: uuid(),
          },
          {
            img: img6,
            id: uuid(),
          },
          {
            img: img5,
            id: uuid(),
          },
          {
            img: img6,
            id: uuid(),
          },
          {
            img: img5,
            id: uuid(),
          },
          {
            img: img6,
            id: uuid(),
          },
          {
            img: img5,
            id: uuid(),
          },
    ]

  },


  {

    url: "/gallery/2",

    title: "Micky Mouse Cup 2021/2022",
    mainImg: img6,
    imgs:[
      {
        
        img: img6,
        id: uuid(),
      
      },
      {
          img: img5,
          id: uuid(),
        },
        {
          img: img6,
          id: uuid(),
        },
        {
          img: img5,
          id: uuid(),
        },
        {
          img: img6,
          id: uuid(),
        },
        {
          img: img5,
          id: uuid(),
        },
        {
          img: img6,
          id: uuid(),
        },
        {
          img: img5,
          id: uuid(),
        },
        {
          img: img6,
          id: uuid(),
        },
  ]

},



{

  url: "/gallery/3",
  title: "Ryder Cup 2021/2022",
  mainImg: img6,
  imgs:[
    {
      
      img: img6,
      id: uuid(),
    
    },
    {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
      {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
      {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
      {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
]

},



{

  url: "/gallery/4",
  
  title: "Junior Cup 2021/2022",
  mainImg: img5,
  imgs:[
    {
      
      img: img6,
      id: uuid(),
    
    },
    {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
      {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
      {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
      {
        img: img5,
        id: uuid(),
      },
      {
        img: img6,
        id: uuid(),
      },
]

},




    
  ];
};

export default GalleryState;