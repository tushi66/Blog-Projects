import { useState } from "react";

const BlogForm = ({
  onSubmit,
  initialData = null,
  buttonText = "Add Blog",
}) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    category: initialData?.category || "React",
    description: initialData?.description || "",
    content: initialData?.content || "",
    author: initialData?.author || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        background: "#ffffff",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="title">
          <strong>Blog Title</strong>
        </label>

        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "8px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category">
          <strong>Category</strong>
        </label>

        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "8px",
          }}
        >
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="description">
          <strong>Description</strong>
        </label>

        <textarea
          id="description"
          name="description"
          placeholder="Enter short description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "8px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="content">
          <strong>Blog Content</strong>
        </label>

        <textarea
          id="content"
          name="content"
          placeholder="Write your blog content..."
          value={formData.content}
          onChange={handleChange}
          rows="10"
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "8px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="author">
          <strong>Author</strong>
        </label>

        <input
          type="text"
          id="author"
          name="author"
          placeholder="Enter author name"
          value={formData.author}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "8px",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "12px 25px",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default BlogForm;