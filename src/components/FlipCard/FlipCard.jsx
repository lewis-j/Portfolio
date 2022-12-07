import styles from "./FlipCard.module.css";
const FlipCard = ({ front, back, isFront, frontClassName, backClassName }) => {
  return (
    <div className={styles.flipCard}>
      <div
        className={`${styles.flipcardFront} ${frontClassName}`}
        style={isFront ? { transform: "rotateY(-180deg)" } : {}}
      >
        {front}
      </div>
      <div
        className={`${styles.flipcardBack} ${backClassName}`}
        style={isFront ? { transform: "rotateY(0)" } : {}}
      >
        {back}
      </div>
    </div>
  );
};
export default FlipCard;
