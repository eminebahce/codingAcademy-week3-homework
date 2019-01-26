import * as React from 'react';
import { connect } from 'react-redux';

function ModelDetails(props) {
	return (
		<div>
			{props.items.addItem.map(el => {
				return (
					<ul key={el.id}>
						<li>{el.key}</li>
						<li>{el.manufacturer}</li>
						<li>{el.year}</li>
						<li>{el.origin}</li>
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
