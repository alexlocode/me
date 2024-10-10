import Info from "../components/info";
import CursorAnimationBlock from "../components/cursor-animation-block";
import SideProject from "../components/side-project";

const Home = () => {
  return (
    <main
      className="w-full overflow-hidden bg-white"
      style={{
        transition: "all .3s",
      }}
    >
      <div className="bg-white duration-300">
        <Info />
        <SideProject />
        <div className="container px-[200px] mix-blend-difference text-white m-auto">
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
            <span className="before:summary-[''] mx-1 whitespace-nowrap px-2 text-black before:absolute before:inset-0 before:-z-1 before:m-auto before:h-[calc(100%_+_4px)] before:w-full before:bg-white md:mx-1.5">
              alex test
            </span>
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

      <CursorAnimationBlock />
    </main>
  );
};

export default Home;
