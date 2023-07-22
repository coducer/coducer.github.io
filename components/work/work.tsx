"use client";
import {
  Box,
  Container,
  Flex,
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
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { workerData } from "worker_threads";

export const Work = ({ workdata }: any) => {


  const workimages = workdata.data[0].attributes.work_sample.data

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
            <Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} color={'#F6E05E'}>
              A sneak-peek into our work
            </Box>

            <Text
              textStyle="lg"
              maxW="xxl"
              fontWeight="medium"
              textAlign={{ base: 'center', md: 'center' }}
              fontSize={'1xl'} color="whiteAlpha.700" mb={'14'}

            >Here is a quick analysis of our stellar MVP launches in the recent past that have been head-turners in their respective fields</Text>
          </Stack>
        </Flex>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >

          <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>


            {workimages?.map((item: any) => (
              <SwiperSlide key={item?.id}>
                <motion.div
                  className="box"
                  // whileHover={{ scale: 0.9 }}
                  transition={{
                    type: "just"

                  }}
                >
                  <Flex justifyContent={'center'} alignItems={'center'}>
                    <a href="/blog"><img
                      src={"http://157.245.96.35:1337" + item?.attributes?.url}
                    // width={100}
                    // height={100}
                    /></a>

                  </Flex>
                </motion.div>
              </SwiperSlide>
            ))}

          </Stack>
        </Swiper>
      </Container>
    </Flex >
  );
};

