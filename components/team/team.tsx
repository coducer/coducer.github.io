"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  DarkMode,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { membersData } from "./members_data";

export const Team = () => (
  <Flex
    bg="brand.600"
    color={"white"}
    minH={{ base: "auto", md: "100vh" }}
    id="team"
  >
    <Container py={{ base: "16", md: "24" }} alignSelf={'center'}>
      <DarkMode>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Stack
            spacing={{ base: "12", xl: "24" }}
            direction={{ base: "column", lg: "row" }}
          >
            <Stack spacing="10">
              <Stack spacing="3" maxW="sm" width="full">
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="white"
                  fontWeight="semibold"
                >
                  {"We're hiring"}
                </Text>
                <Stack spacing={{ base: "4", md: "5" }}>
                  <Heading size={{ base: "sm", md: "md" }}>
                    Meet our team
                  </Heading>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="fg.muted"
                    maxW="3xl"
                  >
                    Jelly brownie candy dessert lemon drops marshmallow pastry.
                  </Text>
                </Stack>
              </Stack>
              <Stack
                spacing="3"
                direction={{ base: "column-reverse", md: "row" }}
              >
                <Button colorScheme="yellow" backgroundColor={"yellow.600"}>
                  Join our team
                </Button>
              </Stack>
            </Stack>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              columnGap="8"
              rowGap={{ base: "10", lg: "12" }}
              flex="1"
            >
              {membersData.map((member) => (
                <Stack
                  key={member.name}
                  spacing={{ base: "4", md: "5" }}
                  direction="row"
                >
                  <Avatar
                    src={member.image}
                    boxSize={{ base: "16", md: "20" }}
                  />
                  <Stack spacing="4">
                    <Stack>
                      <Box>
                        <Text fontWeight="medium" fontSize="lg">
                          {member.name}
                        </Text>
                        <Text color="fg.muted">{member.role}</Text>
                      </Box>
                      <Text color="fg.muted">{member.description}</Text>
                    </Stack>
                    <HStack spacing="4" color="red">
                      {[FaGithub, FaLinkedin, FaTwitter].map((item, id) => (
                        <Link href="#" key={id}>
                          <Icon as={item} boxSize="5" color={"fg.muted"} />
                        </Link>
                      ))}
                    </HStack>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Flex>
      </DarkMode>
    </Container>
  </Flex>
);
