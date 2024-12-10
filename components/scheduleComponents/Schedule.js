import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { getDaysBySchedule } from '../../utils/data/dayData';
import Goals from './Goals';
import Tasks from './Tasks';
import { updateSchedule } from '../../utils/data/scheduleData';

export default function Schedule({ scheduleObj }) {
  const [daysArr, setDaysArr] = useState([]); // array of days
  const [goalInput, setGoalInput] = useState(false);
  const [newGoal, setNewGoal] = useState('');
  const [newGoals, setNewGoals] = useState('');
  const [goals, setGoals] = useState('');

  const changeGoalInput = () => {
    if (goalInput === true) {
      setGoalInput(false);
    } else {
      setGoalInput(true);
    }
  };

  const newGoalChange = (e) => {
    setNewGoal(`${e.target.value}`);
    console.log('newGoal: ', newGoal);
  };

  const changeGoals = () => {
    setNewGoals(`${goals} -- ${newGoal}`); // make this concatenate
  };

  const fetchGoals = useCallback(() => {
    setGoals(scheduleObj.goals);
  }, [scheduleObj]);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  const submitGoal = () => {
    if (newGoal === '') {
      alert('Goal cannot be empty');
      return;
    }
    changeGoals().then(updateSchedule(newGoals)).then(() => { fetchGoals(); }).then(setGoalInput(false));
  }; // write update schedule function

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
          <button type="button" onClick={changeGoalInput}>Add a Goal</button>
        </div>
        {goalInput ? (
          <div className="new-task">
            <div className="">
              <input
                id="username"
                name="newGoal"
                type="text"
                placeholder="new goal"
                autoComplete="newGoal"
                className="task-input"
                onChange={newGoalChange}
              />
            </div>
            <div className="goal-submit">
              <button type="button" onClick={submitGoal}>create</button>
            </div>
          </div>
        ) : null}
        {scheduleObj.goals
          ? (
            <div className="goals">
              <Goals goals={goals} />
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
