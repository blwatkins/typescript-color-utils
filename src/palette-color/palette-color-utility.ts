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
 *
 * SPDX-License-Identifier: MIT
 */

import Value from 'typebox/value';

import { SchemaTypeError, StringUtility } from '@blwatkins/utils';

import { PaletteColor, paletteColorSchema } from './palette-color';

/**
 * Static methods and properties for validating {@link PaletteColor} objects.
 *
 * @since 0.1.0
 */
export class PaletteColorUtility {
    /**
     * Private constructor.
     *
     * @throws {Error} - PaletteColorUtility is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new Error('PaletteColorUtility is a static class and cannot be instantiated.');
    }

    /**
     * Validate and assert that the given input is a {@link PaletteColor} object.
     *
     * @see {@link PaletteColor.isPaletteColor}
     *
     * @param {unknown} input - The input to check.
     * @param {string|undefined} message - Optional message for the error thrown when the input is not a valid {@link PaletteColor}.
     *
     * @returns {asserts input is PaletteColor} Asserts that the given input is a {@link PaletteColor}.
     *
     * @throws {SchemaTypeError} When the given input is not a valid {@link PaletteColor}.
     *
     * @public
     * @since 0.1.0
     */
    public static assertPaletteColor(input: unknown, message?: string): asserts input is PaletteColor {
        if (!PaletteColorUtility.isPaletteColor(input)) {
            if (StringUtility.isSingleLineTrimmedString(message)) {
                throw new SchemaTypeError(message);
            }

            throw new SchemaTypeError('Input does not match schema requirements for PaletteColor.');
        }
    }

    /**
     * Is the given input a {@link PaletteColor} object?
     *
     * @param {unknown} input - The input to check.
     *
     * @returns {input is PaletteColor} - `true` if the input is a {@link PaletteColor} object, `false` otherwise.
     *
     * @public
     * @since 0.1.0
     */
    public static isPaletteColor(input: unknown): input is PaletteColor {
        return Value.Check(paletteColorSchema, input);
    }
}
