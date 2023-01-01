import styles from "./DisplayCards.module.css";
import profile from ".././../assets/img/about_portrait.jpg";
import { useNavigate } from "../../lib/router/Router";
import { appendStyles, convertMarkDownToJsxLinks } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleLeft,
  faCircleRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import FlipCarousel from "../FlipCarousel/FlipCarousel";
import { useState, useLayoutEffect } from "react";
import { FlipCard } from "../FlipCard";
import CloseBtn from "../CloseBtn/CloseBtn";

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

  const renderBadges = (badgeList) =>
    badgeList.map((badge, index) => (
      <span
        key={`${badge}${index}${Math.random() * index}`}
        className={styles.badge}
      >
        {badge}
      </span>
    ));

  const renderSlides = () => {
    return slides.map((project, index) => {
      const shadowClassName = index === 0 ? styles.boxShadow : "";
      const classNames = appendStyles(styles.flipCardImg, shadowClassName);
      const style = {};
      if (slide < index) {
        style.transform = "translateX(100vw)";
      } else if (slide > index && isHidden) {
        console.log("hide");
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
      const renderDescription = (overView) => {
        if (!overView) return null;
        console.log("overview", overView);
        return overView.map(({ title, text }, idx) => (
          <div key={idx + title}>
            <h3 className={styles.overViewTitle}>{title}</h3>
            <div className={styles.overViewContent}>
              {convertMarkDownToJsxLinks(text)}
            </div>
          </div>
        ));
      };

      const readMe = (
        <div className={styles.readMe}>
          <div className={styles.closeBtn} onClick={() => setIsReadMe(false)}>
            <CloseBtn isOpen={isReadMe} />
          </div>
          <h3 className={styles.readMeTitle}>Project Overview</h3>
          <div className={styles.badgeList}>{renderBadges(project.badges)}</div>
          <div className={styles.description}>
            {renderDescription(project.overView)}
          </div>
        </div>
      );
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
            front={renderFlipCarousel()}
            back={readMe}
            isBack={isReadMe}
            flipX={true}
          />
        </div>
      );
    });
  };
  const offsetProfilePic = {
    transform: "translateX(25vh)",
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
