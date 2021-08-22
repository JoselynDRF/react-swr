import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

interface PostProps {
  id: number;
  title: string;
}

const Post: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useFetch<PostProps>(`posts/${id}`);

  return data ? (
    <ul>
      <li>ID: {data?.id}</li>
      <li>Title: {data?.title}</li>
    </ul>
  ) : (
    <p>Loading...</p>
  );
};

export default Post;
