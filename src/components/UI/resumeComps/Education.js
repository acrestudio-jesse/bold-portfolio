import style from "./Experience.module.css";

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <div className={style.entry}>
        <h4 className={style.company}>
          California Polytechnic State University
        </h4>
        <h4 className={style.city}>San Luis Obispo, California</h4>
        <h5 className={style.title}>B.A Psychology</h5>
        <h5 className={style.title}>September 2013 - 2016</h5>
      </div>
      <br />
      <div className={style.entry}>
        <h4 className={style.company}>Cuesta College</h4>
        <h4 className={style.city}>San Luis Obispo, California</h4>
        <h5 className={style.title}>A.A. Field Biology</h5>
        <h5 className={style.title}>September 2011 - June 2013</h5>
      </div>
    </div>
  );
};

export default Education;
