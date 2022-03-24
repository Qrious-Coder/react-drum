import React from "react";
import github from "../styles/github.png";
import tele from "../styles/tele.png";
import whatsapp from "../styles/whatsapp.png";
import gmail from "../styles/gmail.png";
import { heading1, musicIcon } from "../styles/Styles";

const Footer = () => {
  return (
    <div className={`${heading1} text-purple-100`}>
      <p>
        <small>This project is built with React and Tailwind CSS.</small>
      </p>
      <p>
        <small>
          {" "}
          View my code on{" "}
          <span style={{ textDecoration: "underline purple", color: "pink" }}>
            <a
              href="https://github.com/Qrious-Coder/react-drum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>{" "}
          or drop me your comments at any below:
        </small>
      </p>
      <p className="grid grid-cols-4 gap-0 mx-auto place-content-center w-48 my-3">
        <span className="footerIcon">
          <a
            href="https://qrious-coder.github.io/react-drum/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" width={30} height={30} />
          </a>
        </span>
        <span className="footerIcon">
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=[q81188118@gmail.com]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} alt="github" width={30} height={30} />
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://wa.me/639086471423" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="github" width={30} height={30} />
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://t.me/Hillary_Duan" target="_blank" rel="noopener noreferrer">
            <img src={tele} alt="email" width={30} height={30} />
          </a>
        </span>
      </p>
      <p className="inline-flex">
        <small>
          <span className="inline-flex justify-end mr-10">{musicIcon}</span>
          Copyright © 2022 Q_coder. All Rights Reserved.
          <span className="inline-flex justify-end ml-10">{musicIcon}</span>
        </small>
      </p>
    </div>
  );
};

export default Footer;
