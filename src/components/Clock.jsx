import PropTypes from "prop-types";

export default function Clock({clock, UTC, handleRemove}) {
  return (
    <div className="time">
      <div className="time__city">{clock.city}</div>
      <div className="time__date">{UTC.utcOffset(Number(clock.timeZone)).format("HH:mm:ss")}</div>
      <button className="time__remove" onClick={() => handleRemove(clock.id)}></button>
    </div>
  )
}


Clock.propTypes = {
  clock: PropTypes.object,
  currentUTC: PropTypes.object,
  handleRemove: PropTypes.func,
};

Clock.defaultProps = {
  clock: {},
  UTC: {},
  handleRemove: () => {},
};