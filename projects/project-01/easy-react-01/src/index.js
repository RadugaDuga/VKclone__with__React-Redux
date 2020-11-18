import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderApp = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<Provider store={store}>
					<App  />
				</Provider>
			</React.StrictMode>
		</BrowserRouter>,
		document.getElementById("root")
	);
};

rerenderApp(store.getState());

store.subscribe(rerenderApp);

serviceWorker.unregister();
