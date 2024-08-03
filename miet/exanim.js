function channelDefWithoutCondition(channel) {
    // Process the channel configuration without any conditions
    console.log(`Channel ${channel.name} defined without condition.`);
}

const myChannel = { name: 'myChannel', frequency: 100 };
channelDefWithoutCondition(myChannel);
