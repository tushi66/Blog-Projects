# 📚 Documentation Blog

A modern and responsive **Documentation Blog application** built with **ReactJS**.

This project allows users to **create, read, update, delete, search, and filter documentation/blog posts**. It is designed as a learning project to practice React fundamentals, reusable components, React Router DOM, Hooks, CRUD operations, LocalStorage, JavaScript ES6, and responsive CSS.

---

## 📑 Table of Contents

* [About the Project](#-about-the-project)
* [Features](#-features)
* [Pages](#-pages)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [React Concepts Used](#-react-concepts-used)
* [CRUD Operations](#-crud-operations)
* [LocalStorage](#-localstorage)
* [Application Flow](#-application-flow)
* [Routes](#-routes)
* [Installation](#-installation)
* [Run the Project](#-run-the-project)
* [Learning Outcomes](#-learning-outcomes)
* [Future Improvements](#-future-improvements)
* [Author](#-author)

---

# 📖 About the Project

**Documentation Blog** is a Single Page Application built using ReactJS.

The purpose of this project is to create a simple documentation platform where users can read programming articles and manage blog content.

The application supports:

* Viewing documentation
* Searching blogs
* Filtering blogs by category
* Reading complete blog content
* Creating new blogs
* Editing existing blogs
* Deleting blogs
* Storing blog data in LocalStorage
* Client-side navigation
* Responsive design

The project uses a **reusable `BlogForm` component** for both creating and editing blogs.

---

# ✨ Features

## 🏠 Home Page

The Home page provides an introduction to the Documentation Blog.

### Includes:

* Project introduction
* ReactJS documentation information
* Explore Blogs button
* Add New Blog button
* Learning topic cards

---

## 📚 Blog Listing

The Blogs page displays all available documentation posts.

Each blog card contains:

* Blog title
* Category
* Description
* Author
* Read More button
* Edit button
* Delete button

The page also displays the total number of blogs currently shown.

Example:

```text
Showing 6 blogs
```

---

## 🔍 Search

Users can search for blogs using keywords.

The search checks:

* Blog title
* Blog description

Example:

```text
Search: React

        ↓

React-related blogs
```

---

## 🗂️ Category Filter

Users can filter blogs by category.

### Available Categories

```text
React
JavaScript
HTML
CSS
```

The category list is generated dynamically from the available blog data.

---

## 📄 Blog Details

Users can click **Read More** to open the complete blog article.

The Blog Details page displays:

* Category
* Blog title
* Author
* Complete blog content
* Back to Blogs button

Example URL:

```text
/blogs/1
```

---

## ➕ Add Blog

Users can create a new documentation article.

### Blog Form Fields

| Field        | Purpose                     |
| ------------ | --------------------------- |
| Blog Title   | Enter the blog title        |
| Category     | Select blog category        |
| Description  | Enter a short description   |
| Blog Content | Write complete blog content |
| Author       | Enter author name           |

After submitting the form:

```text
Add Blog
    ↓
BlogForm
    ↓
Create Blog
    ↓
LocalStorage
    ↓
Blogs Page
```

---

## ✏️ Edit Blog

Users can update an existing blog.

The project uses the same **`BlogForm` component** for both Add and Edit functionality.

```text
             BlogForm
                ▲
                │
       ┌────────┴────────┐
       │                 │
    Add Blog          Edit Blog
       │                 │
   Empty Form       Existing Data
       │                 │
       └────────┬────────┘
                ↓
           LocalStorage
```

This avoids duplicate forms and keeps the code reusable.

---

## 🗑️ Delete Blog

Users can delete blogs from the Blogs page.

Before deletion, the application asks for confirmation.

```text
Delete
   ↓
Confirmation
   ↓
Confirm
   ↓
Remove Blog
   ↓
Update State
   ↓
Update LocalStorage
```

If the user cancels the confirmation, the blog remains unchanged.

---

# 📄 Pages

The application contains the following pages:

### 1. Home

```text
/
```

Introduction and navigation to the main features.

### 2. Blogs

```text
/blogs
```

Displays all documentation posts with search and category filtering.

### 3. Blog Details

```text
/blogs/:id
```

Displays the complete content of a selected blog.

### 4. Add Blog

```text
/add-blog
```

Provides a form to create a new blog.

### 5. Edit Blog

```text
/edit-blog/:id
```

Provides a form to update an existing blog.

### 6. Not Found

```text
*
```

Displays a 404 page when the requested route does not exist.

---

# 🛠️ Technology Stack

| Technology           | Purpose                        |
| -------------------- | ------------------------------ |
| **ReactJS**          | Build the user interface       |
| **Vite**             | Development and build tool     |
| **JavaScript ES6**   | Application logic              |
| **React Router DOM** | Routing and navigation         |
| **HTML5**            | Page structure                 |
| **CSS3**             | Styling and responsive design  |
| **LocalStorage**     | Store blog data in the browser |

---

# 📂 Project Structure

```text
documentation-blog/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── BlogCard.jsx
│   │   └── BlogForm.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blogs.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── AddBlog.jsx
│   │   ├── EditBlog.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── blogs.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚛️ React Concepts Used

This project demonstrates several important React concepts.

## Components

The application is divided into reusable components:

```text
Navbar
Footer
BlogCard
BlogForm
```

This makes the application easier to maintain and reuse.

---

## JSX

JSX is used to create React user interfaces.

Example:

```jsx
<h1>Documentation Blog</h1>
```

---

## Props

Props are used to pass data and functions between components.

Example:

```jsx
<BlogCard
  blog={blog}
  onDelete={handleDeleteBlog}
/>
```

Here:

* `blog` passes blog data.
* `onDelete` passes the delete function.

---

## useState

`useState` is used to manage component state.

Example:

```jsx
const [blogs, setBlogs] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
```

---

## useEffect

`useEffect` is used to load blog data from LocalStorage when the Blogs page loads.

Example:

```jsx
useEffect(() => {
  // Load blogs
}, []);
```

---

## useParams

`useParams` is used to get the blog ID from dynamic routes.

Example:

```text
/blogs/:id
```

The ID is used to find the selected blog.

---

## useNavigate

`useNavigate` is used to navigate programmatically after adding or editing a blog.

Example:

```jsx
navigate("/blogs");
```

---

## Conditional Rendering

Conditional rendering is used for situations such as:

```text
Blogs Available
      ↓
Display Blog Cards
```

or:

```text
No Blogs Available
      ↓
Display "No Blogs Found"
```

---

# 🔄 CRUD Operations

The project implements all four CRUD operations.

## 🟢 Create

A new blog is created using `BlogForm`.

```text
Add Blog
   ↓
BlogForm
   ↓
New Blog
   ↓
LocalStorage
```

---

## 🔵 Read

Users can read:

* All blogs
* Individual blog details
* Complete blog content

---

## 🟡 Update

Existing blogs can be edited.

```text
Edit
  ↓
BlogForm
  ↓
Update Data
  ↓
LocalStorage
```

---

## 🔴 Delete

Blogs can be deleted after confirmation.

```text
Delete
   ↓
Confirmation
   ↓
Remove Blog
   ↓
LocalStorage
```

---

# 💾 LocalStorage

The application uses browser LocalStorage instead of a backend database.

### Storage Key

```javascript
"blogs"
```

### Save Data

```javascript
localStorage.setItem(
  "blogs",
  JSON.stringify(blogs)
);
```

### Get Data

```javascript
const storedBlogs =
  localStorage.getItem("blogs");

const blogs =
  JSON.parse(storedBlogs);
```

---

## Initial Blog Data

The initial blog data is stored in:

```text
src/data/blogs.js
```

The application checks LocalStorage when the Blogs page loads.

### Data Logic

```text
              blogs.js
                 │
                 ▼
        Initial Blog Data
                 │
                 ▼
           LocalStorage
                 │
                 ▼
            Blogs Page
```

If LocalStorage already contains blogs, the application loads those blogs instead of overwriting them.

This allows Add, Edit, and Delete operations to persist after refreshing the browser.

---

# 🔄 Application Flow

```text
                         Documentation Blog
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
            Home              Blogs           Add Blog
                                │                 │
                                │                 ▼
                                │             BlogForm
                                │                 │
                                │                 ▼
                                │            LocalStorage
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
                 Search      Filter      Blog Card
                                            │
                              ┌─────────────┼─────────────┐
                              │             │             │
                              ▼             ▼             ▼
                         Read More        Edit         Delete
                              │             │             │
                              ▼             ▼             ▼
                         Blog Details   BlogForm     Confirmation
                                            │             │
                                            ▼             ▼
                                       LocalStorage   LocalStorage
```

---

# 🧭 Routes

| Route            | Page         | Description             |
| ---------------- | ------------ | ----------------------- |
| `/`              | Home         | Main application page   |
| `/blogs`         | Blogs        | Display all blogs       |
| `/blogs/:id`     | Blog Details | Display selected blog   |
| `/add-blog`      | Add Blog     | Create a new blog       |
| `/edit-blog/:id` | Edit Blog    | Update an existing blog |
| `*`              | Not Found    | Display 404 page        |

---

# 📱 Responsive Design

The application is designed to work on different screen sizes.

### Supported Devices

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

Responsive CSS media queries are used to adjust:

* Navigation
* Blog cards
* Blog grid
* Forms
* Buttons
* Page spacing

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone <your-repository-url>
```

## 2. Open the Project

```bash
cd documentation-blog
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Install React Router DOM

```bash
npm install react-router-dom
```

---

# ▶️ Run the Project

Start the Vite development server:

```bash
npm run dev
```

The terminal will display the local development URL.

Open the URL in your browser.

---

# 📋 Application Usage

### Read a Blog

```text
Blogs
  ↓
Read More
  ↓
Blog Details
```

### Add a Blog

```text
Add Blog
  ↓
Fill Form
  ↓
Add Blog
  ↓
Blogs
```

### Edit a Blog

```text
Blogs
  ↓
Edit
  ↓
Update Form
  ↓
Update Blog
  ↓
Blogs
```

### Delete a Blog

```text
Blogs
  ↓
Delete
  ↓
Confirm
  ↓
Blog Removed
```

---

# 🎓 Learning Outcomes

By completing this project, the following concepts are practiced:

### React

* Components
* JSX
* Props
* State
* `useState`
* `useEffect`

### React Router

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `NavLink`
* `useParams`
* `useNavigate`
* Dynamic routing
* 404 routing

### JavaScript

* ES6 syntax
* Array methods
* `map()`
* `filter()`
* `find()`
* Spread operator
* Template literals
* JSON

### Application Development

* CRUD operations
* LocalStorage
* Search
* Category filtering
* Reusable forms
* Conditional rendering
* Responsive design

---

# 🔮 Future Improvements

The current project uses LocalStorage for data management.

Possible future improvements include:

* 🔐 User authentication
* 👤 User profiles
* 🛡️ Admin dashboard
* 🌐 Backend API
* ⚙️ Express.js
* 🗄️ MongoDB
* 🖼️ Image upload
* 📝 Rich text editor
* 📄 Pagination
* 🔎 Advanced search
* 💬 Comments
* ❤️ Like functionality
* 📤 Blog sharing
* 🌙 Dark mode
* 🔄 Redux Toolkit
* ☁️ Database integration

---

# 👨‍💻 Author

## Tushar Patel

**Full Stack Developer**

### Technologies Used

```text
ReactJS
JavaScript
Vite
React Router DOM
HTML5
CSS3
LocalStorage
```

---

# 🎯 Project Purpose

This project was created for **learning and practicing ReactJS development**.

The main goal is to understand how different React concepts work together to create a complete application.

```text
ReactJS
   │
   ├── Components
   ├── Props
   ├── State
   ├── Hooks
   ├── Routing
   ├── CRUD
   ├── LocalStorage
   ├── Search
   ├── Filtering
   └── Responsive Design
```

---

# 🏁 Conclusion

The **Documentation Blog** project demonstrates how to build a complete ReactJS Single Page Application using reusable components, React Hooks, React Router DOM, CRUD operations, LocalStorage, search, filtering, and responsive CSS.

The application provides a strong foundation for learning ReactJS and can later be extended into a full-stack documentation platform with authentication, APIs, and a database.
