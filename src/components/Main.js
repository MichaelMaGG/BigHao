require('normalize.css/normalize.css');
//require('styles/App.css');
import 'antd/dist/antd.css';

import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { List } from 'antd';

const { Header, Footer, Content } = Layout;

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

function Func() {
	return (
		<div>
			<AddInfo />
			<SearchInfo />
			<SearchButton />
		</div>
	);
}

function AddInfo() {
	return (
		<div>
			<Button type="primary">Primary</Button>
		</div>
	);
}


function SearchInfo() {
	return (
		<div>
			<Input placeholder="Basic usage" />
		</div>
	);
}


function SearchButton() {
	return (
		<div>
			<Button type="primary" icon="search">Search</Button>
		</div>
	);
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
