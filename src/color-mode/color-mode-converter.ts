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

/**
 * Static properties and methods for converting between color modes.
 *
 * @since 0.1.0
 */
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

    /**
     * Convert RGB color components to a hex color string.
     *
     * @param {number} a - The red component (0-255) or grayscale value (0-255) of the given color.
     * This value will be constrained to the range 0-255.
     * @param {number|undefined} b - The green component (0-255) of the given color.
     * This value will be constrained to the range 0-255.
     * @param {number|undefined} c - The blue component (0-255) of the given color.
     * This value will be constrained to the range 0-255.
     *
     * @returns {string} - The hex color string that represents the given color.
     * This string will always be returned with uppercase letters and will always be in the 6-digit format (#RRGGBB).
     *
     * @throws {TypeError} - When `a` is not a finite number for a grayscale color.
     * @throws {TypeError} - When any of `a`, `b`, or `c` are not finite numbers for an RGB color.
     *
     * @public
     * @since 0.1.0
     */
    public static rgbToHex(a: number, b?: number, c?: number): string {
        ColorModeConverter.#validateRGBInput(a, b, c, true);

        if (!NumberUtility.isFiniteNumber(b) || !NumberUtility.isFiniteNumber(c)) {
            return ColorModeConverter.#grayComponentToHex(a);
        }

        ColorModeConverter.#validateRGBInput(a, b, c, false);

        return ColorModeConverter.#rgbComponentsToHex(a, b, c);
    }

    public static rgbToStyleString(a: number, b?: number, c?: number): string {
        ColorModeConverter.#validateRGBInput(a, b, c, true);

        if (!NumberUtility.isFiniteNumber(b) || !NumberUtility.isFiniteNumber(c)) {
            return ColorModeConverter.#grayComponentToStyleString(a);
        }

        ColorModeConverter.#validateRGBInput(a, b, c, false);

        return ColorModeConverter.#rgbComponentsToStyleString(a, b, c);
    }

    /**
     * Validate an RGB input.
     *
     * @param {unknown} a - The red component or grayscale value to validate.
     * @param {unknown} b - The green component to validate.
     * @param {unknown} c - The blue component to validate.
     * @param {boolean} isGrayscale - `true` if the input should be validated as a grayscale color.
     * `false` if the input should be validated as an RGB color.
     *
     * @returns {void}
     *
     * @throws {TypeError} - When `a` is not a finite number for a grayscale color.
     * @throws {TypeError} - When any of `a`, `b`, or `c` are not finite numbers for an RGB color.
     *
     * @private
     */
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

    /**
     * Convert a grayscale component RGB color to a hex color string.
     *
     * @param {number} gray - The grayscale color (0-255) to convert.
     * This value will be constrained to the range 0-255.
     *
     * @returns {string} - The hex color string that represents the given color.
     *
     * @private
     */
    static #grayComponentToHex(gray: number): string {
        const g: number = ColorModeConverter.#constrainGrayscale(gray);
        return chroma(g, g, g).hex('rgb').toUpperCase();
    }

    /**
     * Convert a grayscale component RGB color to a CSS style string.
     *
     * @param {number} gray - The grayscale color (0-255) to convert.
     * This value will be constrained to the range 0-255.
     *
     * @returns {string} - The CSS style string that represents the given color.
     *
     * @private
     */
    static #grayComponentToStyleString(gray: number): string {
        const g: number = ColorModeConverter.#constrainGrayscale(gray);
        return chroma(g, g, g).css();
    }

    /**
     * Converts an RGB component color to a hex color string.
     *
     * @param {number} r - The red component (0-255) to convert.
     * This value will be constrained to the range 0-255.
     * @param {number} g - The green component (0-255) to convert.
     * This value will be constrained to the range 0-255.
     * @param {number} b - The blue component (0-255) to convert.
     * This value will be constrained to the range 0-255.
     *
     * @returns {string} - The hex color string that represents the given color.
     *
     * @private
     */
    static #rgbComponentsToHex(r: number, g: number, b: number): string {
        const { red, green, blue } = ColorModeConverter.#constrainRGB(r, g, b);
        return chroma(red, green, blue).hex('rgb').toUpperCase();
    }

    /**
     * Converts an RGB component color to a CSS style string.
     *
     * @param {number} r - The red component (0-255) to convert.
     * This value will be constrained to the range 0-255.
     * @param {number} g - The green component (0-255) to convert.
     * This value will be constrained to the range 0-255.
     * @param {number} b - The blue component (0-255) to convert.
     * This value will be constrained to the range 0-255.
     *
     * @returns {string} - The CSS style string that represents the given color.
     *
     * @private
     */
    static #rgbComponentsToStyleString(r: number, g: number, b: number): string {
        const { red, green, blue } = ColorModeConverter.#constrainRGB(r, g, b);
        return chroma(red, green, blue).css();
    }

    static #constrainToRange(value: number, min: number, max: number): number {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    static #constrainRGB(red: number, green: number, blue: number): { red: number; green: number; blue: number; } {
        return {
            red: ColorModeConverter.#constrainToRange(red, 0, 255),
            green: ColorModeConverter.#constrainToRange(green, 0, 255),
            blue: ColorModeConverter.#constrainToRange(blue, 0, 255)
        };
    }

    static #constrainGrayscale(gray: number): number {
        return ColorModeConverter.#constrainToRange(gray, 0, 255);
    }
}
