import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogsData from "../data/blogs";

const Blogs = () => {

  
  const [blogs, setBlogs] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  useEffect(() => {
    const storedBlogs =
      localStorage.getItem("blogs");

    if (storedBlogs) {
      try {
        setBlogs(JSON.parse(storedBlogs));
      } catch (error) {
        console.error(
          "Error loading blogs:",
          error
        );

        localStorage.setItem(
          "blogs",
          JSON.stringify(blogsData)
        );

        setBlogs(blogsData);
      }
    } else {
      localStorage.setItem(
        "blogs",
        JSON.stringify(blogsData)
      );

      setBlogs(blogsData);
    }
  }, []);

  const handleDeleteBlog = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedBlogs = blogs.filter(
      (blog) => blog.id !== id
    );

    setBlogs(updatedBlogs);

    localStorage.setItem(
      "blogs",
      JSON.stringify(updatedBlogs)
    );
  };

  const categories = [
    "All",
    ...new Set(
      blogs.map((blog) => blog.category)
    ),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const searchText =
      search.toLowerCase().trim();

    const matchesSearch =
      blog.title
        .toLowerCase()
        .includes(searchText) ||
      blog.description
        .toLowerCase()
        .includes(searchText);

    const matchesCategory =
      category === "All" ||
      blog.category === category;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

  return (
    <main className="blogs-page">

      <div className="blogs-header">

        <h1>
          Blogs
        </h1>

        <p>
          Explore our latest documentation
          and tutorials.
        </p>

      </div>

      <div className="blog-controls">

        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      <p className="blog-count">
        Showing {filteredBlogs.length}{" "}
        {filteredBlogs.length === 1
          ? "blog"
          : "blogs"}
      </p>

      <div className="blog-grid">

        {filteredBlogs.length > 0 ? (

          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onDelete={handleDeleteBlog}
            />
          ))

        ) : (

          <div className="no-results">

            <h2>
              No Blogs Found
            </h2>

            <p>
              Try searching with another
              keyword or category.
            </p>

          </div>

        )}

      </div>

    </main>
  );
};

export default Blogs;