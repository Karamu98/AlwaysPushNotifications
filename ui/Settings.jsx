const { React } = require('powercord/webpack');
const { SwitchItem } = require('powercord/components/settings');

module.exports = ({ getSetting, updateSetting, settings, toggleSetting }) => {
  const [ opened, onChange ] = React.useState(true);

  return (
    <div>
      <SwitchItem
        note={'If enabled, you\'ll receive notifications on the mobile app with every desktop notification'}
        value={getSetting('m_active', false)}
        onChange={() => toggleSetting('m_active')}
      >
        Active
      </SwitchItem>
    </div>
  );
};
