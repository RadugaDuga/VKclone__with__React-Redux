
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import 'reset-css';
import "./index.css";
import App from "./App";
import store from "./redux/state";

let rerenderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				dispatch={store.dispatch.bind(store)}
				state={store.getState()}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

rerenderApp(store.getState());

store.subscribe(rerenderApp);


























serviceWorker.unregister();
