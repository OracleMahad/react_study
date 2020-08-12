import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://cdn.imweb.me/thumbnail/20200415/bb2adfaee6702.png",
    rating : 5
  },
  {
    id: 2,
    name: "Kimchi",
    image:
      "https://cdn.imweb.me/thumbnail/20200415/bb2adfaee6702.png",
    rating : 4.9
  },
  {
    id: 3,
    name: "Kimchi",
    image:
      "https://cdn.imweb.me/thumbnail/20200415/bb2adfaee6702.png",
    rating : 4.8
  }
]


function Food({name, picture, rating}){ //props.fav
  return <div>
    <h2>I like {name} </h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt={name}/>
  </div>  
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {/* <h1>Hello!!!!</h1> */}
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name = {dish.name} 
        picture = {dish.image} 
        rating={dish.rating}
        />
      ))}
      {/* <Food fav= "kimchi" /> */}
    </div>
  );
}

export default App;
