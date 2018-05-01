import { configure, setAddon } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

function loadStories() {
	require('../stories/index.js');
}

setDefaults({
	sectionOptions: {
		showSource: false,
	},
});

setAddon(chaptersAddon);
configure(loadStories, module);
