import React from "react"
import DogItem from "./DogItem"


class DogList extends React.Component {

	render(){
		return (
      <div id="dog-list">
        {this.props.dogs.map(dog => <DogItem key={dog.id} dogId={dog.id} handleDogClick={this.props.handleDogClick} dogName={dog.name}/>)}
      </div>
  )
	}
}

export default DogList
