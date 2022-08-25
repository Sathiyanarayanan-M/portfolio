import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const socialList = (props: ISocialList.Props = {}) => {
  const { iconProps = {} } = props;
  return [
    {
      label: "LinkedIn",
      value: "linkenin",
      link: "https://www.linkedin.com/in/sathiyanarayanan-m",
      icon: <i className="fab fa-linkedin" {...iconProps} />,
    },
    {
      label: "Github",
      value: "github",
      link: "https://github.com/Sathiyanarayanan-M",
      icon: <i className="fab fa-github" {...iconProps} />,
    },
    {
      label: "Twitter",
      value: "twitter",
      link: "https://twitter.com/sathiya1622",
      icon: <i className="fab fa-twitter" {...iconProps} />,
    },
    {
      label: "StackOverflow",
      value: "stack-overflow",
      link: "https://stackoverflow.com/users/14388598/sathiyanarayanan",
      icon: <i className="fab fa-stack-overflow" {...iconProps} />,
    },
  ];
};

export namespace ISocialList {
  export interface Props {
    iconProps?: React.HTMLProps<HTMLDivElement>;
  }
}
