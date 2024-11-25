import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function Task({ taskObj }) {
  useEffect(() => {
    console.log(taskObj);
  });

  return (
    <div className="task-componenet">
      <div className="task-name">{taskObj.label}</div>
    </div>
  );
}

Task.propTypes = {
  taskObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    // scheduleId: PropTypes.number,
    // user: PropTypes.number,
    // date: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
