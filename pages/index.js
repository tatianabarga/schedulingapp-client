import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        <Link className="schedule-item" href="/schedule/new" passHref>
          <button type="button">Add a Schedule</button>
        </Link>
      </div>
      <div className="schedules-cont">
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
