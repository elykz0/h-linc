"use client"

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Social from "./Social";

const AnimatedHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto h-full relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main title section */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <motion.div
              className="text-2xl font-light text-slate-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We Are
            </motion.div>
            
            <motion.div
              className="text-8xl xl:text-9xl font-bold gradient-text"
              variants={floatingVariants}
              animate="animate"
            >
              <TypeAnimation
                sequence={[
                  'H',
                  200,
                  'H-',
                  200,
                  'H-L',
                  200,
                  'H-Li',
                  200,
                  'H-Lin',
                  200,
                  'H-Linc',
                  3000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </motion.div>

          {/* Social media section */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <Social 
              containerStyles="flex gap-6" 
              iconStyles="w-12 h-12 glass-effect rounded-full flex justify-center items-center text-primary text-lg hover-lift hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white transition-all duration-500" 
            />
          </motion.div>

          {/* Mission statement */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            variants={itemVariants}
          >
            <motion.p
              className="text-2xl xl:text-3xl font-light text-slate-700 leading-relaxed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              We help <span className="font-semibold text-teal-600">disadvantaged teens</span> through school by allowing them to expand their knowledge and their choices through <span className="font-semibold text-blue-600">research</span> and <span className="font-semibold text-purple-600">hands-on activities</span>.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKiHsVHEjiBZBJrANiT0ynQsggGRlMfVB-3Amo9B5xCdngoQ/viewform"
              className="inline-block px-12 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold text-xl rounded-full hover-lift shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Program
            </motion.a>
          </motion.div>

          {/* Floating image */}
          <motion.div
            className="relative"
            variants={floatingVariants}
            animate="animate"
          >
            <Image 
              src="/assets/photo1.png" 
              alt="H-Linc Program" 
              width={300} 
              height={300}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
