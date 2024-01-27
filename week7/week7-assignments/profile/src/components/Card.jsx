import BackgroundImage from "../../src/assets/wallpaper.jpg";
import ProfilePic from "../assets/divyanshraj.jpg";
import PersonalInformation from "./PersonalInformation";
import Stats from "./Stats";
import "./card.css";

const Card = () => {
  return (
    <>
      {/* background image
 photo
 peronsalInfo
 stats
 */}
      <div className="profileCard">
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <img src={ProfilePic} alt="" className="profilePic" />
        </div>
        <div className="profileContent">
          <PersonalInformation
            className="personalInfo"
            name="Divyansh"
            age="20"
            place="Delhi"
          />
          <div className="statsInfo">
            <Stats number="20k" info="followers" />
            <Stats number="20k" info="Likes" />
            <Stats number="20k" info="Photos" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
