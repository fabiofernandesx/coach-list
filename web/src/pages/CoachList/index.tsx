import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import CoachItem from '../../components/CoachItem';

const CoachList = () => {
  return (
    <div id="page-coach-list" className="container">
      <PageHeader title="This is the coach list">
        <form id="search-coaches">
          <div className="input-block">
            <label htmlFor="area">Area</label>
            <input type="text" id="area" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Weekday</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
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
