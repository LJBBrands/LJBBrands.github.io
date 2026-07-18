export default function AtmosphereBackground({ theme }) {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: theme.background }}
      />
      <div
        className="absolute inset-0 opacity-95 transition-all duration-700"
        style={{ backgroundImage: theme.glow }}
      />
      <div
        className="absolute inset-0 blur-2xl transition-all duration-700"
        style={{ backgroundImage: theme.aura }}
      />
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: theme.overlay }}
      />
    </div>
  );
}
