import styled from "@emotion/styled";
import { NextPage } from "next";

const Banner: NextPage = () => {
  return (
    <BannerContainer>
      <OmgImg />
      <ContentWrap>
        <Content>OH MY GIRL is</Content>
        <BigContent>LOVE</BigContent>
      </ContentWrap>
    </BannerContainer>
  );
};

const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

const Content = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const BigContent = styled(Content)`
  font-size: 110px;
`;

const BannerContainer = styled.section`
  width: 90%;
  height: 80vh;
  background-color: #ededee;
  margin: 0 auto;
  position: relative;
`;

const OmgImg = styled.div`
  height: 100%;
  aspect-ratio: 15/10;

  background-image: url("/img/omg.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export default Banner;
