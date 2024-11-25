import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getSchedulesByUser } from '../utils/data/scheduleData';

function Home() {
  const { user } = useAuth();
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    getSchedulesByUser(user?.id).then(setSchedules);
  }, [user]);

  return (
    <div className="home-page">
      <div className="add-sched-btn">
        {/* make add shedule btn */}
        {/* map through schedules that were called and set above */}
        {schedules?.map((sched) => (
          <a className="schedule-item" href={`/schedule/${sched.id}`}>
            <div className="schedule-item-label">{sched?.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
