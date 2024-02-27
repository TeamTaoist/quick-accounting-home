import styled from "styled-components";
import arrow from "../../assets/images/home/arrow.svg";
import daoIcon from "../../assets/images/home/dao-icon.svg";
import crypto from "../../assets/images/home/crypto.svg";
import web3 from "../../assets/images/home/web3.svg";
import { useState } from "react";
import Modal from "../Modal";

interface IServiceList {
  logo: any;
  serviceName: string;
  link: string;
}

const serviceList: IServiceList[] = [
  {
    logo: daoIcon,
    serviceName: "DAO(Decentralized autonomous organization)",
    link: "#",
  },
  {
    logo: crypto,
    serviceName: "Crypto Organization",
    link: "#",
  },
  {
    logo: web3,
    serviceName: "Web3 Community",
    link: "#",
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ServiceSection>
      <Title>SERVICE FOR</Title>
      <ServiceList>
        {serviceList.map((service, index) => (
          <Service key={index}>
            <ServiceLogo>
              <img src={service.logo} alt="" />
            </ServiceLogo>
            <div>
              <p>{service.serviceName}</p>
              <a onClick={() => setIsOpen(!isOpen)}>
                Learn more <img src={arrow} alt="" />
              </a>
            </div>
          </Service>
        ))}
      </ServiceList>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </ServiceSection>
  );
};

export default Services;

const ServiceSection = styled.section`
  text-align: center;
`;
export const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
    text-align: start;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
  margin-top: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  border-radius: 16px;
  width: 350px;
  background: rgba(92, 142, 162, 0.5);
  backdrop-filter: blur(10px);
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: start;
    padding: 12px 12px;
    width: 100%;
  }
  p {
    font-size: 24px;
    color: var(--text-primary);
    margin-top: 10px;
    @media (max-width: 768px) {
      font-size: 18px;
      margin-left: 22px;
      width: auto;
      text-align: start;
    }
  }
  &:not(:first-child) {
    p {
      width: 200px;
    }
  }
  @media (max-width: 768px) {
    &:not(:first-child) {
      p {
        width: auto;
      }
    }
  }

  a {
    font-size: 13px;
    display: flex;
    justify-content: center;
    gap: 6px;
    text-decoration: none;
    color: var(--text-yellow);
    padding: 14px 0;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: start;
      margin-left: 22px;
    }
  }
  a > img {
    width: 18px;
  }
`;
const ServiceLogo = styled.div`
  padding: 20px 0;
  img {
    width: 80px;
  }
`;
