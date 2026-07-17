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

import chroma from 'chroma-js';

import { NumberUtility } from '@blwatkins/utils';

export class ColorModeConverter {
    /**
     * Private constructor.
     *
     * @throws {Error} - ColorModeConverter is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new Error('ColorModeConverter is a static class and cannot be instantiated.');
    }

    public static rgbToHex(a: number, b?: number, c?: number): string {
        ColorModeConverter.#validateRGBInput(a, b, c, true);

        if (!NumberUtility.isFiniteNumber(b) || !NumberUtility.isFiniteNumber(c)) {
            return ColorModeConverter.#grayComponentToHex(a);
        }

        ColorModeConverter.#validateRGBInput(a, b, c, false);

        return ColorModeConverter.#rgbComponentsToHex(a, b, c);
    }

    static #validateRGBInput(a: unknown, b: unknown, c: unknown, isGrayscale: boolean): void {
        if (isGrayscale) {
            if (!NumberUtility.isFiniteNumber(a)) {
                throw new TypeError(`Grayscale RGB input must be a finite number.`);
            }
        } else {
            if (!NumberUtility.isFiniteNumber(a) || !NumberUtility.isFiniteNumber(b) || !NumberUtility.isFiniteNumber(c)) {
                throw new TypeError(`RGB components must be finite numbers.`);
            }
        }
    }

    static #grayComponentToHex(gray: number): string {
        if (gray < 0) gray = 0;
        if (gray > 255) gray = 255;

        return chroma(gray, gray, gray).hex('rgb').toUpperCase();
    }

    static #rgbComponentsToHex(red: number, green: number, blue: number): string {
        if (red < 0) red = 0;
        if (green < 0) green = 0;
        if (blue < 0) blue = 0;
        if (red > 255) red = 255;
        if (green > 255) green = 255;
        if (blue > 255) blue = 255;

        return chroma(red, green, blue).hex('rgb').toUpperCase();
    }
}
