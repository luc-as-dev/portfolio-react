import { useState } from "react";
import Card from "../UI/Card/Card";
import TextInput from "../UI/TextInput/TextInput";
import "./ContactForm.scss";

type Props = {
  className?: string;
};

export default function ContactForm({ className }: Props) {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  return (
    <Card
      className={`contact-form ${className || ""}`.trim()}
      classNameInner="contact-form-inner"
    >
      <p>
        Hey! I am{" "}
        <TextInput value={name} setValue={setName} placeholder="name" /> and I
        have a{" "}
        <TextInput
          value={subject}
          setValue={setSubject}
          placeholder="project, full-time job, etc"
        />{" "}
        which I believe will interest you. You can contact me at{" "}
        <TextInput
          value={contact}
          setValue={setContact}
          placeholder="mail or phone number"
        />{" "}
        for more info.
      </p>
    </Card>
  );
}
