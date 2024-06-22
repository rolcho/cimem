import { AboutText } from "./About";
import { ContactText } from "./Contact";
import { HomeText } from "./Home";
import { NavbarText } from "./Navbar";
import { SkillsText } from "./Skills";
import { WorkText } from "./Work";

export interface Main {
  about: AboutText;
  contact: ContactText;
  home: HomeText;
  navbar: NavbarText;
  skills: SkillsText;
  work: WorkText;
}
