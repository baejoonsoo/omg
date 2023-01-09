import styled from "@emotion/styled";
import { NextPage } from "next";
import { SongType } from "utils/interfaces/song";

interface props {
  songInfo: SongType;
}

const Song: NextPage<props> = ({ songInfo }: props) => {
  return (
    <SongContainer>
      <AlbumImg img={songInfo.albumImg} />
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

const AlbumImg = styled.div`
  flex: 0 0 0;
  height: 200px;
  aspect-ratio: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ img }: { img: string }) => img});
  margin-right: 25px;
`;

const SongContainer = styled.div`
  width: 100%;
  border: 1px black solid;
  padding: 25px;
  display: flex;
  flex: 1;
`;

export default Song;
