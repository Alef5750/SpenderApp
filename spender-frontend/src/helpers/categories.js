//images
import expenses_monthly from "../images/expenses_monthly.png";
import expenses_food from "../images/expenses_food.png";
import expenses_entertainement from "../images/expenses_entertainement.png";
import expenses_other from "../images/expenses_other.png";
import expenses_add_new from "../images/expenses_add_new.png";

let cards = [
  { title: "Monthly", logo: expenses_monthly, id: Math.random() },
  { title: "Food", logo: expenses_food, id: Math.random() },
  {
    title: "Entertainment",
    logo: expenses_entertainement,
    id: Math.random(),
  },
  { title: "Other", logo: expenses_other, id: Math.random() },
  { title: "Add New", logo: expenses_add_new, id: Math.random() },
];

export default cards;
