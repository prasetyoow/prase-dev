import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <>
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/wprasetyoow/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="3rem" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/prasetyoow/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size="3rem" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/prasetyoow"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size="3rem" />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
