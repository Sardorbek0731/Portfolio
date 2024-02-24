// CSS
import "./Service.css";

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
      title: "",
      description: "",
    },
    {
      icon: files,
      title: "",
      description: "",
    },
    {
      icon: paint,
      title: "",
      description: "",
    },
    {
      icon: bot,
      title: "",
      description: "",
    },
  ];

  return (
    <section className="service">
      <div className="container">
        <div className="title">
          <h1>Service</h1>
        </div>
        <div className="services flex alignCenter justifyBetween wf-100">
          {/* <div className="serviceItem">
            <div className="serviceItem_title">
              <img src={files} alt="Pencil image" />
              <h3>Web Programm</h3>
            </div>
            <div className="serviceItem_body">
              <p>
                Lorem ipsum dolor sit consectetur adipisicing elit. Maiores
                aliquam delectus.
              </p>
            </div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem_title">
              <img src={apps} alt="Pencil image" />
              <h3>Mobile Apps</h3>
            </div>
            <div className="serviceItem_body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                aliquam delectus.
              </p>
            </div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem_title">
              <img src={paint} alt="Pencil image" />
              <h3>UI / UX Design</h3>
            </div>
            <div className="serviceItem_body">
              <p>
                Lorem dolor sit amet consectetur adipisicing elit. Maiores
                delectus odio.
              </p>
            </div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem_title">
              <img src={bot} alt="Pencil image" />
              <h3>Telegram Bots</h3>
            </div>
            <div className="serviceItem_body">
              <p>
                Lorem ipsum consectetur adipisicing. Maiores aliquam delectus
                odio a odit dolores.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Service;
