# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



In React, both **loaders** (from React Router) and **useEffect** (a React Hook) are used to fetch and manage data, but they serve different purposes and work in different ways. Here's a breakdown of their differences:

---

### **1. Loader (React Router)**
- **Purpose**: Used for **data fetching before rendering** a route.
- **Execution**: Runs before the component is rendered.
- **Server-side Friendly**: Can be used in server-side rendering (SSR).
- **Return Data**: Passes data as a prop to the component.
- **Automatic Handling**: Works with React Router’s `<Await>` and `useLoaderData()`.

#### **Example of a Loader in React Router**
```jsx
import { useLoaderData } from "react-router-dom";

export async function userLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
}

function UserProfile() {
  const user = useLoaderData(); // Accessing preloaded data
  return <h1>{user.name}</h1>;
}
```
**Key Points:**
- Runs **before** rendering the component.
- Used in **React Router routes**.
- Data is fetched **before component mounts**.

---

### **2. useEffect (React Hook)**
- **Purpose**: Used for **side effects** after the component is rendered.
- **Execution**: Runs **after** the component has mounted.
- **Client-side Only**: Runs in the browser, not during SSR.
- **Return Data**: Updates state inside the component.

#### **Example of useEffect for Data Fetching**
```jsx
import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); // Runs once when component mounts

  return <h1>{user?.name || "Loading..."}</h1>;
}
```
**Key Points:**
- Runs **after** rendering.
- Used in **any component** (not just route components).
- Can be used for **various side effects** (e.g., event listeners, timers, subscriptions).

---

### **Key Differences**
| Feature         | Loader (React Router) | useEffect (React Hook) |
|---------------|-------------------|-----------------|
| **When it runs?** | Before component renders | After component renders |
| **Where it runs?** | Inside React Router routes | Inside any React component |
| **Blocking Rendering?** | Yes (data is loaded first) | No (renders first, updates later) |
| **Used for?** | Preloading data for routes | Side effects, API calls, event listeners |
| **Server-Side Support?** | Yes (can be used in SSR) | No (only runs in the browser) |

---

### **When to Use What?**
✅ **Use Loader if:**
- You want to **fetch data before rendering** a route.
- You are using **React Router**.
- You need better **SSR support**.

✅ **Use useEffect if:**
- You need to **fetch data after component mounts**.
- You want to handle **side effects** (e.g., event listeners, local storage).
- You are not using **React Router** or need dynamic fetching inside a component.

---

Would you like an example where both are used together in a real-world scenario? 🚀
