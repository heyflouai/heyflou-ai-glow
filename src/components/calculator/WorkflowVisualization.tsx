import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface WorkflowVisualizationProps {
  selectedApps: Set<string>;
}

export const WorkflowVisualization = ({ selectedApps }: WorkflowVisualizationProps) => {
  const t = useTranslation();
  const apps = Array.from(selectedApps);
  const hasApps = apps.length > 0;

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{t.calculator.workflowTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Workflow container with horizontal scroll */}
        <div 
          className="relative min-h-[100px] rounded-lg border border-border/50 bg-muted/30 overflow-x-auto"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          {/* Empty state */}
          {!hasApps && (
            <div className="flex items-center justify-center h-[100px] px-4">
              <p className="text-sm text-muted-foreground text-center">
                {t.calculator.workflowEmptyState}
              </p>
            </div>
          )}

          {/* Workflow nodes */}
          {hasApps && (
            <div className="flex items-center gap-0 p-4 min-w-max">
              {/* Start trigger node */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
              </motion.div>

              {/* Connector from trigger */}
              <div className="flex items-center shrink-0">
                <div className="w-6 h-[2px] bg-border" />
                <ChevronRight className="w-3 h-3 text-muted-foreground -ml-1" />
              </div>

              {/* App nodes */}
              <AnimatePresence mode="popLayout">
                {apps.map((app, index) => (
                  <motion.div
                    key={app}
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 25,
                      delay: index * 0.03
                    }}
                    layout
                  >
                    {/* App node */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card shadow-sm shrink-0 min-w-[80px]">
                      {/* Icon placeholder */}
                      <div className="w-5 h-5 rounded bg-muted flex items-center justify-center shrink-0">
                        <span className="text-[10px] text-muted-foreground font-medium">
                          {app.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      {/* App name */}
                      <span className="text-xs font-medium text-foreground whitespace-nowrap">
                        {app.length > 12 ? `${app.slice(0, 11)}…` : app}
                      </span>
                    </div>

                    {/* Connector to next node */}
                    {index < apps.length - 1 && (
                      <div className="flex items-center shrink-0">
                        <div className="w-6 h-[2px] bg-border" />
                        <ChevronRight className="w-3 h-3 text-muted-foreground -ml-1" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* End node */}
              <div className="flex items-center shrink-0">
                <div className="w-6 h-[2px] bg-border" />
                <ChevronRight className="w-3 h-3 text-muted-foreground -ml-1" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
              </motion.div>
            </div>
          )}
        </div>

        {/* Step count */}
        {hasApps && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mt-3"
          >
            {apps.length} {apps.length !== 1 ? t.calculator.stepsInWorkflowPlural : t.calculator.stepsInWorkflow}
          </motion.p>
        )}
      </CardContent>
    </Card>
  );
};
