"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define o tamanho do canvas para ocupar toda a janela
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Atualiza o tamanho do canvas quando a janela for redimensionada
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cria um array de bolinhas com propriedades aleatórias
    const numBalls = 50; // número de bolinhas (ajuste conforme necessário)
    const balls: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }[] = [];
    for (let i = 0; i < numBalls; i++) {
      balls.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 5 + 2, // raio entre 2 e 7
        vx: (Math.random() - 0.5) * 2,  // velocidade horizontal entre -1 e 1
        vy: (Math.random() - 0.5) * 2,  // velocidade vertical entre -1 e 1
      });
    }

    // Função de animação que atualiza a posição das bolinhas e as desenha
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const ball of balls) {
        // Atualiza posição
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Rebater nas bordas do canvas
        if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
          ball.vx = -ball.vx;
        }
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
          ball.vy = -ball.vy;
        }

        // Desenha a bolinha
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; // cor branca com leve transparência
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />;
}
