import { Link } from "react-router-dom";

const BlogCard = ({ blog, onDelete }) => {
  return (
    <article className="blog-card">

      <span className="blog-category">
        {blog.category}
      </span>

      <h2>{blog.title}</h2>

      <p>{blog.description}</p>

      <div className="blog-footer">

        <span>
          By {blog.author}
        </span>

        <div className="blog-actions ">

          <Link to={`/blogs/${blog.id}`}>
            Read More →
          </Link>

          <Link to={`/edit-blog/${blog.id}`}>
            Edit
          </Link>

          <button
            type="button"
            onClick={() => onDelete(blog.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </article>
  );
};

export default BlogCard;