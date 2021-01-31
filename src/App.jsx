import "./assets/App.css";
import { useEffect, useState } from "react";
import { getTronWeb, getContract, getWalletInfo } from "./tronWeb";
import { REFERRAL_CODE } from "./constant";
import { Contract } from "./contract.js";
import { Dashboard } from "./components/Dashboard";
import Modal from "./components/Modal";
import { Home } from "./components/Home";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// import ReactJson from "react-json-view";

import {
  walletInfoInitialState,
  contractGlobalInfoInitialState,
  contractUserInfoInitialState,
  modalInitialState,
} from "./store/initialState";
import { ContractContext } from "./store/context";
import Navbar from "./components/Navbar/";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  //States
  const [render, setRender] = useState(false);
  const [contract, setContract] = useState(null);
  const [walletInfo, setWalletInfo] = useState(walletInfoInitialState);
  const [contractUser, setContractUser] = useState(
    contractUserInfoInitialState
  );
  const [contractGlobal, setContractGlobal] = useState(
    contractGlobalInfoInitialState
  );
  const [modal, setModal] = useState(modalInitialState);



  const [userLogged, setUserLogged] = useState(false);

  const location = useLocation();

  //Styled
  const Container = styled.div`
    margin: 0 10vw;

    .json {
      width: 1000px;
      display: flex;
      margin: 0 auto;
    }
  `;

  useEffect(() => {
    fetchTronWeb()
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error(err);
        setModal({
          visible: true,
          title: "Warning",
          text: "Please sign in the browser TronLink extension",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  const fetchTronWeb = async () => {
    //Get tronWeb from window
    await getTronWeb();
  };

  const fetchData = async () => {
    try {
      const walletInfo = await getWalletInfo();
      const contract = new Contract(await getContract(), walletInfo.address);
      setContract(contract);
      await contract.Initialize();

      //Subscribe
      contract.subscribeEvents(() => {
        setRender(!render);
      });

      setWalletInfo(walletInfo);
      setUserLogged(true);
      setContractGlobal(await contract.getContractGlobalInfo());

      const data = await contract.getContractUserInfo();
      setContractUser(data);

      if (!localStorage.getItem(REFERRAL_CODE)) {
        //Save referal link in local storage
        const referalCode = location.search.split("=")[1];
        const code = isNaN(referalCode) ? 1000 : referalCode;
        localStorage.setItem(REFERRAL_CODE, code);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Modal modal={modal} setModal={setModal} />
      <Navbar
        render={() => setRender(!render)}
        userLogged={userLogged}
        address={walletInfo.address}
      />
      <Container>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/faqs">
            <About/>
          </Route>
          <Route path="/play">
            <ContractContext.Provider value={contract}>
              <Dashboard
                contractGlobal={contractGlobal}
                contractUser={contractUser}
                trxBalance={walletInfo.balance}
                setModal={setModal}
              />
            </ContractContext.Provider>

            {/* <div className="json">
              <ReactJson src={contractUser} theme="bright" />
              <ReactJson src={contractGlobal} theme="twilight" />
            </div> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
