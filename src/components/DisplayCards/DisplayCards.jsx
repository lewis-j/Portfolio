import { FlipCard } from "../FlipCard";
import styles from "./DisplayCards.module.css";
import profile from ".././../assets/img/about_portrait.jpg";
import { useNavigate } from "../../lib/router/Router";
import { appendStyles, isEven } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleLeft,
  faCircleRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import FlipCarousel from "../FlipCarousel/FlipCarousel";

const DisplayCards = ({ slide, slides, isIncrementing }) => {
  const navigate = useNavigate();

  const ProfileComponent = () => (
    <img
      src={profile}
      className={styles.profileComponent}
      alt="Lindsey Jackson's profile"
      onClick={() => {
        navigate("/about");
      }}
    />
  );

  const getMenu = (index, isIncrementing) => {
    if (index < 1) return { backCard: slides[0], frontCard: slides[1] };
    return slides.reduce((titles, _, idx) => {
      if (index === idx) {
        if (isEven(idx)) {
          if (isIncrementing) {
            return {
              backCard: slides[idx],
              frontCard: slides[idx - 1],
            };
          } else {
            return {
              backCard: slides[idx],
              frontCard: slides[idx + 1],
            };
          }
        } else {
          if (isIncrementing) {
            return {
              backCard: slides[idx - 1],
              frontCard: slides[idx],
            };
          } else {
            return {
              backCard: slides[idx + 1],
              frontCard: slides[idx],
            };
          }
        }
      }
      return titles;
    }, {});
  };

  const renderMenuCard = (project) => {
    return (
      <div className={styles.menuContent}>
        <h1 className={styles.menuTitle}>{project.title}</h1>
        <ul>
          <li
            onClick={() => {
              window.open(project.github, "_blank");
            }}
          >
            <FontAwesomeIcon icon={faSquareGithub} /> Git Repository
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} /> view project
          </li>
          <li>
            <FontAwesomeIcon icon={faReadme} /> read me
          </li>
        </ul>
      </div>
    );
  };

  const renderFlipCard = () => {
    const { frontCard, backCard } = getMenu(slide, isIncrementing);

    const front =
      slide < 1 && isIncrementing ? (
        <ProfileComponent />
      ) : (
        renderMenuCard(frontCard)
      );
    const back = renderMenuCard(backCard);
    return (
      <FlipCard
        front={front}
        back={back}
        frontClassName={
          slide < 1 && isIncrementing ? "" : styles.flipCardContentContainer
        }
        backClassName={styles.flipCardContentContainer}
        isBack={isEven(slide)}
      />
    );
  };

  const getCard = (project) => {
    const renderCard = (idx, cardControls) => {
      const { increment, decrement } = cardControls;
      return (
        <div className={styles.slideImgContainer}>
          <img
            src={project.imgs[idx]}
            alt={project.title}
            className={styles.slideImg}
          />
          <FontAwesomeIcon
            className={styles.slideImgArrowLeft}
            icon={faCircleLeft}
            size="2x"
            color="white"
            onClick={decrement}
          />
          <FontAwesomeIcon
            className={styles.slideImgArrowRight}
            icon={faCircleRight}
            size="2x"
            color="white"
            onClick={increment}
          />
        </div>
      );
    };
    return renderCard;
  };

  const renderSlides = () => {
    return slides.map((project, index) => {
      const shadowClassName = index === 0 ? styles.boxShadow : "";
      const classNames = appendStyles(styles.flipCardImg, shadowClassName);
      const style = {};
      if (slide < index) {
        style.transform = "translateX(100vw)";
      }
      const props = {
        renderCard: getCard(project),
        frontClassName: classNames,
        backClassName: classNames,
      };

      return (
        <div
          style={style}
          key={`${index}:${project.title}`}
          className={styles.slideIn}
        >
          <FlipCarousel {...props} />
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
