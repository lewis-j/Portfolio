import { imageWithTheme } from "../../../../util";
import cart_menu from "./cart_menu.png";
import cart_menu_mobile from "./cart_menu_mobile.png";
import item_select from "./item_select.png";
import item_select_mobile from "./item_select_mobile.png";
import signin from "./signin.png";
import signin_mobile from "./signin_mobile.png";

const images = [
  cart_menu,
  cart_menu_mobile,
  item_select,
  item_select_mobile,
  signin,
  signin_mobile,
];
const imgs = imageWithTheme(images, []);
console.log("img", imgs);

export default imgs;
