import { Button } from "@/components/ui/button";
import BackgroundAnimation from "@/components/background-animation";
import EmailIcon from "@/icons/email-icon";
import GithubIcon from "@/icons/github-icon";
import ArrowUpRight from "@/icons/arrow-up-right";

const Home = () => {
  return (
    <div className="bg-contrast text-primary-foreground relative overflow-hidden">
      <main className="relative z-1 md:pt-6">
        <div className="max-w-[700px] m-auto">
          <nav className="py-3 px-6">
            <div className="flex justify-center gap-5">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Connect</Button>
              <Button variant="ghost">Work</Button>
            </div>
          </nav>
          <div className="py-16 md:py-20 px-6">
            <div className="pb-16 md:pb-24">
              <h1 className="text-[30px] font-bold flex w-[200px]">
                Hi, I am Alex
              </h1>
              <p className="pt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione itaque suscipit adipisci impedit natus, optio delectus
                fugiat labore doloremque tempora nihil dicta facilis, tempore
                tenetur quibusdam. Omnis obcaecati incidunt nemo.
              </p>
            </div>

            <div className="flex flex-col gap-16 md:gap-24">
              <section className="flex flex-col md:flex-row gap-1 md:gap-5">
                <h2 className="shrink-0 md:w-32 text-lg">About</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem, illum a? Ea nostrum aspernatur aliquam nemo quis
                  adipisci officia eaque tenetur quibusdam ex? Temporibus quas
                  voluptatem excepturi, ullam ex maiores!
                </p>
              </section>
              <section className="flex flex-col md:flex-row gap-1 md:gap-5">
                <h2 className="shrink-0 md:w-32 text-lg">Connect</h2>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                  <li className="col-span-1">
                    <a
                      className="w-full p-4 rounded-md bg-secondary-foreground inline-grid hover:brightness-125 transition"
                      href="mailto:zz098708150829@gmail.com"
                      target="_blank"
                    >
                      <div className="flex gap-3 items-center">
                        <EmailIcon />
                        Email
                        <span className="ml-auto">
                          <ArrowUpRight />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="col-span-1">
                    <a
                      className="w-full p-4 rounded-md bg-secondary-foreground inline-grid hover:brightness-125 transition"
                      href="https://github.com/alexlocode"
                      target="_blank"
                    >
                      <div className="flex gap-3 items-center">
                        <GithubIcon />
                        github
                        <span className="ml-auto">
                          <ArrowUpRight />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>

              <section className="flex flex-col md:flex-row gap-1 md:gap-5">
                <h2 className="shrink-0 md:w-32 text-lg">Side Project</h2>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem, illum a? Ea nostrum aspernatur aliquam nemo quis
                    adipisci officia eaque tenetur quibusdam ex? Temporibus quas
                    voluptatem excepturi, ullam ex maiores!
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <BackgroundAnimation />
    </div>
  );
};

export default Home;
