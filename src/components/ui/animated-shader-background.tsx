import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedShaderBackgroundProps {
  className?: string;
}

const AnimatedShaderBackground = ({ className = '' }: AnimatedShaderBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Performance: no antialias, low pixel ratio, render at half res
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
    const scale = 0.5; // render at half resolution
    renderer.setSize(container.clientWidth * scale, container.clientHeight * scale);
    renderer.setPixelRatio(1);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(container.clientWidth * scale, container.clientHeight * scale) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);
          return mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
        }

        void main() {
          vec2 p = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 v;
          vec4 o = vec4(0.0);

          for (float i = 0.0; i < 18.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5;

            // Electric blue -> Teal color palette
            vec4 col = vec4(
              0.05 + 0.10 * sin(i * 0.15 + iTime * 0.3),
              0.25 + 0.35 * cos(i * 0.25 + iTime * 0.4),
              0.75 + 0.25 * sin(i * 0.35 + iTime * 0.35),
              1.0
            );

            float brightness = exp(sin(i * i + iTime * 0.8));
            float dist = length(max(v, vec2(v.x * 0.03, v.y * 1.5)));
            float thin = smoothstep(0.0, 1.0, i / 18.0) * 0.6;

            o += col * brightness / dist * thin;
          }

          o = tanh(pow(o / 80.0, vec4(1.6))) * 0.7;
          gl_FragColor = o;
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId: number;
    let lastTime = 0;
    const targetInterval = 1000 / 30; // cap at 30fps

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      const delta = now - lastTime;
      if (delta < targetInterval) return;
      lastTime = now - (delta % targetInterval);

      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth * scale;
      const height = container.clientHeight * scale;
      renderer.setSize(width, height);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      material.uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Gradient overlays for seamless blending with page */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" style={{ zIndex: 1 }} />
    </div>
  );
};

export default AnimatedShaderBackground;
