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
import { useState, useLayoutEffect } from "react";
import { ReadMe, FlipCard, FlipCarousel } from "../../components";

const DisplayCards = ({ slide, slides, isIncrementing }) => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [isReadMe, setIsReadMe] = useState(false);

  useLayoutEffect(() => {
    setIsReadMe(false);
    setIsHidden(false);
  }, [slide]);

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
  const renderMenucard = (index) => {
    if (index < 1) {
      return <ProfileComponent />;
    }
    const idx = index - 1;
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
          <li
            onClick={() => {
              setIsReadMe(!isReadMe);
            }}
          >
            <FontAwesomeIcon icon={faReadme} /> read me
          </li>
        </ul>
      </div>
    );
  };

  const renderFlipCard = () => {
    const frontClassName = () => {
      if (slide < 2) {
        if (!isIncrementing && slide == 1)
          return styles.flipCardContentContainer;
        return "";
      }
      return styles.flipCardContentContainer;
    };
    return (
      <FlipCarousel
        renderCard={renderMenucard}
        frontClassName={frontClassName()}
        backClassName={styles.flipCardContentContainer}
        index={slide}
      />
    );
  };

  const getCard = (project) => {
    const renderCard = (idx, cardControls) => {
      const { increment, decrement } = cardControls;
      const arrowColor = project.imgs[idx].isDark
        ? styles.arrowDark
        : styles.arrowLight;
      const arrowLeftClassName = appendStyles(
        styles.slideImgArrowLeft,
        arrowColor
      );
      const arrowRightClassName = appendStyles(
        styles.slideImgArrowRight,
        arrowColor
      );
      return (
        <div className={styles.slideImgContainer}>
          <img
            src={project.imgs[idx].img}
            alt={project.title}
            className={styles.slideImg}
          />
          <FontAwesomeIcon
            className={arrowLeftClassName}
            icon={faCircleLeft}
            size="2x"
            onClick={() => {
              setIsHidden(true);
              if (idx !== 0) decrement();
            }}
          />
          <FontAwesomeIcon
            className={arrowRightClassName}
            icon={faCircleRight}
            size="2x"
            onClick={() => {
              setIsHidden(true);
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
      const projectSlide = slide - 1;
      if (projectSlide < index) {
        style.transform = "translateX(100vw)";
      } else if (projectSlide > index && isHidden) {
        style.visibility = "hidden";
      }

      const renderFlipCarousel = () => {
        return (
          <FlipCarousel
            className={styles.projects}
            renderCard={getCard(project)}
            frontClassName={classNames}
            backClassName={classNames}
          />
        );
      };

      const renderReadMe = (project) => {
        return (
          <ReadMe
            isOpem={isReadMe}
            handleClose={() => setIsReadMe(false)}
            item={project}
          />
        );
      };
      return (
        <div
          style={style}
          key={`${index}:${project.title}`}
          className={styles.slideIn}
          onTransitionEnd={(e) => {
            const isClass = [...e.target.classList].some((className) => {
              return className === styles.slideIn;
            });
            if (isClass) {
              setIsHidden(true);
            }
          }}
        >
          <FlipCard
            className={styles.projects}
            front={renderFlipCarousel()}
            back={renderReadMe(project)}
            // isBack={isReadMe}
            index={+isReadMe}
            flipX={true}
          />
        </div>
      );
    });
  };

  const flipCardClass =
    slide === 0
      ? appendStyles(styles.profileOffset, styles.flipCard)
      : styles.flipCard;

  return (
    <div className={styles.container}>
      <div
        className={flipCardClass}
        // style={slide === 0 ? offsetProfilePic : {}}
      >
        {renderFlipCard()}
      </div>
      <div className={styles.projectContainer}>{renderSlides()}</div>
    </div>
  );
};
export default DisplayCards;
