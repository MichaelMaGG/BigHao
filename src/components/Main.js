require('normalize.css/normalize.css');
//require('styles/App.css');
import 'antd/dist/antd.css';

import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { List } from 'antd';

const { Header, Footer, Content } = Layout;
const Search = Input.Search;

class AppComponent extends React.Component {
  	render() {
    return (
    	<div>
      		<Layout>
      		<Header>Header</Header>
      		<Content>
      			<div>
      				<Func />
      			</div>
      			<div>
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
		<div>
			<Button type="primary" size="large" onClick={addInfo}>Primary</Button>
		</div>
	);
}

function addInfo() {
	console.log('add addInfo');
}

function SearchInfo() {
	return (
		<div>
			<Search placeholder="input search text"
      				enterButton="Search"
				    size="large"
				    style={{ width: 600 }}
				    onSearch={getInfo} />
		</div>
	);
}

function getInfo() {
	console.log("search something");
}

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

function ShowInfo() {
	return (
		<div>
		    <List
		      size="large"
		      header={<div>Header</div>}
		      footer={<div>Footer</div>}
		      bordered
		      dataSource={data}
		      renderItem={item => (<List.Item>{item}</List.Item>)}
		    />
		</div>
	)
}

export default AppComponent;
