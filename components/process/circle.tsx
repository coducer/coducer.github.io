'use client';
import { Box, Center, Container, Flex, Spacer, Stack, DarkMode, useColorModeValue as mode } from '@chakra-ui/react';
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
			<Container py={{ base: '4', lg: '16' }} minH={{ base: '100vh', md: '100vh' }}>
				<Box>
					<Box fontSize={'2rem'} fontWeight={'700'} textAlign={'center'} mb={'10px'} textColor={'white'}>
						Our Processes and Outcomes
					</Box>
					<Box fontSize={'1rem'} fontWeight={'500'} textAlign={'center'} mb={'100px'} textColor={'white'}>
						Simplify your development process with our adaptable and flexible MVP launch program So delivery
						on time, everytime!
					</Box>

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
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor porro
										dignissimos, libero labore, facere non soluta voluptatum ipsam optio, corrupti
										magnam hic consectetur at. Non velit facilis obcaecati error sapiente! Lorem
										ipsum dolor sit amet consectetur, adipisicing elit. Molestias aspernatur,
										obcaecati ipsa corrupti non veritatis impedit minus aliquam quidem mollitia
										voluptates eaque eos! Labore quos ea totam voluptas eius unde! Lorem ipsum dolor
										sit amet consectetur adipisicing elit. Facilis tempora ipsum quisquam placeat
										doloremque. Debitis saepe vitae tempore animi ipsum quaerat neque architecto
										nesciunt, laboriosam quam nemo velit nostrum excepturi.
									</p>
								)}
								{stepValue === 'step2' && (
									<p>
										{' '}
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, exercitationem
										consequuntur. Quaerat eum nihil est, odit unde assumenda obcaecati recusandae
										repellat doloremque necessitatibus blanditiis perspiciatis eligendi voluptatibus
										ipsa, molestiae commodi.
									</p>
								)}
								{stepValue === 'step3' && (
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sequi quod
										eveniet unde repellendus, nulla quas veritatis inventore tempore. Sequi nisi
										quos enim incidunt? Voluptates numquam neque qui tempore deserunt? Lorem ipsum,
										dolor sit amet consectetur adipisicing elit. Porro qui consectetur ab
										reiciendis? Voluptatem, suscipit ea voluptates officiis, quibusdam a quia quae,
										consequuntur harum nulla cupiditate recusandae minima pariatur quas.
									</p>
								)}
								{stepValue === 'step4' && (
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, exercitationem
										consequuntur. Quaerat eum nihil est, odit unde assumenda obcaecati recusandae
										repellat doloremque necessitatibus blanditiis perspiciatis eligendi voluptatibus
										ipsa, molestiae commodi.
									</p>
								)}
								{stepValue === 'step5' && (
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, exercitationem
										consequuntur. Quaerat eum nihil est, odit unde assumenda obcaecati recusandae
										repellat doloremque necessitatibus blanditiis perspiciatis eligendi voluptatibus
										ipsa, molestiae commodi.amet consectetur, adipisicing elit. Molestias
										aspernatur, obcaecati ipsa corrupti non veritatis impedit minus aliquam quidem
										mollitia voluptates eaque eos! Labore quos ea totam voluptas eius unde! Lorem
										ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora ipsum
										quisquam placeat doloremque. Debitis saepe vitae tempore animi ipsum quaerat
										neque architecto nesciunt, laboriosam quam nemo velit nostrum excepturi.
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
