import Image from "next/image";
import profilePic from "../public/photo.jpg";

const Info = () => {
  return (
    <section className="container px-[200px] z-[2] m-auto pt-32 md:pt-[150px] pb-5">
      <div className="rounded p-5 flex gap-5 shadow-md shadow-slate-200">
        <div className="w-[280px] rounded overflow-hidden aspect-square shrink-0">
          <Image
            className="object-contain"
            src={profilePic}
            alt="Picture of the me"
            priority={true}
          />
        </div>

        <div className="grid">
          <h1 className="text-[40px] font-bold">
            <span className="before:summary-[''] mx-1 whitespace-nowrap px-2 text-black before:absolute before:inset-0 before:-z-1 before:m-auto before:h-[calc(100%_+_4px)] before:w-full before:bg-white md:mx-1.5">
              asdasd
            </span>
            羅士凱 Alex
          </h1>
          <h2 className="text-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            前端工程師
          </h2>

          <ul className="list-disc pl-5">
            <li>4 years + Frontend Developer</li>
            <li>有開發模組化元件、發布npm套件相關經驗</li>
            <li>熟悉前端主流框架Vue.js、React.js、Next.js</li>
            <li>精益求精，努力做到最好</li>
          </ul>
          <div className="">
            <p className="text-sm flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
              Taiwan , Taipei
            </p>
            <p className="text-sm flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              zz098708150829@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
