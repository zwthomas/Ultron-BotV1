const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Returns my ping!'),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true
		});
		const pingembed = new EmbedBuilder()
		//.setTitle("User Info")
		//.setDescription("Joined server on: "+interaction.member.joinedAt.toDateString())
		.setColor(0x800080)
		//.setImage(interaction.member.displayAvatarURL())
		.setThumbnail(interaction.member.displayAvatarURL())
		//.setTimestamp(Date.now())
		.setAuthor({
		  name: interaction.user.username,
		  iconURL: interaction.member.displayAvatarURL(),
		})
		.setFooter({
		  iconURL:
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/907a507d-e421-4e1c-a7f9-a27a30cabd66/df2hcd0-4292b6df-74b3-4eff-a649-3e4b319300c9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwN2E1MDdkLWU0MjEtNGUxYy1hN2Y5LWEyN2EzMGNhYmQ2NlwvZGYyaGNkMC00MjkyYjZkZi03NGIzLTRlZmYtYTY0OS0zZTRiMzE5MzAwYzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9hE9xeqK_NrJDA02KEXxPUatldwFFQakkgpD0rSmIag",
		  text: "Powered by Stark Industries",
		})
		.addFields(
		{
			name: "API Latency:",
			value: `${client.ws.ping}`,
			inline: true,
		},
		{ 
			name: "\u200B", 
		  	value: "\u200B", 
			inline: true 
		},
		{ 
			name: "Client Ping", 
			value: `${message.createdTimestamp - interaction.createdTimestamp}`,
			inline: true }
		);
		//const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
		await interaction.editReply({embeds: [pingembed], ephemeral: false });
		//content: newMessage
		 
	},
};