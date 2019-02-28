import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 300
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: .1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
  }


class App extends Component {
  // ====== STATE ======
  // state is something that can change and affect the app; 
  // state lives in the parent component
  constructor() {
    super() // calls the constructor of Component
    this.state = {
        films: [],
        searchfield: '' 
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')  //fetch is a part of the window object
    .then(response => response.json())  //response return a promise
    .then(films => this.setState({films: films.results}) );
  }

  // With anything that comes from React, so constructor and render, are pre-built in React, any time we make our own methods on a component, we have to use arrow functions, and this makes sure that the 'this' value is according to where it was created, which is the 'App'
  onSearchChange = (event) => {   
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const {films, searchfield} = this.state;
    const filteredFilms = films.filter(film => {
      return film.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div>
        <Particles 
        className='particles' 
        params={particlesOptions} 
        />
          {/*if films.length==0 so it's true, !the opposite is false */}
        { (!films.length) 
        ? <h1 className='f1 tc'>Loading...</h1> 
        : (
            <div className='tc'>
                <h1 className='f1'>STARWARS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList films={filteredFilms}/>
                </Scroll>
            </div>
          )}
      </div>
    )
  }
}

export default App;
