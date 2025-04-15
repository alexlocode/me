import BackgroundAnimation from "@/components/background-animation";
import EmailIcon from "@/icons/email-icon";
import GithubIcon from "@/icons/github-icon";
import ArrowUpRight from "@/icons/arrow-up-right";
import InstagramIcon from "@/icons/instagram-icon";

const Home = () => {
  return (
    <div className="bg-contrast text-primary-foreground relative overflow-hidden min-h-screen">
      <main className="relative z-1 p-6 md:py-6 md:px-0 ">
        <div className="max-w-[700px] m-auto backdrop-blur-sm  rounded-lg shadow-lg">
          <div className="py-16 md:py-20 px-6">
            <div className="pb-16 md:pb-24">
              <h1 className="text-[30px] font-bold flex w-[200px]">
                Hi, I’m Alex
              </h1>
              <p className="py-4">
                我是一名前端工程師，熱衷於使用 React、Next.js 和 TypeScript
                打造高效能的網頁應用。
                平常不在優化程式碼或研究新技術的時候，你可能會看到我在聽音樂、打電動，或沉浸在
                Netflix 的影集中。
              </p>
              <p>有有趣的技術點子或音樂推薦嗎？歡迎找我聊聊！</p>
            </div>

            <div className="flex flex-col gap-16 md:gap-24">
              <section className="flex flex-col md:flex-row gap-1 md:gap-5">
                <h2 className="shrink-0 md:w-32 text-lg">About</h2>
                <div className="grid gap-3">
                  <p>
                    擁有五年以上前端開發經驗，熟悉 React、Next.js 與
                    TypeScript，具備從零到一獨立開發專案的能力，能合理規劃系統架構並處理前後端整合。擅長模組化開發與前端架構設計，注重程式碼可維護性與團隊協作效率。
                  </p>
                  <p>
                    過去曾參與多項中大型專案，包含 CRM
                    會員系統、電商平台、內容管理系統等，累積了豐富的實務經驗與跨部門協作能力。能與
                    PM、設計師與後端工程師高效合作，確保專案在穩定品質下如期交付。
                  </p>
                  <p>
                    近期正在研究
                    n8n，自動化常見的開發與營運流程，提升團隊效率與整體開發體驗。同時也開始接觸
                    SEO，作為未來 side project
                    的探索方向，希望打造兼具技術深度與流量成長潛力的作品。
                  </p>
                </div>
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
                  <li className="col-span-1">
                    <a
                      className="w-full p-4 rounded-md bg-secondary-foreground inline-grid hover:brightness-125 transition"
                      href="https://www.instagram.com/alex._.0811"
                      target="_blank"
                    >
                      <div className="flex gap-3 items-center">
                        <InstagramIcon />
                        instagram
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
                <div className="grid gap-4">
                  <a
                    href="https://github.com/alexlocode/alex-crypto-bot"
                    target="_blank"
                    className="w-full p-4 rounded-md bg-secondary-foreground inline-grid gap-2 hover:brightness-125 transition"
                  >
                    <h4 className="text-lg">Telegram 報價機器人</h4>
                    <p>
                      這個專案是一個 Telegram 報價機器人，專門從 幣安
                      平台抓取即時加密貨幣價格，並定期將價格資訊推送給指定用戶。
                    </p>
                    <p>
                      透過 Next.js，我建立了一個簡單的查價 API，並使用 Vercel
                      排程（Vercel Cron Jobs）來定期抓取資料並推送到
                      Telegram。此外，我也在專案中加入了一些個人策略，讓報價機器人更具靈活性與智慧性。
                    </p>
                  </a>

                  <a
                    href="https://github.com/alexlocode/Snake"
                    target="_blank"
                    className="w-full p-4 rounded-md bg-secondary-foreground inline-grid gap-2 hover:brightness-125 transition"
                  >
                    <h4 className="text-lg">Typescript 貪吃蛇小遊戲</h4>

                    <p>
                      這個專案是一個用 TypeScript 實現的貪吃蛇小遊戲，旨在加深對
                      TypeScript 的理解與運用，同時練習
                      物件導向（OOP）設計。遊戲功能包括蛇的移動、碰撞檢測、食物生成等，並加入了分數計算判斷。
                    </p>
                  </a>
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
