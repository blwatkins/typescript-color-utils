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

// TODO - hex to HSL

// TODO - RGB to hex
// TODO - HSL to hex

import chroma from 'chroma-js';

import { SchemaTypeError, StaticInstanceError } from '@blwatkins/utils';

import { RGB, RGBBuilder } from '../rgb';

/**
 * Static properties and methods for converting between color modes.
 *
 * @since 0.1.0
 */
export class ColorModeConverter {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When class is instantiated.
     * {@link ColorModeConverter} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('ColorModeConverter is a static class and cannot be instantiated.');
    }

    public static hexToRGB(hexColor: string): RGB {
        ColorModeConverter.#assertValidConversionInput(hexColor);
        const chromaConversion: [number, number, number, number] = chroma(hexColor).rgba();
        return ColorModeConverter.#chromaRGBToRGB(chromaConversion);
    }

    static #assertValidConversionInput(input: unknown): void {
        if (!chroma.valid(input)) {
            throw new SchemaTypeError('Invalid input for chroma.js conversion.');
        }
    }

    static #chromaRGBToRGB(rgbArray: [number, number, number] | [number, number, number, number]): RGB {
        const builder = new RGBBuilder();
        builder.setRed(rgbArray[0])
            .setGreen(rgbArray[1])
            .setBlue(rgbArray[2]);

        if (rgbArray.length === 4) {
            builder.setAlphaFromPercentage(rgbArray[3]);
        }

        return builder.build();
    }
}
