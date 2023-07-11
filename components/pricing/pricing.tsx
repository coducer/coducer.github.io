"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { features } from "./pricing_data";
import { PricingCard } from "./pricing_card";
import { PricingFeature } from "./pricing_feature";

export const Pricing = () => (
  <Flex
    as="section"
    bg={"bg.accent.default"}
    id={"pricing"}
    minH={{ base: "auto", md: "100vh" }}
  >
    <Container  alignSelf={"center"}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "6" }}>
          <Stack spacing="3">
            <Text color="white" fontWeight="semibold">
              Pricing
            </Text>
            <Heading size={{ base: "md", md: "lg" }} color={"white"}>
              Get lifetime access
            </Heading>
          </Stack>
          <Text fontSize={{ base: "lg", md: "xl" }} color="white" maxW="3xl">
            {/* Get access to 210+ components and free updates. Customize it to your */}
            {/* needs, and make it yours today! */}
            We are on our private beta. we respect our early adoptors by giving
            better price
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "12", lg: "24" }}
        >
          <Stack spacing={{ base: "10", md: "12" }} flex="1" justify="center">
            {features.map((feature, id) => (
              <PricingFeature key={id} feature={feature} />
            ))}
          </Stack>
          <PricingCard flex="1" />
        </Stack>
      </Stack>
    </Container>
  </Flex>
);
