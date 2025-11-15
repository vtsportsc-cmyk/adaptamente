import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetHours?: number;
}

const CountdownTimer = ({ targetHours = 24 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target time to targetHours from now
    const targetTime = new Date().getTime() + targetHours * 60 * 60 * 1000;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetHours]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground rounded-lg px-4 py-3 min-w-[70px] shadow-md">
        <span className="text-3xl font-bold tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-accent/20 rounded-xl border border-primary/20">
      <div className="flex items-center gap-2 text-foreground">
        <Clock className="w-5 h-5 text-primary animate-pulse" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          Oferta Termina Em:
        </span>
      </div>
      
      <div className="flex gap-3">
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <div className="flex items-center text-3xl font-bold text-primary pb-6">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <div className="flex items-center text-3xl font-bold text-primary pb-6">:</div>
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default CountdownTimer;
