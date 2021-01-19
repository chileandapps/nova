import styled from "styled-components";

export const InvestContainer = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    margin: 5px 0px;
    height: 40px;
    font-size: 1.2rem;
  }

  & .input-label {
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const ReferalItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

export const DashboardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

   h2 {
    color: #8385a9;
    text-align: center;
    margin-top: 10px;
  }

   h3 {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #fb5e84;
    text-align: center;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  /* background-color: #343650;
  box-shadow: 8px 10px rgba(0, 0, 0, 0.2); */
  display:flex;
  justify-content: space-evenly;

  /* h2{
    color: white;
  } */
  h3{
    font-size: 1.5em;
  }
`;

export const BoxContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-around;
`;

export const Box = styled.div`
  padding: 14px;
  margin: 10px 2vw;
  text-align: ${(props) => (props.left ? "left" : "center")};
  width: 320px;
  background-color: #343650;
  box-shadow: 8px 10px rgba(0, 0, 0, 0.2);



  & .mb-10 {
    margin-bottom: 10px;
  }

  & .your-referal {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 10px;
  background-color: #fb5e84;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: ${(props) => (props.fill ? "100%" : "200px")};
  box-shadow: 1px 2px rgba(255, 0, 0, 0.8);
  border-radius: 2px;
`;

export const ButtonLarge = styled(Button)`
  width: 280px;
  font-size: 22px;
  padding: 14px 0;
`;