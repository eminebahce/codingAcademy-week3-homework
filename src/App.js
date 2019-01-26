import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addItem} from '../src/actions/addItem'

class App extends Component {

  state = {
     data :
      {
        "Ivel Z3": {
          id: 1,
          manufacturer: "Ivasim",
          year: 1969,
          origin: "Croatia"
        },
        "Bally Astrocade": {
          id: 2,
          manufacturer: "Bally Consumer Products",
          year: 1977,
          origin: "USA"
        },
        "Sord M200 Smart Home Computer": {
          id: 3,
          manufacturer: "Sord Computer Corporation",
          year: 1971,
          origin: "Japan"
        },
        "Commodore 64": {
          id: 4,
          manufacturer: "Commodore",
          year: 1982,
          origin: "USA"
        }
      },
      selectedItem: ""
    }

    updateSelection = (event) => {
      this.setState({
        selectedItem:event.target.value
      })
      this.props.addItem(event.target.value)
  }

  render() {
    const staticData = this.state.data;
    return (
      <div className="App">
      <h1>Computer Lists</h1>
      <select value={this.state.selectedItem} onChange={this.updateSelection}>
      <option value="default">---pick a model---</option>
      {Object.keys(staticData).map(key => {
        const result = `${key} (${staticData[key].year})`;
        return <option key={staticData[key].id} value={result}>{result}</option>
      })}
      </select>
      <button type="submit">ADD</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
  selectedItem:state.selectedItem
})

export default connect(mapStateToProps, {addItem})(App);
