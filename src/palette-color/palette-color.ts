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

import { StringUtility, discriminatedSchema } from '@blwatkins/utils';

import { Discriminators } from '../discriminator';
import { ColorStringUtility } from '../string';

/**
 * TypeBox schema to validate a {@link PaletteColor} object.
 *
 * @since 0.1.0
 */
export const paletteColorSchema = Type.Intersect([
    discriminatedSchema,
    Type.Object(
        {
            hex: Type.Readonly(Type.String({
                pattern: ColorStringUtility.hexColorPatternRGB
            })),

            name: Type.Readonly(Type.String({
                pattern: StringUtility.singleLineTrimmedPattern
            })),

            luminance: Type.Optional(Type.Readonly(Type.Number({
                minimum: 0,
                maximum: 1
            }))),

            // TODO - Create and use RGB typebox schema
            rgb: Type.Optional(Type.Readonly(Type.Object({}))),

            // TODO - Create and use HSL typebox schema
            hsl: Type.Optional(Type.Readonly(Type.Object({}))),

            /**
             * The discriminator for the palette color object.
             *
             * @type {Discriminators.PaletteColor}
             * @readonly
             * @since 0.1.0
             */
            discriminator: Type.Readonly(Type.Literal(Discriminators.PaletteColor))
        },
        { additionalProperties: false }
    )
]);

/**
 * Type definition for a palette color object.
 *
 * @since 0.1.0
 */
export type PaletteColor = Static<typeof paletteColorSchema>;
