import React from 'react';

class ViewBuilding extends React.Component {
	render() {
	const { data, selectedBuilding } = this.props; 
	//https://forums.meteor.com/t/react-find-a-prop-in-props-array/31286
	const curBuilding = data.find(data => (data.id === selectedBuilding))
		if(!curBuilding){
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		}
		else
			return(
						<ul>
						<li>Name: {curBuilding && curBuilding.name}</li>
						<li>Address: {curBuilding && curBuilding.address}</li>
						<li>Latitude: {curBuilding && curBuilding.coordinates && curBuilding.coordinates.latitude}</li>
						<li>Longitude: {curBuilding && curBuilding.coordinates && curBuilding.coordinates.longitude}</li>
						</ul>
						)
	}
}
export default ViewBuilding;
