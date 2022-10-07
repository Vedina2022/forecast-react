import React from "react";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a
        href="https://www.linkedin.com/in/nadiia-kyshinska-8aa342168/"
        target="_blank"
        title="LinkedIn profile"
        className="branding-link"
        rel="noreferrer"
      >
        {" "}
        Nadiia Kyshinska,
      </a>{" "}
      and is
      <a
        href="https://github.com/Vedina2022/forecast-react"
        target="_blank"
        className="branding-link"
        title="GitHub link"
        rel="noreferrer"
      >
        {" "}
        open-sourced on GitHub.
      </a>{" "}
    </footer>
  );
}
