import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  useBreakpointValue,
  DrawerHeader,
  DrawerContent,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onClose, isOpen } = useSidebarDrawer();

  return isMobile ? (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  ) : (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
