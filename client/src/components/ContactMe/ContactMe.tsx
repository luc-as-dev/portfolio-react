import { useState } from "react";
import Card from "../UI/Card/Card";
import "./ContactMe.scss";

type Props = {
  className?: string;
};

export default function ContactMe({ className }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function contactOnClickHandler() {}

  return (
    <div className={`contact-me ${className}`.trim()}>
      <a
        className="contact-me-link"
        href="https://www.linkedin.com/in/lucas-karlsson-luc-as-dev/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a className="contact-me-link" href="mailto:lucas.karlsson@post.com">
        Mail
      </a>
      <a className="contact-me-link" href="tel:+46722268091">
        Phone
      </a>
    </div>
  );
}
