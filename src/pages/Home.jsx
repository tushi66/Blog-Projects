import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            ReactJS Documentation
          </span>

          <h1>
            Learn ReactJS.
            <br />
            Build Better Applications.
          </h1>

          <p>
            Explore simple and practical documentation
            about ReactJS, JavaScript, HTML, CSS and
            modern web development.
          </p>

          <div className="hero-buttons">

            <Link
              to="/blogs"
              className="primary-button"
            >
              Explore Blogs →
            </Link>

            <Link
              to="/add-blog"
              className="secondary-button"
            >
              Add New Blog
            </Link>

          </div>

        </div>

      </section>

      <section className="features-section">

        <div className="section-heading">

          <h2>What You Can Learn</h2>

          <p>
            Improve your web development knowledge
            through practical documentation.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              ⚛️
            </div>

            <h3>ReactJS</h3>

            <p>
              Learn components, JSX, props, state,
              hooks and React fundamentals.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              💻
            </div>

            <h3>JavaScript</h3>

            <p>
              Understand modern JavaScript ES6 features
              used in React applications.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🌐
            </div>

            <h3>Web Development</h3>

            <p>
              Explore HTML, CSS and other important
              concepts for building websites.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;