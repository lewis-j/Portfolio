import { appendStyles } from "../../util";
import styles from "./FlipCard.module.css";
const FlipCard = ({
  front,
  back,
  isBack,
  index,
  className,
  frontClassName,
  backClassName,
  flipX = false,
}) => {
  const getRotations = (index) => {
    const transform = (axis, deg) => ({
      transform: `rotate${axis}(${deg}deg)`,
    });
    const axis = flipX ? "X" : "Y";
    const front = transform(axis, index * 180);
    const back = transform(axis, (index + 1) * 180);
    return [front, back];
  };
  // const getRotations = () => {
  //   if (flipX) {
  //     if (isBack) {
  //       return [styles.frontRotateX, styles.zeroX];
  //     } else {
  //       return [styles.zeroX, styles.backRotateX];
  //     }
  //   } else {
  //     if (isBack) {
  //       return [styles.frontRotateY, styles.zeroY];
  //     } else {
  //       return [styles.zeroY, styles.backRotateY];
  //     }
  //   }
  // };

  // const [frontRotation, backRotation] = getRotations();
  const [frontRotation, backRotation] = getRotations(index);

  return (
    <div className={appendStyles(styles.scene, className)}>
      <div className={appendStyles(styles.flipCard)}>
        <div
          className={`${styles.flipcardFront} ${frontClassName}`}
          style={frontRotation}
        >
          {front}
        </div>
        <div
          className={`${styles.flipcardBack} ${backClassName}`}
          style={backRotation}
        >
          {back}
        </div>
      </div>
    </div>
  );
};
export default FlipCard;
