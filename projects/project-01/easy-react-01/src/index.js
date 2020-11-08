
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, { subscribe } from "./redux/state";
import { createPost ,updateNewPostText , deletePost } from "./redux/state";




let rerenderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App updateNewPostText={updateNewPostText} deletePost={deletePost} createPost={createPost} state={state} />
		</React.StrictMode>,
		document.getElementById("root")
	);
};

rerenderApp(state);
subscribe(rerenderApp);

















serviceWorker.unregister();
