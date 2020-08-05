import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import CoachItem from '../../components/CoachItem';
import Input from '../../components/Input';

const CoachList = () => {
  return (
    <div id="page-coach-list" className="container">
      <PageHeader title="This is the coach list">
        <form id="search-coaches">
          <Input name="area" label="Area" />
          <Input name="text" label="Weekday" />
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
