import * as React from "react";
import {
  header,
} from "./layout.module.css";
import github from "../images/github.png";
import { StyledButton } from "./styles"
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ text, link }) => {
  return (
    <header className={header}>
        <StaticImage
        alt="vineet"
        src="../images/initials.png"
        style={{ width: "15%" }}
      />
        <StyledButton
          href="https://www.linkedin.com/in/vineet-nadella/"
          variant="contained"
          color="primary"
          style={{
            backgroundImage:
              "url(https://dxanokv0vp6kj.cloudfront.net/packs/media/images/icons/linkedin_circle-02dff0f506f77e7f2e17c0056c158ae7.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            marginLeft: "auto",
            height: "40px"
          }}
        ></StyledButton>
        <StyledButton
          href="https://github.com/vineemon"
          variant="contained"
          color="primary"
          style={{
            backgroundImage: `url(${github})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "50%",
            height: "40px"
          }}
        >
        </StyledButton>
        <StyledButton href={link} variant="contained" color="primary">
          {text}
        </StyledButton>
      </header>
  );
};

export default Header;
