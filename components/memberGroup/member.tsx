import styled from "@emotion/styled";
import { profileData } from "docs/data";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profileTypeList } from "utils/interfaces/profile";

interface props {
  data: string;
}

const Member: NextPage<props> = ({ data }: props) => {
  const [memberData, setMmeberData] = useState<profileTypeList>();

  useEffect(() => {
    const res = profileData[data];
    setMmeberData(res);
  }, [data]);

  return (
    <Link href={`/${memberData?.id}`} scroll={true}>
      <MemberWrap>
        <MemberProfile img={memberData?.img ?? "/img/profile/banhana.jpg"} />
        <Name>{memberData?.name}</Name>
      </MemberWrap>
    </Link>
  );
};

const Name = styled.span`
  font-size: 15px;
  color: #191919;
`;

const MemberProfile = styled.div`
  width: 180px;
  aspect-ratio: 1;
  background-image: url(${({ img }: { img: string }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 90px;
`;

const MemberWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default Member;
