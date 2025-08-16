"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AnimatedStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counts, setCounts] = useState({
    students: 0,
    projects: 0,
    mentors: 0,
    schools: 0
  });

  const stats = [
    {
      number: 500,
      label: "Students Helped",
      suffix: "+",
      color: "text-teal-600"
    },
    {
      number: 150,
      label: "Projects Completed",
      suffix: "+",
      color: "text-blue-600"
    },
    {
      number: 50,
      label: "Expert Mentors",
      suffix: "+",
      color: "text-purple-600"
    },
    {
      number: 25,
      label: "Partner Schools",
      suffix: "+",
      color: "text-pink-600"
    }
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          students: Math.floor(stats[0].number * progress),
          projects: Math.floor(stats[1].number * progress),
          mentors: Math.floor(stats[2].number * progress),
          schools: Math.floor(stats[3].number * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="glass-effect rounded-2xl p-8 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`text-4xl xl:text-5xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {counts[Object.keys(counts)[index]]}{stat.suffix}
                </motion.div>
                <p className="text-lg text-slate-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStats;
