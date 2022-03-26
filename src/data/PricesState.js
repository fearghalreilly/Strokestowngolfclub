import { v4 as uuidv4 } from "uuid";
function PriceState() {
  return [
    {
      
      name: "Family",
      price: "€620",
      info: "Family membership consists of two adults only",
      id: uuidv4(),
      
      
    
    },
    {
      name: "Single Person",
      price: "€435",
      info: "Single Male or Female",
      id: uuidv4(),
    },
    {
      name: "Country Member",
      price: "€220",
      info: "Country members shall comprise persons whose residence is 20 Kilometres distant or more from the course and are voting members of another affiliated golf club",
      id: uuidv4(),
    },

    {
      name: "Distant Member",
      price: "€185",
      info: "Distant members shall comprise persons whose residence is 80 kilometres distant or more from the course.",
      id: uuidv4(),
    },


    {
      name: "Mature Student",
      price: "€185",
      info: "",
      id: uuidv4(),
    },

    {
      name: "1 Year Beginner",
      price: "€185",
      info: "",
      id: uuidv4(),
    },

    {
      name: "2 Year Beginner",
      price: "€234",
      info: "",
      id: uuidv4(),
    },

    {
      name: "3 Year Beginner",
      price: "€234",
      info: "",
      id: uuidv4(),
    },

    {
      name: "Student (Under 21)",
      price: "€85",
      info: "",
      id: uuidv4(),
    },

    {
      name: "Junior (<18 Years)",
      price: "View Form",
      info: "",
      id: uuidv4(),
    }
  ];
}

export default PriceState;
