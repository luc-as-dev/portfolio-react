import "./ContactSection.scss";
import ContentRow from "../../UI/ContentRow/ContentRow";
import { useAppContext } from "../../../context/AppContext";

type Props = {};

export default function ContactSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section className="contact-section" id="contact" ref={sectionRefs.contact}>
      <ContentRow>
        <div
          style={{
            background: "var(--app-content-bg)",
            height: "200px",
            width: "100%",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "var(--app-content-bg)",
            height: "200px",
            width: "100%",
            borderRadius: "8px",
          }}
        ></div>
      </ContentRow>
      <ContentRow>
        <div
          style={{
            background: "var(--app-content-bg)",
            height: "200px",
            width: "100%",
            borderRadius: "8px",
          }}
        ></div>
      </ContentRow>
    </section>
  );
}
