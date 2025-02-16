import React from "react";

function Timestamps({ disengagementPeriods, isLoading }) {
    return (
        <div>
            <h2>Timestamps of Disengagement</h2>
            {isLoading ? (
                <div>
                    <p>Loading...</p>
                    <p>Processing video frames... Please wait...</p>
                    <p>This may take a few seconds.</p>
                </div>
            ) : disengagementPeriods.length > 0 ? (
                <div>
                    {disengagementPeriods.map((period, index) => (
                        <p key={index}>
                            Disengaged from {period.start_time} to {period.end_time} seconds
                        </p>
                    ))}
                </div>
            ) : (
                <p>Upload a video to view disengagement periods.</p>
            )}
        </div>
    );
}

export default Timestamps;
