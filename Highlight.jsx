import React from "react";

function Highlight({icon, title, para}) {
  /* Va destrutturata due volte perchè i prop anche se sono da stringhe
  vengono impacchettati in un qualche oggetto, in cui bisogna
  scendere due volte nelle sottosezioni onomine della variabile che cerco. */
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
}

export default Highlight;
