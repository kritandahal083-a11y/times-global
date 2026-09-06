"use client";

import { useEffect, useRef } from "react";

type AmbientParticle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  red: boolean;
  twinkle: number;
};

type Traveler = {
  strand: 0 | 1;
  y: number;
  speed: number;
  white: boolean;
};

function createGlowSprite(r: number, g: number, b: number): HTMLCanvasElement {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const g2 = c.getContext("2d");
  if (!g2) return c;
  const grad = g2.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, `rgba(${r},${g},${b},0.85)`);
  grad.addColorStop(0.3, `rgba(${r},${g},${b},0.35)`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  g2.fillStyle = grad;
  g2.fillRect(0, 0, size, size);
  return c;
}

export default function DnaHelixBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const redGlow = createGlowSprite(229, 72, 77);
    const whiteGlow = createGlowSprite(244, 246, 248);

    let W = 0;
    let H = 0;
    let compact = compactQuery.matches;
    let reduced = reducedQuery.matches;

    let ambients: AmbientParticle[] = [];
    let travelers: Traveler[] = [];

    let raf = 0;
    let running = false;
    let inView = true;
    let last = 0;
    let time = Math.PI * 0.35;

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const cfg = () => ({
      cx: compact ? W * 0.5 : W * 0.24,
      radius: Math.min(W * (compact ? 0.26 : 0.12), 130),
      tilt: compact ? -0.04 : 0.14,
      turns: compact ? 2.4 : 3.4,
      speed: compact ? 0.22 : 0.28,
      step: 10,
      rungGap: compact ? 58 : 44,
      parallax: compact ? 8 : 18,
      ambientParallax: compact ? 4 : 10,
      linkDist: 120,
    });

    const seed = () => {
      const aCount = compact ? 16 : 34;
      ambients = Array.from({ length: aCount }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.6 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 0.004,
        vy: -(0.004 + Math.random() * 0.01),
        red: Math.random() < 0.35,
        twinkle: Math.random() * Math.PI * 2,
      }));
      const tCount = compact ? 5 : 11;
      travelers = Array.from({ length: tCount }, (_, i) => ({
        strand: (i % 2) as 0 | 1,
        y: -H * 0.25 + Math.random() * H * 1.5,
        speed: 18 + Math.random() * 30,
        white: Math.random() < 0.3,
      }));
    };

    const resize = () => {
      compact = compactQuery.matches;
      reduced = reducedQuery.matches;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 2);
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      render(0);
    };

    const pointOnStrand = (
      y: number,
      strand: 0 | 1,
      c: ReturnType<typeof cfg>
    ) => {
      const top = -H * 0.25;
      const len = H * 1.5;
      const phase =
        ((y - top) / len) * Math.PI * 2 * c.turns +
        time * c.speed +
        strand * Math.PI;
      const depth = Math.cos(phase) * 0.5 + 0.5;
      return {
        x:
          c.cx +
          Math.sin(phase) * c.radius +
          pointer.x * c.parallax * (0.35 + depth * 0.65),
        y,
        depth,
        scale: 0.55 + depth * 0.45,
      };
    };

    function render(dt: number) {
      ctx.clearRect(0, 0, W, H);
      const c = cfg();
      const top = -H * 0.25;
      const len = H * 1.5;

      ctx.save();
      ctx.translate(W / 2 + pointer.x * 8, H / 2 + pointer.y * 6);
      ctx.rotate(c.tilt);
      ctx.translate(-W / 2, -H / 2);

      ctx.globalAlpha = 0.5;
      ctx.drawImage(redGlow, c.cx - c.radius * 1.9, top, c.radius * 3.8, len);
      ctx.globalAlpha = 1;

      let rungIndex = 0;
      for (let y = top; y <= top + len; y += c.rungGap) {
        const a = pointOnStrand(y, 0, c);
        const b = pointOnStrand(y, 1, c);
        const frontness = (a.depth + b.depth) / 2;
        ctx.strokeStyle = `rgba(229,72,77,${(0.05 + frontness * 0.14).toFixed(3)})`;
        ctx.lineWidth = 0.7 + frontness * 0.9;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        rungIndex += 1;
        const white = rungIndex % 5 === 0;
        const sprite = white ? whiteGlow : redGlow;
        const nodeR = (white ? 4.5 : 3.5) + frontness * 3;
        ctx.globalAlpha = 0.25 + frontness * 0.55;
        ctx.drawImage(sprite, a.x - nodeR, a.y - nodeR, nodeR * 2, nodeR * 2);
        ctx.drawImage(sprite, b.x - nodeR, b.y - nodeR, nodeR * 2, nodeR * 2);
        ctx.globalAlpha = 1;
      }

      for (const strand of [0, 1] as const) {
        let prev = pointOnStrand(top, strand, c);
        for (let y = top + c.step; y <= top + len; y += c.step) {
          const cur = pointOnStrand(y, strand, c);
          const d = (prev.depth + cur.depth) / 2;
          ctx.strokeStyle =
            strand === 0
              ? `rgba(240,90,95,${(0.07 + d * 0.5).toFixed(3)})`
              : `rgba(196,54,60,${(0.06 + d * 0.42).toFixed(3)})`;
          ctx.lineWidth = 0.8 + d * 1.6;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(cur.x, cur.y);
          ctx.stroke();
          prev = cur;
        }
      }

      for (const tr of travelers) {
        tr.y += tr.speed * dt;
        if (tr.y > top + len) tr.y -= len;
        const p = pointOnStrand(tr.y, tr.strand, c);
        const s = (tr.white ? 13 : 10) * p.scale;
        ctx.globalAlpha = 0.2 + p.depth * 0.65;
        ctx.drawImage(
          tr.white ? whiteGlow : redGlow,
          p.x - s,
          p.y - s,
          s * 2,
          s * 2
        );
      }
      ctx.globalAlpha = 1;

      ctx.restore();

      for (const p of ambients) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.y < -0.02) p.y += 1.04;
        if (p.x < -0.02) p.x += 1.04;
        if (p.x > 1.02) p.x -= 1.04;
      }

      if (!compact) {
        ctx.lineWidth = 0.6;
        for (let i = 0; i < ambients.length; i++) {
          for (let j = i + 1; j < ambients.length; j++) {
            const dx = (ambients[i].x - ambients[j].x) * W;
            const dy = (ambients[i].y - ambients[j].y) * H;
            const dist = Math.hypot(dx, dy);
            if (dist < c.linkDist) {
              ctx.strokeStyle = `rgba(229,72,77,${((1 - dist / c.linkDist) * 0.08).toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(ambients[i].x * W, ambients[i].y * H);
              ctx.lineTo(ambients[j].x * W, ambients[j].y * H);
              ctx.stroke();
            }
          }
        }
      }

      const apx = -pointer.x * c.ambientParallax;
      const apy = -pointer.y * c.ambientParallax;
      for (const p of ambients) {
        const tw = 0.55 + Math.sin(time * 1.4 + p.twinkle) * 0.45;
        const x = p.x * W + apx;
        const y = p.y * H + apy;
        ctx.globalAlpha = (p.red ? 0.35 : 0.22) * tw + 0.05;
        if (p.red) {
          ctx.drawImage(redGlow, x - p.r * 5, y - p.r * 5, p.r * 10, p.r * 10);
        }
        ctx.fillStyle = p.red
          ? "rgba(240,90,95,0.9)"
          : "rgba(220,228,236,0.85)";
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!last) {
        last = now;
        return;
      }
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      time += dt;
      const k = 1 - Math.exp(-dt * 2.4);
      pointer.x += (pointer.tx - pointer.x) * k;
      pointer.y += (pointer.ty - pointer.y) * k;
      render(dt);
    };

    const start = () => {
      if (running || !inView || document.hidden || reduced) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth - 0.5;
      pointer.ty = e.clientY / window.innerHeight - 0.5;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting);
        if (inView) start();
        else stop();
      },
      { threshold: 0 }
    );

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();

    const hasFinePointer = finePointerQuery.matches && !compact;
    if (hasFinePointer && !reduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      if (hasFinePointer) {
        window.removeEventListener("pointermove", onPointerMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
