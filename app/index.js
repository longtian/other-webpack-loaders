/**
 * Created by wyvern on 16/3/1.
 */
console.clear();

import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';
import 'style!css!./style.css';

var element = document.createElement('div');
document.body.appendChild(element);

let componentNames = require('val!../scripts/entries');

let Pre = props=> {
	let {
		name,
		code,
		result,
		input
		} = props.route;

	return <div>
		<h2>{name}-loader</h2>

		Input：
		<pre>
			<code>{input}</code>
		</pre>
		Loader：

		<pre>
			<code>{code}</code>
		</pre>

		Output：
		<pre>
			<code>{JSON.stringify(result, null, 2)}</code>
		</pre>

	</div>
}


let Main = props=><div>
	<nav>
		{componentNames.map(name=> {
			return <Link key={name} to={'/'+name} activeClassName="active">{name}</Link>
		})}
	</nav>
	{props.children}
</div>

let routes = componentNames.map(name=> {
	return <Router
		key={name}
		name={name}
		path={'/'+name}
		input={require('raw!./loaders/'+name+'/input')}
		code={require('raw!./loaders/'+name+'/index.js')}
		result={require('./loaders/'+name+'/index.js')}
		component={Pre}></Router>
});

render(<Router history={hashHistory}>
	<Route component={Main}>
		<Route>
			{routes.concat(
				<Route key="main" path="/" component={prop=><h1>Click one loader</h1>}></Route>
			)}
		</Route>
	</Route>
</Router>, element);

