import styled from "@emotion/styled";
import { MemberInfo } from "docs/data";
import { NextPage } from "next";
import MemberCard from "./MemberCard";

const MemberProfiles: NextPage = () => {
  return (
    <MemberProfilesSection>
      <SectionTitle>PROFILE</SectionTitle>
      <MemberCardSection>
        {MemberInfo.map((MemberData, i) => (
          <MemberCard key={i} memberData={MemberData} />
        ))}
      </MemberCardSection>
    </MemberProfilesSection>
  );
};

const MemberCardSection = styled.section`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const SectionTitle = styled.p`
  font-size: 30px;
  border-top: 2px solid black;
  padding: 0 5px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const MemberProfilesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export default MemberProfiles;
