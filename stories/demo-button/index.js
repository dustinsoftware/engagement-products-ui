import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components';
import * as Styled from './styled.jsx';

storiesOf('Button', module).addWithChapters('Button styles', {
	chapters: [
		{
			title: 'Button Variations',
			info: `
Buttons allow users to command the computer to take some action. Buttons, like all standard form components, usually have 16 px space between them.
`,
			sections: [
				{
					title: 'Primary',
					info: `For the most important or most common action for a user to take in a given context/scope. This button variant grabs the user's attention. In marketing pages, this style is for the "call to action" on a page.`,
					sectionFn: () => (
						<Styled.Demos>
							<Styled.DemoRow>
								<Styled.ButtonWrapper>
									<Button primary small onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button primary medium onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button primary large onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button primary extraLarge onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
							</Styled.DemoRow>
						</Styled.Demos>
					),
				},
				{
					title: 'Primary Outline',
					info: `For actions related to, or nearby the primary button in terms of visual hieararchy that are less common or less critical. Use this button when you want the user's casual attention.`,
					sectionFn: () => (
						<Styled.Demos>
							<Styled.DemoRow>
								<Styled.ButtonWrapper>
									<Button primaryOutline small onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button primaryOutline medium onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button primaryOutline large onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button primaryOutline extraLarge onClick={action('clicked')}>
										Invite Friends
									</Button>
								</Styled.ButtonWrapper>
							</Styled.DemoRow>
						</Styled.Demos>
					),
				},
			],
		},
		{
			title: 'OK Cancel',
			info: `
It's common to need both a commit action ("OK", "Done", "Save") right next to a cancel action. Faithlife house style is:

* "Cancel" on the left, "OK" on the right.
* Cancel/Okay buttons go at the bottom of the dialog (or section) they govern.
* This is because you read forms from top-left (start) to bottom-right (end), and we want the default action ("OK") at the logical end. Otherwise, people accidentally hit "Cancel".
* If the actions govern a whole page, then they go at the top-right of the page, in line with the page headline. Again, "OK" at the far right.
* Cancel/Okay buttons may be repeated at the bottom of a long page.
* We know that other companies do this differently, and that's okay.
		`,
			sections: [
				{
					sectionFn: () => (
						<Styled.Demos>
							<Styled.DemoRow>
								<Styled.ButtonWrapper>
									<Button onClick={() => {}} primaryOutline medium>
										Cancel
									</Button>
								</Styled.ButtonWrapper>
								<Styled.ButtonWrapper>
									<Button onClick={() => {}} primary medium>
										Okay
									</Button>
								</Styled.ButtonWrapper>
							</Styled.DemoRow>
						</Styled.Demos>
					),
				},
			],
		},
	],
});
