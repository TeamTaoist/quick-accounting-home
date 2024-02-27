import styled from "styled-components";
import { Title } from "./Services";
import traceable from "../../assets/images/home/traceable.svg";
import realTime from "../../assets/images/home/real-time.svg";

const Benefits = () => {
  return (
    <BenefitsSection id="benefits">
      <Title>BENEFITS</Title>
      <BenefitList>
        <Benefit>
          <img src={traceable} alt="" />
          <h4>Traceable Account Flow</h4>
          <p>
            Quick Accounting utilizes blockchain technology to ensure all
            financial flows are accurately traced and recorded, guaranteeing the
            reliability and transparency of financial data.
          </p>
        </Benefit>
        <Benefit>
          <img src={realTime} alt="" />
          <h4>Real-time Visibility</h4>
          <p>
            Quick Accounting provides real-time financial data and reports,
            enabling crypto organizations to stay updated on their financial
            status and share transparent financial information with
            stakeholders.
          </p>
        </Benefit>
      </BenefitList>
    </BenefitsSection>
  );
};

export default Benefits;

const BenefitsSection = styled.section`
  padding: 40px 10px;
`;
const BenefitList = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;
const Benefit = styled.div`
  background: rgba(92, 142, 162, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  width: 100%;
  border-radius: 12px;
  img {
    width: 70px;
  }
  h4 {
    font-size: 30px;
    color: var(--text-primary);
    padding: 20px 0;
  }
  p {
    font-size: 16px;
    max-width: 420px;
    text-align: center;
    color: var(--text-primary);
  }
  @media (max-width: 768px) {
    margin: 20px 0;
    h4 {
      font-size: 24px;
    }
  }
  @media (max-width: 600px) {
    padding: 24px 26px;
    img {
      width: 36px;
    }
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 10px;
      max-width: 260px;
    }
  }
`;
