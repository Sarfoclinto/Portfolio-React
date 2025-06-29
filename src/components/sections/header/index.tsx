import { motion } from "motion/react";

const links = [
  "Overview",
  "Stack",
  "Experience",
  // "Testimonials",
  "Certifications",
  "Contact",
];
const Header = () => {
  return (
    <div className="fixed z-50 w-dvw top-0 md:top-4 mx-auto">
      <header className="mx-auto backdrop-blur-2xl w-fit flex flex-row gap-x-10 items-center justify-between p-5 rounded-4xl border border-slate-900">
        <motion.span
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="uppercase cursor-pointer text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent"
        >
          SC
        </motion.span>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {links.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-400 text-lg font-medium hover:scale-105"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300"
          aria-label="Toggle theme"
        />
      </header>
    </div>
  );
};
export default Header;
