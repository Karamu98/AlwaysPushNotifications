const { Plugin } = require('powercord/entities');
const { FluxDispatcher } = require('powercord/webpack');

const Settings = require('./ui/Settings.jsx');


module.exports = class AlwaysPushNotifications extends Plugin 
{
    startPlugin () 
    {
        powercord.api.settings.registerSettings(this.entityID, 
        {
            category: this.entityID,
            label: 'Always Push Notifications',
            render: Settings
        });

        FluxDispatcher.subscribe('MESSAGE_CREATE', this.handleMessage.bind(this));
    }

    async handleMessage ({ message }) 
    {
        if (!this.settings.get('dm', false) && channel.isDM()) 
        {
            return null;
        }
    }

    pluginWillUnload () 
    {
        powercord.api.settings.unregisterSettings(this.entityID);
        FluxDispatcher.unsubscribe('MESSAGE_CREATE', this.handleMessage);
    }
};
