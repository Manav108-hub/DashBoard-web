import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';

// Register the required Chart.js components
Chart.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

export type DatasetProps = {
  label: string;
  data: number[];
  color?: string;
};

export type LineChartProps = {
  title?: string;
  labels?: string[];
  datasets?: DatasetProps[];
  height?: number;
  width?: string | number;
  showLegend?: boolean;
};

export const LineChart: React.FC<LineChartProps> = ({ 
  title = 'Line Chart', 
  labels = [], 
  datasets = [], 
  height = 400, 
  width = '100%',
  showLegend = true
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    
    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: datasets.map((dataset, index) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor: dataset.color || getColorByIndex(index),
          backgroundColor: dataset.color ? `${dataset.color}33` : `${getColorByIndex(index)}33`,
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: dataset.color || getColorByIndex(index),
          pointBorderColor: '#fff',
          pointBorderWidth: 1,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: showLegend,
            position: 'top',
            labels: {
              font: {
                family: "'Inter', sans-serif",
                size: 12
              },
              padding: 20,
              usePointStyle: true,
            }
          },
          tooltip: {
            backgroundColor: 'rgba(17, 24, 39, 0.9)',
            titleFont: {
              family: "'Inter', sans-serif",
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              family: "'Inter', sans-serif",
              size: 13
            },
            padding: 12,
            cornerRadius: 8,
            displayColors: true,
            boxPadding: 6
          },
          title: {
            display: !!title,
            text: title,
            font: {
              family: "'Inter', sans-serif",
              size: 18,
              weight: 'bold'
            },
            padding: {
              top: 10,
              bottom: 20
            }
          }
        },
        scales: {
          x: {
            type: 'category',
            grid: {
              color: 'rgba(226, 232, 240, 0.6)',
              drawBorder: false
            },
            ticks: {
              font: {
                family: "'Inter', sans-serif",
                size: 11
              },
              color: '#64748b'
            }
          },
          y: {
            type: 'linear',
            grid: {
              color: 'rgba(226, 232, 240, 0.6)',
              drawBorder: false
            },
            ticks: {
              font: {
                family: "'Inter', sans-serif",
                size: 11
              },
              color: '#64748b',
              padding: 10
            },
            beginAtZero: true
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        elements: {
          line: {
            borderJoinStyle: 'round'
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [labels, datasets, title, showLegend]);

  // Helper function to get colors by index
  const getColorByIndex = (index: number): string => {
    const colors = [
      '#3b82f6', // blue
      '#ef4444', // red
      '#10b981', // green
      '#8b5cf6', // purple
      '#f59e0b', // amber
      '#06b6d4', // cyan
      '#ec4899', // pink
      '#6366f1'  // indigo
    ];
    return colors[index % colors.length];
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 w-full"
      role="figure"
      aria-label={title || "Line chart"}
    >
      <div 
        style={{ height: `${height}px`, width }}
        aria-hidden="true"
      >
        <canvas 
          ref={chartRef} 
          role="img"
          aria-label={`Chart displaying ${datasets.map(d => d.label).join(', ')}`}
        />
      </div>
    </div>
  );
};

export default LineChart;