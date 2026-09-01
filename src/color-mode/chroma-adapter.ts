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

import chroma from 'chroma-js';

import { NumberUtility, PrimitiveTypeError, SchemaTypeError, TypeAssertions } from '@blwatkins/utils';

import { HSL, HSLBuilder } from '../hsl';
import { RGB, RGBBuilder } from '../rgb';

export interface ChromaHSL {
    h: number;
    s: number;
    l: number;
}

export class ChromaAdapter {
    public static assertValidInput(input: unknown): void {
        if (!chroma.valid(input)) {
            throw new SchemaTypeError('Invalid input for chroma.js color operations.');
        }
    }

    public static chromaHSLToHSL(chromaHSL: [number, number, number] | [number, number, number, number]): HSL {
        ChromaAdapter.#assertValidChromaArray(chromaHSL);
        const builder: HSLBuilder = new HSLBuilder();

        if (NumberUtility.isFiniteNumber(chromaHSL[0])) {
            builder.setHue(chromaHSL[0]);
        } else {
            builder.setHue(0);
        }

        builder.setSaturation(chromaHSL[1])
            .setLightness(chromaHSL[2]);

        if (chromaHSL.length === 4) {
            builder.setAlpha(chromaHSL[3]);
        }

        return builder.build();
    }

    public static chromaRGBToRGB(chromaRGB: [number, number, number] | [number, number, number, number]): RGB {
        ChromaAdapter.#assertValidChromaArray(chromaRGB);
        const builder: RGBBuilder = new RGBBuilder();
        builder.setRed(chromaRGB[0])
            .setGreen(chromaRGB[1])
            .setBlue(chromaRGB[2]);

        if (chromaRGB.length === 4) {
            builder.setAlphaFromPercentage(chromaRGB[3]);
        }

        return builder.build();
    }

    public static hslToChromaHSL(hsl: HSL): ChromaHSL {
        // TODO - assertValidHSL [HSLUtility]
        return {
            h: hsl.hue,
            s: hsl.saturation / 100,
            l: hsl.lightness / 100
        };
    }

    public static rgbToChromaRGB(rgb: RGB): [number, number, number] {
        // TODO - assertValidRGB [RGBUtility]
        return [rgb.red, rgb.green, rgb.blue];
    }

    static #assertValidChromaArray(input: unknown): asserts input is ([number, number, number] | [number, number, number, number]) {
        TypeAssertions.assertArrayType(input);

        if (!(input.length === 3 || input.length === 4)) {
            throw new PrimitiveTypeError('Invalid chroma.js array. Array length should be 3 or 4.');
        }
    }
}
