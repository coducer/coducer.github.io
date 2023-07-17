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
  const { title, department, description } = props;
  return (
    <AccordionItem>
      <AccordionButton gap={4} px="0">
        <Text as="h1" fontWeight="semibold" textStyle="sm">
          {title}
        </Text>
      </AccordionButton>
      <AccordionPanel px="0">
        <Stack spacing={{ base: "6", md: "8" }}>
          <Stack spacing={{ base: "4", md: "5" }}>
            <Text color="whiteAlpha.700">{description}</Text>
          </Stack>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};
