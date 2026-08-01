"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ACCENT = 0x1967a8;
const ACCENT_LIGHT = 0x55a5e7;

function buildMesh(icon) {
  const group = new THREE.Group();

  if (icon === "target") {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.14, 24, 64),
      new THREE.MeshStandardMaterial({ color: ACCENT, roughness: 0.35, metalness: 0.15 })
    );
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 24, 24),
      new THREE.MeshStandardMaterial({ color: ACCENT_LIGHT, roughness: 0.3, metalness: 0.15 })
    );
    group.add(ring, core);
  } else if (icon === "rocket") {
    const nose = new THREE.Mesh(
      new THREE.ConeGeometry(0.5, 0.9, 32),
      new THREE.MeshStandardMaterial({ color: ACCENT_LIGHT, roughness: 0.3, metalness: 0.15 })
    );
    nose.position.y = 0.55;
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 0.9, 32),
      new THREE.MeshStandardMaterial({ color: ACCENT, roughness: 0.35, metalness: 0.15 })
    );
    body.position.y = -0.35;
    group.add(nose, body);
  } else {
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 32, 32),
      new THREE.MeshStandardMaterial({ color: ACCENT, roughness: 0.4, metalness: 0.1 })
    );
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(0.95, 16, 12),
      new THREE.MeshBasicMaterial({ color: ACCENT_LIGHT, wireframe: true, transparent: true, opacity: 0.5 })
    );
    group.add(sphere, wire);
  }

  return group;
}

export default function VisionIcon3D({ icon, size = 48 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 10);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size, false);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.position.set(2, 3, 4);
    scene.add(dirLight);

    const mesh = buildMesh(icon);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let frameId = null;

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      mesh.rotation.y = elapsed * 0.6;
      mesh.rotation.x = Math.sin(elapsed * 0.5) * 0.15;
      renderer.render(scene, camera);
    };

    const loop = () => {
      renderFrame();
      frameId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!frameId && !prefersReducedMotion) loop();
    };
    const stopLoop = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    renderFrame();
    startLoop();

    let observer;
    if (!prefersReducedMotion) {
      observer = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? startLoop() : stopLoop()),
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    }

    return () => {
      stopLoop();
      if (observer) observer.disconnect();
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
          else child.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [icon, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}
