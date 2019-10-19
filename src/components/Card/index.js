import React from 'react';
import md5 from 'md5';

const Card = ({ title, description, email }) => {
  return (
    <li>
      <h3>
        <img
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=24`}
          alt={email}
        />
        {title}
      </h3>
      <p>{description}</p>
    </li>
  );
};

export default Card;
