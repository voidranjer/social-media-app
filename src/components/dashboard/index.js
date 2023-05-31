import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import PostsLists from "components/post/PostsList";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      title: data.title,
      text: data.text,
      category: data.category,
    });
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
        </HStack>
        <Input
          resize="none"
          mt="5"
          placeholder="Project Title"
          {...register("title", { required: true })}
        />
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Project Description"
          minRows={3}
          {...register("text", { required: true })}
        />

        <Select
          mt="5"
          placeholder="Select option"
          {...register("category", { required: true })}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Button
          mt="5"
          colorScheme="teal"
          type="submit"
          isLoading={authLoading || addingPost}
          loadingText="Loading"
        >
          Post
        </Button>
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <HStack justify="center" mb="10">
        <Heading size="lg">Other Projectss</Heading>
      </HStack>
      <PostsLists posts={posts} />
    </>
  );
}
