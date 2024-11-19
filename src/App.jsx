import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import RegistrationForm from './registrationForm';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/form",
    element: (
      <>
        <Navbar />
        <RegistrationForm />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);


function App() {
  return (
    <div>
    <RouterProvider router={router} />
  </div>
);
}

export default App;
