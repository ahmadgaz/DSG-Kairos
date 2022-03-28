import React from "react";
import './styles.css'
import Image from './images.js'

const Square = (props) => {
  const { title } = props;
  const link = "https://www.sundayfriends.org/" + title.replace(/\s+/g, '-')
  return (
    <div class="square" tabIndex="1">
      {/* div for the clickable square */}
      <a class="square-button" href={link} target="_self" tabIndex="0">
        {/* div for the image box */}
        <div class="image-box">
          <Image title={title}/>
        </div>
        {/* div for the text label */}
        <div class="text-label">
          {/* div for the text */}
          <div>
            {/* title */}
            <div class="title">{title.toUpperCase()}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Square;