import main from "./main_app.png";
import data from "./data_analysis.png";
import roster from "./roster_cms.png";
import opening from "./openingmenu.png";
import pitchData from "./pitch_data.png";
import pitchReselect from "./pitcher_reselect.png";
import season from "./season_cms.png";
import { imageWithTheme } from "../../../../util";

const images = [main, data, opening, roster, pitchData, pitchReselect, season];
const isDark = [data, roster, pitchData, season];

const imgs = imageWithTheme(images, isDark);
export default imgs;
