import * as React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import AlbumList from '.';
import App from '../../App'

describe('Album List component', () => {
    beforeEach(() => {
        render(<AlbumList />)
    })

    it('Should have a table', () => {
        const table = screen.getByRole('table')
        expect(table).toBeInTheDocument()
    })

    it('Table should have 10 tracks', () => {
        const tracks = screen.getByRole('list')
        expect(tracks).toBeInTheDocument()
        expect(tracks.childNodes.length).toBe(10)
    })

    it('Tracks have like buttons', () => {
        const buttons = screen.getAllByRole('button')
        expect(buttons.length).toBe(10)
        expect(buttons[0]).toBeInTheDocument()
        expect(buttons[0].textContent).toBe('Like')
    })

    it('Track text should be red when liked', async() => {
        const buttons = screen.getAllByRole('button')
        const tracks = screen.getAllByRole('listitem')
        console.log(tracks[0].textContent)
        await userEvent.click(buttons[0])
        expect(tracks[0].style.color).toBe('red')
    })

    afterEach(() => {
        cleanup()
    })
})
