import usePostHook from "../hooks/usePostHook";

const PostList = () => {
  const { posts, handleSubmit, errors } = usePostHook();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* PostList <button onClick={handleSubmit}>Test</button> */}
      {posts &&
        posts.map((posts, i) => {
          return (
            <div key={i}>
              <h1>User ID:{posts.userId}</h1>
              <h3>Title: {posts.title}</h3>
              <p>Post: {posts.body}</p>
              <p>Reactions:{posts.reactions}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
