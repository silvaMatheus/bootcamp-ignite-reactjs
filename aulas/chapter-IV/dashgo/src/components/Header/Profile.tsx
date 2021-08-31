import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (

        <Box mr="4" textAlign="right">
          <Text> Matheus Silva</Text>
          <Text color="gray.300" fontSize="small">
            matheus.psmpereira@gmail.com
          </Text>
        </Box>

      )}

      <Avatar size="md" name="diego" src="https://github.com/silvaMatheus.png" />

    </Flex>

  );
}
