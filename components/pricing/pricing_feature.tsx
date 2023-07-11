'use client'
import { Center, Icon, Stack, StackProps, Text } from '@chakra-ui/react'
import { Feature } from './pricing_data'

interface Props extends StackProps {
  feature: Feature
}

export const PricingFeature = (props: Props) => {
  const { feature, ...stackProps } = props
  return (
    <Stack direction="row" spacing={{ base: 4, lg: 5 }} {...stackProps}>
      <Center
        color="white"
        flexShrink={0}
        boxSize={{ base: 10, lg: 12 }}
        bg="accent"
        borderRadius="lg"
        fontSize={{ base: 'xl', lg: '2xl' }}
      >
        <Icon as={feature.icon} fontSize="1.25rem" />
      </Center>
      <Stack spacing={{ base: '1', lg: '2' }} pt={{ base: '1.5', md: '2.5' }}>
        <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="medium" color={'white'}>
          {feature.name}
        </Text>
        <Text color="white">{feature.description}</Text>
      </Stack>
    </Stack>
  )
}