import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
      />
    </div>
  );
}

export default CalendarComponent;
