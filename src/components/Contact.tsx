import { HiOutlineMail } from "react-icons/hi";
import { Contact } from "../interfaces/Contact";

function Contact(props: { contactText: Contact }) {
  return (
    <div
      id="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#080e2f] text-gray-300"
    >
      <form
        method="POST"
        action="https://getform.io/f/c9dcc39f-b108-4bee-83f2-a100c07c9d48"
        className="flex flex-col max-w-[800px] w-full gap-4"
      >
        <div className="pb-8">
          <p className="text-3xl font-light inline border-b-4 border-[#ffba18] text-left">
            {props.contactText.title}
          </p>
          <p className="pt-4">{props.contactText.short}</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md text-gray-900"
          type="text"
          placeholder={props.contactText.name}
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 rounded-md text-gray-900"
          type="text"
          placeholder={props.contactText.email}
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md text-gray-900"
          rows={10}
          name="message"
          placeholder={props.contactText.message}
        />
        <button className="w-[200px] rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f] flex justify-center items-center gap-2">
          <HiOutlineMail />
          {props.contactText.submit}
        </button>
      </form>
    </div>
  );
}

export default Contact;
