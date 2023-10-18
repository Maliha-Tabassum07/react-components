import PostList from "../components/postList";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All posts</h1>

      <PostList />
    </div>
  );
};

export default HomePage;
