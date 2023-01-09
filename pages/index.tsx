import styled from "@emotion/styled";
import Banner from "components/Banner";
import IntroductionOMG from "components/IntroductionOMG";
import MemberProfiles from "components/MemberProfileCard";
import RepresentativeSongs from "components/RepresentativeSongs";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <HomePage>
      <Banner />
      <IntroductionOMG />
      <MemberProfiles />
      <RepresentativeSongs />
    </HomePage>
  );
};

const HomePage = styled.div``;
export default Home;
