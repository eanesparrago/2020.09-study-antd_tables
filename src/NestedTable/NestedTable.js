import React from "react";
import styled from "styled-components";

import { Table } from "antd";
import NestedTExpandedTable from "./NestedTExpandedTable";
import NestedTExpandButton from "./NestedTExpandButton";

// ===

function NestedTable() {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Platform", dataIndex: "platform", key: "platform" },
    { title: "Version", dataIndex: "version", key: "version" },
    { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
    { title: "Creator", dataIndex: "creator", key: "creator" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Action", key: "operation", render: () => <a>Publish</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: "Screem",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
    });
  }

  return (
    <S.NestedTable>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandable={{
          expandedRowRender: NestedTExpandedTable,
          expandIconColumnIndex: columns.length,
          expandIcon: NestedTExpandButton,
        }}
        dataSource={data}
      />
    </S.NestedTable>
  );
}

const S = {};

S.NestedTable = styled.div``;

export default NestedTable;
