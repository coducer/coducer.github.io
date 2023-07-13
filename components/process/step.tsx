// 'use client'
import { BoxProps, Divider, Stack, Text } from '@chakra-ui/react'
import { StepCircle } from './stepCircle'

interface StepProps extends BoxProps {
  title: string
  description?: string
  isCompleted: boolean
  isActive: boolean
  isLastStep: boolean
}

export const Step = (props: StepProps) => {
  const { isActive, isCompleted, isLastStep, title, description, ...stackProps } = props

  return (
    <Stack spacing="4" direction="row" {...stackProps} maxW={'336px'}>
      <Stack spacing="0" align="center">
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          orientation="vertical"
          borderWidth="1px"
          borderColor={isCompleted ? 'accent' : isLastStep ? 'transparent' : 'inherit'}
        />
      </Stack>
      <Stack spacing="16" pb={isLastStep ? '5' : '5'}>
        <Text color="white"  fontWeight="bold">
          {title}<br></br>
          {description}
        </Text>
        <Text color="fg.muted" flexWrap={'wrap'}></Text>
      </Stack>
    </Stack>
  )
}