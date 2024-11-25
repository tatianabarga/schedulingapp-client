import PropTypes from 'prop-types';
import React from 'react';

export default function Day({ dayObj }) {
  return (
    <div className="Day Component">
      <div className="weekday-header">Weekday</div> {/* make this display weekday property from object */}
      <div className="day-date">{dayObj.date}</div>
      <div className="task-cont">
        {/* map through tasks */}
      </div>
    </div>
  );
}

Day.propTypes = {
  dayObj: PropTypes.shape({
    id: PropTypes.number,
    week: PropTypes.string,
    scheduleId: PropTypes.number,
    user: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
