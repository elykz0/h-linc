"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Users, Lightbulb, Target } from "lucide-react";

const AnimatedFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: BookOpen,
      title: "Research Projects",
      description: "Dive deep into academic research with guidance from professors and mentors.",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Users,
      title: "Group Collaboration",
      description: "Work with peers on exciting group projects that build teamwork skills.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Passion Projects",
      description: "Pursue your interests and turn your ideas into reality with expert support.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Develop critical thinking, leadership, and problem-solving skills.",
      color: "from-pink-400 to-pink-600"
    }
  ];

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

  const cardVariants = {
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
    <section className="py-20 bg-gradient-to-b from-transparent to-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive program provides multiple pathways for students to explore, learn, and grow.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
            >
              <motion.div
                className="glass-effect rounded-2xl p-8 text-center hover-lift h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
