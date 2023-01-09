import styled from "@emotion/styled";
import { NextPage } from "next";
import { artistProfileType } from "utils/interfaces/profile";

interface props {
  data: artistProfileType;
}

const ArtistProfileInfoTable: NextPage<props> = ({ data }: props) => {
  return (
    <>
      <ProfileInfo>
        <InfoType>이름</InfoType>
        <Info>{data.originName}</Info>
      </ProfileInfo>
      <ProfileInfo>
        <InfoType>생일</InfoType>
        <Info>{data.birthDay}</Info>
      </ProfileInfo>
      <ProfileInfo>
        <InfoType>혈액형</InfoType>
        <Info>{data.bloodType}</Info>
      </ProfileInfo>
      <ProfileInfo>
        <InfoType>키</InfoType>
        <Info>{data.height}cm</Info>
      </ProfileInfo>
      <ProfileInfo>
        <InfoType>국적</InfoType>
        <Info>{data.country}</Info>
      </ProfileInfo>
    </>
  );
};

const Info = styled.p`
  font-size: 16px;
  color: #666666;
`;

const InfoType = styled.p`
  font-size: 16px;
  width: 100px;
`;

const ProfileInfo = styled.div`
  display: flex;
`;

export default ArtistProfileInfoTable;
