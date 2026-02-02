import { ReactNode, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = ({
  className,
  children,
}: BentoGridProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  index?: number;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}: BentoGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento relative overflow-hidden",
        "p-4 bg-card border border-border/50",
        "justify-between flex flex-col space-y-4",
        "transition-all duration-300 ease-out",
        // Enhanced hover states
        "hover:shadow-2xl hover:shadow-primary/10",
        "hover:border-primary/30",
        "hover:-translate-y-2",
        className
      )}
    >
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" 
          style={{ 
            animationDuration: '2s',
            animationIterationCount: isHovered ? 'infinite' : '0'
          }} 
        />
      </motion.div>

      {/* Gradient background shift on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          background: isHovered 
            ? 'linear-gradient(135deg, hsl(var(--hf-teal) / 0.05), hsl(var(--hf-purple) / 0.05), hsl(var(--hf-sky) / 0.05))'
            : 'transparent'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered 
            ? 'inset 0 0 0 1px hsl(var(--primary) / 0.3), 0 0 20px hsl(var(--primary) / 0.1)'
            : 'none'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Header with transform-3d effect */}
      <div style={{ transform: "translateZ(20px)" }}>
        {header}
      </div>

      {/* Content area */}
      <motion.div 
        className="relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Animated icon container */}
        <motion.div
          className="relative inline-block"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Icon glow effect */}
          <motion.div
            className="absolute inset-0 rounded-lg blur-md"
            animate={{
              opacity: isHovered ? 0.6 : 0.3,
              scale: isHovered ? 1.2 : 1,
              background: 'hsl(var(--primary) / 0.3)',
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Pulse animation on icon */}
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Title with staggered entrance */}
        <motion.div 
          className="font-sans font-bold text-foreground mb-2 mt-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {title}
        </motion.div>

        {/* Description with staggered entrance */}
        <motion.div 
          className="font-sans font-normal text-muted-foreground text-sm"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
