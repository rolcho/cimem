import { HiOutlineMail } from "react-icons/hi";

function Contact() {
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
            #contact<strong className="font-bold">me</strong>
          </p>
          <p className="pt-4">
            submit the form below or send me an e-mail -{" "}
            <strong>roland [at] cimem.hu</strong>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md text-gray-900"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 rounded-md text-gray-900"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md text-gray-900"
          rows={10}
          name="message"
          placeholder="Message"
        />
        <button className="w-[200px] rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f] flex justify-center items-center gap-2">
          <HiOutlineMail />
          let's go!
        </button>
      </form>
    </div>
  );
}

export default Contact;
