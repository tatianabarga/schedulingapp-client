import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createTask, getTasksBySchedule } from '../../utils/data/tasksData';
import { useAuth } from '../../utils/context/authContext';

export default function Tasks({ scheduleId }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(false);
  const { user } = useAuth();
  const [newTask, setNewTask] = useState({
    label: '',
    schedule: scheduleId,
    user: user.id,
    locked_status: false,
  });

  const changeTaskInput = () => {
    if (taskInput === true) {
      setTaskInput(false);
    } else {
      setTaskInput(true);
    }
  };

  const fetchTasks = useCallback(() => {
    if (scheduleId) {
      getTasksBySchedule(scheduleId)
        .then((data) => {
          const filteredTasks = data.filter((item) => item.day === null);
          setTasks(filteredTasks);
        });
    }
  }, [scheduleId]);

  const submitTask = () => {
    if (newTask.label === '') {
      alert('Task cannot be empty');
      return;
    }
    createTask(newTask).then(() => { fetchTasks(); }).then(setTaskInput(false));
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  useEffect(() => {
    setNewTask({ ...newTask, schedule: scheduleId });
  }, [scheduleId]);

  return (
    <div className="tasks-component">
      <div>staged tasks</div>
      <div className="add-task-btn">
        <button type="button" onClick={changeTaskInput}> Add a Task</button>
      </div>
      {taskInput ? (
        <div>
          <input
            className="new-task-inp"
            type="text"
            placeholder="New Task"
            value={newTask.label}
            onChange={(e) => setNewTask({ ...newTask, label: e.target.value })}
          />
          <button type="button" onClick={submitTask}>Submit</button>
        </div>
      ) : null}
      <div className="staged-tasks">
        {tasks.map((task) => (
          <div className="task">{task.label}</div>
        ))}
      </div>
    </div>
  );
}

Tasks.propTypes = {
  scheduleId: PropTypes.number.isRequired,
};
