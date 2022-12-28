import { appendStyles } from "../../util";
import styles from "./FlipCard.module.css";
const FlipCard = ({
  front,
  back,
  isBack,
  className,
  frontClassName,
  backClassName,
  flipX = false,
}) => {
  const axis = flipX ? "X" : "Y";
  return (
    <div className={appendStyles(styles.flipCard, className)}>
      <div
        className={`${styles.flipcardFront} ${frontClassName}`}
        style={
          isBack
            ? { transform: `rotate${axis}(-180deg)` }
            : { transform: `rotate${axis}(0)` }
        }
      >
        {front}
      </div>
      <div
        className={`${styles.flipcardBack} ${backClassName}`}
        style={
          isBack
            ? { transform: `rotate${axis}(0)` }
            : { transform: `rotate${axis}(180deg)` }
        }
      >
        {back}
      </div>
    </div>
  );
};
export default FlipCard;
