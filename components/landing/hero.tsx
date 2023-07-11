"use client";
import {
  Box,
  Button,
  ButtonGroup,
  DarkMode,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as Logos from "./brands";
import { Logo } from "./logo";

export const Hero = () => {
  return (
    <Flex
      minH={{ base: "100vh", md: "100vh" }}
      bgGradient={{
        base: mode(
          "linear(to-r, brand.600 50%, brand.600 50%)",
          "linear(to-r, brand.600 50%, gray.900 50%)"
        ),
      }}
    >
      <Box position={"fixed"} bgColor={"brand.600"} zIndex={1} w={"100vw"}>
        <Box
          flex="1"
          mx="auto"
          maxW="8xl"
          width="full"
          px={{ base: "4", md: "8" }}
        >
          <Flex
            justifyContent={"start"}
            alignItems={"center"}
            py={{ base: 4, md: 0 }}
          >
            <Flex alignItems={"center"}>
              <Link href={"/"}>
                <Logo height={55} />
              </Link>
            </Flex>

            <Flex
              align="center"
              h="24"
              justifyContent={"end"}
              flex="1"
            >
              <HStack spacing="8">
                <ButtonGroup
                  size="lg"
                  variant="text"
                  colorScheme="gray"
                  spacing="8"
                  display={{ base: "none", md: "flex" }}
                >
                  {[
                    { name: "Why us?", href: "#why_us" },
                    { name: "Our Work", href: "#work" },
                    { name: "Testimonials", href: "#testimonials" },
                    { name: "Pricing", href: "#pricing" },
                    { name: "Team", href: "#team" },
                    { name: "FAQ", href: "#faq" },
                    { name: "Blogs", href: "/blog" },
                  ].map((item) => (
                    <Link href={item.href} key={item.name}>
                      <Button color={"whiteAlpha.800"}>{item.name}</Button>
                    </Link>
                  ))}
                </ButtonGroup>
                <Button colorScheme="yellow" backgroundColor={"yellow.600"}>
                  {"Let's Talk"}
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Flex
        maxW="8xl"
        mx="auto"
        width="full"
        alignItems={"center"}
        flexDirection={"column"}
        flex={1}
      >
        <Flex flex={1} py={24}>
          <Box flex={1}>
            <DarkMode>
              <Flex
                direction="column"
                px={{ base: "4", md: "8" }}
                height={{ base: "auto", md: "full" }}
                my={"auto"}
                color="fg.accent.default"
              >
                <Flex
                  flex="1"
                  align="center"
                  paddingY={{ base: 24, md: 0 }}
                  h={"100vh"}
                >
                  <Stack spacing="6">
                    <Heading
                      size={{ base: "sm", md: "md", xl: "lg" }}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      <Text
                        size={{ base: "md", md: "md", xl: "md" }}
                        color={"yellow.600"}
                      >
                        Make your
                      </Text>
                      Proposal to Operational!
                    </Heading>
                    <Text
                      textStyle="lg"
                      maxW="xl"
                      fontWeight="medium"
                      textAlign={{ base: "center", md: "start" }}
                    >
                      {/*  - fully functional solutions with
                    cutting-edge technologies delivered in just 100 days */}
                      We design and build apps and websites 10x faster than
                      traditional development. Unleash the full potential of
                      your business with our 100 Days of MVP program.
                    </Text>
                  </Stack>
                </Flex>
              </Flex>
            </DarkMode>
          </Box>
          <Box flex={1} display={{ base: "none", md: "block" }}>
            <DarkMode>
              <Flex
                direction="column"
                px={{ base: "4", md: "8" }}
                height="full"
              >
                <Flex
                  direction="column"
                  px={{ base: "4", md: "8" }}
                  height={"full"}
                >
                  <Flex
                    flex={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box>
                      <Image
                        width={500}
                        height={250}
                        src="/assets/bg_startup.png"
                        alt="bg_image"
                      />
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </DarkMode>
          </Box>
        </Flex>
        <Flex display={{ base: "none", md: "block" }}>
          <Box as="section" p={{ base: 0, md: "8" }}>
            <Text
              fontWeight="bold"
              fontSize="sm"
              textAlign="start"
              textTransform="uppercase"
              letterSpacing="wide"
              color={mode("gray.600", "gray.400")}
            >
              Somes Startups trust us
            </Text>
            <Box
              maxW={{ base: "sm", md: "7xl" }}
              mx="auto"
              px={{ base: "0", md: "8" }}
            >
              <SimpleGrid
                mt="8"
                columns={{ base: 2, lg: 6 }}
                color="gray.500"
                alignItems="center"
                justifyItems="center"
                spacing={{ base: "12", lg: "24" }}
                fontSize="2xl"
              >
                <Link href={"/#logo"}>
                  <Logos.ChatMonkey />
                </Link>
                <Link href={"/#logo"}>
                  <Logos.ChatMonkey />
                </Link>
                <Link href={"/#logo"}>
                  <Logos.Lighthouse />
                </Link>
                <Link href={"/#logo"}>
                  <Logos.Lighthouse />
                </Link>
                <Link href={"/#logo"}>
                  <Logos.Wakanda />
                </Link>
                <Link href={"/#logo"}>
                  <Logos.Wakanda />
                </Link>
              </SimpleGrid>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
