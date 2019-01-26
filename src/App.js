import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ModelDetails from '../src/components/ModelDetails';

class App extends Component {
	state = {
		data: {
			'Ivel Z3': {
				id: 1,
				manufacturer: 'Ivasim',
				year: 1969,
				origin: 'Croatia',
			},
			'Bally Astrocade': {
				id: 2,
				manufacturer: 'Bally Consumer Products',
				year: 1977,
				origin: 'USA',
			},
			'Sord M200 Smart Home Computer': {
				id: 3,
				manufacturer: 'Sord Computer Corporation',
				year: 1971,
				origin: 'Japan',
			},
			'Commodore 64': {
				id: 4,
				manufacturer: 'Commodore',
				year: 1982,
				origin: 'USA',
			},
		},
		selectedItem: '',
	};

	updateSelection = event => {
		this.setState({
			selectedItem: event.target.value,
		});
	};

	handleClick = () => {
		if (this.state.selectedItem !== '' && this.state.selectedItem !== 'default') {
			const items = this.state.data[this.state.selectedItem];
			items['key'] = this.state.selectedItem;
			this.props.dispatch({
				type: 'ADD_ITEM',
				payload: items,
			});
		}
	};

	render() {
		const staticData = this.state.data;
		return (
			<div className="App">
				<ModelDetails />
				<select value={this.state.selectedItem} onChange={this.updateSelection}>
					<option value="default">---pick a model---</option>
					{Object.keys(staticData).map(key => {
						const result = `${key} (${staticData[key].year})`;
						return (
							<option key={staticData[key].id} value={key}>
								{result}
							</option>
						);
					})}
				</select>
				<button type="submit" onClick={this.handleClick}>
					ADD
				</button>
			</div>
		);
	}
}

export default connect()(App);
