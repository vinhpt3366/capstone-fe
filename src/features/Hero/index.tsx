import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import GradientIcon from '@/components/GradientIcon/Icon';
import Button from '@/components/Button/Button';
import Typewriter from 'typewriter-effect';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = memo((): React.ReactElement => {
  return (
    <section className="carousel py-16 flex items-center justify-center mt-">
      <div className="mx-auto px-6 lg:px-12 container">
        <motion.div
          className="carousel__content grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          {/* Left Content */}
          <div className="carousel__left space-y-6">
            {/* Title */}
            <motion.div variants={fadeInUp}>
              <div>
                <p className="text-2xl leading-snug font-semibold text-pink-500 mb-5">
                  Dẫn đầu công nghệ
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold text-gray-800 mb-5">
                  Làm chủ lập trình, sáng tạo không giới hạn cùng{' '}
                  <span
                    className="text-pink-500 inline-block"
                    style={{ display: 'inline-block', minHeight: '1em' }}
                  >
                    <Typewriter
                      options={{
                        strings: ['Vlearning'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30
                      }}
                    />
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Article */}
            <motion.div
              variants={fadeInUp}
              className="carousel__article space-y-4"
            >
              <p className="text-gray-600 mb-4">
                Kết nối đam mê và kỹ năng để chinh phục thế giới công nghệ.
              </p>
              <ul className="space-y-2 mb-4 pb-2">
                <li className="flex items-center text-gray-600 ">
                  <GradientIcon icon={FaCheck} />
                  Nâng tầm kỹ năng với khóa học chuyên sâu.
                </li>
                <li className="flex items-center text-gray-600">
                  <GradientIcon icon={FaCheck} />
                  Làm chủ lập trình di động dễ dàng.
                </li>
              </ul>
              <Button text="BẮT ĐẦU NÀO" />
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            variants={fadeInUp}
            className="carousel__right flex justify-center"
          >
            <div className="carousel__image w-full max-w-4xl mx-auto">
              <img
                src="./vlearning/slider2.png"
                alt="carousel-image"
                className="w-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
