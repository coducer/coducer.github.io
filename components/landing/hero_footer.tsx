import { Box, Flex, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import * as Logos from './brands';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Abg from "../../public/assets/size40/ABG.svg"
import Alarabia from "../../public/assets/size40/Al Arabia.svg"
import Ihx from "../../public/assets/size40/IHX.svg"
import Impactree from "../../public/assets/size40/Impactree.svg"
import Jofin from "../../public/assets/size40/Jofin.svg"
import Trew from "../../public/assets/size40/TREW.svg"


const HeroFooter = () => {
	return (
		<Flex display={{ base: 'none', md: 'block' }}>
			<Box as="section" pb={{ base: 0, md: '8' }}>
				<Text
					fontWeight="bold"
					fontSize="sm"
					textAlign="center"
					textTransform="uppercase"
					letterSpacing="wide"
					color={mode('gray.600', 'gray.400')}
				>
					Some Startups trust us
				</Text>
				<Box maxW={{ base: 'sm', md: '7xl' }}>
					{/* <SimpleGrid
						mt="8"
						columns={{ base: 2, lg: 6 }}
						color="gray.500"
						alignItems="center"
						justifyItems="center"
						spacing={{ base: '12', lg: '24' }}
						fontSize="2xl"
					>
						{[
							{ logo: <Image src={Abg} alt="Abg logo" />, href: '/#logo' },
							{ logo: <Image src={Alarabia} alt="Alarabia" />, href: '/#logo' },
							{ logo: <Image src={Ihx} alt="Ihx" />, href: '/#logo' },
							{ logo: <Image src={Impactree} alt="Impactree" />, href: '/#logo' },
							{ logo: <Image src={Jofin} alt="Jofin" color='#CCD1D6' />, href: '/#logo' },
							{ logo: <Image src={Trew} alt="Trew" />, href: '/#logo' },
						].map((item, index) => (
							<Link href={item.href} key={index}>
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									transition={{
										type: 'spring',
										stiffness: 100,
										damping: 40
									}}
								>
									{item.logo}
								</motion.div>
							</Link>
						))}
					</SimpleGrid> */}
					<Box className='scroll-container'>
						<Flex className='scroll-text'>
						<Image src={Abg} alt='abg' />
						<Image src={Alarabia} alt='alarabia' />
						<Image src={Ihx} alt='ihx' />
						<Image src={Impactree} alt='impactree' />
						<Image src={Jofin} alt='jofin' />
						<Image src={Trew} alt='trew' />
						</Flex>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default HeroFooter;
