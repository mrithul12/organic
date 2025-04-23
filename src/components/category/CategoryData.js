import diary from "../../asset/icon/dairy-products.png";
import fruits from "../../asset/icon/fruitss.png";
import packed from "../../asset/icon/instant-noodles.png";
import drinks from "../../asset/icon/soft-drink.png";
import stationary from "../../asset/icon/stationary.png";
import vegitables from "../../asset/icon/vegetables.png";

const CategoryData = [
  {
    id: 1,
    title: "Vegitables",
    image: vegitables,
    description: "Fresh vegetables boost health naturally.",
  },
  {
    id: 2,
    title: "Fruits",
    image: fruits,
    description: "Fruits are nature's sweet and healthy treat.",
  },
  {
    id: 3,
    title: "Stationary",
    image: stationary,
    description:"Stationery sparks creativity and keeps you organized."
  },
  {
    id: 4,
    title: "Drinks",
    image: drinks,
    description:"Drinks refresh, energize, and delight every sip."
  },
  {
    id: 5,
    title: "packed",
    image: packed,
    description:"Packed goods offer convenience and lasting freshness."
  },
  {
    id: 6,
    title: "diary",
    image: diary,
    description:"Dairy products nourish with calcium and creaminess."
  },
];

export default CategoryData;
