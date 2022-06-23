import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
import "../dist/output.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl="https://rdo7ldmm1eyt.usemoralis.com:2053/server" appId="EOdNWIYQ45brTeYFtHt34KG7ybtW7T5vembvuur8">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
