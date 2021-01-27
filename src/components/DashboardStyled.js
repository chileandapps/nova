import styled from "styled-components";

export const DashboardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #8385a9;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 2vh;
    /* border: 1px solid green; */
  }

  h3 {
    padding-bottom: 1vh;
    color: #fb5e84;
    text-align: center;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 1px solid red; */

  /* h2{
    color: white;
  } */
  h3 {
    font-size: 1.5em;
  }
  div {
    margin: 0 2vw;
    /* border: 1px solid blue; */
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* border: 1px solid green; */
`;

export const Box = styled.div`
  padding: 2vh 2vw;
  margin: 3vh 1vw;
  text-align: ${(props) => (props.left ? "left" : "center")};
  width: 320px;
  background-color: #343650;
  box-shadow: 8px 10px rgba(0, 0, 0, 0.2);
  min-height: 320px;

  & .mb-10 {
    margin-bottom: 10px;
  }

  & .your-referal {
    font-size: 0.8rem;
  }
`;

export const InvestContainer = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    margin: 5px 0px;
    height: 40px;
    font-size: 1.2rem;
    width: 100%;
  }

  & .label-input {
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
  }

  & .small {
    padding-bottom: 2vh;
  }
`;

export const ReferalItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
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

  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(234, 17%, 12%);
    box-shadow: 1px 2px black;
  }

  &:focus {
    outline: none;
  }

  &:active{
    transform: scale(.9);
  }
`;

export const ButtonLarge = styled(Button)`
  width: 280px;
  font-size: 22px;
  padding: 14px 0;

  &:hover{
    background: #343650
  }
`;
