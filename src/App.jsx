import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Books from "@/pages/Books";
import "./App.css";
import BorrowRecords from "@/pages/BorrowRecord";
import Reservations from "@/pages/Reservations";
import Profile from "@/pages/Profile";
// import NotFound from "@/pages/NotFound";

// Material Tailwind components
import { Snackbar, Tooltip } from "@material-tailwind/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* Navbar */}

      {/* Example global snackbar (you can trigger it via state) */}
      {/* <Snackbar
        open={false} // control with state
        message="This is a notification"
        color="blue"
      /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/borrow-records" element={<BorrowRecords />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
