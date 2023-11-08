import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";

import Home from "../pages/Home";
import Threats from "../pages/Threats";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/threats"} element={<Threats />} />
      </Routes>
    </Layout>
  )
}

export default App;
