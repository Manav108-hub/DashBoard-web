import React, { useState } from 'react';
import WaterButton from './WaterButton';

type WaterButtonContainerProps = {
  initialLabel?: string;
  initialHref?: string;
};

export const WaterButtonContainer: React.FC<WaterButtonContainerProps> = ({
  initialLabel = 'Click Me',
  initialHref = '',
}) => {
  const [label, setLabel] = useState(initialLabel);
  const [href, setHref] = useState(initialHref);
  const [variant, setVariant] = useState<'primary' | 'secondary' | 'outline'>('primary');
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dynamic Button Demo</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="buttonLabel" className="block text-sm font-medium text-gray-700 mb-1">
                Button Label
              </label>
              <input
                type="text"
                id="buttonLabel"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            
            <div>
              <label htmlFor="buttonHref" className="block text-sm font-medium text-gray-700 mb-1">
                Button Link (optional)
              </label>
              <input
                type="text"
                id="buttonHref"
                value={href}
                onChange={(e) => setHref(e.target.value)}
                placeholder="e.g. https://example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Variant
              </label>
              <div className="flex space-x-4">
                {(['primary', 'secondary', 'outline'] as const).map((v) => (
                  <label key={v} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="variant"
                      value={v}
                      checked={variant === v}
                      onChange={() => setVariant(v)}
                      className="h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700 capitalize">{v}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-sm text-gray-700">
                Click count: <span className="font-medium">{clickCount}</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6">
            <WaterButton
              label={label}
              href={href || undefined}
              variant={variant}
              onClick={!href ? handleClick : undefined}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Button Props</h2>
        <pre className="bg-gray-50 p-4 rounded overflow-auto text-sm">
          {JSON.stringify({
            label,
            href: href || undefined,
            variant,
            onClick: !href ? "() => {}" : undefined
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default WaterButtonContainer;