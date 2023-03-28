import "./ContactSection.scss";
import ContentRow from "../../components/UI/ContentRow/ContentRow";

type Props = {};

export default function ContactSection({}: Props) {
  return (
    <section className="contact-section" id="contact">
      <ContentRow>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            width: "100%",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            width: "100%",
            borderRadius: "8px",
          }}
        ></div>
      </ContentRow>
      <ContentRow>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            width: "100%",
            borderRadius: "8px",
          }}
        ></div>
      </ContentRow>
    </section>
  );
}
