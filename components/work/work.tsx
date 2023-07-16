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
import Alarabia from "../../public/assets/AA.png"
import Give from "../../public/assets/GI.png"
import Ihx from "../../public/assets/Ihx.png"
import Impactree from "../../public/assets/Impact.png"
import { FaArrowRight } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
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
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >

          <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
            <SwiperSlide>
              <motion.div
                className="box"
                // whileHover={{ scale: 0.9 }}
                transition={{
                  type: "just"

                }}
              >
                <Flex justifyContent={'center'} alignItems={'center'}>
                  <a href="/blog"><Image
                    src={Alarabia}
                    alt={'Alarabia'}
                  /></a>

                </Flex>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="box"
                // whileHover={{ scale: 0.9 }}
                transition={{
                  type: "just"
                }}
              >
                <a href="/blog"><Image
                  src={Give}
                  alt={'give india'}
                /></a>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <Flex justifyContent={'center'} alignItems={'center'}>
                <motion.div
                  className="box"
                  // whileHover={{ scale: 0.9 }}
                  transition={{
                    type: "just"
                  }}
                >
                  <a href="/blog"><Image
                    src={Ihx}
                    alt={'Ihx'}
                  /></a>
                </motion.div>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="box"
                // whileHover={{ scale: 0.9 }}
                transition={{
                  type: "just"
                }}
              >
                <a href="/blog"><Image
                  src={Impactree}
                  alt={'Impactree'}
                /></a>
              </motion.div>
            </SwiperSlide>
          </Stack>
        </Swiper>
      </Container>
    </Flex >
  );
};

