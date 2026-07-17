/*
 * Copyright (c) 2026 Brittni Watkins.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { describe, expect, test } from 'vitest';

import { ColorModeConverter } from '../../src/color-mode/color-mode-converter';

describe('ColorModeConverter', (): void => {
    describe('new ColorModeConverter()', (): void => {
        describe('Runtime behavior guards', (): void => {
            test('Constructor should throw an error when instantiated at runtime', (): void => {
                const RuntimeConstructor = ColorModeConverter as unknown as new () => ColorModeConverter;
                expect((): ColorModeConverter => new RuntimeConstructor()).toThrow(Error);
            });
        });
    });

    describe('rgbToHex', (): void => {
        describe('rgbToHex(value) should return a grayscale hex color', (): void => {
            test.each([
                { input: -1, expected: '#000000' },
                { input: -Number.EPSILON, expected: '#000000' },
                { input: 0, expected: '#000000' },
                { input: 9, expected: '#090909' },
                { input: 15, expected: '#0F0F0F' },
                { input: 60, expected: '#3C3C3C' },
                { input: 100, expected: '#646464' },
                { input: 255, expected: '#FFFFFF' },
                { input: (255 + Number.EPSILON), expected: '#FFFFFF' },
                { input: 256, expected: '#FFFFFF' }
            ])('%# - rgbToHex($input) should return $expected', ({ input, expected }: { input: number; expected: string; }): void => {
                expect(ColorModeConverter.rgbToHex(input)).toBe(expected);
            });
        });

        test.todo('Input validation');
    });
});
