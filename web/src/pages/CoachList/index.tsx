import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import CoachItem from '../../components/CoachItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import { coach } from '../../interfaces/coach';

const CoachList = () => {
  const [area, setArea] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');
  const [coaches, setCoaches] = useState([]);

  const searchCoachs = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.get('sessions', {
      params: {
        area,
        week_day,
        time,
      },
    });
    setCoaches(response.data);
  };
  return (
    <div id="page-coach-list" className="container">
      <PageHeader title="This is the coach list">
        <form id="search-coaches" onSubmit={searchCoachs}>
          <Select
            name="area"
            label="Area"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
            options={[
              { value: 'lifecoach', label: 'Life Coach' },
              { value: 'financecoach', label: 'Finance Coach' },
            ]}
          />
          <Select
            name="weekday"
            label="Weekday"
            value={week_day}
            onChange={(e) => {
              setWeekday(e.target.value);
            }}
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit"> Filter</button>
        </form>
      </PageHeader>
      <main>
        {coaches.map((item: coach) => {
          return <CoachItem key={item.id} coach={item} />;
        })}
      </main>
    </div>
  );
};

export default CoachList;
