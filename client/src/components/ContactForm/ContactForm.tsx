import Card from "../UI/Card/Card";
import "./ContactForm.scss";

type Props = {
  className?: string;
};

export default function ContactForm({ className }: Props) {
  return (
    <Card
      className={`contact-form ${className || ""}`.trim()}
      classNameInner="contact-form-inner"
    >
      <p>
        My name is{" "}
        <input
          className="contact-form-inner-name"
          placeholder="John Doe from Acme"
        />{" "}
        and I have a{" "}
        <input
          className="contact-form-inner-subject"
          placeholder="project, fulltime job, etc"
        />{" "}
        that i think will fit you. You can reach me at{" "}
        <input
          className="contact-form-inner-contact"
          placeholder="john.doe@acme.com, +46 712 34 56 78"
        />{" "}
        for more details.
      </p>
    </Card>
  );
}
