import { appendStyles } from "../../util";
import styles from "./FlipCard.module.css";
const FlipCard = ({
  front,
  back,
  isBack,
  className,
  frontClassName,
  backClassName,
  style,
  onFlipEnd,
}) => {
  return (
    <div className={appendStyles(styles.flipCard, className)} style={style}>
      <div
        className={`${styles.flipcardFront} ${frontClassName}`}
        style={isBack ? { transform: "rotateY(-180deg)" } : {}}
        onTransitionEnd={onFlipEnd}
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
