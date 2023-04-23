import Card from "../UI/Card/Card";
import "./ContactMe.scss";

type Props = {
  className?: string;
};

export default function ContactMe({ className }: Props) {
  return (
    <Card
      className={`contact-me ${className}`.trim()}
      classNameInner="contact-me-inner"
    >
      <div className="contact-me-inner-text">
        <h2 className="contact-me-inner-text-title">Contact me</h2>
        <p className="contact-me-inner-text-info">
          Interested in what I can offer as a developer? Whether you're a
          potential client or employer, I'm always happy to connect. Feel free
          to reach out via the contact information below to start a
          conversation.
        </p>
      </div>
      <div className="contact-me-inner-links">
        <a
          className="contact-me-inner-links-link"
          href="https://www.linkedin.com/in/lucas-karlsson-luc-as-dev/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="contact-me-inner-links-link"
          href="mailto:lucas.karlsson@post.com"
        >
          Mail
        </a>
        <a className="contact-me-inner-links-link" href="tel:+46722268091">
          Phone
        </a>
      </div>
    </Card>
  );
}
