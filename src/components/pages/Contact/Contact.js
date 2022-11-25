import style from "./Contact.module.css";
import SentModal from "./SentModal";
import NavBar from "../../UI/NavBar";
import TitleSection from "../../UI/TitleSection";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

//TODO
//1. Make RECaptcha on deploy.

const Contact = () => {
  const emailForm = useRef();
  const [loadBGImage, setLoadBGImage] = useState(false);
  const [sentEmail, setSentEmail] = useState("");
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(Object.values(formContent));

    if (Object.values(formContent).includes("")) {
      setSentEmail("All forms must be filled!");
      return;
    }

    console.log("clicked");

    emailjs
      .sendForm("myGmail", "bold_folio_template", e.target, "X410SHXsjwJD7uQGr")
      .then(
        (res) => {
          console.log(res.text);
          setSentEmail("Email sent successfully!");
          setFormContent({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log(err.text);
          setSentEmail("Email sent successfully!");
        }
      );
  };

  const sentModalCloseHandler = () => {
    setSentEmail("");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadBGImage(true);
    }, 1000);
    return clearTimeout();
  }, []);
  return (
    <>
      <section>
        <TitleSection>Contact</TitleSection>
        <NavBar curPage={"Contact"} />
      </section>

      <div className={style.formBg}>
        <h3 className={style.formNote}>Let's Work Together!</h3>
        <form ref={emailForm} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            value={formContent.name}
            onChange={(e) =>
              setFormContent({ ...formContent, name: e.target.value })
            }
            type="text"
            name="contact_name"
            placeholder="Name..."
          ></input>
          <label>Email Address</label>
          <input
            value={formContent.email}
            onChange={(e) =>
              setFormContent({ ...formContent, email: e.target.value })
            }
            type="email"
            name="contact_email"
            placeholder="Email..."
          ></input>
          <label>Subject</label>

          <input
            value={formContent.subject}
            onChange={(e) =>
              setFormContent({ ...formContent, subject: e.target.value })
            }
            type="text"
            name="subject"
            placeholder="Subject..."
          ></input>
          <label>Message</label>
          <textarea
            value={formContent.message}
            onChange={(e) =>
              setFormContent({ ...formContent, message: e.target.value })
            }
            name="message"
            placeholder="How can I help?"
          />
          <input className={style.sendBtn} type="submit" value="Send"></input>
        </form>
      </div>
      {sentEmail && (
        <SentModal message={sentEmail} closeModal={sentModalCloseHandler} />
      )}
      {loadBGImage && (
        <div className={style.imageContainer}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, x: 200 }}
          transition={{ duration: 1.5 }}
          className={style.bgImg}
          src={"/bg-el/fashcolumn.webp"}
        />
        </div>
      )}
    </>
  );
};

export default Contact;
