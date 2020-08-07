import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import CoachItem from '../../components/CoachItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

const CoachList = () => {
  return (
    <div id="page-coach-list" className="container">
      <PageHeader title="This is the coach list">
        <form id="search-coaches">
          <Select
            name="area"
            label="Area"
            options={[
              { value: 'lifecoach', label: 'Life Coach' },
              { value: 'financecoach', label: 'Finance Coach' },
            ]}
          />
          <Select
            name="weekday"
            label="Weekday"
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

          <Input type="time" name="time" label="Time" />
        </form>
      </PageHeader>
      <main>
        <CoachItem />
        <CoachItem />
        <CoachItem />
        <CoachItem />
      </main>
    </div>
  );
};

export default CoachList;
