// dark:bg-[#242424]
// bg-sky-600
const Footer = () => {
  return (
    <footer className="w-full text-[#eeeeee] bg-stone-800 dark:bg-stone-600  py-3 text-sm text-center  font-normal">
      &copy; {new Date().getFullYear()} TechPulse All right reserved
    </footer>
  );
};

export default Footer;
