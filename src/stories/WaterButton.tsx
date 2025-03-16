import React from "react";

export type WaterButtonProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
};

export const WaterButton: React.FC<WaterButtonProps> = ({
  label = "Click Me",
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    small: "h-12 w-[180px] text-lg",
    medium: "h-20 w-[250px] text-2xl",
    large: "h-24 w-[320px] text-3xl",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "border-[#3d93ff] bg-[#54ABFB] text-blue-500 shadow-[-20px_30px_16px_#1B6CFB,-40px_60px_32px_#1b6cfb,inset_-6px_6px_10px_#1B6CFB,inset_2px_6px_10px_#1A74E5,inset_20px_-20px_22px_#afd5ff,inset_40px_-40px_44px_#a8ceff]",
    secondary: "border-[#4e7bb8] bg-[#4183c4] text-white shadow-[-20px_30px_16px_#1a5ca8,-40px_60px_32px_#1a5ca8,inset_-6px_6px_10px_#1a5ca8,inset_2px_6px_10px_#1a64b8,inset_20px_-20px_22px_#89b9e6,inset_40px_-40px_44px_#7ba7d1]",
    outline: "border-[#54ABFB] bg-transparent text-[#54ABFB] shadow-none hover:bg-[#54ABFB] hover:bg-opacity-10 transition-colors"
  };
  
  // Width class
  const widthClass = fullWidth ? "w-full" : "";
  
  // Disabled class
  const disabledClass = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "opacity-80 cursor-pointer";

  // Create the component based on whether an href is provided
  const Component = href ? "a" : "button";
  
  // Props for the component
  const componentProps = {
    className: `relative ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className} rounded-full border-2`,
    ...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}),
    onClick: disabled ? undefined : onClick,
    disabled,
  };

  return (
    <Component {...componentProps}>
      <div className="absolute inset-0 flex items-center justify-center rounded-full font-medium">
        {label}
      </div>
    </Component>
  );
};

export default WaterButton;