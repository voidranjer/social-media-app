import { Box, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import UsernameButton from "components/profile/UsernameButton";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "hooks/users";

export default function Comment({ comment }) {
  const { text, uid, date } = comment;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
            <Box>
              <UsernameButton user={user} />
              <Text fontSize="xs" color="gray.500">
                {formatDistanceToNow(date)} ago
              </Text>
            </Box>
          </Flex>
          <Box pt="2" fontSize="sm">
            <Text>{text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
