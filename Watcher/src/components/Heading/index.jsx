import "./index.css";

export const Heading = (Props) => {
  const animation = () =>
    `
     0.5s infinite alternate;
  `;

  return (
    <h1
      style={{
        letterSpacing: 0,
        textShadow: "0 0 80px rgba(255, 255, 255, 0.5)",
        /* Clip Background Image */
        background: `url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) `,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        /* Animate Background Image */
        WebkitTextFillColor: "transparent",
        WebkitAnimation: "ben 80s linear infinite",
        /* Activate hardware acceleration for smoother animations */
        WebkitTransform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        animation: `${animation}`,
      }}
    >
      {Props.title}
    </h1>
  );
};
