import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import * as Logos from "./brands";
import { motion } from "framer-motion";

const HeroFooter = () => {
  return (
    <Flex display={{ base: "none", md: "block" }}>
      <Box as="section" pb={{ base: 0, md: "8" }}>
        <Text
          fontWeight="bold"
          fontSize="sm"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="wide"
          color={mode("gray.600", "gray.400")}
        >
          Somes Startups trust us
        </Text>
        <Box maxW={{ base: "sm", md: "7xl" }}>
          <SimpleGrid
            mt="8"
            columns={{ base: 2, lg: 6 }}
            color="gray.500"
            alignItems="center"
            justifyItems="center"
            spacing={{ base: "12", lg: "24" }}
            fontSize="2xl"
          >
            {[
              { logo: <Logos.ChatMonkey />, href: "/#logo" },
              { logo: <Logos.Lighthouse />, href: "/#logo" },
              { logo: <Logos.Wakanda />, href: "/#logo" },
              { logo: <Logos.ChatMonkey />, href: "/#logo" },
              { logo: <Logos.Lighthouse />, href: "/#logo" },
              { logo: <Logos.Wakanda />, href: "/#logo" },
            ].map((item, index) => (
              <Link href={item.href} key={index}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 40,
                  }}
                >
                  {item.logo}
                </motion.div>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroFooter;
