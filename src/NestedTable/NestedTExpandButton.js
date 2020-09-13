import React from "react";
import styled, { css } from "styled-components";

import { Button } from "antd";
import { DownCircleTwoTone } from "@ant-design/icons";

// ===

const NestedTExpandButton = (props) => {
  const { expanded, record, onExpand } = props;

  const onClick = () => {
    onExpand(record);

    console.log(expanded);
  };

  return (
    <S.NestedTExpandButton expanded={expanded}>
      <Button onClick={onClick} type="text" shape="circle">
        <div className="NestedTExpandButton__icon">
          <DownCircleTwoTone />
        </div>
      </Button>
    </S.NestedTExpandButton>
  );
};

const S = {};

S.NestedTExpandButton = styled.div`
  .NestedTExpandButton__icon {
    transform: rotate(0deg);
    transition: transform 300ms;

    ${(p) =>
      p.expanded === true &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export default NestedTExpandButton;
