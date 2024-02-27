import styled from "styled-components";

const HomeHeader = () => {
  return (
    <Header id="home">
      <h1>An web3 Accounting Software for Crypto Organizations.</h1>
      <p>
        Quick Accounting has the ability to tracking the transactions of crypto
        assets for organizations, maintain balance sheet of organizations, and
        generate financial reports. Everything in QA is trackable, and
        transparent.
      </p>
      <button>
        <a href="https://qa.taoist.dev/">Get Started</a>
      </button>
    </Header>
  );
};

export default HomeHeader;

const Header = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  @media (max-width: 600px) {
    padding: 70px 0;
    flex-direction: column;
    align-items: start;
  }

  h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 700;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 600px) {
      font-size: 24px;
      max-width: 300px;
      text-align: start;
      margin: 0;
    }
  }
  p {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 0;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 600px) {
      padding: 20px 0;
      text-align: start;
      font-size: 14px;
      font-weight: 400;
      max-width: 240px;
      margin: 0;
    }
  }
  button {
    border: none;
    outline: none;
    background: var(--text-primary);
    padding: 14px 30px;
    border-radius: 6px;
    font-size: 26px;
    font-weight: 700;
    color: var(--text-secondary);
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 14px;
    }
    @media (max-width: 600px) {
      padding: 10px 24px;
      font-size: 9px;
    }
    a {
      text-decoration: none;
      color: var(--text-secondary);
    }
  }
`;
