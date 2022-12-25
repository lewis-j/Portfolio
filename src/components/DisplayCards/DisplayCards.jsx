import { FlipCard } from "../FlipCard";
import styles from "./DisplayCards.module.css";
import profile from ".././../assets/img/about_portrait.jpg";
import { useNavigate } from "../../lib/router/Router";
import { isEven } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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

  const getMenu = (index, isSlidingDown) => {
    if (index < 1) return { backCard: slides[0], frontCard: slides[1] };
    return slides.reduce((titles, _, idx) => {
      if (index === idx) {
        if (isEven(idx)) {
          if (isSlidingDown) {
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
          if (isSlidingDown) {
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
    const { frontCard, backCard } = getMenu(slide, isSlidingDown);

    const front =
      slide < 1 && isSlidingDown ? (
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
          <img src={item.imgs[0]} alt={item.title} />
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
