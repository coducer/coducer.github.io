"use client";
import {
  Box,
  ButtonGroup,
  Container,
  DarkMode,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "../landing/logo";

export const Footer = () => (
  <Box bg="bg.accent.default" color="fg.accent.default">
    <Box
      flex="1"
      mx="auto"
      maxW="8xl"
      width="full"
      px={{ base: "4", md: "8" }}
      py={{ base: "8", md: "8" }}
    >

      <Stack spacing={{ base: "4", md: "5" }} mt={'10'}>
        <Stack justify="space-between" direction="row" align="center">
          <Logo height={55} />
          <ButtonGroup variant="tertiary.accent">
            <IconButton
              as="a"
              href="https://www.linkedin.com/company/coducer-technologies/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="https://github.com/coducer"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/coducer"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.accent.muted">
          &copy; {new Date().getFullYear()} Coducer Technologies Private
          Limited. All rights reserved.
        </Text>
      </Stack>
    </Box>
  </Box>
);
