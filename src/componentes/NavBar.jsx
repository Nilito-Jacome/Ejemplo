import "./Navbar.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import PropTypes from 'prop-types';


function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            ".menu",
            { transform: "translateX(442%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 }
          ],
          [
            "ul a",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.3), at: "-0.1" }
          ]
        ]
      : [
          [
            "ul a",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.2, { from: "last" }), at: "<" }
          ],
          [".menu", { transform: "translateX(600%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 1 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen, animate]);

  return scope;
}

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="2"
    stroke="seashell"
    strokeLinecap="round"
    {...props}
  />
);

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="Navbar">
      <div className="saludo">
        <img className="icon_nav" src="./etiqueta.png" alt="" />
        <a className="navbar-logo" href="/">Hola! Bienvenido</a>
      </div>

      <div className="Men" ref={scope}>
               
        <button onClick={toggle}>
          <svg width="23" height="18" viewBox="0 0 23 18">
            <Path
              d="M 2 2.5 L 20 2.5"
              className="top"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path
              d="M 2 16.346 L 20 16.346"
              className="bottom"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>

        <div className="menu">
          <ul>
          <div className="Inicio">
            <a href="/">Inicio</a>
          </div>

          <div className="SobreMi">
            <a href="#/about">Sobre Mi</a>
          </div>

          <div className="Habilidades">
            <a href="#/skill">Habilidades</a>
          </div>

          <div className="Proyectos">
            <a href="#/projects">Proyectos</a>
          </div>

          <div className="Certificados">
            <a href="#/certificates">Certificados</a>
          </div>

          <div className="Formulario">
            <a href="#/contact">Formulario</a>
          </div>

          </ul>
        </div>
        
      </div>

    </nav>
  );
}

Navbar.propTypes = {
  toggle : PropTypes.node,
}

export default Navbar;
