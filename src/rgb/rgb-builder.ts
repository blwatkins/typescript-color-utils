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

import { RGB, maxRGBComponent, minRGBComponent } from './rgb';

export class RGBBuilder {
    #red: number = 0;
    #green: number = 0;
    #blue: number = 0;
    #alpha: number | undefined = undefined;

    public setRed(red: number): this {
        NumberUtility.assertFiniteNumber(red);
        this.#red = Math.floor(MathUtility.constrain(red, minRGBComponent, maxRGBComponent));
        return this;
    }

    public setGreen(green: number): this {
        NumberUtility.assertFiniteNumber(green);
        this.#green = Math.floor(MathUtility.constrain(green, minRGBComponent, maxRGBComponent));
        return this;
    }

    public setBlue(blue: number): this {
        NumberUtility.assertFiniteNumber(blue);
        this.#blue = Math.floor(MathUtility.constrain(blue, minRGBComponent, maxRGBComponent));
        return this;
    }

    public setAlpha(alpha: number | undefined): this {
        if (alpha !== undefined) {
            NumberUtility.assertFiniteNumber(alpha);
            this.#alpha = Math.floor(MathUtility.constrain(alpha, minRGBComponent, maxRGBComponent));
        } else {
            this.#alpha = undefined;
        }

        return this;
    }

    public setAlphaFromPercentage(alpha: number): this {
        NumberUtility.assertInRange(alpha, 0, 1);
        this.#alpha = Math.floor(alpha * maxRGBComponent);
        return this;
    }

    public build(): RGB {
        return {
            red: this.#red,
            green: this.#green,
            blue: this.#blue,
            alpha: this.#alpha
        };
    }
}
