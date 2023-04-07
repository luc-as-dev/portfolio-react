import "./ContactSection.scss";
import ContentRow from "../../UI/ContentRow/ContentRow";
import { useAppContext } from "../../../context/AppContext";
import SectionHeader from "../../SectionHeader/SectionHeader";

type Props = {};

export default function ContactSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section className="contact-section" id="contact" ref={sectionRefs.contact}>
      <SectionHeader
        label="Contact me"
        description="Feel free to contact me or use the form and i will contact you!"
      />
    </section>
  );
}
