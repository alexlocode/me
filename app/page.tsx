"use client";
import useCursorAnimated from "../hooks/use-cursor-animated";
import Info from "../components/info";
import { Session } from "inspector";

const Home = () => {
  const { positions, DELAY } = useCursorAnimated();

  return (
    <main
      className="w-full overflow-hidden bg-white"
      style={{
        transition: "all .3s",
      }}
    >
      <div className="bg-white duration-300">
        <Info />
        <div className="container px-[120px] relative z-[2] mix-blend-difference text-white m-auto">
          <h2 className="text-[28px]">
            <span className="before:summary-[''] mx-1 whitespace-nowrap px-2 text-main before:absolute before:inset-0 before:-z-1 before:m-auto before:h-[calc(100%_+_4px)] before:w-full before:bg-[#f7ff09] md:mx-1.5">
              alex test
            </span>
            <span className="before:summary-[''] mx-1 whitespace-nowrap px-2 text-black before:absolute before:inset-0 before:-z-1 before:m-auto before:h-[calc(100%_+_4px)] before:w-full before:bg-white md:mx-1.5">
              alex test
            </span>
          </h2>

          <section>
            <h2 className="text-[40px]">skill</h2>
            <p>JavaScript</p>
            <p>JavaScript</p>
            <p>JavaScript</p>
            <p>JavaScript</p>
            <p>JavaScript</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Vue.js</p>
            <p>Git</p>
            <p>Git</p>
          </section>
        </div>
      </div>

      <div className="fixed top-0 left-0 mix-blend-difference z-[999] pointer-events-none">
        {positions.map((pos, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              transition: `transform ${DELAY * (index + 1)}ms linear`,
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${
                1 - index * 0.1
              })`,
            }}
          >
            <div
              className="w-6 aspect-square bg-special"
              style={{
                transform: "translate(-12px, -12px)",
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
