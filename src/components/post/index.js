import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";

function VerticallyCenter({ post }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, text } = post;

  return (
    <>
      <Button onClick={onOpen}>View More</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text wordBreak="break-word" fontSize="md" as="b">
              {title}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text wordBreak="break-word" fontSize="md" as="b">
              Project Description
            </Text>
            <Text>{text}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

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
          <VerticallyCenter post={post}></VerticallyCenter>
        </Box>
        <Actions post={post} />
      </Box>
    </Box>
  );
}
