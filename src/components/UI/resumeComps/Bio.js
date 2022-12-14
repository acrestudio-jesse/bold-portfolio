import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Bio = () => {
  const [openBio, setOpenBio] = useState(false);

  return (
    <div>
      <span onClick={() => setOpenBio(!openBio)}>
        <h3>Bio</h3>
        {openBio ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        )}
      </span>
      <AnimatePresence>
        {openBio && (
          <motion.p
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Born to artists in between the mountains and sea of Central
            California, art and nature were the backdrop upon which I was
            reared.
            <br />
            <br />
            My father's illustrations from his days working in a picture frame
            shop are some of my first memories of being exposed to art. I was
            shown surreal paintings of beach scapes and forests, floating heads
            and waves crashing, deftly rendered through pen and ink. Those
            moments captured my young mind immediately and set me on a path of
            mastery that has been one of the center pieces of my life.
            <br />
            <br />
            Of course, at such a young age, drawing to make money seemed like a
            fantasy. In fact, money wasn't even a thought. Drawing simply
            represented too joyful an activity to yield much reward beyond it's
            own execution and display. However, mid-way through high school, I
            suddenly became aware that there was a demand for just this kind of
            aesthetic decoration in the world, whether for advertising or it's
            own beauty. At that moment, I was resolved to persue a future in the
            art industry.
            <br />
            <br />
            That said, the art industry is a difficulty beast to break, and so,
            when persuing higher education, I opted for more practical means.
            After all, I felt confident that I could learn the art skills on my
            own, I'd been doing it for so long anyway. I felt much more drawn
            towards parallel subjects like biology and psychology to round out
            my understanding of nature and humanity.
            <br />
            <br />
            During my early 20s, while exploring avenues of career and
            education, I couldn't help but follow my curiosity where ever it
            lead. What about computer science? How about botany? Quantum
            physics? Mandarin Chinese? I've studied all of these in one capacity
            or another, becoming deft in some and only conversational in others.
            I cannot deny the value of these forays, though at the time they
            seemed frivolous. Knowledge in these areas has given me a nuanced
            and unique understanding of the way these fields connect.
            <br />
            <br />
            I spent the better part of university living in my car and sleeping
            at the beach. My job was on the wharf where there were myriad public
            showers for the boat dwellers in the bay. In truth, it was barely an
            inconvenience, as many of the field biology course I was engaged
            with required travel and camping throughout California's myriad
            gorgeous ecosysmets. When I was not on the road doing field
            research, I spent to time taking care of my friends' farms and
            properties in exchange for room and board. I was finally able to
            graduate. Not long after that, I was offered an English teaching job
            in Taiwan. It seemed like a good move in terms of personal
            development to go abroad and engage with a language I had casually
            studied for years.
            <br />
            <br />
            Teaching was difficult at first. Managing students is difficult,
            demonstating consistancy and accountability is difficult. Accurately
            communicating information simply enough to understood by students is
            incredibly difficult. My understanding of these difficulties changed
            my perspective on how parents, teachers and leaders have to hold
            themselves to such a high standard. As a student, I had never
            considered the difficulties and responsibilities of leading a
            classroom by example, creating reasonable objectivies and
            encouraging growth in the students.
            <br />
            <br />
            After a year or two, I was offered a prestigious position as an art
            professor at a high-school, where I work to this day. Though
            teaching has brought much joy and prosperity, I yearn for a new
            challenge. Thus, I have continued developing my language skills and
            design skills in preparation for a new career building useful tools
            for productivity, growth and learning in our growing generations.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bio;
