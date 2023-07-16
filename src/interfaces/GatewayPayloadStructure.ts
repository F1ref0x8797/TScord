export interface GatewayPayloadStructure {
    op: number;
    d?: object;
    s?: GatewayPayloadStructure["op"] extends 0 ? number : null;
    t?: GatewayPayloadStructure["op"] extends 0 ? string : null;
};