import {
  Box,
  BoxProps,
  Button,
  Circle,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import { product } from "./pricing_data";
import Link from "next/link";

export const PricingCard = (props: BoxProps) => {
  return (
    <Box
      bg="bg.surface"
      borderRadius="2xl"
      boxShadow="lg"
      maxW={{ lg: "576px" }}
      py={{ base: "6", lg: "8" }}
      {...props}
    >
      <Stack spacing="8" divider={<StackDivider />}>
        <Stack
          spacing={{ base: "4", lg: "8" }}
          direction={{ base: "column-reverse", lg: "row" }}
          justify="space-between"
          align={{ base: "start", lg: "center" }}
          px={{ base: "6", md: "8" }}
        >
          <Stack spacing="1">
            <Heading size="xs">{product.name}</Heading>
            <Text color="fg.muted">{product.description}</Text>
          </Stack>
          <Stack direction="row" spacing="0.5">
            <Heading size={{ base: "md", lg: "lg" }}>${product.price}</Heading>
            <Heading fontSize="14" alignSelf={"center"}>
              onwards
            </Heading>
          </Stack>
        </Stack>

        <Stack spacing="6" px={{ base: "6", md: "8" }}>
          <Stack spacing="1">
            <Text fontWeight="semibold">{"What's included"}</Text>
            <Text color="fg.muted">All you need to build your next app</Text>
          </Stack>
          <SimpleGrid
            as="ul"
            columns={{ base: 1, lg: 2 }}
            columnGap="8"
            rowGap="4"
            pb="2"
          >
            {product.features.map((feature) => (
              <HStack key={feature} as="li" spacing="3">
                <Circle size="6" bg={mode("blue.50", "whiteAlpha.50")}>
                  <Icon as={FiCheck} color="accent" />
                </Circle>
                <Text color="fg.muted">{feature}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Stack>

        <Box px={{ base: "6", md: "8" }} pb="2">
          <Link href="https://pro.superapp.dev/sign_up" target="_blank">
            <Button variant="primary" size="xl" width="full">
              Buy now
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
