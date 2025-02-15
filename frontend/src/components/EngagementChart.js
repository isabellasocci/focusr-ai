import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function EngagementChart({ timestamps }) {
    useEffect(() => {
        return () => {
            ChartJS.getChart("engagementChart")?.destroy();
        };
    }, [timestamps]);

    const data = {
        labels: timestamps.map((_, i) => `Point ${i + 1}`),
        datasets: [
            {
                label: "Disengagement Timestamps",
                data: timestamps.map(() => 1),
                fill: false,
                borderColor: "red",
                tension: 0.1
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { type: "category" },
            y: { beginAtZero: true },
        }
    };

    return (
        <div style={{ width: "600px", height: "400px" }}>
            <h2>Engagement Chart</h2>
            <Line id="engagementChart" data={data} options={options} />
        </div>
    );
}

export default EngagementChart;
