export function HeroBackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
      style={{ height: '60%' }}
    >
      {/* Center green ambient glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: '-10%',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(160,232,112,0.28) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
