const { SlashCommandBuilder } = require('discord.js');
const { leave } = require('../queue');
import "dotenv/config";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('음성 채팅방에서 나갑니다.'),

        async execute(interaction, client) {
            await leave(interaction, client);
        },

};