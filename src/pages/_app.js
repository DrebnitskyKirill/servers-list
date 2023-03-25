import "@/styles/globals.css";
import { getServers } from "../store/data/actions";
import servers from "../servers";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  store.dispatch(getServers(servers));
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
