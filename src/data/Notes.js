import { uuid } from 'uuidv4';
import img1 from '../img/image1.jpg'
import img2 from '../img/image2.jpg'
import img3 from '../img/image3.jpg'
import img4 from '../img/image4.jpg'
import img5 from '../img/icon3.jpg'
import img6 from '../img/icon4.jpg'


export const NotesState = () => {
  return [

   
        {
          
          img: img1,
          id: uuid(),
        
        },
        {
            img: img2,
            id: uuid(),
          },
          {
            img: img3,
            id: uuid(),
          },
          {
            img: img4,
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

}

export default NotesState;