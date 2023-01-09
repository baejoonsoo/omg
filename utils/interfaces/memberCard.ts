type bloodType = "A" | "B" | "O" | "AB";

export interface memberCardType {
  id: string;
  name: string;
  originName: string;
  birthDay: string;
  country: string;
  height: number;
  bloodType: bloodType;
  img: string;
}
