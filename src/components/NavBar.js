import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  

  const linkItems = links.map((link) => (
    <a key= {link} href = {"#" + link}> {link} </a>

  ))

  return <nav>{linkItems}</nav>;
}

export default NavBar;
