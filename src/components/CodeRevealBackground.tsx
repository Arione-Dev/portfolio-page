import React, { useEffect, useRef } from 'react';

// Realistic full-stack code "running behind the site"
const CODE_LINES = [
  'import React, { useEffect, useState } from "react";                     ',
  'import { Pool } from "pg"; import Redis from "ioredis";                 ',
  'export const developer = { name: "Arione Rodrigues", role: "FullStack" };',
  'const db = new Pool({ connectionString: process.env.DATABASE_URL });    ',
  'app.get("/api/v1/projects", authMiddleware, async (req, res) => {       ',
  '  const cached = await redis.get("portfolio:projects:featured");        ',
  '  if (cached) return res.status(200).json(JSON.parse(cached));          ',
  '  const { rows } = await db.query("SELECT * FROM projects WHERE live"); ',
  '  return res.status(200).json({ ok: true, data: rows });                ',
  '});                                                                     ',
  'export function useHologramEngine(matrix: Float32Array) {               ',
  '  return useMemo(() => compileShader(matrix, 0x7F454C46), [matrix]);    ',
  '}                                                                       ',
  'docker compose -f docker-compose.prod.yml up -d --build                 ',
  'git checkout -b feature/xray-background && git push -u origin HEAD      ',
  'SELECT id, title, stack FROM experiences ORDER BY period DESC LIMIT 10; ',
];

const BINARY_GLYPHS = ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '7', 'F', 'A', 'C', 'E', 'x'];

/**
 * Interactive "X-Ray" background layer:
 * - Only activates outside of cards/buttons/inputs (in the lateral & background areas).
 * - As the cursor illuminates an area, cells first appear as flickering machine binary (0/1),
 *   and after a brief moment decode into the real source code "behind the website".
 */
export const CodeRevealBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL_W = 8.5;
    const CELL_H = 17;
    const MAX_RADIUS = 240;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    // Per-cell exposure [0..1]: 0 = hidden, 0..0.55 = machine binary, 0.55..1 = decoded source code
    let exposure = new Float32Array(0);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / CELL_W) + 1;
      rows = Math.ceil(height / CELL_H) + 1;
      exposure = new Float32Array(cols * rows);
    };
    resize();

    const mouse = { x: -9999, y: -9999 };
    let radius = 0;
    let targetRadius = 0;

    const isInsideInteractiveOrCard = (target: EventTarget | null): boolean => {
      if (!(target instanceof Element)) return false;
      return Boolean(
        target.closest(
          '.glass-panel, .glass-panel-glow, .glass-nav, button, a, input, textarea, select'
        )
      );
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Only open the X-ray lens when hovering outside of cards/buttons
      targetRadius = isInsideInteractiveOrCard(e.target) ? 0 : MAX_RADIUS;
    };

    const onLeave = () => {
      targetRadius = 0;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);

    let raf = 0;
    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 33) return; // ~30fps for crisp digital feel
      last = t;

      radius += (targetRadius - radius) * 0.16;
      ctx.clearRect(0, 0, width, height);

      const scrollOffsetRows = Math.floor(window.scrollY / CELL_H);

      // Update exposure around mouse and decay elsewhere
      const activeColMin = Math.max(0, Math.floor((mouse.x - radius) / CELL_W));
      const activeColMax = Math.min(cols - 1, Math.ceil((mouse.x + radius) / CELL_W));
      const activeRowMin = Math.max(0, Math.floor((mouse.y - radius) / CELL_H));
      const activeRowMax = Math.min(rows - 1, Math.ceil((mouse.y + radius) / CELL_H));

      // Decay all cells slightly; boost cells inside the lens
      let anyVisible = radius >= 2;
      for (let r = 0; r < rows; r++) {
        const rowOffset = r * cols;
        const inRowBand = r >= activeRowMin && r <= activeRowMax && radius >= 2;
        for (let c = 0; c < cols; c++) {
          const idx = rowOffset + c;
          let val = exposure[idx];

          if (inRowBand && c >= activeColMin && c <= activeColMax) {
            const dx = c * CELL_W + CELL_W * 0.5 - mouse.x;
            const dy = r * CELL_H + CELL_H * 0.5 - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < radius) {
              const intensity = 1 - dist / radius;
              // Charge up exposure: outer ring stays binary, inner core charges to 1 (source code)
              const target = Math.min(1, intensity * 1.25);
              val = val + (target - val) * 0.14;
            } else {
              val *= 0.88;
            }
          } else if (val > 0.005) {
            val *= 0.88;
          } else {
            val = 0;
          }

          exposure[idx] = val;
          if (val > 0.02) anyVisible = true;
        }
      }

      if (!anyVisible) return;

      // Subtle X-ray scanner ring around cursor when active
      if (radius > 8) {
        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          radius * 0.1,
          mouse.x,
          mouse.y,
          radius
        );
        grad.addColorStop(0, 'rgba(6, 182, 212, 0.09)');
        grad.addColorStop(0.6, 'rgba(59, 130, 246, 0.05)');
        grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.font = '12.5px "JetBrains Mono", monospace';
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        const rowOffset = r * cols;
        const worldRow = r + scrollOffsetRows;
        const line = CODE_LINES[((worldRow % CODE_LINES.length) + CODE_LINES.length) % CODE_LINES.length];

        for (let c = 0; c < cols; c++) {
          const val = exposure[rowOffset + c];
          if (val <= 0.03) continue;

          const x = c * CELL_W;
          const y = r * CELL_H;

          // Stage 1 (val < 0.58): Machine Binary (0 / 1 / hex) flickering
          // Stage 2 (val >= 0.58): Decodes into the actual source code behind the page
          if (val >= 0.58) {
            const ch = line[c % line.length];
            if (!ch || ch === ' ') continue;
            const codeAlpha = Math.min(0.9, (val - 0.35) * 1.1);
            ctx.fillStyle = `rgba(165, 243, 252, ${codeAlpha.toFixed(3)})`;
            ctx.fillText(ch, x, y);
          } else {
            const glyph = BINARY_GLYPHS[(c * 7 + r * 13 + Math.floor(t / 65)) % BINARY_GLYPHS.length];
            const binAlpha = Math.min(0.75, val * 1.35);
            ctx.fillStyle = `rgba(6, 182, 212, ${binAlpha.toFixed(3)})`;
            ctx.fillText(glyph, x, y);
          }
        }
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />;
};
