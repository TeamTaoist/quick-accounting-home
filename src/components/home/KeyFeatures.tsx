import tracking from "../../assets/images/home/tracking.svg";
import records from "../../assets/images/home/records.svg";
import report from "../../assets/images/home/report.svg";
import arrow from "../../assets/images/home/arrow.svg";
import styled from "styled-components";
import { Title } from "./Services";
import Modal from "../Modal";
import { useState } from "react";

interface IKeyFeatureList {
  logo: any;
  title: string;
  details: string;
  link: string;
}

const keyFeatureList: IKeyFeatureList[] = [
  {
    logo: tracking,
    title: "Income and Expense Tracking",
    details:
      "Quick Accounting can track all income and expenses of crypto organizations, ensuring accurate recording of every transaction.",
    link: "#",
  },
  {
    logo: records,
    title: "Accounting Records",
    details:
      "Quick Accounting offers a user-friendly interface to record and categorize accounting transactions for crypto assets.",
    link: "#",
  },
  {
    logo: report,
    title: "Report Generation",
    details:
      "Quick Accounting can generate accurate financial reports based on user transaction records and accounting data, helping users understand the financial status of their crypto organizations.",
    link: "#",
  },
];

const KeyFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <KeyFeatureSection id="feature">
      <Title>KEY FEATURES</Title>
      <FeatureList>
        {keyFeatureList.map((feature, index) => (
          <Feature key={index}>
            <FeatureInfo>
              <h4>{feature.title}</h4>
              <p>{feature.details}</p>
              <div>
                <a onClick={() => setIsOpen(!isOpen)}>
                  Learn more <img src={arrow} alt="" />
                </a>
              </div>
            </FeatureInfo>
            <FeatureLogo>
              <img src={feature.logo} alt="" />
            </FeatureLogo>
          </Feature>
        ))}
      </FeatureList>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </KeyFeatureSection>
  );
};

export default KeyFeatures;

const KeyFeatureSection = styled.section`
  padding: 40px 0;
`;
const FeatureList = styled.div`
  padding: 16px 0;
  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;
const Feature = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  gap: 40px;
  /* align-items: center; */
  padding: 20px 40px;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
  @media (max-width: 600px) {
    padding: 20px 0px;
  }
  &:nth-child(2) {
    flex-direction: row-reverse;
  }
`;
const FeatureInfo = styled.div`
  width: 60%;
  border-bottom: 1px solid #d9d9d9be;

  h4 {
    font-size: 34px;
    font-weight: 700;
    padding: 10px 0;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    padding-top: 10px;
  }
  a {
    font-size: 13px;
    display: flex;
    gap: 6px;
    text-decoration: none;
    color: var(--text-yellow);
    padding: 36px 0;
  }
  a > img {
    width: 18px;
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 20px;
      padding-top: 0;
    }
    p {
      font-size: 14px;
      padding-top: 0px;
    }
    a {
      padding: 12px 0;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
  }
`;
const FeatureLogo = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--text-primary);
  border-radius: 8px;
  img {
    width: 180px;
  }
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    img {
      width: 100px;
    }
  }
  @media (max-width: 600px) {
    width: 130px;
    height: 130px;
    img {
      width: 80px;
    }
  }
`;
