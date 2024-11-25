import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Schedule from '../../components/scheduleComponents/Schedule';
import { getSingleSchedule } from '../../utils/data/scheduleData';

export default function SingleSchedulePage() {
  const router = useRouter();
  const { id } = router.query;
  const [scheduleObj, setScheduleObj] = useState({});

  useEffect(() => {
    getSingleSchedule(id).then(setScheduleObj);
  }, [id]);

  return (
    <div>
      <Schedule scheduleObj={scheduleObj} />
    </div>
  );
}
