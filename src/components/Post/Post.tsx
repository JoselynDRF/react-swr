import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PostProps {
  id: number;
  title: string;
}

const Post: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PostProps>();

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id}`).then((response) => {
      response.json().then((post) => {
        setData(post);
      });
    });
  }, [id]);

  return (
    <ul>
      <li>ID: {data?.id}</li>
      <li>Title: {data?.title}</li>
    </ul>
  );
};

export default Post;
