'use client';
import {
	AspectRatio,
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Skeleton,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Work = () => {
	return (
		<Flex
			as="section"
			backgroundColor={'brand.600'}
			color={'white'}
			minH={{ base: '100vh', md: '100vh' }}
			id="work"
		>
			<Container py={{ base: '12' }} alignSelf={'center'} colorScheme="black" mb={'0'}>
				<Flex flexDir={'column'}>
					<Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center" marginY={12}>
						<Stack spacing="3">
							<Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="white">
								Work
							</Text>
							<Heading size={{ base: 'sm', md: 'md' }} fontWeight={'medium'}>
								How our customers think about us
							</Heading>
						</Stack>
					</Stack>
				</Flex>

				<Swiper
					// install Swiper modules
					modules={[ Navigation, Pagination, Scrollbar, A11y ]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>
						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
							<Flex flex="1" overflow="hidden">
								<Image
									src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									minW="300px"
									objectFit="cover"
									flex="1"
								/>
								<Image
									display={{ base: 'none', sm: 'initial' }}
									src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									objectFit="cover"
								/>
							</Flex>

							<Box
								width={{ lg: 'sm' }}
								transform={{ base: 'translateY(-50%)', lg: 'none' }}
								bg={{
									base: useColorModeValue('red.50', 'gray.700'),
									lg: 'transparent'
								}}
								mx={{ base: '6', md: '8', lg: '0' }}
								px={{ base: '6', md: '8', lg: '0' }}
								py={{ base: '6', md: '8', lg: '12' }}
							>
								<Stack spacing={{ base: '8', lg: '10' }}>
									<Stack spacing={{ base: '2', lg: '4' }}>
										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
											Misguided
										</Heading>
										<Heading size="xl" fontWeight="normal">
											Refresh your wardrobe
										</Heading>
									</Stack>

									<HStack spacing="3">
										{/* <Link
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="semibold"
              fontSize="lg"
            >
              Discover now
            </Link> */}
										{/* <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            /> */}
									</HStack>
								</Stack>
							</Box>
						</Stack>
					</SwiperSlide>

					<SwiperSlide>
						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
							<Flex flex="1" overflow="hidden">
								<Image
									src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									minW="300px"
									objectFit="cover"
									flex="1"
								/>
								<Image
									display={{ base: 'none', sm: 'initial' }}
									src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									objectFit="cover"
								/>
							</Flex>

							<Box
								width={{ lg: 'sm' }}
								transform={{ base: 'translateY(-50%)', lg: 'none' }}
								bg={{
									base: useColorModeValue('red.50', 'gray.700'),
									lg: 'transparent'
								}}
								mx={{ base: '6', md: '8', lg: '0' }}
								px={{ base: '6', md: '8', lg: '0' }}
								py={{ base: '6', md: '8', lg: '12' }}
							>
								<Stack spacing={{ base: '8', lg: '10' }}>
									<Stack spacing={{ base: '2', lg: '4' }}>
										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
											Misguided
										</Heading>
										<Heading size="xl" fontWeight="normal">
											Refresh your wardrobe
										</Heading>
									</Stack>

									<HStack spacing="3">
										{/* <Link
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="semibold"
              fontSize="lg"
            >
              Discover now
            </Link> */}
										{/* <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            /> */}
									</HStack>
								</Stack>
							</Box>
						</Stack>
					</SwiperSlide>
					<SwiperSlide>
						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
							<Flex flex="1" overflow="hidden">
								<Image
									src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									minW="300px"
									objectFit="cover"
									flex="1"
								/>
								<Image
									display={{ base: 'none', sm: 'initial' }}
									src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									objectFit="cover"
								/>
							</Flex>

							<Box
								width={{ lg: 'sm' }}
								transform={{ base: 'translateY(-50%)', lg: 'none' }}
								bg={{
									base: useColorModeValue('red.50', 'gray.700'),
									lg: 'transparent'
								}}
								mx={{ base: '6', md: '8', lg: '0' }}
								px={{ base: '6', md: '8', lg: '0' }}
								py={{ base: '6', md: '8', lg: '12' }}
							>
								<Stack spacing={{ base: '8', lg: '10' }}>
									<Stack spacing={{ base: '2', lg: '4' }}>
										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
											Misguided
										</Heading>
										<Heading size="xl" fontWeight="normal">
											Refresh your wardrobe
										</Heading>
									</Stack>

									<HStack spacing="3">
										{/* <Link
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="semibold"
              fontSize="lg"
            >
              Discover now
            </Link> */}
										{/* <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            /> */}
									</HStack>
								</Stack>
							</Box>
						</Stack>
					</SwiperSlide>
					<SwiperSlide>
						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
							<Flex flex="1" overflow="hidden">
								<Image
									src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									minW="300px"
									objectFit="cover"
									flex="1"
								/>
								<Image
									display={{ base: 'none', sm: 'initial' }}
									src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
									alt="Lovely Image"
									fallback={<Skeleton />}
									maxH="450px"
									objectFit="cover"
								/>
							</Flex>

							<Box
								width={{ lg: 'sm' }}
								transform={{ base: 'translateY(-50%)', lg: 'none' }}
								bg={{
									base: useColorModeValue('red.50', 'gray.700'),
									lg: 'transparent'
								}}
								mx={{ base: '6', md: '8', lg: '0' }}
								px={{ base: '6', md: '8', lg: '0' }}
								py={{ base: '6', md: '8', lg: '12' }}
							>
								<Stack spacing={{ base: '8', lg: '10' }}>
									<Stack spacing={{ base: '2', lg: '4' }}>
										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
											Misguided
										</Heading>
										<Heading size="xl" fontWeight="normal">
											Refresh your wardrobe
										</Heading>
									</Stack>

									<HStack spacing="3">
										{/* <Link
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="semibold"
              fontSize="lg"
            >
              Discover now
            </Link> */}
										{/* <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            /> */}
									</HStack>
								</Stack>
							</Box>
						</Stack>
					</SwiperSlide>
				</Swiper>
				{/* <SimpleGrid as="ul" columns={{ base: 1, lg: 3 }} columnGap="8" rowGap="4" pb="2">
					{[
						{
							src:
								'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80',
							alt: 'Lovely Image',
							href: '/'
						}
						// {
						//   src: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80",
						//   alt: "Lovely Image",
						//   href: "/",
						// },
						// {
						//   src: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80",
						//   alt: "Lovely Image",
						//   href: "/",
						// },
					].map((item, index) => (
						<Link href={item.href} key={index}>
							<motion.div
								className="box"
								whileHover={{ scale: 1.1 }}
								transition={{
									type: 'spring',
									stiffness: 500,
									damping: 20
								}}
							>
								<AspectRatio ratio={3 / 4} width="100%" maxW={{ lg: 'md' }}>
									<Image src={item.src} alt={item.href} fallback={<Text>Loading...</Text>} />
								</AspectRatio>
							</motion.div>
						</Link>
					))}

					<Box>
						<Stack>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ad animi modi cupiditate
								voluptatum corrupti labore itaque tempora voluptatibus consequatur molestias ducimus,
								possimus libero fuga impedit veniam! Quam, quidem delectus. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Fugit itaque architecto explicabo ad, nostrum illo sint
								dolores eum eaque minus aliquid odio harum, adipisci perferendis delectus, et pariatur
								doloribus maxime.
							</p>
						</Stack>
					</Box>
				</SimpleGrid> */}
			</Container>
		</Flex>
	);
};

