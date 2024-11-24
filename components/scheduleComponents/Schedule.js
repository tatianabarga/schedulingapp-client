import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { getDaysBySchedule } from '../../utils/data/dayData';

export default function Schedule({ scheduleObj }) {
  // const [dates, setDates] = useState([]);
  const [daysArr, setDaysArr] = useState([]); // array of date ids

  useEffect(() => {
    getDaysBySchedule(scheduleObj.id).then(setDaysArr); // make this api call
  }, [scheduleObj]);

  // useEffect(() => {
  //   const datesArr = scheduleObj.dates.split(', ');
  //   setDates(datesArr); // something like this
  // }, [scheduleObj]);

  return (
    <div className="schedule-component">
      <div className="schedule-label">Schedule Name</div>
      <div className="task-area">
        {/* tasks component here */}
        {/* map through days in this week in scheduleObj and pass to Day component */}
        <Day da={daysArr} /> {/* fix this */}
      </div>
    </div>
  );
}

// set up props

Schedule.propTypes = {
  scheduleObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    user: PropTypes.number,
    dates: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
