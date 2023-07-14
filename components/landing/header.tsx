'use client'
import {
  Box,
  Button,
  ButtonGroup,
  Circle,
  Flex,
  HStack,
  Link
} from "@chakra-ui/react";
import { Logo } from "./logo";

const Header = () => {
  return (
    <Box position={"fixed"} bgColor={"brand.600"} zIndex={999999999} w={"100vw"}>
      <Box
        flex="1"
        mx="auto"
        maxW="8xl"
        width="full"
        px={{ base: "4", md: "8" }}
      >
        <Flex
          justifyContent={"start"}
          alignItems={"center"}
          py={{ base: 4, md: 0 }}
        >
          <Flex alignItems={"center"}>
            {/* <Link href={"/"}> */}
              <Logo height={55} />
            {/* </Link> */}
          </Flex>

          <Flex align="center" h="24" justifyContent={"end"} flex="1">
            <HStack spacing="8">
              <ButtonGroup
                size="lg"
                variant="text"
                colorScheme="gray"
                spacing="8"
                display={{ base: "none", md: "flex" }}
              >
                {[
                  { name: "Our Process", href:"/#process"},
                  { name: "Why us?", href:"/#why_us" },
                  { name: "Our Work", href:"/#work" },
                  { name: "Case Study", href:"/#case"},
                  { name: "Testimonial", href: "/#testimonials" },
                  // { name: "Pricing",href:"/#pricing"},
                  { name: "Team",href:"/#team"},
                  { name: "FAQ",href:"/#faq"},
                  { name: "Blogs",href:"/#blog" },
                ].map((item) => (
                  <Link className="" href={item.href} key={item.name}>
                    <Button color={"whiteAlpha.800"}>{item.name}</Button>
                  </Link>
                ))}
              </ButtonGroup>
              {/* <Button colorScheme="yellow" backgroundColor={"yellow.600"}>
                {"Let's Talk"}
              </Button> */}
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
