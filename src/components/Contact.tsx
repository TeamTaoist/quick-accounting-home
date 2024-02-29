import styled from "styled-components";
import { Title } from "./home/Services";
import twitter from "../assets/images/twitter.svg";
import github from "../assets/images/github.svg";
import telegram from "../assets/images/telegram.svg";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>CONTACT</Title>
      <Contacts>
        <ContactInfo>
          <p>Powered by</p>
          <h6>Toaist labs</h6>
        </ContactInfo>
        <SocialLink>
          <img src={twitter} alt="" />
          <img src={github} alt="" />
          <img src={telegram} alt="" />
        </SocialLink>
      </Contacts>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.div`
  padding-top: 40px;
  padding-bottom: 100px;
  /* display: grid;
  justify-content: center; */
`;
const Contacts = styled.div`
  display: grid;
  justify-content: center;
`;
const ContactInfo = styled.div`
  padding: 30px 0;
  color: var(--text-primary);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  p {
    font-size: 12px;
  }
  h6 {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
    h6 {
      font-size: 18px;
    }
  }
`;
const SocialLink = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 60px;
  width: 600px;
  gap: 28px;
  background: linear-gradient(273.59deg, #518da5 0%, #f5f5f5 100%);
  border-radius: 26px;
  img {
    width: 50px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 400px;
    img {
      width: 20px;
    }
  }
  @media (max-width: 600px) {
    width: 310px;
  }
`;
