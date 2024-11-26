import React, { useEffect, useState } from 'react';
import { getTasksBySchedule } from '../../utils/data/tasksData';

export default function Tasks(scheduleId) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksBySchedule(scheduleId).then(setTasks((data) => data.filter((item) => item.day_id === 0)));
  }, [scheduleId]);

  return (
    <div className="staged-tasks">
      {tasks.map((task) => (
        <div className="task">{task}</div>
      ))}
    </div>
  );
}
