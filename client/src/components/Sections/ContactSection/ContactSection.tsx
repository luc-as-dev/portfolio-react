import "./ContactSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ContactForm from "../../ContactForm/ContactForm";
import Card from "../../UI/Card/Card";

import heroContactImg from "../../../assets/hero-contact.png";

type Props = {};

export default function ContactSection({}: Props) {
  return (
    <section className="contact-section" id="contact">
      <SectionHeader
        label="Contact me"
        description="Feel free to contact me or use the form and i will contact you!"
      />
      <div className="contact-section-content">
        <Card className="contact-section-content-hero">
          <img
            className="contact-section-content-hero-img"
            src={heroContactImg}
          />
        </Card>
        <ContactForm className="contact-section-content-form" />
      </div>
    </section>
  );
}
