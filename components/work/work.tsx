"use client";
import {
  AspectRatio,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Testimonials } from "../tesimonials/testimonials";
import { motion } from "framer-motion";
import Link from "next/link";

const Work = () => {
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
            marginY={12}
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
                How our customers think about us
              </Heading>
            </Stack>
          </Stack>
        </Flex>
        <SimpleGrid
          as="ul"
          columns={{ base: 1, lg: 3 }}
          columnGap="8"
          rowGap="4"
          pb="2"
        >
          {[
            {
              src: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80",
              alt: "Lovely Image",
              href: "/",
            },
            {
              src: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80",
              alt: "Lovely Image",
              href: "/",
            },
            {
              src: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80",
              alt: "Lovely Image",
              href: "/",
            },
          ].map((item, index) => (
            <Link href={item.href} key={index}>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
              >
                <AspectRatio ratio={3 / 4} width="100%" maxW={{ lg: "md" }}>
                  <Image
                    src={item.src}
                    alt={item.href}
                    fallback={<Text>Loading...</Text>}
                  />
                </AspectRatio>
              </motion.div>
            </Link>
          ))}
        </SimpleGrid>
        <Testimonials />
      </Container>
    </Flex>
  );
};

export default Work;
