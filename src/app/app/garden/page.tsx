import React from "react";

type Flower = {
    id: number;
    name: string;
    ex: number; // experience state (0-100)
    health: number; // health state (0-100)
};

const flowers: Flower[] = [
    { id: 1, name: "Rose", ex: 75, health: 90 },
    { id: 2, name: "Tulip", ex: 40, health: 60 },
    { id: 3, name: "Sunflower", ex: 90, health: 100 },
    { id: 4, name: "Daisy", ex: 20, health: 45 },
];

function Bar({ value, color }: { value: number; color: string }) {
    return (
        <div style={{ background: "#eee", borderRadius: 4, height: 16, width: 120 }}>
            <div
                style={{
                    width: `${value}%`,
                    background: color,
                    height: "100%",
                    borderRadius: 4,
                    transition: "width 0.3s",
                }}
            />
        </div>
    );
}

export default function GardenPage() {
    return (
        <main style={{ padding: 32 }}>
            <h1>Garden</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                {flowers.map((flower) => (
                    <div
                        key={flower.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: 8,
                            padding: 16,
                            minWidth: 200,
                            boxShadow: "0 2px 8px #0001",
                        }}
                    >
                        <h2 style={{ margin: "0 0 8px" }}>{flower.name}</h2>
                        <div style={{ marginBottom: 8 }}>
                            <span>EX: </span>
                            <Bar value={flower.ex} color="#4f8cff" />
                            <span style={{ marginLeft: 8 }}>{flower.ex}/100</span>
                        </div>
                        <div>
                            <span>HB: </span>
                            <Bar value={flower.health} color="#4caf50" />
                            <span style={{ marginLeft: 8 }}>{flower.health}/100</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}