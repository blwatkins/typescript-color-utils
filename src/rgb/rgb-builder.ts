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

import { RGB, maxRGBValue, minRGBValue } from './rgb';

// TODO - Instead of a, b, c for variables, use arg1, arg2, arg3, etc.

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
     * Build an {@link RGB} object from the given component values.
     *
     * @remarks All parameters will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @param {number} gray - The component value for red, green, and blue.
     * @param {number | undefined} alpha - The optional alpha component value.
     *
     * @returns {RGB} - An {@link RGB} object.
     *
     * @throws {TypeError} - When the given `gray` component is not a finite number.
     * @throws {TypeError} - When the given `alpha` component is not a finite number or undefined.
     *
     * @public
     * @since 0.1.0
     */
    public static buildFrom(gray: number, alpha?: number): RGB;
    /**
     * Build an {@link RGB} object from the given component values.
     *
     * @remarks All parameters will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @param {number} red - The red component value.
     * @param {number} green - The green component value.
     * @param {number} blue - The blue component value.
     * @param {number | undefined} alpha - The optional alpha component value.
     *
     * @returns {RGB} - An {@link RGB} object.
     *
     * @throws {TypeError} - When the given `red`, `green`, and `blue` components are not all finite numbers.
     * @throws {TypeError} - When the given `alpha` component is not a finite number or undefined.
     *
     * @public
     * @since 0.1.0
     */
    public static buildFrom(red: number, green: number, blue: number, alpha?: number): RGB;
    public static buildFrom(arg1: number, arg2?: number, arg3?: number, arg4?: number): RGB {
        if (arg3 === undefined && arg4 === undefined) {
            return (new RGBBuilder()).setGray(arg1).setAlpha(arg2).build();
        } else if (arg2 !== undefined && arg3 !== undefined) {
            return (new RGBBuilder()).setRed(arg1).setGreen(arg2).setBlue(arg3).setAlpha(arg4).build();
        } else {
            throw new TypeError('Invalid arguments. Expected either (gray: number, alpha?: number) or (red: number, green: number, blue: number, alpha?: number).');
        }
    }

    /**
     * Set the red component of the {@link RGB} object.
     *
     * @param {number} red - The red component value.
     * This value will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @returns {this} - The current instance of the {@link RGBBuilder} for method chaining.
     *
     * @throws {TypeError} - When the given value is not a finite number.
     *
     * @public
     * @since 0.1.0
     */
    public setRed(red: number): this {
        this.#red = Math.floor(MathUtility.constrain(red, minRGBValue, maxRGBValue));
        return this;
    }

    /**
     * Set the green component of the {@link RGB} object.
     *
     * @param {number} green - The green component value.
     * This value will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @returns {this} - The current instance of the {@link RGBBuilder} for method chaining.
     *
     * @throws {TypeError} - When the given value is not a finite number.
     *
     * @public
     * @since 0.1.0
     */
    public setGreen(green: number): this {
        this.#green = Math.floor(MathUtility.constrain(green, minRGBValue, maxRGBValue));
        return this;
    }

    /**
     * Set the blue component of the {@link RGB} object.
     *
     * @param {number} blue - The blue component value.
     * This value will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @returns {this} - The current instance of the {@link RGBBuilder} for method chaining.
     *
     * @throws {TypeError} - When the given value is not a finite number.
     *
     * @public
     * @since 0.1.0
     */
    public setBlue(blue: number): this {
        this.#blue = Math.floor(MathUtility.constrain(blue, minRGBValue, maxRGBValue));
        return this;
    }

    /**
     * Set the red, green, and blue components of the {@link RGB} object for a grayscale color.
     *
     * @param {number} gray - The component value for red, green, and blue.
     * This value will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @returns {this} - The current instance of the {@link RGBBuilder} for method chaining.
     *
     * @throws {TypeError} - When the given value is not a finite number or undefined.
     *
     * @public
     * @since 0.1.0
     */
    public setGray(gray: number): this {
        return this.setRed(gray).setGreen(gray).setBlue(gray);
    }

    /**
     * Set the optional alpha component of the {@link RGB} object.
     *
     * @param {number | undefined} alpha - The alpha component value.
     * When not `undefined`, this value will be constrained to {@link minRGBValue} and {@link maxRGBValue}, then floored to the nearest integer.
     *
     * @returns {this} - The current instance of the {@link RGBBuilder} for method chaining.
     *
     * @throws {TypeError} - When the given value is not a finite number or undefined.
     *
     * @public
     * @since 0.1.0
     */
    public setAlpha(alpha: number | undefined): this {
        if (alpha === undefined) {
            this.#alpha = undefined;
        } else {
            this.#alpha = Math.floor(MathUtility.constrain(alpha, minRGBValue, maxRGBValue));
        }

        return this;
    }

    /**
     * Build the {@link RGB} object with the current state of the {@link RGBBuilder}.
     *
     * @returns {RGB} - An {@link RGB} object.
     *
     * @public
     * @since 0.1.0
     */
    public build(): RGB {
        return {
            red: this.#red,
            green: this.#green,
            blue: this.#blue,
            alpha: this.#alpha,
            discriminator: Discriminators.RGB
        };
    }
}
