import "./HomeSection.scss";
import ContentImage from "../../components/UI/ContentImage/ContentImage";
import ContentRow from "../../components/UI/ContentRow/ContentRow";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

import HERO_IMAGE from "../../assets/hero.jpg";

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <section className="home-section" id="home">
      <ContentRow className="home-section-row-1">
        <WelcomeCard className="home-section-row-1-welcome" />
        <ContentImage className="home-section-row-1-hero" src={HERO_IMAGE} />
      </ContentRow>
    </section>
  );
}