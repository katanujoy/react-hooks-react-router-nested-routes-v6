import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />  {/* Navigation will appear on all pages */}
      </header>
      <main>
        <Outlet />  {/* This renders the nested route components */}
      </main>
    </>
  );
}

export default App;