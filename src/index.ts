import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { handleInteraction } from './lib/interactionHandler';
import { logger } from './lib/logger';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => logger.info(`Bot ready: ${client.user?.tag}`));
client.on('interactionCreate', async (i) => handleInteraction(client, i));
client.login(process.env.DISCORD_TOKEN);