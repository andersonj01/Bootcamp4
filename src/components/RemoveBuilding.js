import React from 'react';

class RemoveBuilding extends React.Component {
	render(){
	const {data, deleteListing, selectedBuilding} = this.props;
	const curBuilding = data.find(data => (data.id === selectedBuilding))
	if(!curBuilding){
	return null
	}
	else
	return <button onClick={() => deleteListing(curBuilding.id)}>Click to Delete</button>
				
			
			
		}
	}
export default RemoveBuilding;