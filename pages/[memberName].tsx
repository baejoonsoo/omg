import styled from "@emotion/styled";
import MemberGroup from "components/memberGroup";
import MemberProfile from "components/memberPofilePage/memberProfile";
import { profileData } from "docs/data";
import { NextPage } from "next";
import { profileTypeList } from "utils/interfaces/profile";

interface props {
  data: profileTypeList;
}

const MemberPage: NextPage<props> = ({ data }: props) => {
  return (
    <MemberPageContainerWrap>
      <MemberProfile data={data} />
      <MemberGroup data={data} />
    </MemberPageContainerWrap>
  );
};

export function getServerSideProps({ params }: any) {
  const target: string = params.memberName;
  const data = profileData[target];

  return {
    props: {
      data,
    },
  };
}

const MemberPageContainerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MemberPage;
