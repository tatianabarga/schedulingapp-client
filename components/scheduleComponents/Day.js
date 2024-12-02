import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createTask, getTasksByDay } from '../../utils/data/tasksData';
import Task from './Task';

export default function Day({ dayObj }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(false);
  const [newTask, setNewTask] = useState({
    label: '',
    schedule: dayObj.scheduleId,
    dayId: dayObj.id,
  });

  const changeTaskInput = () => {
    if (taskInput === true) {
      setTaskInput(false);
    } else {
      setTaskInput(true);
    }
  };

  const taskChange = (e) => {
    setNewTask({ ...newTask, label: e.target.value });
  };

  const submitTask = () => {
    if (newTask.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    createTask(newTask);
  };

  useEffect(() => {
    if (dayObj.id) {
      getTasksByDay(dayObj.id).then(setTasks).then(console.log(tasks));
    }
  }, [dayObj]);

  return (
    <div className="Day Component">
      <div className="weekday-header">{dayObj?.weekday}</div>
      <div className="day-date">{dayObj?.date}</div>
      <div className="add-task-btn">
        <button type="button" onClick={changeTaskInput}> Add a Task</button>
      </div>
      {taskInput ? (
        <div className="new-task">
          <div className="">
            <input
              id="username"
              name="newTask"
              type="text"
              placeholder="new task"
              autoComplete="newTask"
              className="task-input"
              onChange={taskChange}
            />
          </div>
          <div className="task-submit">
            <button type="button" onClick={submitTask}>create</button>
          </div>
        </div>
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
