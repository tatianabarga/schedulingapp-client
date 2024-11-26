import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getTasksByDay } from '../../utils/data/tasksData';
import Task from './Task';

export default function Day({ dayObj }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(false);

  const changeTaskInput = () => {
    if (taskInput === true) {
      setTaskInput(false);
    } else {
      setTaskInput(true);
    }
  };

  useEffect(() => {
    if (dayObj.id) {
      getTasksByDay(dayObj.id).then(setTasks).then(console.log(tasks));
    }
  }, [dayObj]);

  return (
    <div className="Day Component">
      <div className="weekday-header">{dayObj?.weekday}</div> {/* make this display weekday property from object */}
      <div className="day-date">{dayObj?.date}</div>
      <div className="add-task-btn">
        <button type="button" onClick={changeTaskInput}> Add a Task</button>
      </div>
      {taskInput ? (
        <div className="task-input">task input</div> /* TODO: make this new task input */
      ) : null}
      <div className="task-cont">
        {/* map through tasks */}
        {tasks.map((task) => (
          <Task taskObj={task} />
        ))}
      </div>
    </div>
  );
}

Day.propTypes = {
  dayObj: PropTypes.shape({
    id: PropTypes.number,
    weekday: PropTypes.string,
    scheduleId: PropTypes.number,
    user: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
