//require('normalize.css/normalize.css');
//require('styles/App.css');
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { List } from 'antd';

const { Footer, Content } = Layout;
const Search = Input.Search;

class AppComponent extends React.Component {
  	render() {
    return (
    	<div>
      		<Layout>
      		<Footer>Welcome to BigHao</Footer>
      		<Content>
      			<div>
      				<Func />
      			</div>
      			<div id='info'>
      				<ShowInfo />
      			</div>
      		</Content>
      		<Footer>Footer</Footer>
    		</Layout>
		</div>
    );
  }
}

let style1 = {
	display: 'inline-block',
	width: '300px'
}

function Func() {
	return (
		<div>
			<div style={ style1 } >
				<AddInfo />
			</div>
			<div style={ style1 } >
				<SearchInfo />
			</div>
		</div>
	);
}

function AddInfo() {
	return (
		<div style={{ textAlign: 'right' }}>
			<Button type="primary" size="large" onClick={addInfo}>添加信息</Button>
		</div>
	);
}

function addInfo() {
	console.log('add addInfo');
}

function SearchInfo() {
	return (
		<div>
			<Search placeholder="请输入"
      				enterButton="查找"
				    size="large"
				    style={{ width: 600 }}
				    onSearch={getInfo} />
		</div>
	);
}

var data = [];

function getInfo() {
	axios.get('http://localhost:8080/user')
		.then(function (response) {
	    	console.log(response.data);
	    	data = response.data;
	    	ReactDOM.render(ShowInfo, document.getElementById('info'))
		})
		.catch(function (error) {
	    	console.log(error);
	  	});
}



function ShowInfo() {
	return (
		<div>
		    <List
		      size="large"
		      header={<div>Header</div>}
		      footer={<div>Footer</div>}
		      bordered
		      dataSource={data}
		      renderItem={item => (<List.Item>{item.name}</List.Item>)}
		    />
		</div>
	)
}

export default AppComponent;
