import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {
  types,
  transitions,
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const progress = new ProgressBar({
  size: 4,
  color: "#3B82F6",
  className: "z-50",
  delay: 500,
});

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
  type: types.ERROR,
};

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
      </AlertProvider>
    </Provider>
  );
}

export default MyApp;
