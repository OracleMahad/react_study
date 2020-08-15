import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"
// import PropTypes from "prop-types";

class App extends React.Component{
  state ={
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: { 
        data: { movies } 
      } 
    }= await axios.get(
      "https://yts-proxy.now.sh/list_movies.json"
    );
    this.setState({movies, isLoading : false})//movies:movies
  };
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return  (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
              key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
    </section>
    );
  }
}




// componentDidMount() {
//   setTimeout(()=> {
//     this.setState({ isLoading: false });
//   }, 6000);
// }
// className App extends React.Component{
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({count: current.count + 1 }));//{count: this.state.count + 1}
//   };
//   minus = () => {
//     this.setState(current => ({count: current.count - 1 }));//{count: this.state.count - 1}
//   };

//   // componentDidMount(){  }
//   // componentDidUpdates(){  }
//   // componentWillUnmount(){  }  Life cycle
//   render(){
//   return <div>
//     <h1>The nunber is {this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.minus}>Minus</button>
//   </div>
//   }
// }

export default App;
