import { motion } from "motion/react";
import TypewriterRole from "../../TypewriterRole";
import { Icon } from "@iconify/react";

const Hero = () => {
  const socialLinks = [
    {
      href: "",
      icon: "simple-icons:github",
      label: "GitHub",
      color: "hover:text-slate-900 dark:hover:text-slate-950",
    },
    {
      href: "",
      icon: "skill-icons:linkedin",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      href: "",
      icon: "material-icon-theme:email",
      label: "Email",
      color: "hover:text-green-600",
    },
  ];
  return (
    <div className="min-h-[87dvh] overflow-auto no-scrollbar flex items-center justify-center z-10 m-auto">
      <section
        id="hero"
        className="w-full h-full flex flex-col items-center justify-center gap-y-10 m-auto"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text z-10">
            Sarfo Clinton
          </span>
        </motion.h1>
        {/* skils */}
        <TypewriterRole />

        {/* craft */}
        <motion.p
          className="text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-10 max-w-2xl text-center mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Crafting exceptional digital experiences with clean code and
          thoughtful design
        </motion.p>

        {/* status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-full backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <a href="#contact">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Available for projects
            </span>
          </a>
        </motion.div>

        {/* social media */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {socialLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-base font-medium text-white transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl ${link.color}`}
              >
                <Icon icon={link.icon} width={24} height={24} />
                {link.label}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* scroll for more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="hidden md:flex absolute bottom-0 left-0 right-0 justify-center pb-8 z-10"
        >
          <motion.button
            onClick={() => {
              const overviewSection = document.getElementById("overview");
              if (overviewSection) {
                overviewSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-medium tracking-wide">
              Scroll for more
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon
                icon="mdi:chevron-down"
                width={24}
                height={24}
                className="text-gray-400 dark:text-gray-500"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
export default Hero;
