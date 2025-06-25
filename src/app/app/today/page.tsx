import React from "react";

// Dummy data for demonstration. Replace with your data fetching logic.
const tasksForToday: string[] = [
    // Example: "Finish TypeScript assignment",
    // Example: "Review pull requests",
];

const TodayPage: React.FC = () => {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Today's Tasks</h1>
            {tasksForToday.length === 0 ? (
                <p>No tasks for today.</p>
            ) : (
                <ul>
                    {tasksForToday.map((task, idx) => (
                        <li key={idx}>{task}</li>
                    ))}
                </ul>
            )}
        </main>
    );
};

export default TodayPage;