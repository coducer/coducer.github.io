import { FAQData } from "@/data/faq";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { MdAccessTime, MdLocationOn } from "react-icons/md";

export const FAQItem = (props: FAQData) => {
  const { title, department, description} = props;
  return (
    <AccordionItem>
      <AccordionButton gap={4} px="0">
        <Text as="h2" fontWeight="semibold" textStyle="xl">
          {title}
        </Text>
      </AccordionButton>
      <AccordionPanel px="0">
        <Stack spacing={{ base: "6", md: "8" }}>
          <Stack spacing={{ base: "4", md: "5" }}>
            <Text color="whiteAlpha.700">{description}</Text>
            {/* <HStack spacing={{ base: "5", md: "6" }}>
              <HStack color="whiteAlpha.700">
                <Icon as={MdLocationOn} boxSize="5" />
                <Text as="span">{location}</Text>
              </HStack>
              <HStack color="whiteAlpha.700">
                <Icon as={MdAccessTime} boxSize="5" />
                <Text as="span">{type}</Text>
              </HStack>
            </HStack> */}
          </Stack>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};
