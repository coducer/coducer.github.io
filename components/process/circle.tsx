'use client';
import { Box, Center, Container, Flex, Spacer, Stack, DarkMode, Text ,useColorModeValue as mode } from '@chakra-ui/react';
import { Step } from './step';
import { steps } from '../../data/process';
import { useStep } from './useStep';
import { useState } from 'react';

export const Circle = () => {
	const [ stepValue, setStepValue ] = useState('step1');
	const [ currentStep, { setStep } ] = useStep({ maxStep: steps.length, initialStep: 1 });

	console.log(stepValue, 'stepValue');
	return (
	
		<Flex
			minH={{ base: '100vh', md: '100vh' }}
			bgGradient={{
				base: mode('linear(to-r, brand.600 50%, brand.600 50%)', 'linear(to-r, brand.600 50%, gray.900 50%)')
			}}
		>
					<Container py={{ base: '4', lg: '16' }} minH={{ base: '100vh', md: '100vh' }} mb={'10'}>
				<Box>
					<Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} mb={'10px'} textColor={'white'} >
						Our Processes and Outcomes
					</Box>
					{/* <Box fontSize={'1rem'} fontWeight={'500'} textAlign={'center'} mb={'100px'} textColor={'white'}>
						Simplify your development process with our adaptable and flexible MVP launch program So delivery
						on time, everytime!
					</Box> */}
					<Text
											textStyle="lg"
											maxW="xxl"
											fontWeight="medium"
											textAlign={{ base: 'center', md: 'center' }}
											color={'white'}
											mb={'14'}
											
										>Simplify your development process with our adaptable and flexible MVP launch program So delivery
										on time, everytime!</Text>

					<Flex>
						<Flex>
							<Box pe={{ base: '4', md: '24' }}>
								{steps.map((step, id) => (
									<Step
										key={id}
										cursor="pointer"
										onClick={() => {
											setStepValue(`step${id + 1}`);
											setStep(id);
										}}
										title={step.title}
										description={step.description}
										isActive={currentStep === id}
										isCompleted={currentStep > id}
										isLastStep={steps.length === id + 1}
									/>
								))}
							</Box>
						</Flex>

						<Flex flex={1}>
							<Box textColor={'white'}>
								{stepValue === 'step1' && (
									<>
									<p>
										We have meticulously planned each step involved in the 30 Day process to cover
										everything from NDA to Scope Discussion to GTM Strategy and finally seal the
										deal with 2 Documents - Proposal and Detailed Requirement Analysis that would
										encompass everything from
									</p>
									<Box px={10} py={4}>
										<li>Development Tasks and Creating Modules, Analysis, KT and Set up</li>
										<li>Design Process</li>
										<li>Testing Tasks</li>
										<li>Management Tasks with habitual reporting of developments</li>
										<li>Devop Tasks</li>
									</Box>
									</>
								)}
								{stepValue === 'step2' && (
									<>
									<p>
									Digital Products that address users needs directly, plainly and neatly win their heart right away! A well presented visual layout transforms the overall look and feel of the product in an instant. Accordingly, the first twenty days are entirely focused on designing the visuals like,
									</p>
									<Box px={10} py={4}>
										<li>User Experience(UX) and Architectural Elements of the MVP</li>
										<li>Data Models</li>
										<li>High-Level System Design</li>
										<li>Layout</li>
										<li>User Interface</li>
									</Box>
									</>
								)}
								{stepValue === 'step3' && (
									<p>
										Once the layout design of the product is finalised, our team begins to work on creating a functional MVP with our well-structured development approach for the next 55 Days. Meanwhile, we provide weekly updates and biweekly demos to keep you abreast with the advances made.
									</p>
								)}
								{stepValue === 'step4' && (
									<p>
										The next organic step after development of the product is to iterate and launch the tested and validated product. Based on user testing and feedback, the product is iterated to ensure that it meets the needs of the target market. Two whole weeks are solely dedicated to this.
									</p>
								)}
								{stepValue === 'step5' && (
									<p>
										In the Scaling phase, we help to scale up the product by building new components or by pivoting existing features based on customer feedback and success in the market to deliver an outstanding MVP within 100 Days.
									</p>
								)}
							</Box>
						</Flex>
					</Flex>
				</Box>
			</Container>
				</Flex>
	);
};
