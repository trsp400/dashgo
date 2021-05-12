import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align={showProfileData ? "center" : "flex-end"}>
      {showProfileData && (
        <Box mr="2">
          <Text>Thiago Robles</Text>
          <Text color="gray.300" fontSize="small">
            roblesthaigo38@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thiago Robles"
        src="https://github.com/trsp400.png"
      />
    </Flex>
  );
}
