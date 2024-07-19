export type LinearGradientGeneratorProperties = {
  colors: string[];
  direction: string;
  stops?: string[];
};

export default function LinearGradientGenrator({
  colors,
  direction,
  stops,
}: LinearGradientGeneratorProperties) {
  const gradient =
    stops && stops.length === colors.length
      ? `linear-gradient(${direction}, ${colors.map((color, index) => `${color} ${stops[index]}`).join(", ")})`
      : `linear-gradient(${direction}, ${colors.join(", ")})`;

  const style: React.CSSProperties = {
    background: gradient,
    width: "100%",
    height: "100%",
  };

  return <div style={style} className="linear-gradient-generator"></div>;
}
