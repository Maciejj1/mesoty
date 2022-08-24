import React from "react";
import manonchair2 from "../Assets/manonchair2.png";
import "./FourPage.scss";
const FourPage = () => {
  return (
    <div className="four">
      <div className="four-base">
        <div className="four-base-title">
          <h1 className="four-base-title-text">REALIZACJA</h1>
        </div>
        <div className="four-base-content">
          <div className="four-base-content-info">
            <h3>1.Konsultacja z klientem</h3>
            <h3>2.STWORZENIE PROJEKTU GRAFICZNEGO W FIGMIE</h3>
            <h3>3.Akceptacja klienta i rozpoczecie prac</h3>
            <h3>4.Oddanie dla klienta i zabezpieczenie strony</h3>
            <h3>5.Utrzymywanie serwisu</h3>
          </div>
          <div className="four-base-content-text">
            <p>
              My zbudujemy Twoją stronę i zajmiemy się jej obsługą, a Ty możesz
              skupić się na rozwoju biznesu.
            </p>
            <p>
              Wspiera Cię dedykowany opiekun, dostępny na każdym etapie naszej
              współpracy. Doradzi Ci również, jak prowadzić oraz promować stronę
              online.
            </p>
            <p>
              Nielimitowane zmiany na stronie. Kontaktujesz się z opiekunem i
              przedstawiasz swoje potrzeby, a my zajmiemy się resztą.
            </p>
          </div>
          <div className="four-base-content-image">
            <img
              src={manonchair2}
              alt="pan na krzesle"
              className="four-base-content-image-png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPage;
