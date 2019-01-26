import * as React from 'react';
import { connect } from 'react-redux';

function ModelDetails(props) {
	return (
		<div>
			{props.items.addItem.map(el => {
				return (
					<ul key={el.id}>
						<li>Name: {el.key}</li>
						<li>Manufacturer: {el.manufacturer}</li>
						<li>Year: {el.year}</li>
						<li>Origin: {el.origin}</li>
					</ul>
				);
			})}
		</div>
	);
}

const mapStateToProps = state => ({
	items: state,
});

export default connect(mapStateToProps)(ModelDetails);
