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

import { describe, test, expect } from 'vitest';

import { PrimitiveTypeError, StaticInstanceError } from '@blwatkins/utils';

import { ColorStringUtility } from '../../src';

import { testAssertMethod } from '../utils/assert/assert-tests';

import {
    hexColorFailureInputs,
    hexColorInputs,
    hexColorMixedCaseInputs,
    hexColorRGBALowercaseInputs,
    hexColorRGBANumberInputs,
    hexColorRGBAUppercaseInputs,
    hexColorRGBLowercaseInputs,
    hexColorRGBNumberInputs,
    hexColorRGBUppercaseInputs
} from '../utils/input/color-string-hex-inputs';

import { emptyStringInputs, nonStringInputs } from '../utils/input/string-inputs';
import { testStaticClassConstructor } from '../utils/static/static-class-tests';
import { Scenario, TestCase, buildTestCases } from '../utils/test-case/test-case';

describe('ColorStringUtility', (): void => {
    testStaticClassConstructor('ColorStringUtility', ColorStringUtility as unknown as new () => unknown, StaticInstanceError);

    describe('HexColor', (): void => {
        const failureScenarios: Scenario[] = [
            {
                label: 'Non-string inputs',
                inputs: nonStringInputs,
                expected: PrimitiveTypeError
            },
            {
                label: 'Empty string inputs',
                inputs: emptyStringInputs,
                expected: PrimitiveTypeError
            },
            {
                label: 'Hex color string failure inputs',
                inputs: [
                    ...hexColorFailureInputs,
                    ...hexColorMixedCaseInputs
                ],
                expected: PrimitiveTypeError
            }
        ];

        const successScenarios: Scenario[] = [
            {
                label: 'Hex color inputs',
                inputs: [
                    ...hexColorInputs
                ],
                expected: undefined
            }
        ];

        const scenarios: Scenario[] = [
            ...failureScenarios.map((scenario: Scenario): Scenario => {
                return {
                    ...scenario,
                    expected: false
                };
            }),
            ...successScenarios.map((scenario: Scenario): Scenario => {
                return {
                    ...scenario,
                    expected: true
                };
            })
        ];

        describe('assertHexColor', (): void => {
            testAssertMethod(
                ColorStringUtility.assertHexColor.bind(ColorStringUtility),
                successScenarios,
                failureScenarios,
                (input: unknown): string => {
                    return `Expected a hex color string, but received: ${typeof input}.`;
                }
            );
        });

        describe('isHexColor', (): void => {
            describe.each(
                scenarios
            )('%# - $label', ({ inputs: scenarioInputs, expected: scenarioExpected }: Scenario): void => {
                const testCases: TestCase[] = buildTestCases(scenarioInputs, scenarioExpected);

                test.each(
                    testCases
                )('%# - Input $input should return $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                    expect(ColorStringUtility.isHexColor(testInput)).toBe(testExpected);
                });
            });
        });
    });

    describe('HexColorRGB', (): void => {
        const failureScenarios: Scenario[] = [
            {
                label: 'Non-string inputs',
                inputs: nonStringInputs,
                expected: PrimitiveTypeError
            },
            {
                label: 'Empty string inputs',
                inputs: emptyStringInputs,
                expected: PrimitiveTypeError
            },
            {
                label: 'Hex color string failure inputs',
                inputs: [
                    ...hexColorFailureInputs,
                    ...hexColorMixedCaseInputs
                ],
                expected: PrimitiveTypeError
            },
            {
                label: 'RGBA hex color inputs',
                inputs: [
                    ...hexColorRGBANumberInputs,
                    ...hexColorRGBALowercaseInputs,
                    ...hexColorRGBAUppercaseInputs
                ],
                expected: PrimitiveTypeError
            }
        ];

        const successScenarios: Scenario[] = [
            {
                label: 'RGB hex color inputs',
                inputs: [
                    ...hexColorRGBNumberInputs,
                    ...hexColorRGBLowercaseInputs,
                    ...hexColorRGBUppercaseInputs
                ],
                expected: undefined
            }
        ];

        const scenarios: Scenario[] = [
            ...failureScenarios.map((scenario: Scenario): Scenario => {
                return {
                    ...scenario,
                    expected: false
                };
            }),
            ...successScenarios.map((scenario: Scenario): Scenario => {
                return {
                    ...scenario,
                    expected: true
                };
            })
        ];

        describe('assertHexColorRGB', (): void => {
            testAssertMethod(
                ColorStringUtility.assertHexColorRGB.bind(ColorStringUtility),
                successScenarios,
                failureScenarios,
                (input: unknown): string => {
                    return `Expected a hex color RGB string, but received: ${typeof input}.`;
                }
            );
        });

        describe('isHexColorRGB', (): void => {
            describe.each(
                scenarios
            )('%# - $label', ({ inputs: scenarioInputs, expected: scenarioExpected }: Scenario): void => {
                const testCases: TestCase[] = buildTestCases(scenarioInputs, scenarioExpected);

                test.each(
                    testCases
                )('%# - Input $input should return $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                    expect(ColorStringUtility.isHexColorRGB(testInput)).toBe(testExpected);
                });
            });
        });
    });

    describe('HexColorRGBA', (): void => {
        const failureScenarios: Scenario[] = [
            {
                label: 'Non-string inputs',
                inputs: nonStringInputs,
                expected: PrimitiveTypeError
            },
            {
                label: 'Empty string inputs',
                inputs: emptyStringInputs,
                expected: PrimitiveTypeError
            },
            {
                label: 'Hex color string failure inputs',
                inputs: [
                    ...hexColorFailureInputs,
                    ...hexColorMixedCaseInputs
                ],
                expected: PrimitiveTypeError
            },
            {
                label: 'RGB hex color inputs',
                inputs: [
                    ...hexColorRGBNumberInputs,
                    ...hexColorRGBLowercaseInputs,
                    ...hexColorRGBUppercaseInputs
                ],
                expected: PrimitiveTypeError
            }
        ];

        const successScenarios: Scenario[] = [
            {
                label: 'RGBA hex color inputs',
                inputs: [
                    ...hexColorRGBANumberInputs,
                    ...hexColorRGBALowercaseInputs,
                    ...hexColorRGBAUppercaseInputs
                ],
                expected: undefined
            }
        ];

        const scenarios: Scenario[] = [
            ...failureScenarios.map((scenario: Scenario): Scenario => {
                return {
                    ...scenario,
                    expected: false
                };
            }),
            ...successScenarios.map((scenario: Scenario): Scenario => {
                return {
                    ...scenario,
                    expected: true
                };
            })
        ];

        describe('assertHexColorRGBA', (): void => {
            testAssertMethod(
                ColorStringUtility.assertHexColorRGBA.bind(ColorStringUtility),
                successScenarios,
                failureScenarios,
                (input: unknown): string => {
                    return `Expected a hex color RGBA string, but received: ${typeof input}.`;
                }
            );
        });

        describe('isHexColorRGBA', (): void => {
            describe.each(
                scenarios
            )('%# - $label', ({ inputs: scenarioInputs, expected: scenarioExpected }: Scenario): void => {
                const testCases: TestCase[] = buildTestCases(scenarioInputs, scenarioExpected);

                test.each(
                    testCases
                )('%# - Input $input should return $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                    expect(ColorStringUtility.isHexColorRGBA(testInput)).toBe(testExpected);
                });
            });
        });
    });
});
