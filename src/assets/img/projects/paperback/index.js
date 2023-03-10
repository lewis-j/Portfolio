import { imageWithTheme } from "../../../../util";
import dashboard from "./dashboard.png";
import friends from "./friends.png";
import library from "./library.png";
import sideMenu from "./sidemenu.png";

const images = [dashboard, friends, library, sideMenu];

const imgs = imageWithTheme(images, [dashboard, friends, library]);

export default imgs;
