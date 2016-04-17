var React = require('react');
var ReactDOM = require('react-dom');
var DOMify = require('react-domify');

var data = {
	str: 'It formats strings, numbers, booleans and dates',
	bool: true,
	date: new Date(),
	num: 42,
	arr: [
		'And nested arrays / objects',
		{
			key: 'value',
		},
	],
};

var App = React.createClass({
	render: function () {
		return (
			<div>
				<DOMify value={data} />
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
