import React from "react";

const SingleCar = ({car,buttonClassName})=>{
  return(
      <tr>
        <td data-label="Make">{car.make}</td>
        <td data-label="model">{car.model}</td>
        <td data-label="year">{car.year}</td>
        <td data-label="engine">{car.engine}</td>
        <td data-label="color">{car.color}</td>
        <td data-label="transmission">{car.transmission}</td>
        <td data-label="mileage">{car.mileage}</td>
        <td data-label="price"><button className={buttonClassName}>Subscribe to reveal price</button></td>
      </tr>
  )
}

export default SingleCar;