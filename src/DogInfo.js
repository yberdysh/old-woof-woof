import React from "react"

class DogInfo extends React.Component {


	render(){
    console.log("dog to render inside dog info", this.props.dog)

	const color = this.props.dog. isGoodDog ? "yellow" : "red";

      const imgStyle = {
				boxShadow: `0 0 30px 15px ${color}, 0 0 50px 15px ${color}, 0 0 75px 45px ${color}`
			}

			return (
				<div id="dog-info">
				<img src={this.props.dog.image} style={imgStyle} alt="pup pup"/>
				<h2>{this.props.dog && this.props.dog.name}</h2>
				<button onClick={() => this.props.patchDog(this.props.dog.id)}>{this.props.dog.isGoodDog ? "Good dog" : "Bad dog"}</button>
				</div>
			)

	}
}

export default DogInfo
