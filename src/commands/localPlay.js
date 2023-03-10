const { SlashCommandBuilder } = require('discord.js');
const { addLocalSong } = require('../queue');
import "dotenv/config";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('local')
        .setDescription('서버에 저장된 노래를 재생합니다.')
        .addStringOption(option =>
            option.setName('file')
                .setDescription('파일 이름')
                .setRequired(true)
        ),

        async execute(interaction, client) {
            await addLocalSong(interaction, client);
        },

};