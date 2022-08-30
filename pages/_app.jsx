import "../styles/globals.css";
import Footer from "../components/Footer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/noto-sans";
import "@fontsource/roboto";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<ChakraProvider resetCSS={true} theme={theme}>
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
