import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";
import { useState } from "react";
import Timeline from "./components/Timeline";
import Scrolltop from "./components/Scrolltop";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Drawers from "./components/Drawers";
import Header from "./components/Header";

function App() {
  const [formData, setFormData] = useState({
    search: "",
    query: "",
    type: "",
    assignedto: "",
    collaborators: "",
    "": "",
    attachment: "",
    date_number: "",
    notifications: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="App">
      {/* <!--begin::Main--> */}
      {/* <!--begin::Root--> */}
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Page--> */}
        <div className="page d-flex flex-row flex-column-fluid">
          {/* <!--begin::Wrapper--> */}
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <Header />

            <Toolbar />
            {/* <!--begin::Container--> */}
            <div
              id="kt_content_container"
              className="d-flex flex-column-fluid align-items-start container-xxl"
            >
              <Post />
            </div>
            {/* <!--end::Container--> */}
            <Footer />
          </div>
          {/* <!--end::Wrapper--> */}
        </div>
        {/* <!--end::Page--> */}
      </div>
      {/* <!--end::Root--> */}

      <Drawers />

      {/* <!--end::Main--> */}
      <Scrolltop />
    </div>
  );
}

export default App;
