import React from 'react';
import { storiesOf } from '@storybook/react';
import DemoInput from './story.jsx';

storiesOf('Input', module)
	.add('with no validation', () => <DemoInput />)
	.add('with debounced validation', () => <DemoInput demoValidation validationDelay={200} />)
	.add('with failed API validation', () => (
		<DemoInput demoValidation demoFailedApiValidation validationDelay={200} />
	))
	.add('with slow API validation', () => (
		<DemoInput demoValidation demoSlowNetwork validationDelay={200} />
	))
	.add('with alternate theme', () => (
		<DemoInput demoValidation theme={{ background: '#393939', text: 'white' }} />
	));
