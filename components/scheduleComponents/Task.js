import React from 'react';

export default function Task(taskObj) {
  return (
    <div className="task-componenet">
      <div className="task-name">{taskObj?.label}</div>
    </div>
  );
}
