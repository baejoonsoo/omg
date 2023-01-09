import styled from "@emotion/styled";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { profileTypeList } from "utils/interfaces/profile";
import Member from "./member";

interface props {
  data: profileTypeList;
}

const MemberGroup: NextPage<props> = ({ data }: props) => {
  const [sectionTitle, setSectionTitle] = useState<string>("");
  const [memberList, setMemberList] = useState<string[]>([]);

  useEffect(() => {
    if ("content" in data) {
      setSectionTitle("MEMBER");
      setMemberList(data.member);
    } else {
      setSectionTitle("GROUP");
      setMemberList(data.group);
    }
  }, [data]);

  return (
    <MemberGroupSection>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <MemberWrap>
        {memberList.map((member, i) => (
          <Member key={i} data={member} />
        ))}
      </MemberWrap>
    </MemberGroupSection>
  );
};

const MemberWrap = styled.div`
  max-width: 1025px;
  width: 80%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 40px;
`;

const SectionTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  padding: 70px 0;
`;

const MemberGroupSection = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 88px;
`;

export default MemberGroup;
