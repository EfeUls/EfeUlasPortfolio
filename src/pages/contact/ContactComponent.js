import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio";
import profileImage from "../../assests/images/undraw_ios.svg";
import AddressImg from "./AddressImg";
import "./ContactComponent.css";

const { contactSection, addressSection, phoneSection } = contactPageData;

export default function Contact({ theme }) {
  const [draftRequested, setDraftRequested] = useState(false);

  function openEmailDraft(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = fields.get("name").trim();
    const email = fields.get("email").trim();
    const message = fields.get("message").trim();
    const subject = encodeURIComponent("Portföy iletişim formu: " + name);
    const body = encodeURIComponent("Ad: " + name + "\r\nE-posta: " + email + "\r\n\r\n" + message);

    setDraftRequested(true);
    window.location.href = "mailto:" + contactSection.email + "?subject=" + subject + "&body=" + body;
  }

  const fieldStyle = {
    backgroundColor: theme.body,
    color: theme.text,
    border: "1px solid " + theme.text + "50",
  };

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <main className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img src={profileImage} alt="" />
            </div>
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text">{contactSection.title}</h1>
              <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {contactSection.description}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
        </Fade>

        <section className="contact-form-div" style={{ backgroundColor: theme.body }}>
          <h2 className="form-heading">İletişim Formu</h2>
          <p>Mesajınızı kendi e-posta uygulamanızdan gönderebilirsiniz.</p>
          <form onSubmit={openEmailDraft} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Adınız</label>
              <input id="contact-name" name="name" autoComplete="name" required style={fieldStyle} />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">E-posta adresiniz</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required style={fieldStyle} />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Mesajınız</label>
              <textarea id="contact-message" name="message" required style={fieldStyle} />
            </div>
            <button type="submit" className="submit-btn" style={{ color: theme.body, backgroundColor: theme.text }}>
              E-posta taslağını aç
            </button>
          </form>
          <p role="status">
            {draftRequested && "Taslak açıldıysa e-posta uygulamanızda Gönder’e basın. "}
            Doğrudan yazmak için <a href={"mailto:" + contactSection.email}>{contactSection.email}</a>
          </p>
        </section>

        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="address-heading-text-div">
              <h2 className="address-heading-text">{addressSection.title}</h2>
              <p>{addressSection.subtitle}</p>
              <h2 className="address-heading-text">{phoneSection.title}</h2>
              <p><a href={"tel:" + phoneSection.subtitle.replace(/\s/g, "")}>{phoneSection.subtitle}</a></p>
              <Button text="Google Haritalar’da aç" className="address-btn-div" href={addressSection.location_map_link} newTab theme={theme} />
            </div>
          </div>
        </Fade>
      </main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
