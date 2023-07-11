"use client";
import {
  Box,
  Button,
  DarkMode,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./header";
import HeroFooter from "./hero_footer";

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
      <Header />
      <Box
        flex="1"
        mx="auto"
        maxW="8xl"
        width="full"
        px={{ base: "4", md: "8" }}
      >
        <Stack direction={"column"} h={"full"}>
          <HStack flex={1} alignItems={"center"} w={"full"}>
            <Flex flex={1}>
              <DarkMode>
                <Flex color="fg.accent.default" direction={"column"} px={12}>
                  <Stack spacing={8}>
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
                      We design and build apps and websites 10x faster than
                      traditional development. Unleash the full potential of
                      your business with our 100 Days of MVP program.
                    </Text>
                    <Flex>
                      <Link href={"/contact"}>
                        <motion.div
                          className="box"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Button
                            colorScheme="yellow"
                            backgroundColor={"yellow.600"}
                            px={12}
                            borderRadius={20}
                          >
                            {"Let's Talk"}
                          </Button>
                        </motion.div>
                      </Link>
                    </Flex>
                  </Stack>
                </Flex>
              </DarkMode>
            </Flex>
            <Flex flex={1}>
              <motion.div
                className="box"
                initial={{ opacity: 0.5, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                <Image
                  width={"full"}
                  p={{ base: 0, md: 16 }}
                  src="/assets/bg_startup.png"
                  alt="bg_image"
                />
              </motion.div>
            </Flex>
          </HStack>
          <HeroFooter />
        </Stack>
      </Box>
    </Flex>
  );
};
