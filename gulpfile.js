var gulp = require('gulp'),
    initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'DOMify'
	},

	example: {
		src: 'examples/src',
		dist: 'examples/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'app.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
