'use client'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Skeleton,
  Stack,
  useColorModeValue, Text, Button, Container, VStack, Grid, GridItem, Divider
} from '@chakra-ui/react'
import Image from 'next/image';
import Girl from "../../public/assets/lady.png"
import Alarabia from "../../public/assets/AA.png"

export const Case = () => (

  <Flex
    as="section"
    backgroundColor={"brand.600"}
    color={"white"}
    minH={{ base: "auto", md: "100vh" }}
    id="case"
  >
    <Container as='section' mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
      <Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center" marginY={14}>
        <Stack spacing="3" textAlign={'left'}>
          <Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} color={'#F6E05E'}>
            Case Study
          </Box>
          <Text
            textStyle="lg"
            maxW="xxl"
            fontWeight="medium"
            textAlign={{ base: 'center', md: 'center' }}
            fontSize={'1xl'} color="whiteAlpha.700" mb={'0'}
          >We Analyze everything for better vision and understanding</Text>
        </Stack>
      </Stack>
      <Box>
        <Flex flexDir={'row'}>
          <Box textAlign={'left'}>
            <p>Heading</p>
            <Heading fontSize={'3xl'}>Why 100 days of MVP?</Heading>
            <Flex alignItems={'center'} mb={'10'}>
              <Image src={Girl} alt={'avatar'} width={40} />
              <Box mx={'5'}>Created by <a href='#'>Nithish</a></Box>
            </Flex>
          </Box>
          <Flex flex={1} alignItems={'center'} justifyContent={'center'} px={20}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis velit recusandae veniam sed. Exercitationem.</Flex>
        </Flex>
        <Button>Preview</Button>
      </Box>
      <Box mt={'60px'}>
        <a href='#'><Image src={Alarabia} alt='screenshot' /></a>
      </Box>
      <Grid templateColumns='repeat(2, 1fr)' gap={10} mt={10}>
        <GridItem>
          <Heading fontSize={'3rem'}>Lorem ipsum dolor sit</Heading>
          <Text fontSize={'1rem'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eligendi officiis assumenda maiores laborum at dolores suscipit voluptatem natus voluptates, deserunt nostrum perspiciatis harum a expedita placeat nemo exercitationem earum.</Text>
        </GridItem>

        <GridItem alignItems={'center'} justifyContent={'center'} my={'auto'}>
          <p>Highlights</p>
          <Grid templateColumns='repeat(4, 1fr)' gap={4} textAlign={'center'} mt={'20px'}>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
          </Grid>
          <Divider mt={10} borderColor={'gray.600'} />
        </GridItem>

        <Box>
          <Heading fontSize={'1.5rem'}>Lorem ipsum dolor sit</Heading>
          <Text fontSize={'1rem'}><span className='point-header'>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Animi, iste consequatur ducimus harum cum repellendus porro modi id nesciunt doloribus omnis odio, iusto explicabo deserunt inventore! A fugiat voluptate debitis.</Text>
        </Box>

        <GridItem alignItems={'center'} justifyContent={'center'} my={'auto'}>
          <p>Highlights</p>
          <Grid templateColumns='repeat(4, 1fr)' gap={4} textAlign={'center'} mt={'20px'}>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
            <GridItem>
              <Text backgroundColor={'yellow.400'} borderRadius={'50px'}>NextJs</Text>
            </GridItem>
          </Grid>
          <Divider mt={10} borderColor={'gray.600'} />
        </GridItem>

        <Box>
          {/* <Heading fontSize={'1.5rem'}>Lorem ipsum dolor sit</Heading>
            <Text fontSize={'1rem'}><span className='point-header'>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Animi, iste consequatur ducimus harum cum repellendus porro modi id nesciunt doloribus omnis odio, iusto explicabo deserunt inventore! A fugiat voluptate debitis.</Text> */}
        </Box>

        <Grid templateColumns='repeat(1, 1fr)' gap={4} textAlign={'left'}>
          <GridItem>
            <Text mb={5}>Highlights</Text>
            <a href='#'>Contact Support</a>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  </Flex >
);