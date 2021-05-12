import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export default function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" color="teal.400" {...rest}>
      <Icon as={icon} fontSize="28" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
