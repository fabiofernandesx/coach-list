import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

const CoachForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    phone: '',
    bio: '',
    area: '',
    price: '',
    schedule: [{ week_day: 0, from: '', to: '' }],
  });
  const setFieldData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const addNewTimeSlot = () => {
    const newTimeSlot = { week_day: 0, from: '', to: '' };
    setFormData({ ...formData, schedule: [...formData.schedule, newTimeSlot] });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    api
      .post('sessions', formData)
      .then(() => {
        history.push('/');
      })
      .catch(() => {
        alert('An error occurred');
      });
  };

  const setTimeSlotItemValue = (position: number, fieldName: string, value: string) => {
    const modifiedList = formData.schedule.map((timeslot, index) => {
      if (index === position) {
        return { ...timeslot, [fieldName]: value };
      }
      return timeslot;
    });
    setFormData({ ...formData, schedule: modifiedList });
  };

  const { name, avatar, phone, bio, area, price, schedule } = formData;
  return (
    <div id="page-coach-form" className="container">
      <PageHeader
        title="So you are a coach? That's awesome"
        description="The first step is to fill out this quick form"
      />
      <main>
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Your info</legend>
            <Input
              name="name"
              label="Name"
              value={name}
              onChange={(e) => {
                setFieldData(e);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setFieldData(e);
              }}
            />
            <Input
              name="phone"
              label="Phone"
              value={phone}
              onChange={(e) => {
                setFieldData(e);
              }}
            />
            <TextArea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => {
                setFieldData(e);
              }}
            />
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
              value={area}
              onChange={(e) => {
                setFieldData(e);
              }}
            />
            <Input
              name="price"
              label="Price per session"
              value={price}
              onChange={(e) => {
                setFieldData(e);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Available time slots{' '}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addNewTimeSlot();
                }}
              >
                + New time slot
              </button>
            </legend>
            {schedule.map((timeSlot, index) => {
              return (
                <div className="schedule-item" key={index}>
                  <Select
                    name="week_day"
                    label="Weekday"
                    onChange={(e) => setTimeSlotItemValue(index, 'week_day', e.target.value)}
                    value={timeSlot.week_day}
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
                    name="from"
                    label="from"
                    type="time"
                    value={timeSlot.from}
                    onChange={(e) => setTimeSlotItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    name="to"
                    label="to"
                    type="time"
                    value={timeSlot.to}
                    onChange={(e) => setTimeSlotItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Important info" />
              All fields are required
            </p>
            <button type="submit">Save</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default CoachForm;
