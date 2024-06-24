import Sign from "./SIGNUP/Sign";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./LOGIN/Login";
import Home from "./home.jsx"


function App() {
  
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    
    {
      path: "/",
      element: <Sign />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  );
}

export default App;


