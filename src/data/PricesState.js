import { v4 as uuidv4 } from "uuid";


import Memership from '../Files/ApplicForm2022.pdf'
import Junior from '../Files/JuniorMembership.pdf'
function PriceState() {
  return [
    {
      
      name: "Family",
      price: "€620",
      info: "Family membership consists of two adults only",
      id: uuidv4(),
      membership: Memership,
      
      
    
    },
    {
      name: "Single Person",
      price: "€435",
      info: "Single Male or Female",
      id: uuidv4(),
      membership: Memership,
    },
    {
      name: "Country Member",
      price: "€220",
      info: "Country members shall comprise persons whose residence is 20 Kilometres distant or more from the course and are voting members of another affiliated golf club",
      id: uuidv4(),
      membership: Memership,
    },

    {
      name: "Distant Member",
      price: "€185",
      info: "Distant members shall comprise persons whose residence is 80 kilometres distant or more from the course.",
      id: uuidv4(),
      membership: Memership,
    },


    {
      name: "Mature Student",
      price: "€185",
      info: "",
      id: uuidv4(),
      membership: Memership,
    },

    {
      name: "1 Year Beginner",
      price: "€185",
      info: "",
      id: uuidv4(),
      membership: Memership,
    },

    {
      name: "2 Year Beginner",
      price: "€234",
      info: "",
      id: uuidv4(),
      membership: Memership,
    },

    {
      name: "3 Year Beginner",
      price: "€234",
      info: "",
      id: uuidv4(),
      membership: Memership,
    },

    {
      name: "Student (Under 21)",
      price: "€85",
      info: "",
      id: uuidv4(),
      membership: Memership,
    },

    {
      name: "Junior (<18 Years)",
      price: "View Form",
      info: "",
      id: uuidv4(),
      membership: Junior,
    }
  ];
}

export default PriceState;
