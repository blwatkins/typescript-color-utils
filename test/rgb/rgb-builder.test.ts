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

import { describe, test, expect } from 'vitest';
import {maxRgbValue, minRgbValue, RGB, RGBBuilder, RGBUtility} from '../../src';

describe('RGBBuilder', (): void => {
    describe('setRed', (): void => {
        test('setRed should return the builder object', (): void => {
           const builder = new RGBBuilder();
           expect(builder.setRed(5)).toEqual(builder);
        });

        test('setRed should constrain numeric parameters between 0 and 255', (): void => {
            const builder = new RGBBuilder();

            const minRGB: RGB = builder.setRed(-500).build();
            expect(RGBUtility.isRGB(minRGB)).toBeTruthy();
            expect(minRGB.red).toBe(minRgbValue);

            const maxRGB: RGB = builder.setRed(500).build();
            expect(RGBUtility.isRGB(maxRGB)).toBeTruthy();
            expect(maxRGB.red).toBe(maxRgbValue);
        });

        test('setRed should red to an integer value', (): void => {
            const builder = new RGBBuilder();
            const red: 42.1234 = 42.1234 as const;
            const expectedRed: 42 = 42 as const;
            const rgb: RGB = builder.setRed(red).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(expectedRed);
        });
    });

    describe('setGreen', (): void => {
        test('setGreen should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setGreen(5)).toEqual(builder);
        });
    });

    describe('setBlue', (): void => {
        test('setBlue should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setBlue(5)).toEqual(builder);
        });
    });

    describe('setAlpha', (): void => {
        test('setAlpha should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setAlpha(5)).toEqual(builder);
            expect(builder.setAlpha(undefined)).toEqual(builder);
        });
    });

    describe('build', (): void => {
        test('build should return an RGB object with default values', (): void => {
            const builder = new RGBBuilder();
            const rgb: RGB = builder.build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(0);
            expect(rgb.green).toBe(0);
            expect(rgb.blue).toBe(0);
            expect(rgb.alpha).toBeUndefined();
        });

        test('build should return an RGB object with set RGB values', (): void => {
            const red: 50 = 50 as const;
            const green: 100 = 100 as const;
            const blue: 150 = 150 as const;
            const builder = new RGBBuilder();
            const rgb: RGB = builder.setRed(red).setGreen(green).setBlue(blue).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBeUndefined();
        });

        test('build should return an RGBA object with set RGBA values', (): void => {
            const red: 200 = 200 as const;
            const green: 150 = 150 as const;
            const blue: 100 = 100 as const;
            const alpha: 50 = 50 as const;
            const builder = new RGBBuilder();
            const rgb: RGB = builder.setRed(red).setGreen(green).setBlue(blue).setAlpha(alpha).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBe(alpha);
        });
    });

    test.todo('Input validation - numeric types');
});
