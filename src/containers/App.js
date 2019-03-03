import React, { Component } from 'react';
import Categories from '../components/Categories';
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
        value_area: 100
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
    detect_on: 'canvas',
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
        category: '',
        data: [],
        searchfield: '' 
    }
  }

  // With anything that comes from React, so constructor and render, are pre-built in React, any time we make our own methods on a component, we have to use arrow functions, and this makes sure that the 'this' value is according to where it was created, which is the 'App'
  onSearchChange = (event) => {   
    this.setState({ searchfield: event.target.value })
  }

  onCategoryClick = (event) => {
    const category = event.target.textContent;

    fetch(`https://swapi.co/api/${category}`)  //fetch is a part of the window object
    .then(response => response.json())  //response return a promise
    .then(data => {
      this.setState({data: data.results, category: category})
     } );
  }

  render() {
    const {category, data, searchfield} = this.state;
    const filteredCategory = data.filter(object => {
      const obj = object.name ? object.name : object.title;
      return obj.toLowerCase().includes(searchfield.toLowerCase());
      
    })
    return (
      <div>
        <Particles className='particles' params={particlesOptions}/>
        <div className='tc'>
          <h1 className='color-orange f2 f1-m f1-ns ma2 ma2-m ma2-ns'>STARWARS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Categories onCategoryClick={this.onCategoryClick}/>
          <Scroll>
            <CardList object={filteredCategory} category={category} />
          </Scroll>
        </div>
      </div>
    )
  }
}

export default App;
