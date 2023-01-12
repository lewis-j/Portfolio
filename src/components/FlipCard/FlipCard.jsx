import { appendStyles } from "../../util";
import styles from "./FlipCard.module.css";
const FlipCard = ({
  front,
  back,
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
    const front = transform(axis, index * -180);
    const back = transform(axis, (index + 1) * -180);
    return [front, back];
  };
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
