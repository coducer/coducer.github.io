import {
  Button,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { INav } from "@/interfaces/INav";
import { PopoverIcon } from "./popover_icon";

export const PopoverItem = ({ item }: { item: INav }) => (
  <>
    {item.children && (
      <Popover
        trigger="click"
        openDelay={0}
        placement="bottom"
        defaultIsOpen={false}
        gutter={12}
      >
        {({ isOpen }) => (
          <>
            <PopoverTrigger>
              <Button
                variant="text"
                colorScheme="gray"
                rightIcon={<PopoverIcon isOpen={isOpen} />}
              >
                {item.title}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              p="5"
              width={{ base: "sm", md: "2xl" }}
              bg={"white"}
            >
              <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="6" rowGap="2">
                {item.children.map((item, id) => (
                  <Link variant="menu" href={item.href} key={id}>
                    <Stack spacing="4" direction="row" p="3">
                      <Icon as={item.icon} boxSize="6" color="accent" />
                      <Stack spacing="1">
                        <Text fontWeight="medium">{item.title}</Text>
                        <Text fontSize="sm" color="fg.muted">
                          {item.description}
                        </Text>
                      </Stack>
                    </Stack>
                  </Link>
                ))}
              </SimpleGrid>
            </PopoverContent>
          </>
        )}
      </Popover>
    )}
  </>
);