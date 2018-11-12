import React from "react"

class DogItem extends React.Component {

	render(){
		return (<span onClick={() => this.props.handleDogClick(this.props.dogId)}>{this.props.dogName}</span>)
	}
}

export default DogItem
