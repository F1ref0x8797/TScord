import { IdentifyStructure } from "./IdentifyStructure";

export interface GatewayPayloadStructure {
    op: number;
    d?: IdentifyStructure;
    s?: GatewayPayloadStructure["op"] extends 0 ? number : null;
    t?: GatewayPayloadStructure["op"] extends 0 ? string : null;
};