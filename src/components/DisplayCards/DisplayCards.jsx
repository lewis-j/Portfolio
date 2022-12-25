import { FlipCard } from "../FlipCard";
import styles from "./DisplayCards.module.css";
import profile from ".././../assets/img/about_portrait.jpg";
import { useNavigate } from "../../lib/router/Router";
import { isEven } from "../../util";

const DisplayCards = ({ slide, slides, isSlidingDown }) => {
  const navigate = useNavigate();

  const ProfileComponent = () => (
    <img
      src={profile}
      alt="Lindsey Jackson's profile"
      onClick={() => {
        navigate("/about");
      }}
    />
  );

  const getTitles = (index, isSlidingDown) => {
    if (index < 1)
      return { backTitle: slides[0].title, frontTitle: slides[1].title };
    return slides.reduce((titles, _, idx) => {
      if (index === idx) {
        if (isEven(idx)) {
          if (isSlidingDown) {
            return {
              backTitle: slides[idx].title,
              frontTitle: slides[idx - 1].title,
            };
          } else {
            return {
              backTitle: slides[idx].title,
              frontTitle: slides[idx + 1].title,
            };
          }
        } else {
          if (isSlidingDown) {
            return {
              backTitle: slides[idx - 1].title,
              frontTitle: slides[idx].title,
            };
          } else {
            return {
              backTitle: slides[idx + 1].title,
              frontTitle: slides[idx].title,
            };
          }
        }
      }
      return titles;
    }, {});
  };

  const renderFlipCard = () => {
    const { frontTitle, backTitle } = getTitles(slide, isSlidingDown);

    const frontcard =
      slide < 1 && isSlidingDown ? (
        <ProfileComponent />
      ) : (
        <h1 className={styles.flipCardcontent}>{frontTitle}</h1>
      );
    const backCard = <h1 className={styles.flipCardcontent}>{backTitle}</h1>;
    return (
      <FlipCard
        front={frontcard}
        back={backCard}
        frontClassName={
          slide < 1 && isSlidingDown ? "" : styles.flipCardContentContainer
        }
        backClassName={styles.flipCardContentContainer}
        isFront={isEven(slide)}
      />
    );
  };
  const renderSlides = () => {
    return slides.map((item, index) => {
      const style = {};
      if (slide < index) {
        style.transform = "translateX(100vw)";
      }
      return (
        <div style={style} key={index} className={styles.projects}>
          <img src={item.img} alt={item.title} />
        </div>
      );
    });
  };
  const offsetProfilePic = {
    transform: "translateX(11rem)",
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.flipCard}
        style={slide === -1 ? offsetProfilePic : {}}
      >
        {renderFlipCard()}
      </div>
      <div className={styles.projectContainer}>{renderSlides()}</div>
    </div>
  );
};
export default DisplayCards;
