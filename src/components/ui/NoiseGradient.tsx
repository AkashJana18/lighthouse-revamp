
"use client";
import { useEffect, useRef } from 'react';

function Noise({
  patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternAlpha = 50,
  intensity = 1,
}) {
  const grainRef = useRef<HTMLCanvasElement>(null);
  const canvasCssSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Failed to get 2D context for noise canvas.");
      return;
    }

    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    const patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx) {
        console.error("Failed to get 2D context for pattern sub-canvas.");
        return;
    }
    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      let newCssWidth = window.innerWidth;
      let newCssHeight = window.innerHeight;

      if (canvas.parentElement) {
        const parentRect = canvas.parentElement.getBoundingClientRect();
        newCssWidth = parentRect.width;
        newCssHeight = parentRect.height;
      }
      
      canvasCssSizeRef.current = { width: newCssWidth, height: newCssHeight };

      canvas.width = newCssWidth * dpr;
      canvas.height = newCssHeight * dpr;
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255 * intensity;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      const { width: cssWidth, height: cssHeight } = canvasCssSizeRef.current;
      if (cssWidth === 0 || cssHeight === 0) return;

      ctx.clearRect(0, 0, cssWidth, cssHeight);

      ctx.save();
      
      const safePatternScaleX = Math.max(0.001, patternScaleX);
      const safePatternScaleY = Math.max(0.001, patternScaleY);
      ctx.scale(safePatternScaleX, safePatternScaleY);

      const fillPattern = ctx.createPattern(patternCanvas, 'repeat');
      if (fillPattern) {
        ctx.fillStyle = fillPattern;
        ctx.fillRect(0, 0, cssWidth / safePatternScaleX, cssHeight / safePatternScaleY);
      }
      
      ctx.restore();
    };

    const drawStaticNoise = () => {
      if (canvasCssSizeRef.current.width > 0 && canvasCssSizeRef.current.height > 0) {
        updatePattern();
        drawGrain();
      }
    };

    const handleResize = () => {
      resize();
      drawStaticNoise();
    };

    window.addEventListener('resize', handleResize);
    resize();
    drawStaticNoise();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternAlpha, intensity]);

  return <canvas className="absolute inset-0 w-full h-full pointer-events-none" ref={grainRef} />;
}

function GradientBackground({
  gradientType = 'radial-gradient',
  gradientSize = '125% 125%',
  gradientOrigin = 'bottom-middle',
  colors = [
    { color: "rgba(142, 97, 255, 1.0)", stop: "0%" },      // Neon purple center
    { color: "rgba(129, 58, 255, 0.85)", stop: "15%" },    // Vibrant middle
    { color: "rgba(118, 41, 255, 0.7)", stop: "35%" },     // Slightly darker
    { color: "rgba(50, 16, 70, 0.85)", stop: "55%" },      // Deep purple
    { color: "rgba(15, 6, 26, 1)", stop: "80%" },          // Very dark
    { color: "rgba(8, 7, 20, 1)", stop: "100%" }           // Almost black
  ],
  
  enableNoise = true,
  noisePatternSize = 100,
  noisePatternScaleX = 1,
  noisePatternScaleY = 1,
  noisePatternAlpha = 50,
  noiseIntensity = 1,
  
  className = '',
  style = {},
  children,
  
  customGradient = null
}: {
  gradientType?: string;
  gradientSize?: string;
  gradientOrigin?: string;
  colors?: Array<{ color: string; stop: string }>;
  enableNoise?: boolean;
  noisePatternSize?: number;
  noisePatternScaleX?: number;
  noisePatternScaleY?: number;
  noisePatternAlpha?: number;
  noiseIntensity?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  customGradient?: string | null;
}) {
  const generateGradient = () => {
    if (customGradient) return customGradient;
    
    const getGradientPosition = (origin: string) => {
      const positions: Record<string, string> = {
        'bottom-middle': '50% 101%',
        'bottom-left': '0% 101%',
        'bottom-right': '100% 101%',
        'top-middle': '50% -1%',
        'top-left': '0% -1%',
        'top-right': '100% -1%',
        'left-middle': '-1% 50%',
        'right-middle': '101% 50%',
        'center': '50% 50%'
      };
      return positions[origin] || positions['bottom-middle'];
    };
    
    const position = getGradientPosition(gradientOrigin);
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(',');
    
    if (gradientType === 'radial-gradient') {
      return `radial-gradient(${gradientSize} at ${position},${colorStops})`;
    } else if (gradientType === 'linear-gradient') {
      const angleMap: Record<string, string> = {
        'bottom-middle': '0deg',
        'bottom-left': '45deg',
        'bottom-right': '315deg',
        'top-middle': '180deg',
        'top-left': '135deg',
        'top-right': '225deg',
        'left-middle': '90deg',
        'right-middle': '270deg',
        'center': '0deg'
      };
      const angle = angleMap[gradientOrigin] || angleMap['bottom-middle'];
      return `linear-gradient(${angle},${colorStops})`;
    } else if (gradientType === 'conic-gradient') {
      return `conic-gradient(from 0deg at ${position},${colorStops})`;
    }
    
    return `${gradientType}(${colorStops})`;
  };

  const gradientStyle = {
    background: generateGradient(),
    ...style
  };

  return (
    <div 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={gradientStyle}
    >
      {enableNoise && (
        <Noise
          patternSize={noisePatternSize}
          patternScaleX={noisePatternScaleX}
          patternScaleY={noisePatternScaleY}
          patternAlpha={noisePatternAlpha}
          intensity={noiseIntensity}
        />
      )}
      {children}
    </div>
  );
}

export { GradientBackground };

