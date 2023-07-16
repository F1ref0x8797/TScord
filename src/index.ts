import { Client } from "./structures/Client";
import "dotenv/config";

const client = new Client();
client.connect(process.env.TOKEN);