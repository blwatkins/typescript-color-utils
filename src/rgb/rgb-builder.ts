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

import { MathUtility } from '@blwatkins/utils';

import { Discriminators } from '../discriminator';

import { maxRgbValue, minRgbValue, RGB } from './rgb';

/**
 * A builder class for creating an {@link RGB} object.
 *
 * @since 0.1.0
 */
export class RGBBuilder {
    /**
     * The red component of the {@link RGB} object.
     *
     * @default 0
     *
     * @type {number}
     * @private
     */
    #red: number = 0;

    /**
     * The green component of the {@link RGB} object.
     *
     * @default 0
     *
     * @type {number}
     * @private
     */
    #green: number = 0;

    /**
     * The blue component of the {@link RGB} object.
     *
     * @default 0
     *
     * @type {number}
     * @private
     */
    #blue: number = 0;

    /**
     * The optional alpha component of the {@link RGB object}.
     *
     * @default undefined
     *
     * @type {number|undefined}
     * @private
     */
    #alpha: number | undefined = undefined;

    /**
     * Set the red component of the {@link RGB} object.
     *
     * @param {number} red - The red component value.
     * This value will be constrained to {@link minRgbValue} and {@link maxRgbValue}, then floored to the nearest integer.
     *
     * @returns {this} The current instance of the {@link RGBBuilder} for method chaining.
     *
     * @public
     * @since 0.1.0
     */
    public setRed(red: number): this {
        this.#red = Math.floor(MathUtility.constrain(red, minRgbValue, maxRgbValue));
        return this;
    }

    public setGreen(green: number): this {
        this.#green = Math.floor(MathUtility.constrain(green, minRgbValue, maxRgbValue));
        return this;
    }

    public setBlue(blue: number): this {
        this.#blue = Math.floor(MathUtility.constrain(blue, minRgbValue, maxRgbValue));
        return this;
    }

    public setGray(gray: number): this {
        return this.setRed(gray).setGreen(gray).setBlue(gray);
    }

    public setAlpha(alpha: number | undefined): this {
        if (alpha === undefined) {
            this.#alpha = undefined;
        } else {
            this.#alpha = Math.floor(MathUtility.constrain(alpha, minRgbValue, maxRgbValue));
        }

        return this;
    }

    public build(): RGB {
        return {
            red: this.#red,
            green: this.#green,
            blue: this.#blue,
            alpha: this.#alpha,
            discriminator: Discriminators.RGB
        };
    }

    public static buildFrom(red: number, green: number, blue: number, alpha?: number): RGB {
        return (new RGBBuilder()).setRed(red).setGreen(green).setBlue(blue).setAlpha(alpha).build();
    }
}
