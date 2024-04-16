"use client";
import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
  return (
    <h1 className="text-6xl">
      Create your beautiful web presence
      <TypewriterComponent
        options={{
          strings: [
            "MERN STACK DEVELOPER",
            "FULL STACK DEVELOPER",
            "FRONT-END DEVELOPER",
            "WEB DESIGNER",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default Typewriter;
