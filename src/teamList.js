import ggLogo from "./Uploader/teamLogos/gglogo2.png";
import bcLogo from "./Uploader/teamLogos/bcaps.png";
import kappaLogo from "./Uploader/teamLogos/kappa.png";
import starLogo from "./Uploader/teamLogos/starc4.png";
import ninjaLogo from "./Uploader/teamLogos/RN.png";
import heartLogo from "./Uploader/teamLogos/HR.png";
import bellLogo from "./Uploader/teamLogos/HB.png";
import YJLogo from "./Uploader/teamLogos/YJ.png";
import DSLogo from "./Uploader/teamLogos/DS.png";
import socLogo from "./Uploader/teamLogos/liked.png";
import missnoLogo from "./Uploader/teamLogos/missingno.png";

const teamList = [
  {
    name: "Bottle Caps",
    logo: bcLogo,
    color: "DC5368",
    colorTwo: "5A83B4",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "BC",
    teamType: "all-star 40 man roster team",
  },
  {
    name: "The GG's",
    logo: ggLogo,
    color: "8FB328",
    colorTwo: "3F2C8B",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "GG",
    teamType: "world series qualifiers",
  },
  {
    name: "Killer Kappas",
    logo: kappaLogo,
    color: "4F65A3",
    colorTwo: "65A34D",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "KK",
    teamType: "world series qualifiers",
  },
  {
    name: "Star Children",
    logo: starLogo,
    color: "FFD600",
    colorTwo: "FFB700",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "SC",
    teamType: "world series qualifiers",
  },
  {
    name: "Metal Ninjas",
    logo: ninjaLogo,
    color: "54ABD5",
    colorTwo: "80F5FF",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "MN",
    teamType: "world series qualifiers",
  },
  {
    name: "Hopeless Romantics",
    logo: heartLogo,
    color: "FF3B6E",
    colorTwo: "545454",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "HR",
    teamType: "all-star 40 man roster team",
  },
  {
    name: "Hell's Bells",
    logo: bellLogo,
    color: "FFCB00",
    colorTwo: "FF3C00",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "HB",
    teamType: "world series qualifiers",
  },
  {
    name: "Yellow Jackets",
    logo: YJLogo,
    color: "BD3FC0",
    colorTwo: "FDFC00",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "YJ",
    teamType: "world series qualifiers",
  },
  {
    name: "Dynomite Stix",
    logo: DSLogo,
    color: "FF0018",
    colorTwo: "FDFC00",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "DYNO",
    teamType: "world series qualifiers",
  },
  {
    name: "The Influentials",
    logo: socLogo,
    color: "4db3ce",
    colorTwo: "4A8AD2",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "INFLU",
    teamType: "all-star 40 man roster team",
  },
  {
    name: "Missing No's",
    logo: missnoLogo,
    color: "EBAF88",
    colorTwo: "C0B7C8",
    SpSpName: "SpSpName",
    SpSpDesc: "desc",
    key: "MISSNO",
    teamType: "world series qualifiers",
  },
];

export default teamList.sort((a, b) => (a.name > b.name) ? 1 : -1)