import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostProps {
  id: number;
  title: string;
}

const PostsList: FC = () => {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts").then((response) => {
      response.json().then((posts) => {
        setData(posts);
      });
    });
  }, []);

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/posts/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList