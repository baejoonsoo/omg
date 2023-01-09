import { memberCardType } from "./memberCard";

export interface artistProfileType extends memberCardType {
  group: string[];
}

export interface groupProfileType {
  id: string;
  name: string;
  img: string;
  content: string;
  member: string[];
}
export type profileTypeList = artistProfileType | groupProfileType;

export interface profileType {
  [key: string]: artistProfileType | groupProfileType;
}
