import styled from "@emotion/styled";
import { GroupInfo } from "docs/data";
import { NextPage } from "next";

const IntroductionOMG: NextPage = () => {
  return (
    <IntroductionSection>
      <GroupName>{GroupInfo.name}</GroupName>
      <CotentWrap>
        {GroupInfo.introduction.map((intro, i) => (
          <Cotent key={i}>{intro}</Cotent>
        ))}
      </CotentWrap>
    </IntroductionSection>
  );
};

const CotentWrap = styled.div``;

const Cotent = styled.p`
  font-size: 20px;
  white-space: pre-wrap;
  text-align: center;
  margin-top: 30px;
`;

const GroupName = styled.p`
  font-size: 30px;
  border-top: 2px solid black;
  padding: 0 5px;
  font-weight: 500;
`;

const IntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export default IntroductionOMG;
