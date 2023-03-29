import SliderCard from "../UI/SliderCard/SliderCard";
import CompetenceIcon from "./CompetenceIcon/CompetenceIcon";

const AUTO_TIME_MS = 2000;

type Props = {
  perView: number;
  className?: string;
};

export default function CompetenceSlider({ perView, className }: Props) {
  const classes = `${className ? " " + className : ""}`;
  return (
    <SliderCard
      className={classes}
      options={{
        mode: "free-snap",
        loop: true,
        slides: {
          origin: "center",
          perView,
        },
      }}
      plugins={[
        (slider) => {
          let timeout: number;
          let mouseOver = false;

          function clearNextTimeout() {
            clearTimeout(timeout);
          }

          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, AUTO_TIME_MS);
          }

          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]}
    >
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        label="React"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        label="Python"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        label="Javascript"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        label="Typescript"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
        label="HTML"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
        label="CSS"
      />
      <CompetenceIcon
        src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
        label="Sass"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        label="Tailwind"
      />
      <CompetenceIcon
        src="https://socket.io/images/logo.svg"
        label="Socket.io"
      />
      <CompetenceIcon
        src="https://img.icons8.com/color/512/mongodb.png"
        label="MongoDB"
      />
      <CompetenceIcon
        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        label="Git"
      />
      <CompetenceIcon
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        label="Node.js"
      />
      <CompetenceIcon
        src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
        label="Next.js"
      />
    </SliderCard>
  );
}
