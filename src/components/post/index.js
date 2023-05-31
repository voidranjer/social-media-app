import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";
import PopUpModal from "./PopUpModal";
import { Divider } from "@chakra-ui/react";

export default function Post({ post }) {
  const { title, text } = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />
        <Box p="2">
          <Text wordBreak="break-word" fontSize="md" as="b">
            Project Title
          </Text>
          <Text>{title}</Text>
          <Divider my="2" />
          <Text wordBreak="break-word" fontSize="md" as="b">
            Project Description:
          </Text>
          <Text>{text}</Text>
        </Box>
        <Box p="2">
          <PopUpModal post={post}></PopUpModal>
        </Box>
        <Actions post={post} />
      </Box>
    </Box>
  );
}
