type Status = "online" | "idle" | "dnd" | "invisible";

export interface PresenceOptions {
    activities: any[];
    status: Status
};

export interface IdentifyStructure {
    token: string;
    properties: {
        os: string;
        browser: string;
        device: string;
    };
    compress?: boolean;
    large_threshold?: number;
    shard?: [number, number];
    presence?: {
        since?: number;
        activities: any[];
        status: Status
    }
};