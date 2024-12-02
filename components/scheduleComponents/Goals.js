import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export default function Goals({ goals }) {
  const [goalsArr, setGoalsArr] = useState([]);

  useEffect(() => {
    setGoalsArr(goals.split('--'));
  }, [goals]);

  return (
    <div className="goals-component">
      <div className="goals-header">Goals</div>
      <div className="goal-items-cont">
        {goalsArr.map((goal) => (
          <div className="goal-item">
            <div className="goal-text">{goal}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Goals.propTypes = {
  goals: PropTypes.string.isRequired,
};
