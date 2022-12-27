import home from "./home.png";
import shop from "./shop.png";
import cart from "./cart.png";
import about from "./about.png";
import { imageWithTheme } from "../../../../util";

const images = [home, shop, cart, about];
const imgs = imageWithTheme(images, []);
console.log("img", imgs);

export default imgs;
