import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const CoachItem = () => {
  return (
    <article className="coach-item">
      <header>
        <img src="https://i.pravatar.cc/150?img=13" alt="avatar" />
        <div>
          <strong>John Doe</strong>
          <span>Lifecoach</span>
        </div>
      </header>
      <p>
        Adipisci quae distinctio eius asperiores adipisci aut. Vel provident labore minus repudiandae totam maiores.
        <br />
        Minus iusto eaque deleniti natus corporis. Voluptas nobis occaecati vero eaque ut veniam est. Earum placeat sunt
        architecto dolores sed autem. Quia repellendus cupiditate."
      </p>
      <footer>
        <p>
          Session Price <strong>US$60.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="contact" />
          Contact
        </button>
      </footer>
    </article>
  );
};

export default CoachItem;
