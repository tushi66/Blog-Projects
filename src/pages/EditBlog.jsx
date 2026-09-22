import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BlogForm from "../components/BlogForm";

const EditBlog = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    try {
      const storedBlogs =
        localStorage.getItem("blogs");

      const blogs = storedBlogs
        ? JSON.parse(storedBlogs)
        : [];

      const foundBlog = blogs.find(
        (item) => String(item.id) === String(id)
      );

      setBlog(foundBlog || null);
    } catch (error) {
      console.error(
        "Error loading blog:",
        error
      );

      setBlog(null);
    }
  }, [id]);

  const handleUpdateBlog = (formData) => {
    try {
      const storedBlogs =
        localStorage.getItem("blogs");

      const blogs = storedBlogs
        ? JSON.parse(storedBlogs)
        : [];

      const updatedBlogs = blogs.map((item) => {
        if (String(item.id) === String(id)) {
          return {
            ...item,
            ...formData,
          };
        }

        return item;
      });

      localStorage.setItem(
        "blogs",
        JSON.stringify(updatedBlogs)
      );

      navigate("/blogs");
    } catch (error) {
      console.error(
        "Error updating blog:",
        error
      );
    }
  };

  if (!blog) {
    return (
      <main
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>Blog Not Found</h1>

        <p>
          The blog you are trying to edit
          does not exist.
        </p>

        <button
          type="button"
          onClick={() => navigate("/blogs")}
        >
          Back to Blogs
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Edit Blog
      </h1>

      <p
        style={{
          textAlign: "center",
        }}
      >
        Update your documentation article.
      </p>

      <BlogForm
        initialData={blog}
        onSubmit={handleUpdateBlog}
        buttonText="Update Blog"
      />
    </main>
  );
};

export default EditBlog;