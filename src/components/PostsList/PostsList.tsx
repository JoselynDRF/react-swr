import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { mutate as mutateGlobal } from "swr";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";

interface PostProps {
  id: number;
  title: string;
}

const PostsList: FC = () => {
  const { data, mutate } = useFetch<PostProps[]>("posts");

  const updateTitle = useCallback(
    (id: number) => {
      const url = `posts/${id}`;
      const title = "New title";

      api.put(url, { title });

      const updatedPosts = data?.map((post) => {
        return post.id === id ? { ...post, title } : post;
      });

      mutate(updatedPosts, false);
      mutateGlobal(url, { id, title });
    },
    [data, mutate]
  );

  return data ? (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/posts/${id}`}>{title}</Link>
          <span> - </span>
          <button type="button" onClick={() => updateTitle(id)}>
            Change
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading...</p>
  );
};

export default PostsList;
