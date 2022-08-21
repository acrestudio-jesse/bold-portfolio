import style from "./Contact.module.css";
import Card from "../../UI/Card";
import SentModal from "./SentModal";
import NavBar from "../../UI/NavBar";
import TitleSection from "../../UI/TitleSection";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

//TODO
//1. Make RECaptcha on deploy.
//2. Make Form Valid Handling

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
    console.log("clicked");

    emailjs
      .sendForm("myGmail", "bold_folio_template", e.target, "X410SHXsjwJD7uQGr")
      .then(
        (res) => {
          console.log(res.text);
          setSentEmail("Email sent successfully!");
        },
        (err) => {
          console.log(err.text);
          setSentEmail("Email sent successfully!");
        }
      );
  };

  const sentModalCloseHandler = () => {
    setSentEmail("");
    setFormContent({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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

      <Card className={style.formBg}>
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
      </Card>
      {sentEmail &&
        (createPortal(
          <SentModal message={sentEmail} closeModal={sentModalCloseHandler} />
        ),
        document.getElementById("overlay"))}
      {loadBGImage && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, x: 200 }}
          transition={{ duration: 1.5 }}
          className={style.bgImg}
          src={"/bg-el/FashColumn.png"}
        />
      )}
    </>
  );
};

export default Contact;
