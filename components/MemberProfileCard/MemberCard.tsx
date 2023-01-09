import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";
import { memberCardType } from "utils/interfaces/memberCard";

interface props {
  memberData: memberCardType;
}

const MemberCard: NextPage<props> = ({ memberData }: props) => {
  return (
    <Link href={`/${memberData.id}`}>
      <MemberCardContainer>
        <MemberInfoContainer id="hoverContainer">
          <Name>{memberData.name}</Name>
          <InfoText>{memberData.originName}</InfoText>
          <InfoText>{memberData.birthDay}</InfoText>
          <InfoText>{memberData.country}</InfoText>
          <InfoText>{memberData.height}cm</InfoText>
          <InfoText>{memberData.bloodType}형</InfoText>
        </MemberInfoContainer>
        <MemberCardImg cardImg={memberData.img} />
      </MemberCardContainer>
    </Link>
  );
};

const InfoText = styled.p`
  font-size: 18px;
`;

const Name = styled(InfoText)`
  font-size: 30px;
`;

const MemberInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.7);
`;

const MemberCardImg = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${({ cardImg }: { cardImg: string }) => cardImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MemberCardContainer = styled.div`
  width: 200px;
  aspect-ratio: 10/15;
  cursor: pointer;
  position: relative;

  &:hover > div#hoverContainer {
    display: flex;
  }
`;

export default MemberCard;
