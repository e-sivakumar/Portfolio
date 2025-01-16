// import React, { useEffect } from "react";
// import Chart from "chart.js/auto";

// const DonutChart = ({ chartId, label, percentage, color }) => {
//   useEffect(() => {
//     const ctx = document.getElementById(chartId).getContext("2d");
//     new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: [label, "Remaining"],
//         datasets: [
//           {
//             label: label,
//             data: [percentage, 100 - percentage],
//             backgroundColor: [color, "#e0e0e0"],
//             borderWidth: 0,
//           },
//         ],
//       },
//       options: {
//         cutout: "70%",
//         responsive: true,
//         plugins: {
//           tooltip: { enabled: false },
//           legend: { display: false },
//           title: {
//             display: true,
//             text: `${percentage}%`,
//             color: color,
//             font: { size: 18 },
//           },
//         },
//       },
//     });
//   }, [chartId, label, percentage, color]);

//   return <canvas id={chartId}></canvas>;
// };

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = ({ label, percentage, color }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        // labels: [label],
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: [color, "rgba(0,0,0,0.2"], // Inner fill color and background
            borderWidth: 0, // Removes border around chart
            hoverOffset: 0, // Slight hover effect
          },
        ],
      },
      options: {
        cutout: "96%", // Thickness of the ring
        animation: {
          animateRotate: true, // Animates only the rotation of the chart
          duration: 5500, // Smooth animation duration
        },
        plugins: {
          tooltip: { enabled: false }, // Disables tooltips
        },
      },
    });

    return () => chart.destroy();
  }, [label, percentage, color]);

  return (
    <div style={{ position: "relative", width: "150px", height: "150px" }}>
      <canvas ref={chartRef}></canvas>
      {/* Inner text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
          textShadow: "0 0 10px rgba(255,255,255,0.5)", // Glow effect
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default DonutChart;
