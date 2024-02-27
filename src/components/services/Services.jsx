// CSS
import "./Services.css";

// Icons
import files from "../../assets/icons/files.png";
import paint from "../../assets/icons/paint.png";
import apps from "../../assets/icons/apps.png";
import bot from "../../assets/icons/bot.png";

// react-i18next
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();

  const services = [
    {
      icon: apps,
      title: "Mobile Apps",
      description: "I can create any type of mobile app you want.",
    },
    {
      icon: files,
      title: "Web Programm",
      description: "I can build a website for you in no time.",
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
  ];

  return (
    <section className="service">
      <div className="container">
        <div className="title">
          <h1>Service</h1>
        </div>
        <div className="services flex alignCenter justifyBetween wf-100">
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
      </div>
    </section>
  );
}

export default Service;
