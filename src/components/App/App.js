import "../App/App.scss";
import Posts from "../Posts";
import PaginationPage from "../PaginationPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      //开始加载数据
      setLoading(true);
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await axios.get(url);
      setPosts(res.data);
      //加载数据完成
      setLoading(false);
    };

    fetchPosts();
  }, []); //只在组件加载时执行一次

  console.log("posts: ", posts);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  //slice 返回一个新数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

  //change page
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={`App flex flex-col  items-center min-h-screen bg-slate-200 ${
        loading ? "justify-start" : "justify-center"
      }`}
    >
      <div className="flex flex-col items-start w-[38rem]">
        <h1 className="text-3xl"> My Blog</h1>
        <Posts currentPosts={currentPosts} loading={loading} />
        <PaginationPage
          changePage={changePage}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={posts.length}
        />
      </div>
    </div>
  );
}

export default App;
