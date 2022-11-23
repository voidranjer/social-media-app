import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";

export function useAddComment({ postID }) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addComment(text) {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, "comments", id);
    await setDoc(docRef, { text, id, postID, date });

    toast({
      title: "Comment added!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });

    setLoading(false);
  }

  return { addComment, isLoading };
}
