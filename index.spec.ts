import { ceil, floor, round } from ".";

type Test = {
    value: number,
    precision?: number,
    ceil: number,
    floor: number,
    round: number
}

const specs: Test[] = [
    { value: 0, precision: 0, ceil: 0, floor: 0, round: 0 },
    { value: 1, precision: 0, ceil: 1, floor: 1, round: 1 },
    { value: 1.1, precision: 0, ceil: 2, floor: 1, round: 1 },
    { value: 1.11, precision: 0, ceil: 2, floor: 1, round: 1 },
    { value: 0.1, precision: 0, ceil: 1, floor: 0, round: 0 },
    { value: 1.1, precision: 0, ceil: 2, floor: 1, round: 1 },
    { value: 4.1, precision: 0, ceil: 5, floor: 4, round: 4 },
    { value: 5.1, precision: 0, ceil: 6, floor: 5, round: 5 },
    { value: 9.1, precision: 0, ceil: 10, floor: 9, round: 9 },
    { value: 0, precision: -1, ceil: 0, floor: 0, round: 0 },
    { value: 0.1, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 0.4, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 0.5, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 0.9, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 1, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 1.1, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 1.4, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 1.5, precision: -1, ceil: 10, floor: 0, round: 0 },
    { value: 0.01, precision: 1, ceil: 0.1, floor: 0, round: 0 },
    { value: 0.11, precision: 1, ceil: 0.2, floor: 0.1, round: 0.1 },
    { value: 0.4, precision: 1, ceil: 0.4, floor: 0.4, round: 0.4 },
    { value: 0.41, precision: 1, ceil: 0.5, floor: 0.4, round: 0.4 },
    { value: 0.5, precision: 1, ceil: 0.5, floor: 0.5, round: 0.5 },
    { value: 0.51, precision: 1, ceil: 0.6, floor: 0.5, round: 0.5 },
    { value: 0.91, precision: 1, ceil: 1, floor: 0.9, round: 0.9 },
    { value: 0.99, precision: 1, ceil: 1, floor: 0.9, round: 1 },
    { value: 1.01, precision: 1, ceil: 1.1, floor: 1, round: 1 },
    { value: 1.11, precision: 1, ceil: 1.2, floor: 1.1, round: 1.1 },
    { value: 1.41, precision: 1, ceil: 1.5, floor: 1.4, round: 1.4 },
    { value: 1.51, precision: 1, ceil: 1.6, floor: 1.5, round: 1.5 },
    { value: 0.044, precision: 2, ceil: 0.05, floor: 0.04, round: 0.04 },
    { value: 0.144, precision: 2, ceil: 0.15, floor: 0.14, round: 0.14 },
    { value: 0.444, precision: 2, ceil: 0.45, floor: 0.44, round: 0.44 },
    { value: 0.444, precision: 2, ceil: 0.45, floor: 0.44, round: 0.44 },
    { value: 0.544, precision: 2, ceil: 0.55, floor: 0.54, round: 0.54 },
    { value: 0.944, precision: 2, ceil: 0.95, floor: 0.94, round: 0.94 },
    { value: 1.044, precision: 2, ceil: 1.05, floor: 1.04, round: 1.04 },
    { value: 1.144, precision: 2, ceil: 1.15, floor: 1.14, round: 1.14 },
    { value: 1.444, precision: 2, ceil: 1.45, floor: 1.44, round: 1.44 },
    { value: 1.544, precision: 2, ceil: 1.55, floor: 1.54, round: 1.54 },
    { value: 4.005, precision: 2, ceil: 4.01, floor: 4, round: 4.01 },
    { value: 1.123, precision: 2.1, ceil: 1.13, floor: 1.12, round: 1.12 },
    { value: NaN, ceil: NaN, floor: NaN, round: NaN },
    { value: Infinity, ceil: Infinity, floor: Infinity, round: Infinity },
    { value: -Infinity, ceil: -Infinity, floor: -Infinity, round: -Infinity },
    { value: Number.MAX_SAFE_INTEGER, precision: 1, ceil: 9007199254740990, floor: 9007199254740990, round: 9007199254740990 },
    { value: undefined, ceil: NaN, floor: NaN, round: NaN } as any,
    { value: null, ceil: 0, floor: 0, round: 0 },
    { value: false, ceil: 0, floor: 0, round: 0 },
    { value: true, ceil: 1, floor: 1, round: 1 },
    { value: '', ceil: 0, floor: 0, round: 0 },
    { value: [], ceil: 0, floor: 0, round: 0 },
    { value: {}, ceil: NaN, floor: NaN, round: NaN },
    { value: 1.1, precision: NaN, ceil: 2, floor: 1, round: 1 },
    { value: NaN, precision: NaN, ceil: NaN, floor: NaN, round: NaN }
]

for (const spec of specs) {
    const { value, precision } = spec
    test(`Rounding value ${value} to precision ${precision}`, () => {
        expect(ceil(value, precision)).toEqual(spec.ceil)
        expect(floor(value, precision)).toEqual(spec.floor)
        expect(round(value, precision)).toEqual(spec.round)
    })
}
