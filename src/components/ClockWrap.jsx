import PropTypes from "prop-types";
import Clock from "./Clock";

export default function ClockWrap({clocks, UTC, handleRemove }) {
  return (
    <div className="clock-wrap">
      {clocks.map((item) => (
        <Clock 
          key={item.id}
          clock={item}
          UTC={UTC}
          handleRemove={handleRemove} />
      ))}
    </div>
  )
}


ClockWrap.propTypes = {
  clocks: PropTypes.array,
  UTC: PropTypes.object,
  handleRemove: PropTypes.func,
};
ClockWrap.defaultProps = {
  clocks: [],
  UTC: {},
  handleRemove: () => {},
};