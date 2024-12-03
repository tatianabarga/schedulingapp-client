import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { getDaysBySchedule } from '../../utils/data/dayData';
import Goals from './Goals';
import Tasks from './Tasks';

export default function Schedule({ scheduleObj }) {
  const [daysArr, setDaysArr] = useState([]); // array of days

  useEffect(() => {
    if (scheduleObj.id) {
      getDaysBySchedule(scheduleObj.id).then(setDaysArr).then(console.log('daysArr:', daysArr));
    }
    // console.log(scheduleObj);
  }, [scheduleObj.id]);

  return (
    <div className="schedule-component">
      <div className="schedule-label">{scheduleObj?.label}</div>
      <div className="task-area">
        <div className="tasks">
          <Tasks scheduleId={scheduleObj.id} />
        </div>
        {/* map through days in this week in scheduleObj and pass to Day component */}
        <div className="days">
          {daysArr.map((day) => (
            <Day key={day.id} dayObj={day} />
          ))}
        </div>
      </div>
      <div className="goals-area">
        <div className="add-goal-btn">
          <button type="button">Add a Goal</button> {/* TODO: make this click to open new goal input */}
        </div>
        {scheduleObj.goals
          ? (
            <div className="goals">
              <Goals goals={scheduleObj.goals} />
            </div>
          ) : null}
      </div>

    </div>
  );
}

Schedule.propTypes = {
  scheduleObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    user: PropTypes.number,
    dates: PropTypes.string,
    goals: PropTypes.string,
  }).isRequired,
};
