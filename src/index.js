import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDom.render(
	<SpeechProvider appId="7a762865-4b40-4db0-8570-ea9f0bc47a39" language="en-US">
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,

	document.getElementById("root")
);
