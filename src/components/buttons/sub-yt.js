module.exports = {
    data: {
        name: `sub-yt`
    },
    async execute(interaction, client){
        await interaction.reply({
            content:`https://www.youtube.com/channel/UCui1_IDLCNcQpy_IjFg1taw`
        });
    }
}