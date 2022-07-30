import { Layout } from "../components/index";
import { MenuProvider } from "../context/MenuContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}

export default MyApp;
