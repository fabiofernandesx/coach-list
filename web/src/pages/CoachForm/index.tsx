import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

const CoachForm = () => {
  return (
    <div id="page-coach-form" className="container">
      <PageHeader
        title="So you are a coach? That's awesome"
        description="The first step is to fill out this quick form"
      />
      <main>
        <fieldset>
          <legend>Your info</legend>
          <Input name="name" label="Name" />
          <Input name="avatar" label="Avatar" />
          <Input name="phone" label="Phone" />
          <TextArea name="bio" label="Bio" />
        </fieldset>
        <fieldset>
          <legend>About your session</legend>
          <Select
            name="area"
            label="Area"
            options={[
              { value: 'lifecoach', label: 'Life Coach' },
              { value: 'financecoach', label: 'Finance Coach' },
            ]}
          />
          <Input name="price" label="Price per session" />
        </fieldset>
        <fieldset>
          <legend>
            Available time slots <button>+ New time slot</button>
          </legend>
          <div className="schedule-item">
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
            <Input name="from" label="from" type="time" />
            <Input name="to" label="to" type="time" />
          </div>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Important info" />
            All fields are required
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
};

export default CoachForm;
