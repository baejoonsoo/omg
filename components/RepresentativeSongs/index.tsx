import styled from "@emotion/styled";
import { RepresentativeSongInfoList } from "docs/data";
import { NextPage } from "next";
import Song from "./song";

const youtubeURL = "https://www.youtube.com/embed/BWK65TVZ_tM";

const RepresentativeSongs: NextPage = () => {
  return (
    <SongsSection>
      <SectionTitle>SONG</SectionTitle>
      <SongsList>
        {RepresentativeSongInfoList.map((songInfo, i) => (
          <Song songInfo={songInfo} key={i} />
        ))}
      </SongsList>
      <MusicVideo>
        <Text>Real Love MV</Text>
        <YouTube src={youtubeURL} />
      </MusicVideo>
    </SongsSection>
  );
};

const Text = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`;

const YouTube = styled.iframe`
  width: 90%;
  aspect-ratio: 16/9;
`;

const MusicVideo = styled.div`
  width: 50%;
  border: 1px black solid;
  padding: 25px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SongsList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionTitle = styled.p`
  font-size: 30px;
  border-top: 2px solid black;
  padding: 0 5px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const SongsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;

export default RepresentativeSongs;
