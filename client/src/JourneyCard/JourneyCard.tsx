import Card from "../components/UI/Card/Card";
import "./JourneyCard.scss";
import JourneyItem from "./JourneyItem/JourneyItem";

type Props = {
  className?: string;
};

export default function JourneyCard({ className }: Props) {
  return (
    <Card
      className={`journey-card ${className || ""}`.trim()}
      classNameInner="journey-card-inner"
    >
      <JourneyItem date="2014" title={"The beginning of my new hobby"}>
        <p>I started to learn Java.</p>
      </JourneyItem>

      <JourneyItem date="2015" title={"Started a intro course on Arduino"}>
        <p>
          I went to a intro course once a week and learned the basic of Arduino.
        </p>
      </JourneyItem>

      <JourneyItem date="2015" title={"Started using Unity3D and C#"}>
        <p>I started using Unity3D and C# to create games.</p>
      </JourneyItem>

      <JourneyItem date="2015 - 2018" title={"Went to Gymnasium"}>
        <p>
          Went to Möckeln gymnasiet and enhanced my math and programming skills.
        </p>
        <p>Math 1c, 2c, 3c, 4 and 5</p>
        <p>Programming 1, 2 (Python)</p>
        <p>
          Web-development 1 and Web-server programming 1 (HTML, CSS, JS, PHP)
        </p>
      </JourneyItem>

      <JourneyItem date="2019" title={"Went to University"}>
        <p>Went to Örebro University and dropped out 6 months in.</p>
        <p>Enhanced my math and was introduced to matrices</p>
        <p>
          Was introduced to C. I had a lot of fun while coding C and got a
          better understanding of pointer.
        </p>
      </JourneyItem>

      <JourneyItem date="2020-2021" title={"A brake from all the code"}>
        <p>
          I spent time on my other hobby cars. I started to work in a store
          selling Car audio. This was a lot of fun, i could use my knowledge in
          math and physics to help the customer get the best audio for their
          cars.
        </p>
        <p>
          After 6 moths i the store i accepted a job offer by the same company
          to work with customer-service/remote-sales instead. 2 moths later I
          got an offer to manage Services and Reclamations due to my ability te
          keep calm in stressful situations and my competence in amplifiers and
          installations.
        </p>
        <p>
          I did this for a year but all the time i missed helping people and
          explaining how the should do to get good results. Instead i spend most
          of the day explaining what they did wrong and why the broke their
          expansive equipment and why it is not covered by warranty. This was
          the reason why i chose to quit.
        </p>
      </JourneyItem>

      <JourneyItem date="2015" title={"Tried something else"}>
        <p>Started working </p>
      </JourneyItem>

      <JourneyItem date="2022-2023" title={"I want to work as a developer now"}>
        <p>Found out about Techover...</p>
      </JourneyItem>
    </Card>
  );
}
