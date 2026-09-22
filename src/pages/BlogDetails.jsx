import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");

    if (!storedBlogs) {
      return;
    }

    try {
      const blogs = JSON.parse(storedBlogs);

      const foundBlog = blogs.find(
        (item) => String(item.id) === String(id)
      );

      setBlog(foundBlog || null);
    } catch (error) {
      console.error(
        "Error loading blog:",
        error
      );
    }
  }, [id]);

  if (!blog) {
    return (
      <main className="not-found">
        <h1>Blog Not Found</h1>

        <p>
          The blog you are looking for does not exist.
        </p>

        <Link to="/blogs">
          ← Back to Blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="blog-details">

      <Link
        to="/blogs"
        className="back-link"
      >
        ← Back to Blogs
      </Link>

      <article>

        <span className="blog-category">
          {blog.category}
        </span>

        <h1>{blog.title}</h1>

        <p className="blog-author">
          By {blog.author}
        </p>

        <hr />

        <div className="blog-content">
          <p>{blog.content}</p>
        </div>

      </article>

    </main>
  );
};

export default BlogDetails;