import React from "react";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1yO3WC-TK6Bl2U0FMEqEgGhnurCoe2yN-/view?usp=sharing"
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
