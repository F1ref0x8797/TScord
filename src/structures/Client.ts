import { GatewayPayloadStructure } from "../interfaces/GatewayPayloadStructure";
import { WebSocket } from "ws";

const url = `https://discord.com/api/v10`;

export class Client {
    private ws: WebSocket;
    constructor() {
        this.ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json");
    };

    async connect(token: string) {
        this.ws.on("open", () => {
            const payload: GatewayPayloadStructure = {
                op: 2,
                d: {
                    token,
                    intents: 513,
                    properties: {
                        $os: "linux",
                        $browser: "my-library",
                        $device: "my-library"
                    }
                }
            };
            this.ws.send(JSON.stringify(payload));
        });

        this.ws.on("message", (data) => {
            const message = JSON.parse(data.toString());
            console.log(message);
            
        });

        this.ws.on("close", (code) => {
            console.log(`Bot disconnesso con codice: ${code}`);
        });
    };
};