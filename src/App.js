import React, { Component } from 'react';
import Main from './components/MainComponent';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore.js';
import firebase from "firebase";

const store = ConfigureStore();

class App extends Component {

	render() {
		const firebaseApp = firebase.apps[0];

		return (
			<Provider store={store}>
				<HashRouter>
				    <div className="App">
					  <code>
				      </code>
				      <Main />
				    </div>
			    </HashRouter>
	    </Provider>
  	);
	}
}

export default App;
