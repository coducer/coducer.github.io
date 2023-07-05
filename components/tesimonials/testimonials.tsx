"use client";
import { Avatar, Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const Testimonials = () => (
  <Box as="section" py={{ base: "16", md: "16" }}>
    <Container>
      <Stack
        spacing={{ base: "4", md: "5" }}
        align="center"
        textAlign="center"
        marginY={12}
      >
        <Stack spacing="3">
          <Heading color={"accent"} size={{ base: "sm", md: "md" }}>
            Our recent works!
          </Heading>
        </Stack>
      </Stack>

      <Stack spacing="8" align="center" textAlign="center">
        {/* <Logo /> */}
        <Text textStyle={{ base: "3xl", md: "2xl" }} fontWeight="medium" marginX={24}>
          As a senior UI designer at Logoipsum Inc, I have had the pleasure of
          using Chakra UI for several of our projects. I have to say, it has
          been an absolute game-changer for our team.
        </Text>
        <Stack spacing="4" align="center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="lg"
            name="Sarah Johnson"
          />
          <Stack spacing="1">
            <Text fontWeight="semibold" textStyle="lg">
              Sarah Johnson
            </Text>
            <Text color="fg.muted">Senior UI Designer, Logoipsum</Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
