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

import { StaticInstanceError } from '@blwatkins/utils';

import { HSL } from '../hsl';
import { RGB } from '../rgb';

import { ChromaAdapter } from './chroma-adapter';

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

    public static hexToHSL(hexColor: string): HSL {
        ChromaAdapter.assertValidInput(hexColor);
        // TODO - assertValidHexColor (no alpha)
        const chromaHSL: [number, number, number] = chroma(hexColor).hsl();
        return ChromaAdapter.chromaHSLToHSL(chromaHSL);
    }

    public static hexToRGB(hexColor: string): RGB {
        ChromaAdapter.assertValidInput(hexColor);
        // TODO - assertValidHexColor (no alpha)
        const chromaRGB: [number, number, number] = chroma(hexColor).rgb();
        return ChromaAdapter.chromaRGBToRGB(chromaRGB);
    }

    public static hslToHex(hsl: HSL): string {
        // TODO - assertValidHSL [HSLUtility]
        const chromaHSL: { h: number, s: number, l: number} = ChromaAdapter.hslToChromaHSL(hsl);
        ChromaAdapter.assertValidInput(chromaHSL);
        return chroma(chromaHSL).hex('rgb');
    }

    public static hslToRGB(hsl: HSL): RGB {
        return ColorModeConverter.hexToRGB(ColorModeConverter.hslToHex(hsl));
    }

    public static hslToStyle(hsl: HSL): string {
        // TODO - assertValidHSL [HSLUtility]
        const chromaHSL: { h: number, s: number, l: number} = ChromaAdapter.hslToChromaHSL(hsl);
        ChromaAdapter.assertValidInput(chromaHSL);
        return chroma(chromaHSL).css('hsl');
    }

    public static rgbToHex(rgb: RGB): string {
        // TODO - assertValidRGB [RGBUtility]
        const chromaRGB: [number, number, number] = ChromaAdapter.rgbToChromaRGB(rgb);
        ChromaAdapter.assertValidInput(chromaRGB);
        return chroma(chromaRGB).hex('rgb');
    }

    public static rgbToHSL(rgb: RGB): HSL {
        return ColorModeConverter.hexToHSL(ColorModeConverter.rgbToHex(rgb));
    }

    public static rgbToStyle(rgb: RGB): string {
        // TODO - assertValidRGB [RGBUtility]
        const chromaRGB: [number, number, number] = ChromaAdapter.rgbToChromaRGB(rgb);
        ChromaAdapter.assertValidInput(chromaRGB);
        return chroma(chromaRGB).css('rgb');
    }
}
