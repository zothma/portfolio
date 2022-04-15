const addViewBox = require('svgo-add-viewbox');

// svgo.config.js
module.exports = {
    plugins: [
      'preset-default',
      'prefixIds',
      {
        fn: addViewBox.fn,
		name: 'addViewBox',
		type: addViewBox.type,
		active: addViewBox.active,
		description: addViewBox.description
      },
    ],
  };