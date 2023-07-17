"use client";
import { faqData } from "@/data/faq";
import { Accordion, Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { FAQItem } from "./faq_item";

export const FAQ = () => (
  <Flex
    as="section"
    backgroundColor={"brand.600"}
    color={"white"}
    minH={{ base: "auto", md: "100vh" }}
    id="faq"
  >
    <Container py={{ base: "16", md: "24" }} alignSelf={"center"}>
      <Flex justifyContent={"start"}>
        <Stack
          spacing={{ base: "4", md: "6" }}
          paddingEnd={{ base: 4, md: 16 }}
          display={{ base: "none", md: "block" }}
        >
          <Stack spacing="4">
            <Box fontSize={'2rem'} fontWeight={'700'} textAlign={'left'} mb={'10px'} textColor={'white'} >
              FAQ
            </Box>
          </Stack>
          <Text className="chakra-heading" fontSize={'2xl'} textStyle={{ base: "lg", md: "xl" }} color="whiteAlpha.700">
            Find answers to common queries about our services,<br></br> pricing, and process in our comprehensive FAQ section.
          </Text>
        </Stack>
        <Flex flex={1}>
          <Accordion defaultIndex={0}>
            {faqData.map((listing, id) => (
              <FAQItem key={id} {...listing} />
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </Container>
  </Flex>
);
