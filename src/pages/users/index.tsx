import {
  Box,
  Flex,
  Heading,
  Icon,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="teal"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="8" color="gray.300" width="8">
                  <Checkbox colorScheme="teal"></Checkbox>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8">Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="8">
                  <Checkbox colorScheme="teal"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Robles</Text>
                    <Text fontSize="sm" color="gray.300">
                      roblesthiago38@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril, 1789</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="8">
                  <Checkbox colorScheme="teal"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Robles</Text>
                    <Text fontSize="sm" color="gray.300">
                      roblesthiago38@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril, 1789</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="8">
                  <Checkbox colorScheme="teal"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Robles</Text>
                    <Text fontSize="sm" color="gray.300">
                      roblesthiago38@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril, 1789</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
