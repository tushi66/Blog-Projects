import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const AddBlog = () => {
  const navigate = useNavigate();

  const handleAddBlog = (formData) => {
    const storedBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];

    const newBlog = {
      id: Date.now(),
      ...formData,
    };

    const updatedBlogs = [
      ...storedBlogs,
      newBlog,
    ];

    localStorage.setItem(
      "blogs",
      JSON.stringify(updatedBlogs)
    );

    navigate("/blogs");
  };

  return (
    
    <main>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Add New Blog
      </h1>

      <p style={{ textAlign: "center" }}>
        Create a new documentation article.
      </p>

      <BlogForm
        onSubmit={handleAddBlog}
        buttonText="Add Blog"
      />
    </main>
  );
};

export default AddBlog;