import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import { Work } from "./Work";

export interface Main {
  about: About;
  contact: Contact;
  home: Home;
  navbar: Navbar;
  skills: Skills;
  work: Work;
}
