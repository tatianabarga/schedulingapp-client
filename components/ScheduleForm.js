import React, { useState } from 'react';

export default function ScheduleForm() {
  // const [dates, setDates] = useState([]);
  const [payload, setPayload] = useState({
    label: '',
    dates: '',
  });

  // const initialState = {

  // }

  // const onSubmit = () => {
  //   const datesArr = scheduleObj.dates.split(', '); // move this to onChangeDates func
  //   setDates(datesArr); // something like this but in reverse. dates will come in as an array and we need to make it into a string
  // };

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

      {/* choose a tempate */}
      {/* choose a date */}
    </div>
  );
}
