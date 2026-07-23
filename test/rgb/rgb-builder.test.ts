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

import { describe, test, expect } from 'vitest';

import { RGB, RGBBuilder, RGBUtility, maxRgbValue, minRgbValue } from '../../src';

import { nonFiniteNumberInputs, nonNumberInputs } from '../utils/input/number-inputs';
import { Scenario, TestCase, buildTestCases } from '../utils/test-case/test-case';

describe('RGBBuilder', (): void => {
    describe('setRed', (): void => {
        test('setRed should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setRed(5)).toEqual(builder);
        });

        test('setRed should constrain numeric parameters between 0 and 255', (): void => {
            const builder = new RGBBuilder();

            const minRGB: RGB = builder.setRed(-500).build();
            expect(RGBUtility.isRGB(minRGB)).toBeTruthy();
            expect(minRGB.red).toBe(minRgbValue);

            const maxRGB: RGB = builder.setRed(500).build();
            expect(RGBUtility.isRGB(maxRGB)).toBeTruthy();
            expect(maxRGB.red).toBe(maxRgbValue);
        });

        test('setRed should red to an integer value', (): void => {
            const builder = new RGBBuilder();
            const red: 42.1234 = 42.1234 as const;
            const expectedRed: 42 = 42 as const;
            const rgb: RGB = builder.setRed(red).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(expectedRed);
        });
    });

    describe('setGreen', (): void => {
        test('setGreen should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setGreen(5)).toEqual(builder);
        });

        test('setGreen should constrain numeric parameters between 0 and 255', (): void => {
            const builder = new RGBBuilder();

            const minRGB: RGB = builder.setGreen(-500).build();
            expect(RGBUtility.isRGB(minRGB)).toBeTruthy();
            expect(minRGB.green).toBe(minRgbValue);

            const maxRGB: RGB = builder.setGreen(500).build();
            expect(RGBUtility.isRGB(maxRGB)).toBeTruthy();
            expect(maxRGB.green).toBe(maxRgbValue);
        });

        test('setGreen should red to an integer value', (): void => {
            const builder = new RGBBuilder();
            const green: 41.1234 = 41.1234 as const;
            const expectedGreen: 41 = 41 as const;
            const rgb: RGB = builder.setGreen(green).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.green).toBe(expectedGreen);
        });
    });

    describe('setBlue', (): void => {
        test('setBlue should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setBlue(5)).toEqual(builder);
        });

        test('setBlue should constrain numeric parameters between 0 and 255', (): void => {
            const builder = new RGBBuilder();

            const minRGB: RGB = builder.setBlue(-500).build();
            expect(RGBUtility.isRGB(minRGB)).toBeTruthy();
            expect(minRGB.blue).toBe(minRgbValue);

            const maxRGB: RGB = builder.setBlue(500).build();
            expect(RGBUtility.isRGB(maxRGB)).toBeTruthy();
            expect(maxRGB.blue).toBe(maxRgbValue);
        });

        test('setBlue should red to an integer value', (): void => {
            const builder = new RGBBuilder();
            const blue: 40.1234 = 40.1234 as const;
            const expectedBlue: 40 = 40 as const;
            const rgb: RGB = builder.setBlue(blue).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.blue).toBe(expectedBlue);
        });
    });

    describe('setGray', (): void => {
        test('setGray should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setGray(5)).toEqual(builder);
        });

        test('setGray should set the red, green, and blue components of the RGB object', (): void => {
            const builder = new RGBBuilder();
            const gray: 10 = 10 as const;
            const rgb: RGB = builder.setGray(gray).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(gray);
            expect(rgb.green).toBe(gray);
            expect(rgb.blue).toBe(gray);
        });

        test('setGray should constrain numeric parameters between 0 and 255', (): void => {
            const builder = new RGBBuilder();

            const minRGB: RGB = builder.setGray(-500).build();
            expect(RGBUtility.isRGB(minRGB)).toBeTruthy();
            expect(minRGB.red).toBe(minRgbValue);
            expect(minRGB.green).toBe(minRgbValue);
            expect(minRGB.blue).toBe(minRgbValue);

            const maxRGB: RGB = builder.setGray(500).build();
            expect(RGBUtility.isRGB(maxRGB)).toBeTruthy();
            expect(maxRGB.red).toBe(maxRgbValue);
            expect(maxRGB.green).toBe(maxRgbValue);
            expect(maxRGB.blue).toBe(maxRgbValue);
        });

        test('setGray should red to an integer value', (): void => {
            const builder = new RGBBuilder();
            const gray: 38.1234 = 38.1234 as const;
            const expectedGray: 38 = 38 as const;
            const rgb: RGB = builder.setGray(gray).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(expectedGray);
            expect(rgb.green).toBe(expectedGray);
            expect(rgb.blue).toBe(expectedGray);
        });
    });

    describe('setAlpha', (): void => {
        test('setAlpha should return the builder object', (): void => {
            const builder = new RGBBuilder();
            expect(builder.setAlpha(5)).toEqual(builder);
            expect(builder.setAlpha(undefined)).toEqual(builder);
        });

        test('setAlpha should constrain numeric parameters between 0 and 255', (): void => {
            const builder = new RGBBuilder();

            const minRGB: RGB = builder.setAlpha(-500).build();
            expect(RGBUtility.isRGB(minRGB)).toBeTruthy();
            expect(minRGB.alpha).toBe(minRgbValue);

            const maxRGB: RGB = builder.setAlpha(500).build();
            expect(RGBUtility.isRGB(maxRGB)).toBeTruthy();
            expect(maxRGB.alpha).toBe(maxRgbValue);
        });

        test('setAlpha should red to an integer value', (): void => {
            const builder = new RGBBuilder();
            const alpha: 39.1234 = 39.1234 as const;
            const expectedAlpha: 39 = 39 as const;
            const rgb: RGB = builder.setAlpha(alpha).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.alpha).toBe(expectedAlpha);
        });
    });

    describe('build', (): void => {
        test('build should return an RGB object with default values', (): void => {
            const builder = new RGBBuilder();
            const rgb: RGB = builder.build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(0);
            expect(rgb.green).toBe(0);
            expect(rgb.blue).toBe(0);
            expect(rgb.alpha).toBeUndefined();
        });

        test('build should return an RGB object with set RGB values', (): void => {
            const red: 50 = 50 as const;
            const green: 100 = 100 as const;
            const blue: 150 = 150 as const;
            const builder = new RGBBuilder();
            const rgb: RGB = builder.setRed(red).setGreen(green).setBlue(blue).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBeUndefined();
        });

        test('build should return an RGBA object with set RGBA values', (): void => {
            const red: 200 = 200 as const;
            const green: 150 = 150 as const;
            const blue: 100 = 100 as const;
            const alpha: 50 = 50 as const;
            const builder = new RGBBuilder();
            const rgb: RGB = builder.setRed(red).setGreen(green).setBlue(blue).setAlpha(alpha).build();
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBe(alpha);
        });
    });

    describe('buildFrom', (): void => {
        test('buildFrom should return an RGB object with set RGB values', (): void => {
            const red: 25 = 25 as const;
            const green: 75 = 75 as const;
            const blue: 125 = 125 as const;
            const rgb: RGB = RGBBuilder.buildFrom(red, green, blue);
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBeUndefined();
        });

        test('buildFrom should return an RGB object with set RGBA values when alpha is undefined', (): void => {
            const red: 35 = 35 as const;
            const green: 85 = 85 as const;
            const blue: 135 = 135 as const;
            const alpha: undefined = undefined;
            const rgb: RGB = RGBBuilder.buildFrom(red, green, blue, alpha);
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBe(alpha);
        });

        test('buildFrom should return an RGBA object with set RGBA values', (): void => {
            const red: 175 = 175 as const;
            const green: 125 = 125 as const;
            const blue: 75 = 75 as const;
            const alpha: 25 = 25 as const;
            const rgb: RGB = RGBBuilder.buildFrom(red, green, blue, alpha);
            expect(RGBUtility.isRGB(rgb)).toBeTruthy();
            expect(rgb.red).toBe(red);
            expect(rgb.green).toBe(green);
            expect(rgb.blue).toBe(blue);
            expect(rgb.alpha).toBe(alpha);
        });
    });

    describe('Input validation', (): void => {
        describe('Invalid inputs should throw an error', (): void => {
            const scenarios: Scenario[] = [
                {
                    label: 'Non-number inputs',
                    inputs: [...nonNumberInputs],
                    expected: TypeError
                },
                {
                    label: 'Non-finite number inputs',
                    inputs: [...nonFiniteNumberInputs],
                    expected: TypeError
                }
            ];

            describe.each(
                scenarios
            )('%# - $label', ({ inputs: scenarioInputs, expected: scenarioExpected }: Scenario): void => {
                const testCases: TestCase[] = buildTestCases(scenarioInputs, scenarioExpected);

                describe('setRed', (): void => {
                    test.each(
                        testCases
                    )('%# - setRed($input) should throw $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                        expect((): void => {
                            const builder = new RGBBuilder();
                            builder.setRed(testInput as number);
                        }).toThrow(testExpected);
                    });
                });

                describe('setGreen', (): void => {
                    test.each(
                        testCases
                    )('%# - setGreen($input) should throw $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                        expect((): void => {
                            const builder = new RGBBuilder();
                            builder.setGreen(testInput as number);
                        }).toThrow(testExpected);
                    });
                });

                describe('setBlue', (): void => {
                    test.each(
                        testCases
                    )('%# - setBlue($input) should throw $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                        expect((): void => {
                            const builder = new RGBBuilder();
                            builder.setBlue(testInput as number);
                        }).toThrow(testExpected);
                    });
                });

                describe('setGray', (): void => {
                    test.each(
                        testCases
                    )('%# - setGray($input) should throw $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                        expect((): void => {
                            const builder = new RGBBuilder();
                            builder.setGray(testInput as number);
                        }).toThrow(testExpected);
                    });
                });

                describe('setAlpha', (): void => {
                    test.each(
                        testCases.filter((input: TestCase): boolean => input.input !== undefined)
                    )('%# - setAlpha($input) should throw $expected', ({ input: testInput, expected: testExpected }: TestCase): void => {
                        expect((): void => {
                            const builder = new RGBBuilder();
                            builder.setAlpha(testInput as number);
                        }).toThrow(testExpected);
                    });
                });

                describe('buildFrom', (): void => {
                    const defaultRed: number = 10;
                    const defaultGreen: number = 20;
                    const defaultBlue: number = 30;
                    const defaultAlpha: number = 40;

                    describe('red parameter', (): void => {
                        test.each(
                            testCases.filter((input: TestCase): boolean => input.input !== undefined)
                        )(`%# - buildFrom($input, ${defaultGreen}, ${defaultBlue}, ${defaultAlpha}/undefined) should throw $expected`, ({ input: testInput, expected: testExpected }: TestCase): void => {
                            expect((): void => {
                                RGBBuilder.buildFrom(testInput as number, defaultGreen, defaultBlue, defaultAlpha);
                            }).toThrow(testExpected);

                            expect((): void => {
                                RGBBuilder.buildFrom(testInput as number, defaultGreen, defaultBlue, undefined);
                            }).toThrow(testExpected);

                            expect((): void => {
                                RGBBuilder.buildFrom(testInput as number, defaultGreen, defaultBlue);
                            }).toThrow(testExpected);
                        });
                    });

                    describe('green parameter', (): void => {
                        test.each(
                            testCases.filter((input: TestCase): boolean => input.input !== undefined)
                        )(`%# - buildFrom(${defaultRed}, $input, ${defaultBlue}, ${defaultAlpha}/undefined) should throw $expected`, ({ input: testInput, expected: testExpected }: TestCase): void => {
                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, testInput as number, defaultBlue, defaultAlpha);
                            }).toThrow(testExpected);

                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, testInput as number, defaultBlue, undefined);
                            }).toThrow(testExpected);

                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, testInput as number, defaultBlue);
                            }).toThrow(testExpected);
                        });
                    });

                    describe('blue parameter', (): void => {
                        test.each(
                            testCases.filter((input: TestCase): boolean => input.input !== undefined)
                        )(`%# - buildFrom(${defaultRed}, ${defaultGreen}, $input, ${defaultAlpha}/undefined) should throw $expected`, ({ input: testInput, expected: testExpected }: TestCase): void => {
                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, defaultGreen, testInput as number, defaultAlpha);
                            }).toThrow(testExpected);

                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, defaultGreen, testInput as number, undefined);
                            }).toThrow(testExpected);

                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, defaultGreen, testInput as number);
                            }).toThrow(testExpected);
                        });
                    });

                    describe('alpha parameter', (): void => {
                        test.each(
                            testCases.filter((input: TestCase): boolean => input.input !== undefined)
                        )(`%# - buildFrom(${defaultRed}, ${defaultGreen}, ${defaultBlue}, $input) should throw $expected`, ({ input: testInput, expected: testExpected }: TestCase): void => {
                            expect((): void => {
                                RGBBuilder.buildFrom(defaultRed, defaultGreen, defaultBlue, testInput as number);
                            }).toThrow(testExpected);
                        });
                    });
                });
            });
        });
    });
});
