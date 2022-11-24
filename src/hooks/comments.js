import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
  collection,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function useAddComment({ postID, uid }) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addComment(text) {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, "comments", id);
    await setDoc(docRef, { text, id, postID, date, uid });

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

export function useComments(postID) {
  const q = query(
    collection(db, "comments"),
    where("postID", "==", postID),
    orderBy("date", "asc")
  );
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments, isLoading };
}
