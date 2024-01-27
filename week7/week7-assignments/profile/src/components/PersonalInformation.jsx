/* eslint-disable react/prop-types */
import "./info.css";
const PersonalInformation = (props) => {
  return (
    <div className="info">
      <div className="info-line">
        <h3>{props.name}</h3>
        <p>{props.age}</p>
      </div>
      <span>{props.place}</span>
    </div>
  );
};
export default PersonalInformation;
