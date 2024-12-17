import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import Hero from "./Hero";
import About from "./AboutUs";
import List from "./List";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsappButton";
import Services from "./Services";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const contactFormRef = useRef();
  const slidetoContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {" "}
      <Hero slidetoContactForm={slidetoContactForm} />
      <About />
      <List />
      <Services />
      <Contact ref={contactFormRef} />
      <WhatsAppButton />
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
};

export default Home;
