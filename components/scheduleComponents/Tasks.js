import React, { useEffect, useState } from 'react';
import { getTasksBySchedule } from '../../utils/data/tasksData';

export default function Tasks(scheduleId) {
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
    getTasksBySchedule(scheduleId).then(setTasks((data) => data.filter((item) => item.day_id === 0)));
  }, [scheduleId]);

  return (
    <div className="tasks-component">
      <div className="add-task-btn">
        <button type="button" onClick={changeTaskInput}> Add a Task</button>
      </div>
      {taskInput ? (
        <div className="task-input">task input</div> /* TODO: make this new task input */
      ) : null}
      <div className="staged-tasks">
        {tasks.map((task) => (
          <div className="task">{task}</div>
        ))}
      </div>
    </div>
  );
}
