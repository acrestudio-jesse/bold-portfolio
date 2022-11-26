import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div>
      <h3>Experience</h3>
      <div className={style.entry}>
        <h4 className={style.company}>Canadian Independent Micro School</h4>
        <h4 className={style.city}> Taipei, Taiwan</h4>

        <h5 className={style.title}>Art Curriculum Coordinator</h5>
        <h5 className={style.title}>July 2021 - Present</h5>
        <p>
          <br />
          Construct and execute high level art curriculum. Delegate instruction
          material to several instructors. Mentor students in fundamental
          mastery of technical concepts in illustration and painting.
        </p>
      </div>
      <br/>
      <div className={style.entry}>
        <h4 className={style.company}>Columbia English School</h4>
        <h4 className={style.city}> Taipei, Taiwan</h4>

        <h5 className={style.title}>Native English Instructor</h5>
        <h5 className={style.title}>August 2019 - Present</h5>
        <p>
          <br />
          Execute general skills curriculum for non-native English learners. Demonstrate proper phonic and lexical expression in English. Monitor and manage class sizes exceeding 20 students.
        </p>
      </div>
      <br/>
      <div className={style.entry}>
        <h4 className={style.company}>Blue Sky Bistro</h4>
        <h4 className={style.city}> Morro Bay, California</h4>

        <h5 className={style.title}>Lead Server</h5>
        <h5 className={style.title}>September 2015 - July 2019</h5>
        <p>
          <br />
          Manage front of house operations, including scheduling, ordering, delegation of duties and communication with back of house staff. 
        </p>
      </div>
      <br/>
      <div className={style.entry}>
        <h4 className={style.company}>Sustained Designs</h4>
        <h4 className={style.city}>Morro Bay, California</h4>

        <h5 className={style.title}>Sales Coordinator ; Illustrator</h5>
        <h5 className={style.title}>September 2015 - July 2019</h5>
        <p>
          <br />
          Compose illustrations for retail in environmentally sustainable markets. Book, coordinate and assemble pop-up sales locations. Develop strong community relationships through repeated sales events.
        </p>
      </div>
    </div>
  );
};

export default Experience;
