import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  // Pre-calculate rotation values for each testimonial to avoid random changes during transitions
  const rotations = useMemo(() => 
    testimonials.map(() => Math.floor(Math.random() * 21) - 10),
    [testimonials]
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const baseRotation = rotations[index];
                return (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                      rotate: baseRotation,
                      y: 20,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.3,
                      scale: isActive(index) ? 1 : 0.92,
                      rotate: isActive(index) ? 0 : baseRotation,
                      y: isActive(index) ? 0 : 10,
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      rotate: baseRotation,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth easing
                      opacity: { duration: 0.5 },
                    }}
                    className="absolute inset-0 origin-center"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                      loading="eager"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -15,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-primary font-medium">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.015 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-primary/20 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-primary/20 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
