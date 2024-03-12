// CSS
import "./Services.css";

// Icons
import files from "../../assets/icons/files.png";
import paint from "../../assets/icons/paint.png";
import apps from "../../assets/icons/apps.png";
import bot from "../../assets/icons/bot.png";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";

// react-i18next
import { useTranslation } from "react-i18next";

// Hooks
import { useState } from "react";

function Service() {
  const { t } = useTranslation();
  const [sliderIndex, setSliderIndex] = useState(0);

  const services = [
    {
      icon: apps,
      title: "Mobile Apps",
      description: "I can create any type of mobile app you want.",
    },
    {
      icon: files,
      title: "Web Sites",
      description: "I can build a website for you in no time.",
    },
    {
      icon: paint,
      title: "UI / UX Design",
      description: "I can create a copy of the website layout.",
    },
    {
      icon: paint,
      title: "UI / UX Design",
      description: "I can create a copy of the website layout.",
    },
    {
      icon: bot,
      title: "Telegram Bots",
      description: "I can create a telegram bot for you.",
    },
    {
      icon: bot,
      title: "Telegram Bots",
      description: "I can create a telegram bot for you.",
    },
  ];

  return (
    <section className="service">
      <div className="container">
        <div className="title">
          <h1>Service</h1>
        </div>
        <div className="services flex alignCenter wf-100">
          <div
            className="servicesItems flex alignCenter justifyBetween"
            style={{ transform: `translateX(${-sliderIndex * 16.7}rem)` }}
          >
            {services.map((item, index) => {
              return (
                <div className="serviceItem" key={index}>
                  <div className="serviceItem_title">
                    <img src={item.icon} alt="Pencil image" />
                    <h3>{item.title}</h3>
                  </div>
                  <div className="serviceItem_body">
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="slider flex alignCenter justifyBetween">
            <div className="slideBlur slideBlur_left flex alignCenter">
              <button
                className="leftBtn slideBtn flex alignCenter justifyCenter"
                disabled={sliderIndex == 0 ? true : false}
                onClick={() => {
                  setSliderIndex(sliderIndex - 1);
                }}
              >
                <img src={left} alt="Left arrow" />
              </button>
            </div>
            <div className="slideBlur slideBlur_right flex alignCenter">
              <button
                className="rightBtn slideBtn flex alignCenter justifyCenter"
                disabled={sliderIndex > services.length - 4 ? true : false}
                onClick={() => {
                  setSliderIndex(sliderIndex + 1);
                }}
              >
                <img src={right} alt="Right arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
