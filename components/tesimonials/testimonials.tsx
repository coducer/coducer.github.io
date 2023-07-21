'use client';
import { Avatar, Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export const Testimonials = ({ testimonialdata }: any) => {
	console.log(testimonialdata)

	const testuserdata = testimonialdata.data
	return (
		<Flex as="section" backgroundColor={'brand.600'} color={'white'} minH={{ base: '90vh', md: '90vh' }} id="testimonials">
			<Container className='aligner' flexDir={'column'} py={8} minH={{ base: '90vh', md: '90vh' }} mb={'0'} mt={'10'} backgroundColor={'brand.600'} color={'white'}>
				<Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center" marginY={14}>
					<Stack spacing="3" textAlign={'left'}>
						<Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} color={'#F6E05E'}>
							Testimonials
						</Box>
						<Text
							textStyle="lg"
							maxW="xxl"
							fontWeight="medium"
							textAlign={{ base: 'center', md: 'center' }}
							fontSize={'1xl'} color="whiteAlpha.700" mb={'0'}
						>The feedback and opinions of our customers.</Text>
					</Stack>
				</Stack>

				{testuserdata.map((items: any) => (
					<Stack spacing="4" align="center" textAlign="center" key={items.id}>
						{
							<Text
								textStyle={{ base: 'lg', md: '2xl' }}
								fontWeight={{ base: 'bold', md: 'medium' }}
								color={'white'}
								marginX={{ base: 0, md: 12 }}
								mb={'10'}
							>
								{items.attributes.testimonial_content}
							</Text>
						}
						<Stack spacing="4" align="center">
							<Avatar src={"http://localhost:1337" + items.attributes.testimonial_user_image.data.attributes.url} size="lg" name="Sarah Johnson" />
							<Stack spacing="1">
								<Text fontWeight="semibold" textStyle="lg" color={'white'}>
									{items.attributes.testimonial_user_name}
								</Text>
								<Text color="whiteAlpha.600">									{items.attributes.testimonial_user_designation}
</Text>
							</Stack>
						</Stack>
					</Stack>
				))}

			</Container>
		</Flex>
	)
};
