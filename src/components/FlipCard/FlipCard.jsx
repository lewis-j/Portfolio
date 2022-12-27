import { appendStyles } from "../../util";
import styles from "./FlipCard.module.css";
const FlipCard = ({
  front,
  back,
  isBack,
  className,
  frontClassName,
  backClassName,
}) => {
  return (
    <div className={appendStyles(styles.flipCard, className)}>
      <div
        className={`${styles.flipcardFront} ${frontClassName}`}
        style={isBack ? { transform: "rotateY(-180deg)" } : {}}
      >
        {front}
      </div>
      <div
        className={`${styles.flipcardBack} ${backClassName}`}
        style={isBack ? { transform: "rotateY(0)" } : {}}
      >
        {back}
      </div>
    </div>
  );
};
export default FlipCard;
