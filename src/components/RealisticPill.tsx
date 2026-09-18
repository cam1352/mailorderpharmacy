import React from 'react';

interface RealisticPillProps {
  color: string;
  shape: string;
  dosage: string;
}

export function RealisticPill({ color, shape, dosage }: RealisticPillProps) {
  // Parse dosage to determine relative size
  const mg = parseInt(dosage.replace(/[^0-9]/g, '')) || 50;
  
  // Base scale factor depending on mg (min scale 0.6, max scale 1.5)
  const scale = Math.min(Math.max((mg / 100), 0.6), 1.5);

  const getStyle = () => {
    const baseColor = color.toLowerCase();
    let gradient = '';
    
    // Create a 3D gradient effect based on color
    if (baseColor === 'white') {
      gradient = 'radial-gradient(circle at 30% 30%, #ffffff, #e2e8f0, #cbd5e1)';
    } else if (baseColor === 'yellow') {
      gradient = 'radial-gradient(circle at 30% 30%, #fef08a, #eab308, #a16207)';
    } else if (baseColor === 'blue') {
      gradient = 'radial-gradient(circle at 30% 30%, #93c5fd, #3b82f6, #1d4ed8)';
    } else if (baseColor === 'pink') {
      gradient = 'radial-gradient(circle at 30% 30%, #f9a8d4, #ec4899, #be185d)';
    } else if (baseColor === 'red') {
      gradient = 'radial-gradient(circle at 30% 30%, #fca5a5, #ef4444, #b91c1c)';
    } else if (baseColor === 'green') {
      gradient = 'radial-gradient(circle at 30% 30%, #86efac, #22c55e, #15803d)';
    } else if (baseColor === 'orange') {
      gradient = 'radial-gradient(circle at 30% 30%, #fdba74, #f97316, #c2410c)';
    } else {
      gradient = 'radial-gradient(circle at 30% 30%, #d1d5db, #6b7280, #374151)';
    }

    if (shape === 'Round') {
      return {
        background: gradient,
        borderRadius: '50%',
        width: `${40 * scale}px`,
        height: `${40 * scale}px`,
        boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), 2px 4px 6px rgba(0,0,0,0.2)',
      };
    } else if (shape === 'Capsule') {
      return {
        background: gradient,
        borderRadius: '40px',
        width: `${60 * scale}px`,
        height: `${25 * scale}px`,
        boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), 2px 4px 6px rgba(0,0,0,0.2)',
        position: 'relative' as const,
      };
    } else if (shape === 'Oval') {
      return {
        background: gradient,
        borderRadius: '50%',
        width: `${50 * scale}px`,
        height: `${30 * scale}px`,
        boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), 2px 4px 6px rgba(0,0,0,0.2)',
      };
    } else {
      // Oblong
      return {
        background: gradient,
        borderRadius: '20px',
        width: `${55 * scale}px`,
        height: `${25 * scale}px`,
        boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), 2px 4px 6px rgba(0,0,0,0.2)',
      };
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-white rounded-lg p-2">
      <div style={getStyle()}>
        {/* If capsule, maybe draw a line down the middle */}
        {shape === 'Capsule' && (
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '2px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            transform: 'translateX(-50%)'
          }} />
        )}
        {shape === 'Round' && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            right: '10%',
            height: '1px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            transform: 'translateY(-50%)'
          }} />
        )}
      </div>
    </div>
  );
}
