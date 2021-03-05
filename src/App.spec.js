import {fireEvent, render} from '@testing-library/svelte';

import Component2 from './Component2.svelte';

describe('Component2', () => {
    test('message and input have alwayys same values', async () => {
        const {container, getByText} = render(Component2);
        const input = container.querySelector('input');
        const button = container.querySelector('button');
        global.alert = jest.fn();

        // initial state
        expect(input.value).toBe('world');
        // type in input
        await fireEvent.input(input, {target: {value: 'yum yum'}});
        expect(input.value).toBe('yum yum');
        // click button
        await fireEvent.click(button);
        expect(input.value).toBe('yum yum');

    });

});
