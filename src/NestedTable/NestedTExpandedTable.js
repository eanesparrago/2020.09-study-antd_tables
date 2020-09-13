import React from "react";
import styled from "styled-components";

import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

// ===

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

// ===

const NTExpandedRow = () => {
  const columns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Status",
      key: "state",
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      ),
    },
    { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <Space size="middle">
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown overlay={menu}>
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: "2014-12-24 23:12:00",
      name: "This is production name",
      upgradeNum: "Upgraded: 56",
    });
  }
  return (
    <S.NestedTExpandedTable
      columns={columns}
      dataSource={data}
      pagination={false}
      footer={() => "Footer"}
    />
  );
};

const S = {};

S.NestedTExpandedTable = styled(Table)`
  thead tr th {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

export default NTExpandedRow;
