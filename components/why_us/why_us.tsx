'use client';
import { whyUsData } from '@/data/why_us';
import {
	Box,
	Container,
	DarkMode,
	Flex,
	Heading,
	Icon,
	SimpleGrid,
	Square,
	Stack,
	Text,
	useColorModeValue as mode
} from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';


export const WhyUs = () => (
	<Box
		backgroundColor={'brand.600'}
		color={'white'}
		id={'why_us'}
		alignItems={'center'}
	>
		<DarkMode>
			<Container p={0}>
				<Flex as="section" minH={{ base: 'auto', md: '100vh' }}>
					<Flex justifyContent={'center'} alignItems={'center'}>
						<Stack spacing={{ base: '8', md: '16' }}>
							<Stack spacing={{ base: '4', md: '4' }} align="center" textAlign="center">
								<Stack spacing="3">
									<Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} mb={'10px'} color={'#F6E05E'} >
										Why us?
									</Box>
									<Text
										textStyle="lg"
										maxW="xxl"
										fontWeight="medium"
										textAlign={{ base: 'center', md: 'center' }}
										color={'white'}
										mb={'14'}
									>Deliver a fully functional MVP in 100 Days with our foolproof checklists and milestones. Our approach revolves around LEAN Methodology, <br></br>while synergizing the strengths of lean and agile methodologies as an MVP-Centred company, ensuring optimal results.</Text>
								</Stack>
							</Stack>

							<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap={4} rowGap={{ base: 10, md: 16 }}>
								{whyUsData.map((feature) => (
									<Stack
										key={feature.name}
										spacing={{ base: '4', md: '5' }}
										align="center"
										textAlign="center"
									>
										<Square
											size={{ base: '10', md: '12' }}
											bg="whiteAlpha.900"
											color="brand.600"
											borderRadius="lg"
										>
											<Icon as={feature.icon} boxSize={{ base: '5', md: '6' }} />
										</Square>
										<Stack spacing={{ base: '1', md: '2' }}>
											<Text
												fontSize={{ base: 'lg', md: 'xl' }}
												fontWeight="medium"
												color={'white'}
											>
												{feature.name}
											</Text>
											<Text color="whiteAlpha.700">{feature.description}</Text>
										</Stack>
									</Stack>
								))}
							</SimpleGrid>
						</Stack>
					</Flex>
				</Flex>
			</Container>
		</DarkMode>
	</Box>
);
