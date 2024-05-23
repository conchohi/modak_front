import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <RouterProvider router={root} />;
}
export default App;
