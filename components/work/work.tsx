// 'use client';
// import {
// 	AspectRatio,
// 	Box,
// 	Container,
// 	Flex,
// 	HStack,
// 	Heading,
// 	SimpleGrid,
// 	Skeleton,
// 	Stack,
// 	Text,
// 	useColorModeValue
// } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaArrowRight } from 'react-icons/fa';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Image from 'next/image';
// import Alarabia from '../../public/assets/AA.png';
// import Giveindia from '../../public/assets/GI.png';
// import Ihx from "../../public/assets/Ihx.png"
// import Impactree from "../../public/assets/Impact.png"



// export const Work = () => {
// 	return (
// 		<Flex
// 			as="section"
// 			backgroundColor={'brand.600'}
// 			color={'white'}
// 			minH={{ base: '100vh', md: '100vh' }}
// 			id="work"
// 		>
// 			<Container py={{ base: '12' }} alignSelf={'center'} colorScheme="black" mb={'20'}>
// 				<Flex flexDir={'column'}>
// 					<Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center" marginY={12}>
// 						<Stack spacing="3">
// 							<Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="white">
// 								Work
// 							</Text>
// 							<Heading size={{ base: 'sm', md: 'md' }} fontWeight={'medium'}>
// 								How our customers think about us
// 							</Heading>
// 						</Stack>
// 					</Stack>
// 				</Flex>

// 				<Swiper
// 					modules={[ Navigation, Pagination, Scrollbar, A11y ]}
// 					spaceBetween={50}
// 					slidesPerView={1}
// 					navigation
// 					pagination={{ clickable: true }}
// 					onSwiper={(swiper) => console.log(swiper)}
// 					onSlideChange={() => console.log('slide change')}
// 				>
// 					<SwiperSlide>
// 						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
// 							<Flex flex="1" overflow="hidden">
// 								<Image src={Alarabia} alt="Lovely Image" />
// 							</Flex>

// 							<Box
// 								width={{ lg: 'sm' }}
// 								transform={{ base: 'translateY(-50%)', lg: 'none' }}
// 								bg={{
// 									base: useColorModeValue('red.50', 'gray.700'),
// 									lg: 'transparent'
// 								}}
// 								mx={{ base: '6', md: '8', lg: '0' }}
// 								px={{ base: '6', md: '8', lg: '0' }}
// 								py={{ base: '6', md: '8', lg: '12' }}
// 							>
// 								<Stack spacing={{ base: '8', lg: '10' }}>
// 									<Stack spacing={{ base: '2', lg: '4' }}>
// 										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
// 											Misguided
// 										</Heading>
// 										<Heading size="xl" fontWeight="normal">
// 											Refresh your wardrobe
// 										</Heading>
// 									</Stack>
// 									<HStack spacing="3" />
// 								</Stack>
// 							</Box>
// 						</Stack>
// 					</SwiperSlide>

// 					<SwiperSlide>
// 						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
// 							<Flex flex="1" overflow="hidden">
// 								<Image src={Giveindia} alt="Giveindia" />
// 							</Flex>

// 							<Box
// 								width={{ lg: 'sm' }}
// 								transform={{ base: 'translateY(-50%)', lg: 'none' }}
// 								bg={{
// 									base: useColorModeValue('red.50', 'gray.700'),
// 									lg: 'transparent'
// 								}}
// 								mx={{ base: '6', md: '8', lg: '0' }}
// 								px={{ base: '6', md: '8', lg: '0' }}
// 								py={{ base: '6', md: '8', lg: '12' }}
// 							>
// 								<Stack spacing={{ base: '8', lg: '10' }}>
// 									<Stack spacing={{ base: '2', lg: '4' }}>
// 										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
// 											Misguided
// 										</Heading>
// 										<Heading size="xl" fontWeight="normal">
// 											Refresh your wardrobe
// 										</Heading>
// 									</Stack>

// 									<HStack spacing="3" />
// 								</Stack>
// 							</Box>
// 						</Stack>
// 					</SwiperSlide>

// 					<SwiperSlide>
// 						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
// 						<Flex flex="1" overflow="hidden">
// 								<Image src={Ihx} alt="Ihx" />
// 							</Flex>

// 							<Box
// 								width={{ lg: 'sm' }}
// 								transform={{ base: 'translateY(-50%)', lg: 'none' }}
// 								bg={{
// 									base: useColorModeValue('red.50', 'gray.700'),
// 									lg: 'transparent'
// 								}}
// 								mx={{ base: '6', md: '8', lg: '0' }}
// 								px={{ base: '6', md: '8', lg: '0' }}
// 								py={{ base: '6', md: '8', lg: '12' }}
// 							>
// 								<Stack spacing={{ base: '8', lg: '10' }}>
// 									<Stack spacing={{ base: '2', lg: '4' }}>
// 										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
// 											Misguided
// 										</Heading>
// 										<Heading size="xl" fontWeight="normal">
// 											Refresh your wardrobe
// 										</Heading>
// 									</Stack>

// 									<HStack spacing="3" />
// 								</Stack>
// 							</Box>
// 						</Stack>
// 					</SwiperSlide>

// 					<SwiperSlide>
// 						<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
// 						<Flex flex="1" overflow="hidden">
// 								<Image src={Impactree} alt="Impactree" />
// 							</Flex>

// 							<Box
// 								width={{ lg: 'sm' }}
// 								transform={{ base: 'translateY(-50%)', lg: 'none' }}
// 								bg={{
// 									base: useColorModeValue('red.50', 'gray.700'),
// 									lg: 'transparent'
// 								}}
// 								mx={{ base: '6', md: '8', lg: '0' }}
// 								px={{ base: '6', md: '8', lg: '0' }}
// 								py={{ base: '6', md: '8', lg: '12' }}
// 							>
// 								<Stack spacing={{ base: '8', lg: '10' }}>
// 									<Stack spacing={{ base: '2', lg: '4' }}>
// 										<Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
// 											Misguided
// 										</Heading>
// 										<Heading size="xl" fontWeight="normal">
// 											Refresh your wardrobe
// 										</Heading>
// 									</Stack>

// 									<HStack spacing="3" />
// 								</Stack>
// 							</Box>
// 						</Stack>
// 					</SwiperSlide>
// 				</Swiper>
// 			</Container>
// 		</Flex>
// 	);
// };

"use client";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Alarabia from "../../public/assets/AA.jpeg"
import Give from "../../public/assets/GI.png"
import Ihx from "../../public/assets/Ihx.jpeg"
import Impactree from "../../public/assets/Impact.png"
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
      backgroundColor={"brand.600"}
      color={"white"}
      minH={{ base: "auto", md: "100vh" }}
      id="work"
    >
      <Container py={{ base: "16" }} alignSelf={"center"} colorScheme="black">
        <Flex flexDir={"column"}>
          <Stack
            spacing={{ base: "4", md: "5" }}
            align="center"
            textAlign="center"
            marginY={8}
          >
            <Stack spacing="3">
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="semibold"
                color="white"
              >
                Work
              </Text>
              <Heading size={{ base: "sm", md: "md" }} fontWeight={"medium"}>
                Some of our best launches
              </Heading>
            </Stack>
          </Stack>
        </Flex>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
            <SwiperSlide>
              <motion.div
                className="box"
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "just"
                }}
              >
                <Flex justifyContent={'center'} alignItems={'center'}>
                  <Image
                    src={Alarabia}
                    alt={'Alarabia'}
                  />
                </Flex>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="box"
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "just"
                }}
              >
                <Image
                  src={Give}
                  alt={'give india'}
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <Flex justifyContent={'center'} alignItems={'center'}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    type: "just"
                  }}
                >
                  <Image
                    src={Ihx}
                    alt={'Ihx'}
                  />
                </motion.div>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="box"
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "just"
                }}
              >
                <Image
                  src={Impactree}
                  alt={'Impactree'}
                />
              </motion.div>
            </SwiperSlide>
          </Stack>
        </Swiper>
      </Container>
    </Flex>
  );
};

