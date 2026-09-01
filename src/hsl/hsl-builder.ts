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

import { MathUtility, NumberUtility } from '@blwatkins/utils';

import { HSL } from './hsl';

export class HSLBuilder {
    #hue: number = 0;
    #saturation: number = 0;
    #lightness: number = 0;
    #alpha: number | undefined = undefined;

    public setHue(hue: number): this {
        NumberUtility.assertFiniteNumber(hue);
        this.#hue = Math.floor(MathUtility.constrain(hue, 0, 360));
        return this;
    }

    public setSaturation(saturation: number): this {
        NumberUtility.assertFiniteNumber(saturation);
        this.#saturation = Math.floor(MathUtility.constrain(saturation, 0, 100));
        return this;
    }

    public setSaturationFromPercentage(saturation: number): this {
        NumberUtility.assertInRange(saturation, 0, 1);
        this.#saturation = Math.floor(saturation * 100);
        return this;
    }

    public setLightness(lightness: number): this {
        NumberUtility.assertFiniteNumber(lightness);
        this.#lightness = Math.floor(MathUtility.constrain(lightness, 0, 100));
        return this;
    }

    public setLightnessFromPercentage(lightness: number): this {
        NumberUtility.assertInRange(lightness, 0, 1);
        this.#lightness = Math.floor(lightness * 100);
        return this;
    }

    public setAlpha(alpha: number | undefined): this {
        if (alpha !== undefined) {
            this.setAlphaFromPercentage(alpha);
        } else {
            this.#alpha = undefined;
        }

        return this;
    }

    public setAlphaFromPercentage(alpha: number): this {
        NumberUtility.assertInRange(alpha, 0, 1);
        this.#alpha = alpha;
        return this;
    }

    public build(): HSL {
        return {
            hue: this.#hue,
            saturation: this.#saturation,
            lightness: this.#lightness,
            alpha: this.#alpha
        };
    }
}
