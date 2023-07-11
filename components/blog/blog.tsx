"use client";
import { posts } from "@/data/posts";
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
  DarkMode,
} from "@chakra-ui/react";
import { Footer } from "../footer/footer";

export const Blog = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      minH={{ base: "100vh", md: "100vh" }}
      bgGradient={{
        base: mode(
          "linear(to-r, brand.600 50%, brand.600 50%)",
          "linear(to-r, brand.600 50%, gray.900 50%)"
        ),
      }}
    >
      <Box
        flex="1"
        mx="auto"
        maxW="8xl"
        width="full"
        px={{ base: "4", md: "8" }}
        pt={36}
      >
        <DarkMode>
          <Stack spacing={{ base: "12", md: "16" }}>
            <Stack direction="row" justify="space-between">
              <Stack
                spacing={{ base: "4", md: "5" }}
                mx={"auto"}
                textAlign={"center"}
              >
                <Stack spacing="3" color={"whiteAlpha.800"}>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Our Blog
                  </Text>
                  <Heading size={{ base: "sm", md: "md" }}>
                    Latest blog posts
                  </Heading>
                </Stack>
                <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }}>
                  Ice cream pudding dragée macaroon donut marzipan chocolate
                </Text>
              </Stack>
            </Stack>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              gap={{ base: "12", lg: "8" }}
            >
              {posts.map((post) => (
                <Link
                  key={post.id}
                  _hover={{ textDecor: "none" }}
                  role="group"
                  colorScheme={"whiteAlpha"}
                  py={{ base: 2, md: 8 }}
                >
                  <Stack spacing="8">
                    <Box overflow="hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width="full"
                        height="15rem"
                        objectFit="cover"
                        transition="all 0.2s"
                        _groupHover={{ transform: "scale(1.05)" }}
                      />
                    </Box>
                    <Stack spacing="3">
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.600"
                      >
                        {post.category}
                      </Text>
                      <Heading size="xs" color={"whiteAlpha.900"}>
                        {post.title}
                      </Heading>
                      <Text color="whiteAlpha.700">{post.excerpt}</Text>
                    </Stack>
                    <HStack>
                      <Avatar src={post.author.avatarUrl} boxSize="10" />
                      <Box fontSize="sm">
                        <Text fontWeight="bold" color={"fg.muted"}>
                          {post.author.name}
                        </Text>
                        <Text color="whiteAlpha.600">{post.publishedAt}</Text>
                      </Box>
                    </HStack>
                  </Stack>
                </Link>
              ))}
            </SimpleGrid>
          </Stack>
        </DarkMode>
      </Box>
    </Box>
  );
};
