"use client";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import heyflouLogo from "@/assets/heyflou-logo-new.png";
import { useTranslation } from '@/i18n';

const GoogleDriveIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M8 6L14 18H22L16 6H8Z" fill="#0066DA" /><path d="M2 18L8 6H16L10 18H2Z" fill="#00AC47" /><path d="M2 18H10L14 11H6L2 18Z" fill="#EA4335" /><path d="M14 18L10 11H18L22 18H14Z" fill="#FFBA00" /></svg>);
const NotionIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.02c-.42-.326-.98-.7-2.054-.607L3.01 2.72c-.466.046-.56.28-.374.466l1.823 1.022zm.793 3.684v13.682c0 .7.374 1.026 1.166.98l14.476-.84c.746-.047.84-.513.84-1.073V6.825c0-.559-.28-.84-.7-.793l-15.09.886c-.466.047-.7.327-.7.793v.88zm14.29.747c.093.42 0 .84-.467.886l-.7.14v10.137c-.607.327-1.166.513-1.633.513-.746 0-.932-.233-1.493-.932l-4.569-7.166v6.933l1.446.327s0 .84-1.166.84l-3.219.187c-.093-.186 0-.653.327-.746l.84-.233v-9.158l-1.166-.093c-.093-.42.14-1.026.793-1.073l3.453-.233L15.83 14.7V8.3l-1.213-.093c-.093-.56.28-.98.793-1.027l3.453-.233z" fill="currentColor" /></svg>);
const WhatsAppIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366" /></svg>);
const SlackIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A" /></svg>);
const GoogleDocsIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#4285F4" /><path d="M14 2v6h6" fill="#A1C2FA" /><path d="M8 13h8M8 17h8M8 9h2" stroke="#fff" strokeWidth="1.5" /></svg>);
const ZapierIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.578h-3.472l2.458 2.458a6.91 6.91 0 0 1-1.302 1.302l-2.458-2.458v3.472a6.96 6.96 0 0 1-1.84 0v-3.472l-2.458 2.458a6.91 6.91 0 0 1-1.302-1.302l2.458-2.458H6.106a6.96 6.96 0 0 1 0-1.84h3.472L7.12 10.28a6.91 6.91 0 0 1 1.302-1.302l2.458 2.458V8.064a6.96 6.96 0 0 1 1.84 0v3.372l2.458-2.458a6.91 6.91 0 0 1 1.302 1.302l-2.458 2.458h3.472c.12.598.12 1.242 0 1.84z" fill="#FF4A00" /></svg>);
const MessengerIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.086-2.242c1.09.301 2.246.464 3.445.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.13 3.26 5.889-3.26-6.56 6.963z" fill="#0084FF" /></svg>);
const HubSpotIcon = () => (<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.066A2.198 2.198 0 0017.235.845h-.067a2.198 2.198 0 00-2.195 2.195v.066c0 .91.556 1.689 1.346 2.02v2.79a5.925 5.925 0 00-2.727 1.263l-7.178-5.575a2.594 2.594 0 00.07-.585A2.593 2.593 0 003.89.426a2.593 2.593 0 00-2.594 2.593 2.593 2.593 0 002.594 2.593c.404 0 .784-.096 1.124-.262l7.063 5.484a5.94 5.94 0 00-.514 2.404 5.93 5.93 0 00.603 2.61l-2.144 2.144a1.939 1.939 0 00-.566-.088 1.946 1.946 0 00-1.947 1.946 1.946 1.946 0 001.947 1.947 1.946 1.946 0 001.946-1.947c0-.206-.034-.404-.093-.59l2.108-2.108a5.949 5.949 0 103.748-10.222zm-.962 8.8a3.236 3.236 0 01-3.232-3.233 3.236 3.236 0 013.232-3.232 3.236 3.236 0 013.233 3.232 3.236 3.236 0 01-3.233 3.232z" fill="#FF7A59" /></svg>);

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => (<div ref={ref} className={cn("z-10 flex items-center justify-center rounded-full border-2 bg-card p-3 shadow-lg", "border-border dark:border-border/50", "dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-slate-900/80", "dark:shadow-[0_0_15px_rgba(99,102,241,0.15)]", className)}>{children}</div>));
Circle.displayName = "Circle";

export function IntegrationBeams() {
  const t = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-[60px] md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-3 md:mb-4">{t.integrations.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{t.integrations.subtitle}</p>
        </div>
        <div className="relative flex w-full max-w-4xl mx-auto items-center justify-center overflow-hidden rounded-lg p-6 md:p-10 lg:p-16" ref={containerRef}>
          <div className="flex size-full flex-col items-stretch justify-between gap-6 md:gap-10">
            <div className="flex flex-row items-center justify-between"><Circle ref={div1Ref}><GoogleDriveIcon /></Circle><Circle ref={div2Ref}><NotionIcon /></Circle><Circle ref={div3Ref}><WhatsAppIcon /></Circle></div>
            <div className="flex flex-row items-center justify-between"><Circle ref={div4Ref}><SlackIcon /></Circle><Circle ref={centerRef} className="size-16 md:size-20 lg:size-24 border-hf-teal/30 dark:border-hf-purple/50 dark:shadow-[0_0_30px_rgba(99,102,241,0.3)]"><img src={heyflouLogo} alt="HeyFlou" className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" /></Circle><Circle ref={div5Ref}><GoogleDocsIcon /></Circle></div>
            <div className="flex flex-row items-center justify-between"><Circle ref={div6Ref}><ZapierIcon /></Circle><Circle ref={div7Ref}><MessengerIcon /></Circle><Circle ref={div8Ref}><HubSpotIcon /></Circle></div>
          </div>
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div1Ref} curvature={-75} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div2Ref} curvature={-50} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div3Ref} curvature={-75} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div4Ref} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div5Ref} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div6Ref} curvature={75} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div7Ref} curvature={50} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={div8Ref} curvature={75} gradientStartColor="#18ccfc" gradientStopColor="#6344f5" />
          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={centerRef} curvature={75} reverse gradientStartColor="#6344f5" gradientStopColor="#18ccfc" delay={1} />
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={centerRef} reverse gradientStartColor="#6344f5" gradientStopColor="#18ccfc" delay={1.5} />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={centerRef} curvature={-50} reverse gradientStartColor="#6344f5" gradientStopColor="#18ccfc" delay={2} />
        </div>
      </div>
    </section>
  );
}
