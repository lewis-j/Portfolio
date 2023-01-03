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
  const getRotations = () => {
    if (flipX) {
      if (isBack) {
        return [styles.frontRotateX, styles.zeroX];
      } else {
        return [styles.zeroX, styles.backRotateX];
      }
    } else {
      if (isBack) {
        return [styles.frontRotateY, styles.zeroY];
      } else {
        return [styles.zeroY, styles.backRotateY];
      }
    }
  };

  const [frontRotation, backRotation] = getRotations();

  return (
    <div className={appendStyles(styles.scene, className)}>
      <div className={appendStyles(styles.flipCard)}>
        <div
          className={`${styles.flipcardFront} ${frontClassName} ${frontRotation}`}
        >
          {front}
        </div>
        <div
          className={`${styles.flipcardBack} ${backClassName} ${backRotation}`}
        >
          {back}
        </div>
      </div>
    </div>
  );
};
export default FlipCard;
