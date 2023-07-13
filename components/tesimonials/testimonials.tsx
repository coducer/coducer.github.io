'use client';
import { Avatar, Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export const Testimonials = () => (
	<Flex as="section" backgroundColor={'brand.600'} color={'white'} minH={{ base: '100vh', md: '100vh' }} id="work">
		<Container flexDir={'column'} py={4} minH={{ base: '100vh', md: '100vh' }}>
			<Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center" marginY={24}>
				<Stack spacing="3">
					<Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="blwhiteack">
						Testimonials
					</Text>
					<Heading size={{ base: 'sm', md: 'md' }} fontWeight={'medium'} color={'white  '}>
						How our customers think about us
					</Heading>
				</Stack>
			</Stack>

			<Stack spacing="8" align="center" textAlign="center">
				{/* <Logo /> */}
				<Text
					textStyle={{ base: 'lg', md: '2xl' }}
					fontWeight={{ base: 'bold', md: 'medium' }}
					color={'whiteAlpha.700'}
					marginX={{ base: 0, md: 12 }}
				>
					As a senior UI designer at Logoipsum Inc, I have had the pleasure of using Chakra UI for several of
					our projects. I have to say, it has been an absolute game-changer for our team. Lorem, ipsum dolor
					sit amet consectetur adipisicing elit. Totam corporis animi voluptates, libero cupiditate culpa
					dolorum soluta nihil exercitationem. Ipsum odio veniam atque, suscipit exercitationem iusto
					consequuntur at reprehenderit praesentium!
				</Text>
				<Stack spacing="4" align="center">
					<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" name="Sarah Johnson" />
					<Stack spacing="1">
						<Text fontWeight="semibold" textStyle="lg" color={'whiteAlpha.600'}>
							Sarah Johnson
						</Text>
						<Text color="whiteAlpha.600">Senior UI Designer, Logoipsum</Text>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	</Flex>
);
