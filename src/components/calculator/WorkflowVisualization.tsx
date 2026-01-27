import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkflowVisualizationProps {
  selectedApps: Set<string>;
}

export const WorkflowVisualization = ({ selectedApps }: WorkflowVisualizationProps) => {
  const apps = Array.from(selectedApps);
  const hasApps = apps.length > 0;

  // Calculate positions for nodes in a radial layout
  const getNodePosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const radius = 90;
    const x = 125 + radius * Math.cos(angle);
    const y = 125 + radius * Math.sin(angle);
    return { x, y };
  };

  // Generate curved path from app node to center
  const getCurvedPath = (x: number, y: number) => {
    const centerX = 125;
    const centerY = 125;
    const dx = centerX - x;
    const dy = centerY - y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const offset = len * 0.12;
    const midX = (x + centerX) / 2 + (dy / len) * offset;
    const midY = (y + centerY) / 2 - (dx / len) * offset;
    return `M ${x} ${y} Q ${midX} ${midY} ${centerX} ${centerY}`;
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Your Automation Workflow</CardTitle>
        {!hasApps && (
          <p className="text-sm text-muted-foreground mt-1">
            Select apps to generate a visual workflow preview.
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-2">
        <div className="relative w-full max-w-[250px] mx-auto aspect-square">
          <svg viewBox="0 0 250 250" className="w-full h-full">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background glow */}
            <circle cx="125" cy="125" r="60" fill="url(#centerGlow)" />

            {/* Connection lines - only when apps exist */}
            <AnimatePresence>
              {hasApps && apps.map((app, index) => {
                const { x, y } = getNodePosition(index, apps.length);
                return (
                  <motion.path
                    key={`line-${app}`}
                    d={getCurvedPath(x, y)}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                );
              })}
            </AnimatePresence>

            {/* Center node - always visible */}
            <motion.g
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Outer ring */}
              <circle
                cx="125"
                cy="125"
                r="32"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity={hasApps ? 0.4 : 0.2}
              />
              {/* Main circle */}
              <circle
                cx="125"
                cy="125"
                r="26"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeOpacity={hasApps ? 1 : 0.5}
              />
              {/* Center label - only when apps selected */}
              {hasApps && (
                <>
                  <text
                    x="125"
                    y="123"
                    textAnchor="middle"
                    className="fill-foreground text-[8px] font-semibold"
                  >
                    HeyFlou
                  </text>
                  <text
                    x="125"
                    y="133"
                    textAnchor="middle"
                    className="fill-muted-foreground text-[6px]"
                  >
                    Automation
                  </text>
                </>
              )}
            </motion.g>

            {/* App nodes */}
            <AnimatePresence mode="popLayout">
              {hasApps && apps.map((app, index) => {
                const { x, y } = getNodePosition(index, apps.length);
                return (
                  <motion.g
                    key={app}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 350, 
                      damping: 25,
                      delay: index * 0.03 
                    }}
                    layout
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r="18"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                    />
                    <text
                      x={x}
                      y={y + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground text-[6px] font-medium"
                    >
                      {app.length > 8 ? `${app.slice(0, 7)}…` : app}
                    </text>
                  </motion.g>
                );
              })}
            </AnimatePresence>
          </svg>
        </div>

        {/* App count */}
        {hasApps && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground text-center mt-2"
          >
            {apps.length} app{apps.length !== 1 ? 's' : ''} connected
          </motion.p>
        )}
      </CardContent>
    </Card>
  );
};
