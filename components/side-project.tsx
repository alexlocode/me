const SideProject = () => {
  return (
    <section className="container px-[200px] text-white m-auto pb-5">
      <div className="p-5 shadow-md shadow-slate-200">
        <div className="mix-blend-difference">
          <h2 className="text-[32px] pb-2">
            <span className="before:summary-[''] mx-1 whitespace-nowrap px-2 text-black before:absolute before:inset-0 before:-z-1 before:m-auto before:h-[calc(100%_+_4px)] before:w-full before:bg-white md:mx-1.5">
              side project
            </span>
          </h2>
          <div className="flex gap-5">
            <div className="flex-1 aspect-square border p-5">
              <p>圖片</p>
              <h4>標題</h4>
              <p>說明</p>
            </div>
            <div className="flex-1 aspect-square border p-5">
              <p>圖片</p>
              <h4>標題</h4>
              <p>說明</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProject;
