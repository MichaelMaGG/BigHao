require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let yeomanImage = require('../images/yeoman.png');

// use self function to get pics info which instead of URL info
var imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i<j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;
})(imageDatas);

const user = {
		firstName:'mike',
		lastName:'kobe'
	};

function formatName(p) {
	
	return p.firstName + ' ' + p.lastName; 
};

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="search">
        	Hello, {formatName(user)}
        </div>
        <div className="list">

        </div>
      </div>
    );
  }
};

AppComponent.defaultProps = {
	"name": "react!"
};

export default AppComponent;
