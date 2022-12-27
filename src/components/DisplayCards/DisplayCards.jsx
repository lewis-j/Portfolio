import styles from "./DisplayCards.module.css";
import profile from ".././../assets/img/about_portrait.jpg";
import { useNavigate } from "../../lib/router/Router";
import { appendStyles } from "../../util";
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
  const renderMenucard = (idx) => {
    if (idx < 0) {
      return <ProfileComponent />;
    }
    return (
      <div className={styles.menuContent}>
        <h1 className={styles.menuTitle}>{slides[idx].title}</h1>
        <ul>
          <li
            onClick={() => {
              window.open(slides[idx].github, "_blank");
            }}
          >
            <FontAwesomeIcon icon={faSquareGithub} /> Git Repository
          </li>
          <li
            onClick={() => {
              window.open(slides[idx].url, "_blank");
            }}
          >
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
    return (
      <FlipCarousel
        renderCard={renderMenucard}
        frontClassName={styles.flipCardContentContainer}
        backClassName={
          slide < 1 && isIncrementing ? "" : styles.flipCardContentContainer
        }
        index={slide}
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
            onClick={() => {
              if (idx !== 0) decrement();
            }}
          />
          <FontAwesomeIcon
            className={styles.slideImgArrowRight}
            icon={faCircleRight}
            size="2x"
            color="white"
            onClick={() => {
              if (project.imgs.length - 1 > idx) increment();
            }}
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
      return (
        <div
          style={style}
          key={`${index}:${project.title}`}
          className={styles.slideIn}
        >
          <FlipCarousel
            renderCard={getCard(project)}
            frontClassName={classNames}
            backClassName={classNames}
          />
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
