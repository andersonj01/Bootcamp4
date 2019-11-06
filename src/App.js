import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
	this.setState({
		filterText: value
	})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
	this.setState({
		selectedBuilding: id
	})
  }
  
  AddListing(name, code, address) {
	if(name || code || address)
	{		
	  var newListing = {id: this.props.data.length + 1 ,name: name, code: code, address: address}
	  var newList =this.props.data
	  newList.push(newListing)
	  this.setState({
		  data:newList
	  })
	}
  }
  
  deleteListing(id) {
	  var newList = this.props.data
	  console.log(id)
	  var toDelete = this.props.data.findIndex(data => (data.id === id))
	  console.log(toDelete.id)
	  if(toDelete >= 0){
	  newList.splice(toDelete, 1)
	  }
	  this.setState({
		  data:newList
	  })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
		filterText={this.state.filterText}
		filterUpdate={this.filterUpdate.bind(this)}
		/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
				  <div>
                  <BuildingList
                    data={this.props.data}
					filterText={this.state.filterText}
					selectedUpdate={this.selectedUpdate.bind(this)}
                  />
				</div>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
				selectedBuilding={this.state.selectedBuilding}
				data={this.props.data}
				/>
				<RemoveBuilding
				data={this.props.data}
				deleteListing={this.deleteListing.bind(this)}
				selectedBuilding={this.state.selectedBuilding}
				/>
				<AddBuilding
				data={this.props.data}
				AddListing={this.AddListing.bind(this)}
				/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
