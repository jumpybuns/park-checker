import { Box, Text, Button, Heading, VStack, Image } from "@chakra-ui/react";
import DisneyButtonFilled from "../styles/custom/DisneyButtonFilled";
import DisneyButtonOutline from "../styles/custom/DisneyButtonOutline";
import Hero from "../components/Hero.jsx";
import Blob from "../components/Blob";
import { useRouter } from "next/router";

const Home = () => {
	const router = useRouter();

	const handleHome = () => {
		router.push("/main");
	};

	return (
		<Box
			className="container"
			p={8}
			h="100vh"
			display="flex"
			flexDir="column"
			alignItems="center"
			color="whiteAlpha.900"
			bgGradient="linear(gray.900 0%, blue.900 20%)"
		>
			<Heading
				pos="absolute"
				top={2}
				left={2}
				mx={4}
				color="whiteAlpha.900"
				_hover={{ cursor: "pointer" }}
			>
				PC
			</Heading>
			<Blob />
			<Hero />
			<VStack
				spacing={4}
				display="flex"
				alignItems="center"
				justifyContent="center"
				alignContent="center"
				textAlign="center"
				zIndex={2}
			>
				<Box textStyle="h1" pt={4}>
					California Theme Park Parking Checker
				</Box>
				<Text>Click here to continue to Parking Checker</Text>
				<DisneyButtonFilled onClick={handleHome} text="Home" />
			</VStack>
		</Box>
	);
};

export default Home;
