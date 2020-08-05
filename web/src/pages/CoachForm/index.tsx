import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

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
        </fieldset>
        <fieldset>
          <legend>About your session</legend>
          <Input name="area" label="Area" />
          <Input name="price" label="Price per session" />
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
