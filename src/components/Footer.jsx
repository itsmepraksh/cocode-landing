const Footer = () => {
  return (
    <>
      <footer className="px-[2rem] text-white md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] ">
        <hr className="border-[1.5px]   border-gray-600" />
        <div className="foot flex justify-between  py-4 p-2">
          <h3>Terms</h3>
          <div className="inline ">
            <a className="px-2">Privacy</a>
            <a className="px-2">Contact</a>
          </div>
        </div>
        <p className="text-zinc-400 px-2">credits : </p>
        <ul className="flex flex-col p-4 gap-2 text-xs text-zinc-600">
          <a href="https://storyset.com/web">Web illustrations by Storyset</a>
          <a href="https://storyset.com/technology">
            Technology illustrations by Storyset
          </a>
          <a href="https://storyset.com/work">Work illustrations by Storyset</a>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
