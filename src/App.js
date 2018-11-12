import React, { Component } from 'react';
import dogs from "./dogData"

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  constructor(){
    super()
    this.state = {
      dogToRender: dogs[0],
      dogs: []
    }
    this.handleClickDogName = this.handleClickDogName.bind(this)
    this.patchDog = this.patchDog.bind(this)
  }

  componentDidMount(){
    this.setState({dogs: dogs})
  }

  patchDog(id){
    const newDog = this.state.dogs.find(dog => dog.id === id)
    newDog.isGoodDog = !newDog.isGoodDog
    this.setState({dogToRender: newDog})
  }

  handleClickDogName(id){
    const dogToRender = dogs.find(dog => dog.id === id)
    this.setState({dogToRender})
  }

  render() {
    return (
      <div>
        <DogList dogs={this.state.dogs} handleDogClick={this.handleClickDogName} />
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogInfo patchDog={this.patchDog} dog={this.state.dogToRender}/>
        </div>
      </div>
    );
  }
}

export default App;
