import { useRef } from "react";
import Title from "../components/common/Title";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const ref = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${import.meta.env.VITE_APIKEY_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_APIKEY_EMAIL_TEMPLATE}`,
        ref.current,
        {
          publicKey: `${import.meta.env.VITE_APIKEY_EMAIL_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been send seuccessfully",
            showConfirmButton: false,
            timer: 1000,
          });
        },
        (error) => {
          Swal.fire({
            title: "OOPs! message did not send!",
            text: "Try again later..",
            icon: "question",
          });
        }
      );
  };
  return (
    <div className="py-5 pb-10">
      <Title title={"Contact With Me"} />
      <div className="mt-6">
        <Title sTitle title={"Contact Form"} />
      </div>
      <form
        ref={ref}
        onSubmit={sendEmail}
        className=" mt-5 flex flex-col gap-6"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Name"
          required
          className=" px-3 py-2 border-b-2 border-primary outline-none rounded w-full bg-transparent "
        />
        <input
          type="email"
          name="from_email"
          required
          placeholder="Email"
          className="px-3 py-2 border-b-2 outline-none border-primary rounded w-full bg-transparent "
        />

        <textarea
          type="text"
          required
          name="message"
          placeholder="Message"
          className="px-3 py-2 border-b-2 outline-none border-primary rounded w-full bg-transparent "
        />
        <button
          type="submit"
          className=" py-4 w-full border border-[#383838] text-center      hover:border-primary duration-300 hover:border-r-transparent hover:border-t-transparent rounded-bl-2xl rounded-tr-xl px-6  text-primary bg-gradient-to-b from-[#e9cb3414] to-[#222223] flex items-center gap-2 text-[15px] font-medium   justify-center hover:bg-gradient-to-b hover:from-[#e9cb342b] hover:to-[#222223]"
        >
          <span>
            <IoIosSend />
          </span>{" "}
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
