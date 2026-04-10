import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import AppsDrawer from "./AppsDrawer";

const links = [
  "Overview",
  "Stack",
  "Experience",
  // "Testimonials",
  "Certifications",
  "Contact",
];

const apps = [
  {
    name: "SHELL_SCANNER",
    description:
      "A mobile app that scans barcodes and QR codes. Acts as a utility app for POS systems, inventory management, and quick access to product information. Built with React Native and Expo.",
    apk: "shell_scanner.zip",
  },
  // Add more as needed
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const eventsRef = useRef<string[]>([]);
  const lastClickTimeRef = useRef<number | null>(null);
  const stepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const DOUBLE_CLICK_THRESHOLD = 300; // ms
  //  const MIN_WAIT = 2000;
  const MAX_WAIT = 4000;

  const resetSequence = () => {
    eventsRef.current = [];
    if (stepTimerRef.current) clearTimeout(stepTimerRef.current);
  };

  const handleLogoClick = () => {
    const now = Date.now();

    // Detect double click
    if (
      lastClickTimeRef.current &&
      now - lastClickTimeRef.current < DOUBLE_CLICK_THRESHOLD
    ) {
      eventsRef.current.push("double");
      lastClickTimeRef.current = null; // reset
    } else {
      // Potential single click (wait to confirm it's not double)
      lastClickTimeRef.current = now;

      setTimeout(() => {
        // If still not converted to double → it's a single
        if (lastClickTimeRef.current === now) {
          eventsRef.current.push("single");
          lastClickTimeRef.current = null;
        }
      }, DOUBLE_CLICK_THRESHOLD);
    }

    // Handle step timing
    if (stepTimerRef.current) clearTimeout(stepTimerRef.current);

    stepTimerRef.current = setTimeout(() => {
      const seq = eventsRef.current;
      const isValid =
        seq.length === 3 &&
        seq[0] === "single" &&
        seq[1] === "double" &&
        seq[2] === "single";

      if (isValid) {
        setDrawerOpen(true);
      }

      resetSequence();
    }, MAX_WAIT);
  };

  const handleDownload = (app: (typeof apps)[0]) => {
    // get ext from name. ext could be zip, apk, etc
    const ext = app.apk.split(".").pop();
    const link = document.createElement("a");
    link.href = `/${app.apk}`;
    link.download = `${app.name}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="fixed z-50 w-dvw top-0 md:top-4 mx-auto">
        <header className="mx-auto backdrop-blur-2xl w-fit flex flex-row gap-x-10 items-center justify-between p-5 rounded-4xl border border-slate-900">
          <motion.span
            onClick={handleLogoClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="uppercase select-none cursor-pointer text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent"
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
      <AnimatePresence>
        {drawerOpen && (
          <AppsDrawer
            apps={apps}
            onDownload={handleDownload}
            onClose={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
