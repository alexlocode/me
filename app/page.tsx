import { Button } from "@/components/ui/button";
import Particles from "@/components/background-cover";

const Home = () => {
  return (
    <div className="bg-contrast h-screen text-primary-foreground relative">
      <main className="relative z-1 pt-6">
        <div className="max-w-[700px] m-auto">
          <nav className="py-3 px-6">
            <div className="flex justify-center gap-5">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Connect</Button>
              <Button variant="ghost">Work</Button>
            </div>
          </nav>
          <div className="py-20 px-6">
            <div>
              <h1 className="text-[30px] font-bold">Hi, I am Alex</h1>
              <p className="pt-4">我是一個XXXXXXX</p>
            </div>

            <div className="w-full h-[300px] bg-red-300"></div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              non dolorum explicabo tempora excepturi tempore quasi a doloribus
              dolore expedita, doloremque est necessitatibus deserunt dolores
              neque vitae labore in accusantium?
            </p>
          </div>
        </div>
      </main>

      <div className="w-full h-screen fixed top-0 left-0 pointer-events-none z-0">
        <Particles />
      </div>
    </div>
  );
};

export default Home;
