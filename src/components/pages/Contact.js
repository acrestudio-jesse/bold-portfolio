import style from "./Contact.module.css";
import Card from "../UI/Card";
import {Link} from "react-router-dom"
import MotionLink from "../UI/MotionLink";

const Contact = () => {
  return (
    <>
    <Link to="/" ><MotionLink animationDelay={.5} className={style.navBtn}>Home</MotionLink></Link>

    <Card>
      <h3>Let's Work Together!</h3>
      <form>
        <input type="text" placeholder="Email..."></input>
        <input type="text" placeholder="Subject..."></input>
        <textarea placeholder="How can I help?"></textarea>
        <button type="submit">Send</button>
      </form>
    </Card>
    </>
  );
};

export default Contact;
