function PaginationPage({ postsPerPage, totalPosts, changePage, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log("pageNumbers: ", pageNumbers);

  return (
    <div>
      <ul className="flex  divide-x divide-gray-300 ">
        {pageNumbers.map((item) => (
          <li
            key={item}
            className={`p-2 hover:bg-slate-400 w-[2.5rem] h-[2.5rem] flex justify-center items-center  ${
              item === currentPage ? "bg-slate-500 text-white" : ""
            }`}
          >
            <a href="/#" onClick={() => changePage(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginationPage;
