import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";

import NestedTable from "./NestedTable/NestedTable";

function App() {
  return (
    <S.App>
      <NestedTable></NestedTable>
    </S.App>
  );
}

const S = {};

S.App = styled.div`
  width: 62%;
  margin: 0 auto;
  padding-top: 6rem;
`;

export default App;
