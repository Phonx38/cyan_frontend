import React from "react";

import "./App.css";
import { AddCompany, AnalysisCharts, Clients, Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import EditCompanyDetail from "./components/EditCompanyDetail";
import "antd/dist/antd.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Clients />} />
          <Route exact path="/add-company" element={<AddCompany />} />
          <Route exact path="/analytics" element={<AnalysisCharts />} />
          <Route
            exact
            path="/update-company/:id"
            element={<EditCompanyDetail />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
