import React from "react";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/16URHhGj3knQug12afn2NsoW1WEnKe6Pe/view?usp=sharing"
        }
        download
        className="btn"
      >
        View Résumé
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
