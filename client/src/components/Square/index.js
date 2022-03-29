import React from "react";
import './styles.css'
import Image from './images.js'

const Square = (props) => {
  const { title } = props;
  const link = "../../pages/" + title.replace(/\s+/g, '-')
  return (
    <div class="square" tabIndex="1">
      <div>
        <div class="image-box">
          <Image title={title} />
        </div>
        <div class="text-label">
          <div class="title">{title.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default Square;