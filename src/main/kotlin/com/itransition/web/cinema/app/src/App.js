// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  async componentDidMount() {
    const response = await fetch('/api/v1/movies');
    const body = await response.json();
    this.setState({ movies: body, isLoading: false });
  }

  render() {
    const {movies, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Some List</h2>
              {movies.map(movie =>
                  <div key={movie.id}>
                    {movie.id} - {movie.name}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;
