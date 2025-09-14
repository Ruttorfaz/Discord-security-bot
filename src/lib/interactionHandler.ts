import { Client, Interaction } from 'discord.js';
import { logger } from './logger';

export async function handleInteraction(client: Client, interaction: Interaction) {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'ping') {
    await interaction.reply({ content: 'Pong!', ephemeral: true });
    logger.info('Ping command used');
  }
}