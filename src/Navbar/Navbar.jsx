import React, { useState } from "react";
import './Navbar.css';
import { FaShoppingCart, FaSearch, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Franja superior con redes y contacto */}
      <div className="topbar">
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1F6N7PCaXZ/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
           <a href="https://www.instagram.com/mayuri_detalles?igsh=MTdvN3U2b2Nubzcxdg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/c/5493834578763" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
        <div className="contact-info">
          📞 +54 9 11 1234-5678
        </div>
      </div>

      <div className="navbar">
        <div className="nav_logo">MAYURI</div>

        <div className={`nav_items ${isOpen ? "open" : ""}`}>
          <a href="#">Inicio</a>
          <a href="https://wa.me/c/5493834578763">Contacto</a>
        </div>

        <div
          className={`nav_toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;