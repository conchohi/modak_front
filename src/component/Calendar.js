import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function CalendarComponent({callbackFunction}) {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsOpen(false); // 날짜 선택 후 드롭다운 닫기
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    callbackFunction(moment(date).format('YYYY-MM-DD'))
}, [date])

  // 현재 날짜와 14일 후 날짜를 계산
  const now = new Date();
  const maxDate = new Date();
  maxDate.setDate(now.getDate() + 14);

  // 타일 비활성화 함수
  const tileDisabled = ({ date, view }) => {
    // month view에서만 날짜 비활성화
    if (view === 'month') {
      return date < now.setHours(0, 0, 0, 0) || date > maxDate.setHours(23, 59, 59, 999);
    }
    return false;
  };

  return (
    <div className="calendar-dropdown-container" ref={dropdownRef}>
      <button className="calendar-dropdown-button" onClick={toggleDropdown}>
        {moment(date).format('YYYY-MM-DD')}
      </button>
      {isOpen && (
        <div className="calendar-dropdown">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileDisabled={tileDisabled}
            formatDay={(locale, date) => moment(date).format("D")}
          />
        </div>
      )}
    </div>
  );
}

export default CalendarComponent;