import { motion } from "motion/react";

interface App {
  name: string;
  description: string;
  apk: string;
}

interface Props {
  apps: App[];
  onDownload: (app: App) => void;
  onClose: () => void;
}

const AppsDrawer = ({ apps, onDownload, onClose }: Props) => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed left-0 top-0 z-50 h-full w-full md:w-[380px] 
      bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl 
      border-r border-gray-200 dark:border-gray-700 
      shadow-2xl p-6 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight dark:text-gray-300">
          Apps
        </h2>
        <button
          onClick={onClose}
          className="text-xl px-2 py-1 rounded-md dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          ✕
        </button>
      </div>

      {/* Apps Grid */}
      <div className="grid gap-4">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="group p-4 rounded-xl border 
            bg-white/60 dark:bg-gray-800/60 
            border-gray-200 dark:border-gray-700
            hover:shadow-lg transition-all duration-300"
          >
            {/* App Info */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-300">
                  {app.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {app.description}
                </p>
              </div>

              {/* Fake icon */}
              {/* <div className="w-10! h-10! rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {app.name[0]}
              </div> */}
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-gray-500">Android APK</span>

              <button
                onClick={() => onDownload(app)}
                className="px-4 py-2 text-sm rounded-lg 
                bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white font-medium
                hover:opacity-90 active:scale-95 transition"
              >
                Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer hint */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        Hidden area unlocked 👀
      </p>
    </motion.div>
  );
};

export default AppsDrawer;
