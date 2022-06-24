import React from 'react';

export function CardFood(props) {
  return (
    <>
      <p>Name: </p>
      <p>Calories: </p>
      <img src={props.food.name} />
    </>
  );
}
