import { Text } from "@chakra-ui/react";
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
} from "@chakra-ui/react";

export default function PopUpModal({ post }) {
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
