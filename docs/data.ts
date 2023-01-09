import { memberCardType } from "utils/interfaces/memberCard";
import { profileType } from "utils/interfaces/profile";
import { SongType } from "utils/interfaces/song";

export const GroupInfo = {
  name: "OH MY GIRL",
  introduction: [
    "오마이걸은 대한민국의 6인조 여자 아이돌이다.\n2015년에 데뷔하여 2019년 컴백전쟁:퀸덤 출연 이후 인지도룰 높여온 K-POP 그룹이다.",
    "그룹명의 의미는 대중들의 마이걸(my girl)이 되기 위함이다",
  ],
};

export const MemberInfo: memberCardType[] = [
  {
    id: "hyoJung",
    name: "효정",
    originName: "최효정",
    birthDay: "1994.07.28",
    country: "대한민국",
    height: 158,
    bloodType: "AB",
    img: "/img/member/card/hyoJung.jpg",
  },
  {
    id: "mimi",
    name: "미미",
    originName: "김미현",
    birthDay: "1995.05.01",
    country: "대한민국",
    height: 164,
    bloodType: "AB",
    img: "/img/member/card/mimi.jpg",
  },
  {
    id: "yuBin",
    name: "유빈",
    originName: "배유빈",
    birthDay: "1997.09.09",
    country: "대한민국",
    height: 160.9,
    bloodType: "O",
    img: "/img/member/card/yuBin.jpg",
  },
  {
    id: "yooA",
    name: "유아",
    originName: "유시아",
    birthDay: "1995.09.17",
    country: "대한민국",
    height: 159.2,
    bloodType: "A",
    img: "/img/member/card/yooA.jpg",
  },
  {
    id: "seungHee",
    name: "승희",
    originName: "현승희",
    birthDay: "1996.01.25",
    country: "대한민국",
    height: 159,
    bloodType: "B",
    img: "/img/member/card/seungHee.jpg",
  },
  {
    id: "arin",
    name: "아린",
    originName: "최예원",
    birthDay: "1999.06.18",
    country: "대한민국",
    height: 165,
    bloodType: "O",
    img: "/img/member/card/arin.jpg",
  },
];

export const RepresentativeSongInfoList: SongType[] = [
  {
    albumImg: "/img/album/secretGarden.jpg",
    title: "비밀정원",
    releaseDate: "2018.01.09",
    description:
      "비밀정원은 아직은 보이지 않지만, 자신의 꿈을 담은 비밀정원을 꿋꿋이 키워나가는 소녀들의 이야기를 담은 곡으로, Rock 기반 트랙위에 동양적이고 신비스러운 멜로디를 오마이걸만의 감성적인 보컬로 표현한 곡이다.",
  },
  {
    albumImg: "/img/album/nonstop.jpg",
    title: "살짝 설렜어",
    releaseDate: "2020.04.27",
    description:
      "리드미컬한 베이스와 에너제틱한 신스 사운드가 절묘히 블렌딩된 업템포 댄스곡으로, 친구에게 설레어 버린 복잡 미묘한 감정을 보드게임 속 무인도에 빠져버린 상황에 비유한 곡이다.",
  },
];

export const profileData: profileType = {
  hyoJung: {
    id: "hyoJung",
    name: "효정",
    originName: "최효정",
    birthDay: "1994.07.28",
    country: "대한민국",
    height: 158,
    bloodType: "AB",
    img: "/img/profile/hyoJung.png",
    group: ["OH_MY_GIRL", "OMG_banhana"],
  },
  mimi: {
    id: "mimi",
    name: "미미",
    originName: "김미현",
    birthDay: "1995.05.01",
    country: "대한민국",
    height: 164,
    bloodType: "AB",
    img: "/img/profile/mimi.png",
    group: ["OH_MY_GIRL"],
  },
  yuBin: {
    id: "yuBin",
    name: "유빈",
    originName: "배유빈",
    birthDay: "1997.09.09",
    country: "대한민국",
    height: 160.9,
    bloodType: "O",
    img: "/img/profile/yuBin.png",
    group: ["OH_MY_GIRL", "OMG_banhana"],
  },
  yooA: {
    id: "yooA",
    name: "유아",
    originName: "유시아",
    birthDay: "1995.09.17",
    country: "대한민국",
    height: 159.2,
    bloodType: "A",
    img: "/img/profile/yooA.jpg",
    group: ["OH_MY_GIRL"],
  },
  seungHee: {
    id: "seungHee",
    name: "승희",
    originName: "현승희",
    birthDay: "1996.01.25",
    country: "대한민국",
    height: 159,
    bloodType: "B",
    img: "/img/profile/seungHee.png",
    group: ["OH_MY_GIRL"],
  },
  arin: {
    id: "arin",
    name: "아린",
    originName: "최예원",
    birthDay: "1999.06.18",
    country: "대한민국",
    height: 165,
    bloodType: "O",
    img: "/img/profile/arin.png",
    group: ["OH_MY_GIRL", "OMG_banhana"],
  },
  OH_MY_GIRL: {
    id: "OH_MY_GIRL",
    name: "오마이걸",
    img: "/img/profile/omg.png",
    content:
      "2015년 4월 21일 데뷔한 WM엔터테인먼트 소속 6인조 걸그룹\n그룹명의 의미는 대중들의 마이걸(my girl)이 되기 위함이다.",
    member: ["hyoJung", "mimi", "yooA", "seungHee", "yuBin", "arin"],
  },
  OMG_banhana: {
    id: "OMG_banhana",
    name: "오마이걸 반하나",
    img: "/img/profile/banhana.jpg",
    content:
      "2018년 4월 2일에 데뷔한 오마이걸의 첫 유닛이다. 그룹명의 의미는 오마이걸 7명 중 반이 하나의 팀을 이룬다는 뜻과 우리에게 반해달라는 뜻으로 지어졌다.",
    member: ["hyoJung", "yuBin", "arin"],
  },
};
