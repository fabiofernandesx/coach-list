import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import { coach } from '../../interfaces/coach';
import api from '../../services/api';

interface coachProps {
  coach: coach;
}

const CoachItem: React.FC<coachProps> = ({ coach }) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: coach.id,
    });
  };
  return (
    <article className="coach-item">
      <header>
        <img src={coach.avatar} alt="avatar" />
        <div>
          <strong>{coach.name}</strong>
          <span>{coach.area}</span>
        </div>
      </header>
      <p>{coach.bio}</p>
      <footer>
        <p>
          Session Price <strong>US$ {coach.price}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${coach.phone}`} type="button">
          <img src={whatsappIcon} alt="contact" />
          Contact
        </a>
      </footer>
    </article>
  );
};

export default CoachItem;
