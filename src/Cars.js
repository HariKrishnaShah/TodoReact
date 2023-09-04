import React from 'react'

function Cars(props) {
    const car = ["Lamborgini"];
  return (
    <>
    {props.goal >0 && car.length>0 && <p>{`I have ${props.goal} goal and ${car.length} car`}</p>}
    </>
  )
}

export default Cars;