import React from "react";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string; // Color de las animaciones (e.g., 'text-blue-500')
}

// type SizeClassProps = {
//   small: string;
//   medium: string;
//   large: string;
// };

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  color = "text-blue-500",
}) => {
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-12 h-12 border-4",
    large: "w-16 h-16 border-4",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-t-transparent ${color} ${sizeClasses[size]}`}
        style={{
          borderColor: `${color.replace("text", "border")}`,
        }}
      />
    </div>
  );
};

export default Loader;
