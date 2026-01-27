import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface WorkflowVisualizationProps {
  selectedApps: Set<string>;
}

export const WorkflowVisualization = ({ selectedApps }: WorkflowVisualizationProps) => {
  const apps = Array.from(selectedApps);
  const hasApps = apps.length > 0;

  // Calculate positions for nodes in a radial layout
  const getNodePosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const radius = 120; // Distance from center
    const x = 150 + radius * Math.cos(angle); // Center at 150
    const y = 150 + radius * Math.sin(angle); // Center at 150
    return { x, y, angle };
  };

  // Generate curved path from app node to center
  const getCurvedPath = (x: number, y: number) => {
    const centerX = 150;
    const centerY = 150;
    
    // Calculate control point for curve
    const midX = (x + centerX) / 2;
    const midY = (y + centerY) / 2;
    
    // Offset control point perpendicular to the line
    const dx = centerX - x;
    const dy = centerY - y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const offset = len * 0.15;
    
    const ctrlX = midX + (dy / len) * offset;
    const ctrlY = midY - (dx / len) * offset;
    
    return `M ${x} ${y} Q ${ctrlX} ${ctrlY} ${centerX} ${centerY}`;
  };

  return (
    <Card className="border-primary/20 bg-card overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Your Automation Workflow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-gradient-to-br from-background via-background to-muted/30 rounded-xl">
          {/* SVG Container */}
          <svg 
            viewBox="0 0 300 300" 
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.1))' }}
          >
            {/* Background glow */}
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Background glow circle */}
            <circle cx="150" cy="150" r="80" fill="url(#centerGlow)" />

            {/* Connection lines */}
            <AnimatePresence>
              {hasApps && apps.map((app, index) => {
                const { x, y } = getNodePosition(index, apps.length);
                return (
                  <motion.path
                    key={`line-${app}`}
                    d={getCurvedPath(x, y)}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                );
              })}
            </AnimatePresence>

            {/* Center node */}
            <motion.g
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer glow ring */}
              <circle
                cx="150"
                cy="150"
                r="42"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.3"
              />
              {/* Main circle */}
              <circle
                cx="150"
                cy="150"
                r="36"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                className="drop-shadow-lg"
              />
              {/* Inner accent */}
              <circle
                cx="150"
                cy="150"
                r="28"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.4"
              />
            </motion.g>

            {/* Center label */}
            <text
              x="150"
              y="146"
              textAnchor="middle"
              className="fill-foreground text-[9px] font-semibold"
            >
              HeyFlou
            </text>
            <text
              x="150"
              y="158"
              textAnchor="middle"
              className="fill-muted-foreground text-[7px]"
            >
              Automation
            </text>

            {/* App nodes */}
            <AnimatePresence mode="popLayout">
              {hasApps && apps.map((app, index) => {
                const { x, y } = getNodePosition(index, apps.length);
                return (
                  <motion.g
                    key={app}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 25,
                      delay: index * 0.05 
                    }}
                    layout
                  >
                    {/* App node glow */}
                    <circle
                      cx={x}
                      cy={y}
                      r="26"
                      fill="hsl(var(--primary))"
                      opacity="0.1"
                    />
                    {/* App node circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="22"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--border))"
                      strokeWidth="1.5"
                    />
                    {/* App name - truncated */}
                    <text
                      x={x}
                      y={y + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground text-[7px] font-medium"
                    >
                      {app.length > 10 ? `${app.slice(0, 9)}…` : app}
                    </text>
                  </motion.g>
                );
              })}
            </AnimatePresence>
          </svg>

          {/* Empty state overlay */}
          <AnimatePresence>
            {!hasApps && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-sm text-muted-foreground text-center px-8">
                  Select apps to see your automation workflow
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* App count indicator */}
        {hasApps && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-muted-foreground text-center mt-4"
          >
            {apps.length} app{apps.length !== 1 ? 's' : ''} connected to your automation
          </motion.p>
        )}
      </CardContent>
    </Card>
  );
};
