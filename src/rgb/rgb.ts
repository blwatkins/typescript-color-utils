/*
 * Copyright (c) 2024-2026 Brittni Watkins.
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

import { Type, type Static } from 'typebox';

import { discriminatedSchema } from '@blwatkins/utils';

import { Discriminators } from '../discriminator';

/**
 * Minimum value for an RGB component.
 *
 * @type {0}
 * @since 0.1.0
 */
export const minRgbValue: 0 = 0 as const;

/**
 * Maximum value for an RGB component.
 *
 * @type {255}
 * @since 0.1.0
 */
export const maxRgbValue: 255 = 255 as const;

/**
 * TypeBox schema to validate a {@link RGB} object.
 *
 * @since 0.1.0
 */
export const rgbSchema = Type.Intersect([
    discriminatedSchema,
    Type.Object(
        {
            /**
             * The red component of the RGB color.
             * Must be an integer between 0 and 255.
             *
             * @type {number}
             * @readonly
             * @since 0.1.0
             */
            red: Type.Readonly(Type.Integer({
                minimum: minRgbValue,
                maximum: maxRgbValue
            })),

            /**
             * The green component of the RGB color.
             * Must be an integer between 0 and 255.
             *
             * @type {number}
             * @readonly
             * @since 0.1.0
             */
            green: Type.Readonly(Type.Integer({
                minimum: minRgbValue,
                maximum: maxRgbValue
            })),

            /**
             * The blue component of the RGB color.
             * Must be an integer between 0 and 255.
             *
             * @type {number}
             * @readonly
             * @since 0.1.0
             */
            blue: Type.Readonly(Type.Integer({
                minimum: minRgbValue,
                maximum: maxRgbValue
            })),

            /**
             * The optional alpha component of the RGB color.
             * When present, must be an integer between 0 and 255.
             *
             * @type {number | undefined}
             * @readonly
             * @since 0.1.0
             */
            alpha: Type.Optional(Type.Readonly(Type.Integer({
                minimum: minRgbValue,
                maximum: maxRgbValue
            }))),

            /**
             * The discriminator for the RGB object.
             *
             * @type {Discriminators.RGB}
             * @readonly
             */
            discriminator: Type.Readonly(Type.Literal(Discriminators.RGB))
        },
        { additionalProperties: false }
    )
]);

/**
 * Type definition for an RGB color object.
 *
 * @since 0.1.0
 */
export type RGB = Static<typeof rgbSchema>;
