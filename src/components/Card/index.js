import React, { useRef } from 'react';
import md5 from 'md5';
import { useDrag, useDrop } from 'react-dnd';

import css from './index.module.css';

const Card = ({ title, description, email = '', sortCard, column, index }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'card-' + column,
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      sortCard(dragIndex, hoverIndex, column);
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    item: { type: 'card-' + column, title, column, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <li ref={ref} className={css.card}>
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
