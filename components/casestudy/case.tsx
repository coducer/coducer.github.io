'use client'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue, Text
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

export const Case = () => (

  <Flex
    as="section"
    backgroundColor={"brand.600"}
    color={"white"}
    minH={{ base: "auto", md: "100vh" }}
    id="case"
  >

    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} mt={'20'}>
      <Flex flexDir={"column"}>
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
              Our Case studies
            </Text>
            <Heading size={{ base: "sm", md: "md" }} fontWeight={"medium"}>
              We study everything for better vision
            </Heading>
          </Stack>
        </Stack>
      </Flex>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
                Misguided
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Refresh your wardrobe
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link href='#/blog' color={useColorModeValue('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
                Discover now
              </Link>
              <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
          <Image
            display={{ base: 'none', sm: 'initial' }}
            src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  </Flex>
);