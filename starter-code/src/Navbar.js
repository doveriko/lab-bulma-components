import React from "react";
import CoolButton from "./CoolButton";

function Navbar() {
  return (
    <div>

      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/home">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
              
              <CoolButton className="button is-rounded my-class is-danger is-normal">Login</CoolButton>
              <CoolButton className="button is-normal is-success">Signup</CoolButton>

              </div>
            </div>
          </div>

        </div>
      </nav>

    </div>
  );
}

export default Navbar;
