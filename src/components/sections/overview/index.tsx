import { motion } from "motion/react";
import { containerVariants, floatVariants } from "./data";
import SectionHeader from "../SectionHeader";

const Overview = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      id="overview"
      className="w-full pt-14 flex flex-col gap-y-18"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="float"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/20 md:from-blue-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-green-400/15 md:from-green-400/20 to-cyan-400/15 md:to-cyan-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <SectionHeader
          tagText="Get To Know Me"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Crafting digital experiences with passion, precision, and purpose"
          showUnderline={true}
          centered={true}
        />
      </motion.div>
    </motion.section>
  );
};
export default Overview;
