import React, { useEffect, useState } from 'react';
import { createSchedule } from '../utils/data/scheduleData';

export default function ScheduleForm() {
  const initialState = {
    label: '',
    // dates: '',
  };

  // const [dates, setDates] = useState([]);
  const [payload, setPayload] = useState({ initialState });

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  const onSubmit = () => {
    // const datesArr = scheduleObj.dates.split(', '); // move this to onChangeDates func
    // setDates(datesArr); // something like this but in reverse. dates will come in as an array and we need to make it into a string
    if (payload === initialState) {
      alert('Schedule cannot be empty');
      return;
    }
    createSchedule(payload);
  };

  return (
    <div className="schedule-form-component">
      <div>Create A New Schedule</div>
      {/* schedule name */}
      <input
        className="sched-label-imp"
        type="text"
        value={payload.label}
        onChange={(e) => setPayload({ ...payload, label: e.target.value })}
      />
      <div className="submit-btn">
        <button type="button" onClick={onSubmit}>Submit</button>
      </div>
      {/* choose a tempate */}
      {/* choose a date */}
    </div>
  );
}
