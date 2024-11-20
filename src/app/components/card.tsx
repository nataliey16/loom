import React from "react";

const Card = ({ imageSrc, title, description }) => (
  <div className={GRID_ITEMS}>
    <Image
      className={IMG_STYLES}
      src={imageSrc}
      width={IMG_WIDTH}
      height={IMG_HEIGHT}
      alt={title}
    />
    <div className="flex-1">
      <h1 className="font-bold mt-4">{title}</h1>
      <p>{description}</p>
    </div>
    <button className={BUTTON_STYLES}>Learn more</button>
  </div>
);

export default Card;
