function Posts({ currentPosts, loading }) {
  if (loading) {
    return <h2 className="my-4">Loading...</h2>;
  }

  return (
    <ul className="flex w-full  flex-col  divide-y divide-gray-300  my-4 ">
      {currentPosts.length > 0 &&
        currentPosts.map((item) => (
          <li className="w-full text-left p-2" key={item.id}>
            {item.title}
          </li>
        ))}
    </ul>
  );
}

export default Posts;
