'use client';
import { Box, Center, Container, Flex, Spacer, Stack, DarkMode, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { Step } from './step';
import { steps } from '../../data/process';
import { useStep } from './useStep';
import { useState } from 'react';

export const Circle = () => {
	const [stepValue, setStepValue] = useState('step1');
	const [currentStep, { setStep }] = useStep({ maxStep: steps.length, initialStep: 0 });
	return (

		<Flex
			minH={{ base: '100vh', md: '100vh' }}
			bgGradient={{
				base: mode('linear(to-r, brand.600 50%, brand.600 50%)', 'linear(to-r, brand.600 50%, gray.900 50%)')
			}} id={"process"}
		>
			<Container py={{ base: '4', lg: '16' }} minH={{ base: '100vh', md: '100vh' }} mb={'10'} mt={'10'}>
				<Box>
					<Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} mb={'10px'} color={'#F6E05E'} >
						Our Processes and Outcomes
					</Box>
					<Text
						textStyle="lg"
						maxW="xxl"
						fontWeight="medium"
						textAlign={{ base: 'center', md: 'center' }}
						fontSize={'1xl'} color="whiteAlpha.700"
						mb={'14'}

					>Deliver a fully functional MVP in 100 Days with our foolproof checklists and milestones. Our approach revolves around LEAN Methodology, while synergizing the strengths of lean and agile methodologies as an MVP-Centred company, ensuring optimal results.</Text>

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
											Our 30-day process is meticulously designed to ensure a comprehensive journey, starting from NDA and Scope Discussion, progressing to GTM Strategy, and concluding with two crucial documents: Proposal and Detailed Requirement Analysis that encompass everything, including
										</p>
										<Box px={10} py={4} lineHeight={'2'}>
											<li><span className='pointers'>Development Tasks:</span> Implementation of software features and functionalities.</li>
											<li><span className='pointers'>Module Creation:</span> Building distinct components or modules that contribute to the overall system.</li>
											<li><span className='pointers'>Analysis:</span> Evaluating project requirements and challenges.</li>
											<li><span className='pointers'>Knowledge Transfer:</span> Sharing expertise with stakeholders.</li>
											<li><span className='pointers'>Setup:</span> Establishing necessary infrastructure and tools.</li>
											<li><span className='pointers'>Design Process:</span> Creating visual and functional design.</li>
											<li><span className='pointers'>Testing Tasks:</span> Conducting quality and functionality tests.</li>
											<li><span className='pointers'>Management Tasks:</span> Overseeing project progress and coordination.</li>
											<li><span className='pointers'>Periodical Reporting:</span> Providing timely project updates.</li>
											<li><span className='pointers'>DevOps Tasks:</span> Managing software integration and deployment.</li>
										</Box>

										<p>Please click the below link to download the initial forms</p>
										<Box px={10} py={4} lineHeight={'2'}>
											<a href='#' download > NDA form</a><br />
											<a href='#' download>Proposal Document</a><br />
											<a href='#' download>Requirement Analysis form</a>
										</Box>
									</>
								)}
								{stepValue === 'step2' && (
									<>
										<p>
											Digital Products that address users needs directly, plainly, and neatly win their heart right away! A well-presented visual layout transforms the overall look and feel of the product in an instant. Accordingly, the first twenty days are entirely focused on designing the visuals, ensuring:
										</p>
										<Box px={10} py={4} lineHeight={'2'}>
											<li><span className='pointers'>User Experience(UX)and Architectural Elements of the MVP:</span> Designing optimal user experience and MVP architecture.</li>
											<li><span className='pointers'>Data Models:</span> Structuring and organising data effectively.</li>
											<li><span className='pointers'>High-Level System Design:</span> Creating an overall system design plan.</li>
											<li><span className='pointers'>Layout:</span> Arranging visual elements and content. </li>
											<li><span className='pointers'>User Interface (UI):</span> Designing the user interface for seamless interaction.</li>
										</Box>
									</>
								)}
								{stepValue === 'step3' && (
									<>
										<p>
											Once the layout design of the product is finalised, our team begins to work on creating a functional MVP with our well-structured development approach for the next 55 Days. Meanwhile, we provide weekly updates and biweekly demos to keep you abreast with the advances made.</p>
										<Box px={10} py={4} lineHeight={'2'}>
											<li><span className='pointers'>UOpen-Source Tool Selection: </span> Choose appropriate open-source technologies and frameworks.</li>
											<li><span className='pointers'>Customize and Integrate:</span> Modify and extend open-source solutions to meet project needs.</li>
											<li><span className='pointers'>Ensure Compatibility:</span> Ensure seamless integration of open-source components.</li>
										</Box>
									</>
								)}
								{stepValue === 'step4' && (
									<>
										<p>
											The next organic step after development of the product is to iterate and launch the tested and validated product. Based on user testing and feedback, the product is iterated to ensure that it meets the needs of the target market. Two whole weeks are solely dedicated to this.</p>
										<Box px={10} py={4} lineHeight={'2'}>
											<li><span className='pointers'>Analyze user Feedback: </span> Identify patterns, pain points, and enhancement opportunities.</li>
											<li><span className='pointers'>Iterative Development:</span> Make iterative improvements based on feedback.</li>
											<li><span className='pointers'>Validate Changes:</span> Test updated version to address user needs.</li>
											<li><span className='pointers'>Finalize Product:</span> Prepare MVP for launch after validation.</li>
											<li><span className='pointers'>Deploy and Release:</span> Execute launch plan on designated platforms.</li>

										</Box>
									</>
								)}
								{stepValue === 'step5' && (
									<>
										<p>
											In the Scaling phase, we help to scale up the product by building new components or by pivoting existing features based on customer feedback and success in the market to deliver an outstanding MVP within 100 Days.</p>
										<Box px={10} py={4} lineHeight={'2'}>
											<li><span className='pointers'>Customer Feedback Integration:</span> Gather user feedback for improvement.</li>
											<li><span className='pointers'>Feature Enhancements:</span> Prioritise and implement user-driven enhancements.</li>
											<li><span className='pointers'>Building New Components:</span> Expand functionality with new modules.</li>
											<li><span className='pointers'>Pivoting Existing Features:</span> Adapt features based on market validation.</li>
											<li><span className='pointers'>Streamlining Processes:</span> Optimise performance and scalability.</li>
											<li><span className='pointers'>Rapid Development Iterations:</span> Efficiently implement changes and iterations.</li>
											<li><span className='pointers'>Scalable Infrastructure:</span> Enhance system for increased demands.</li>
											<li><span className='pointers'>Tech workload:</span> Optimised performance for heavy workloads and horizontal scaling</li>


										</Box>
									</>
								)}
							</Box>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</Flex>
	);
};
