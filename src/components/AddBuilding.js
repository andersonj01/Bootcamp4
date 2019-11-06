import React from 'react';
class AddBuilding extends React.Component {
	AddList(){
			const newName = this.Name.value
			const newCode = this.Code.value
			const newAddress = this.Address.value
			this.props.AddListing(newName, newCode, newAddress)
		}
	render(){
		const {data} = this.props;
		return (
		<div>
		<h4> Edit the form to add a building </h4>
		<form>
			<p>Name</p>
			<input id = "input_name"
			ref={ (value) => {this.Name = value} }
			/>
			<p>Code</p>
		<input id = "input_code"
			ref={ (value) => {this.Code = value} }
			/>
			<p>Address</p>
			<input id = "input_address"
			ref={ (value) => {this.Address = value} }
			/>
		</form>
		<button onClick={() => this.AddList()}>Click to Add</button>
		</div>
		)
	}
}
export default AddBuilding;