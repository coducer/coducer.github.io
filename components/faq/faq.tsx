"use client";
import {
  Accordion,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FAQItem } from "./faq_item";
import { faqData } from "@/data/faq";

export const FAQ = () => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
      <Stack spacing={{ base: "4", md: "6" }}>
        <Stack spacing="4">
          <Text
            fontWeight="semibold"
            color="accent"
            textStyle={{ base: "sm", md: "md" }}
          >
            {"FAQ's"}
          </Text>
          {/* <Heading as="h1" size={{ base: 'md', md: 'lg' }}>
            Most common questions
          </Heading> */}
        </Stack>
        <Text textStyle={{ base: "lg", md: "xl" }} color="fg.muted">
          Some Frequently Asked Questions
        </Text>
      </Stack>
      <Accordion defaultIndex={0}>
        {faqData.map((listing, id) => (
          <FAQItem key={id} {...listing} />
        ))}
      </Accordion>
    </SimpleGrid>
  </Container>
);
