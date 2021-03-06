import { Button, Flex, Stack, FormControl } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <Input name="email" type="email" id="email" label="E-mail" />
          </FormControl>
          <FormControl>
            <Input
              name="password"
              type="password"
              id="password"
              label="Senha"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="teal" size="lg">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
