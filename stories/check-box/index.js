import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './story.jsx';

storiesOf('Checkbox', module)
	.add('with text', () => <Checkbox />)
	.add('with alternate theme', () => (
		<Checkbox theme={{ primary: 'plum', border: 'rebeccapurple' }} />
	));
