import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/state";

let rerenderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				updateNewPostText={store.updateNewPostText}
				deletePost={store.deletePost}
				createPost={store.createPost}
				state={store.getState()}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

rerenderApp(store.getState());

store.subscribe(rerenderApp);


























serviceWorker.unregister();
