/* eslint-disable react/prop-types */
import "./stats.css";
const Stats = (props) => {
  return (
    <>
      <div className="stats">
        <h3>{props.number}</h3>
        <span>{props.info}</span>
      </div>
    </>
  );
};
export default Stats;
