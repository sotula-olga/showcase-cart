import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routers } from "./routers";

function App()
{
  return (
    <div className="app">
      <RouterProvider router={createBrowserRouter(routers)} />
    </div>
  );
}

export default App;
