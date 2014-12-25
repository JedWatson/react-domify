var React = require('react'),
	DOMify = require('react-domify');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<DOMify />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
