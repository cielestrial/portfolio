import { useContext, useState } from "react";
import placeholderImage from "../../assets/general/placeholder_image.png";
import { StateContext } from "../../utils/ContextProvider";
import ProjectView from "./ProjectView";

type statusType = "Completed" | "Work In Progress" | "Hiatus";
type propsType = {
  title: string;
  description: string;
  images: string[];
  link: string | undefined;
  status: statusType;
  order: number;
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  setGridEffect: React.Dispatch<React.SetStateAction<"fade-out" | "none">>;
};

const ProjectCard = (props: propsType) => {
  const context = useContext(StateContext);
  const [effect, setEffect] = useState<"slide-in" | "none">("slide-in");
  const label =
    "text-center font-semibold bg-slate-200 border-[0.625vmin] border-solid border-black " +
    "whitespace-nowrap ";

  return (
    <div
      id={"project card " + props.order}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter")
          event.currentTarget.dispatchEvent(context.clickEvent);
      }}
      onClick={() => {
        props.setGridEffect("fade-out");
        props.setSelectedProject(
          <ProjectView
            title={props.title}
            description={props.description}
            link={props.link}
            images={props.images}
            setShowProjectView={props.setShowProjectView}
          />
        );
      }}
      className={
        "flex flex-col flex-nowrap w-[35.56dvmin] h-fit " +
        "place-content-center sm:w-[28.45dvmin] my-[1dvmin] " +
        "drop-shadow-md transition-all duration-75 custom-ease-out " +
        "saturate-[.75] active:scale-95 outline-none outline-[0.4vmin] " +
        (!context.touchDevice.current
          ? "focus-visible:saturate-150 focus-visible:outline-amber-500 " +
            "hover:saturate-150 hover:outline-amber-500 "
          : "") +
        "cursor-pointer transform-gpu " +
        (effect === "slide-in"
          ? props.order === 0
            ? "animate-[fade-in-right_0.7s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 1
            ? "animate-[fade-in-right_0.7s_.35s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 2
            ? "animate-[fade-in-right_0.7s_.7s_cubic-bezier(.38,0,.64,1)_both] "
            : "animate-[fade-in-right_0.7s_1.05s_cubic-bezier(.38,0,.64,1)_both] "
          : "")
      }
      onAnimationEnd={() => {
        setEffect("none");
      }}
    >
      <p className={label}>{props.title}</p>
      <img
        id={props.title}
        src={props.images.length > 0 ? props.images[0] : placeholderImage}
        alt={props.title + " preview image"}
        className={"origin-top border-x-[0.625vmin] border-solid border-black "}
        draggable="false"
      />
      <p className={label}>{props.status}</p>
    </div>
  );
};

export default ProjectCard;
