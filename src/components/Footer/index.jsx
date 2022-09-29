//tools import
import React from "react";
import { StyledFooter, FooterCard, FooterList } from "./style";
import { SiLinkedin, SiGithub } from "react-icons/si";
import renata from "../../assets/renata.jpeg";
import yvan from "../../assets/yvan.jpg";
import vinicius from "../../assets/vinicius.jpg";
import andre from "../../assets/andre.jpg";
import kennedy from "../../assets/kennedy.jpg";
import osmar from "../../assets/osmar.jpg";

const Footer = () => {
  return (
    <StyledFooter>
      <h2>About us</h2>
      <FooterList>
        <FooterCard>
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${andre})` }}
          ></div>
          <p>André - QA</p>
          <div>
            <a href="https://www.linkedin.com/in/andr%C3%A9-lu%C3%ADs-mesquita-de-abreu-45ab431a9/">
              <SiLinkedin className="icons" />
            </a>
            <a href="https://github.com/andre-abreu20">
              <SiGithub className="icons" />
            </a>
          </div>
        </FooterCard>
        <FooterCard>
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${kennedy})` }}
          ></div>
          <p>Kennedy - PO</p>
          <div>
            <a href="https://www.linkedin.com/in/kennedy-barreto-09870723a/">
              <SiLinkedin className="icons" />
            </a>
            <a href="https://github.com/kennedybm">
              <SiGithub className="icons" />
            </a>
          </div>
        </FooterCard>
        <FooterCard>
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${osmar})` }}
          ></div>
          <p>Osmar - TL</p>
          <div>
            <a href="https://www.linkedin.com/in/osmar-faria/">
              <SiLinkedin className="icons" />
            </a>
            <a href="https://github.com/osmfaria">
              <SiGithub className="icons" />
            </a>
          </div>
        </FooterCard>
        <FooterCard>
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${renata})` }}
          ></div>
          <p>Renata - SM</p>
          <div>
            <a href="https://www.linkedin.com/in/renata-pereira-juraski-149696158/">
              <SiLinkedin className="icons" />
            </a>
            <a href="https://github.com/rejuraski">
              <SiGithub className="icons" />
            </a>
          </div>
        </FooterCard>
        <FooterCard>
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${vinicius})` }}
          ></div>
          <p>Vinicius - QA</p>
          <div>
            <a href="https://www.linkedin.com/in/vinicius-modena-a2b881180/">
              <SiLinkedin className="icons" />
            </a>
            <a href="https://github.com/viniciusmodena">
              <SiGithub className="icons" />
            </a>
          </div>
        </FooterCard>
        <FooterCard>
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${yvan})` }}
          ></div>
          <p>Yvan - QA</p>
          <div>
            <a href="https://www.linkedin.com/in/yvan-toledo-shaw-90718821a/">
              <SiLinkedin className="icons" />
            </a>
            <a href="https://github.com/yvanshaw1">
              <SiGithub className="icons" />
            </a>
          </div>
        </FooterCard>
      </FooterList>
    </StyledFooter>
  );
};

export default Footer;
