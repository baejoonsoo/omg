import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";
import { SongType } from "utils/interfaces/song";

interface props {
  songInfo: SongType;
}

const Song: NextPage<props> = ({ songInfo }: props) => {
  return (
    <SongContainer>
      <AlbumImgWrap>
        <AlbumImg img={songInfo.albumImg} />
        <AlbumHoverBox id="hoverBox">
          <a href={songInfo.melonLink}>
            <Text>노래 들으러 가기</Text>
          </a>
        </AlbumHoverBox>
      </AlbumImgWrap>
      <AlbumInfo>
        <Title>{songInfo.title}</Title>
        <CreatedInfoWrap>
          <CreatedInfo>오마이걸</CreatedInfo>
          <CreatedInfo>{songInfo.releaseDate}</CreatedInfo>
        </CreatedInfoWrap>
        <Description>{songInfo.description}</Description>
      </AlbumInfo>
    </SongContainer>
  );
};

const Description = styled.p`
  width: 100%;
  white-space: pre-wrap;
  font-size: 18px;
`;

const CreatedInfoWrap = styled.div``;

const CreatedInfo = styled.p`
  font-size: 14px;
  color: rgb(32, 32, 32);
`;

const Title = styled.p`
  font-size: 30px;
`;

const AlbumInfo = styled.div`
  height: 100%;
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: white;
`;

const AlbumImgWrap = styled.div`
  flex: 0 0 0;
  height: 200px;
  aspect-ratio: 1;
  margin-right: 25px;
  position: relative;

  &:hover > div#hoverBox {
    display: flex;
  }
`;

const AlbumHoverBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(20, 20, 20, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
`;

const AlbumImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ img }: { img: string }) => img});
`;

const SongContainer = styled.div`
  width: 100%;
  border: 1px black solid;
  padding: 25px;
  display: flex;
  flex: 1;
`;

export default Song;
