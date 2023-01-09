import styled from "@emotion/styled";
import { NextPage } from "next";
import { groupProfileType } from "utils/interfaces/profile";

interface props {
  data: groupProfileType;
}

const GroupProfileInfoTable: NextPage<props> = ({ data }: props) => {
  return (
    <>
      <Content>{data.content}</Content>
    </>
  );
};

const Content = styled.p`
  width: 100%;
  white-space: pre-wrap;
  word-break: break-all;

  font-size: 16px;
  color: rgb(25, 25, 25);
`;

export default GroupProfileInfoTable;
