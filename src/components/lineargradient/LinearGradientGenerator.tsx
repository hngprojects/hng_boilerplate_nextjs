import React from "react";

interface LinearGradientGeneratorProperties {
  colors: string[];
  direction: string;
  stops?: string[];
}

const LinearGradientGenerator: React.FC<LinearGradientGeneratorProperties> = ({
  colors,
  direction,
  stops,
}) => {
  const gradientStops = stops
    ? colors.map((color, index) => `${color} ${stops[index]}`).join(", ")
    : colors.join(", ");

  const gradientStyle = {
    backgroundImage: `linear-gradient(${direction}, ${gradientStops})`,
  };

  return <div className="h-full w-full" style={gradientStyle}></div>;
};

export default LinearGradientGenerator;
