"use client";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Testimonials = () => (
  <Flex flexDir={"column"} py={8}>
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
          Testimonials
        </Text>
        <Heading size={{ base: "sm", md: "md" }} fontWeight={"medium"}>
          How our customers think about us
        </Heading>
      </Stack>
    </Stack>

    <Stack spacing="8" align="center" textAlign="center">
      {/* <Logo /> */}
      <Text
        textStyle={{ base: "lg", md: "3xl" }}
        fontWeight={{ base: "bold", md: "medium" }}
        color={"whiteAlpha.700"}
        marginX={{ base: 0, md: 24 }}
      >
        As a senior UI designer at Logoipsum Inc, I have had the pleasure of
        using Chakra UI for several of our projects. I have to say, it has been
        an absolute game-changer for our team.
      </Text>
      <Stack spacing="4" align="center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="lg"
          name="Sarah Johnson"
        />
        <Stack spacing="1">
          <Text fontWeight="semibold" textStyle="lg" color={"whiteAlpha.600"}>
            Sarah Johnson
          </Text>
          <Text color="whiteAlpha.600">Senior UI Designer, Logoipsum</Text>
        </Stack>
      </Stack>
    </Stack>
  </Flex>
);
