import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routers } from "./routers";

import "./App.css";

function App()
{
  return (
    <div className="app">
      <RouterProvider router={createBrowserRouter(routers)} />
    </div>
  );
}

export default App;
