import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderprops {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderprops) {
  const disclosure = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
