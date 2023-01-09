import styled from "@emotion/styled";
import { NextPage } from "next";
import {
  artistProfileType,
  groupProfileType,
  profileTypeList,
} from "utils/interfaces/profile";
import ArtistProfileInfoTable from "./artistProfileInfoTable";
import GroupProfileInfoTable from "./groupProfileInfoTable";

interface props {
  data: profileTypeList;
}

const ProfileInfoTable: NextPage<props> = ({ data }: props) => {
  return (
    <InfoTableContainer>
      {"content" in data ? (
        <GroupProfileInfoTable data={data as groupProfileType} />
      ) : (
        <ArtistProfileInfoTable data={data as artistProfileType} />
      )}
    </InfoTableContainer>
  );
};

const InfoTableContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export default ProfileInfoTable;
