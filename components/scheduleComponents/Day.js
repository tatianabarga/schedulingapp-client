import React from 'react';

export default function Day(date) {
  return (
    <div className="Day Component">
      <div className="weekday-header">Weekday</div> {/* make this display weekday property from object */}
      <div className="day-date">{date}</div>
      <div className="task-cont">
        {/* map through tasks */}
      </div>
    </div>
  );
}
