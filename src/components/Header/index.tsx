import {
  Flex,
  Input,
  Text,
  Icon,
  HStack,
  Box,
  Avatar,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import {
  RiMenuLine,
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Abrir navegação"
          mr="2"
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
