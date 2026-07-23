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

import Value from 'typebox/value';

import { DiscriminatorRegistry, TypeGuard } from '@blwatkins/utils';

import { Discriminators } from '../discriminator';

import { RGB, rgbSchema } from './rgb';

/**
 * Static methods and properties for building and validating {@link RGB} objects.
 *
 * @since 0.1.0
 */
export class RGBUtility {
    /**
     * A type guard for {@link RGB} objects.
     *
     * @param {unknown} input - The input to check.
     *
     * @returns {input is RGB} - `true` if the input is an {@link RGB} object, `false` otherwise.
     *
     * @type {TypeGuard<RGB>}
     * @readonly
     * @private
     */
    static readonly #isRGB: TypeGuard<RGB> = DiscriminatorRegistry.register<RGB>({
        discriminator: Discriminators.RGB,
        validator: (input: unknown): input is RGB => {
            return Value.Check(rgbSchema, input);
        }
    });

    /**
     * Private constructor.
     *
     * @throws {Error} - RGBUtility is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new Error('RGBUtility is a static class and cannot be instantiated.');
    }

    /**
     * Is the given input an {@link RGB} object?
     *
     * @param {unknown} input - The input to check.
     *
     * @returns {input is RGB} - `true` if the input is an {@link RGB} object, `false` otherwise.
     *
     * @public
     * @since 0.1.0
     */
    public static isRGB(input: unknown): input is RGB {
        return RGBUtility.#isRGB(input);
    }

    /**
     * Assert that the given input is an {@link RGB} object.
     *
     * @param {unknown} input - The input to check.
     *
     * @returns {asserts input is RGB} - Asserts that the given input is an {@link RGB} object.
     *
     * @throws {TypeError} - When the given input is not an {@link RGB} object.
     *
     * @public
     * @since 0.1.0
     */
    public static assertRGB(input: unknown): asserts input is RGB {
        if (!RGBUtility.isRGB(input)) {
            throw new TypeError('Input does not match schema requirements for RGB object');
        }
    }

    /**
     * Get the JSON string representation of the given {@link RGB} object.
     *
     * @param {RGB} rgb - The {@link RGB} object to stringify.
     *
     * @returns {string} - The JSON string representation of the given {@link RGB} object.
     *
     * @throws {TypeError} - When the given input is not an {@link RGB} object.
     *
     * @public
     * @since 0.1.0
     */
    public static toString(rgb: RGB): string {
        RGBUtility.assertRGB(rgb);
        return JSON.stringify(rgb);
    }
}
