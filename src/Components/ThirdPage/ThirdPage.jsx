import React from "react";
import devices from "../Assets/devices.png";
import roll from "../Assets/roll.png";
import secuirty from "../Assets/security.png";
import user from "../Assets/user.png";
import "./ThirdPage.scss";
const ThirdPage = () => {
  return (
    <div className="third">
      <div className="third-base">
        <div className="third-base-text">
          <h2 className="third-base-text-first">WSPIERAMY TWÓJ BIZNES</h2>
          <h2 className="third-base-text-second">
            Mamy wszystko, co potrzebne do stworzenia, prowadzenia, ochrony i
            obsługi strony WWW Twojej firmy.
          </h2>
          <h1 className="third-base-text-title">Oferujemy:</h1>
        </div>
        <div className="third-base-content">
          <div className="third-base-content-item">
            <img
              src={devices}
              alt="icon"
              className="third-base-content-item-image"
            />
            <h4 className="third-base-content-item-title">Mobilność</h4>
            <p className="third-base-content-item-text">
              Twoja strona będzie szybko i bezproblemowo wyświetlana na
              komputerach, tabletach i smartfonach. Dzięki temu dotrzesz do
              swoich klientów niezależnie od urządzenia, z którego korzystają.
            </p>
          </div>
          <div className="third-base-content-item">
            <img
              src={user}
              alt="icon"
              className="third-base-content-item-image"
            />
            <h4 className="third-base-content-item-title">Mobilność</h4>
            <p className="third-base-content-item-text">
              Twoja strona będzie szybko i bezproblemowo wyświetlana na
              komputerach, tabletach i smartfonach. Dzięki temu dotrzesz do
              swoich klientów niezależnie od urządzenia, z którego korzystają.
            </p>
          </div>
          <div className="third-base-content-item">
            <img
              src={secuirty}
              alt="icon"
              className="third-base-content-item-image"
            />
            <h4 className="third-base-content-item-title">Mobilność</h4>
            <p className="third-base-content-item-text">
              Twoja strona będzie szybko i bezproblemowo wyświetlana na
              komputerach, tabletach i smartfonach. Dzięki temu dotrzesz do
              swoich klientów niezależnie od urządzenia, z którego korzystają.
            </p>
          </div>
          <div className="third-base-content-item">
            <img
              src={roll}
              alt="icon"
              className="third-base-content-item-image"
            />
            <h4 className="third-base-content-item-title">Mobilność</h4>
            <p className="third-base-content-item-text">
              Twoja strona będzie szybko i bezproblemowo wyświetlana na
              komputerach, tabletach i smartfonach. Dzięki temu dotrzesz do
              swoich klientów niezależnie od urządzenia, z którego korzystają.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
