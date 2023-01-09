import styled from "@emotion/styled";
import ProfileInfoTable from "components/profileInfoTable";
import { NextPage } from "next";
import Link from "next/link";
import { profileTypeList } from "utils/interfaces/profile";

interface props {
  data: profileTypeList;
}

const MemberProfile: NextPage<props> = ({ data }: props) => {
  return (
    <MemberPageContainer>
      <TitleWrap>
        <Link href="/">
          <Home>HOME</Home>
        </Link>
        <Title>MUSICIAN</Title>
      </TitleWrap>
      <ProfileContainer>
        <ProfileImg img={data.img} />
        <ProfileContent>
          <Entertainment>WM ENTERTAINMENT</Entertainment>
          <Name>{data.name}</Name>
          <ProfileInfoTable data={data} />
        </ProfileContent>
      </ProfileContainer>
    </MemberPageContainer>
  );
};

const TitleWrap = styled.div`
  margin-top: 54px;
  margin-bottom: 27px;
  width: 100%;
`;

const Home = styled.span`
  color: #999;
  font-size: 10px;
  font-weight: 400;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 43px;
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
  flex: 0 0 0;
`;

const Entertainment = styled.p`
  font-size: 13px;
  color: #191919;
  flex: 0 0 0;
`;

const ProfileContent = styled.div`
  /* width: 500px; */

  max-width: 500px;
  width: 40vw;
  min-height: fit-content;
  border-top: 6px solid #191919;
  padding: 55px 22px 56px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProfileImg = styled.div`
  max-width: 500px;
  width: 40vw;
  aspect-ratio: 1;

  background-image: url(${({ img }: { img: string }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const MemberPageContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export default MemberProfile;
