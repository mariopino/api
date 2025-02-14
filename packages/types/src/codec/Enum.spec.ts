// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../injector';

import { u8aToHex } from '@polkadot/util';

import Enum from './Enum';
import Null from '../primitive/Null';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';

describe('Enum', (): void => {
  describe('typed enum (previously EnumType)', (): void => {
    it('provides a clean toString() (value)', (): void => {
      expect(
        new Enum(
          { Text, U32 },
          new Uint8Array([0, 2 << 2, 49, 50])
        ).value.toString()
      ).toEqual('12');
    });

    it('provides a clean toString() (enum)', (): void => {
      expect(
        new Enum(
          { Text, U32 },
          new Uint8Array([1, 2 << 2, 49, 50])
        ).toString()
      ).toEqual('{"U32":3289352}');
    });

    it('decodes from a JSON input (lowercase)', (): void => {
      expect(
        new Enum(
          { Text, U32 },
          { text: 'some text value' }
        ).value.toString()
      ).toEqual('some text value');
    });

    it('decodes from hex', (): void => {
      expect(
        new Enum(
          { Text, U32 },
          '0x0134120000'
        ).value.toString()
      ).toEqual('4660'); // 0x1234 in decimal
    });

    it('decodes from hex (string types)', (): void => {
      expect(
        new Enum(
          { foo: 'Text', bar: 'u32' },
          '0x0134120000'
        ).value.toString()
      ).toEqual('4660'); // 0x1234 in decimal
    });

    it('decodes from a JSON input (mixed case)', (): void => {
      expect(
        new Enum(
          { Text, U32 },
          { U32: 42 }
        ).value.toString()
      ).toEqual('42');
    });

    it('decodes from JSON string', (): void => {
      expect(
        new Enum(
          { Null, U32 },
          'null'
        ).type
      ).toEqual('Null');
    });

    it('has correct isXyz/asXyz (Enum.with)', (): void => {
      const test = new (Enum.with({ First: Text, Second: U32, Third: U32 }))({ Second: 42 }) as any as { isSecond: boolean; asSecond: U32; asThird: never };

      expect(test.isSecond).toEqual(true);
      expect(test.asSecond.toNumber()).toEqual(42);
      expect((): never => test.asThird).toThrow(/Cannot convert 'Second' via asThird/);
    });

    it('stringifies with custom types', (): void => {
      class A extends Null { }
      class B extends Null { }
      class C extends Null { }
      class Test extends Enum {
        constructor (value?: string, index?: number) {
          super({
            a: A,
            b: B,
            c: C
          }, value, index);
        }
      }

      expect(new Test().toJSON()).toEqual({ a: null });
    });

    it('creates via with', (): void => {
      class A extends Null { }
      class B extends U32 { }
      class C extends Null { }
      const Test = Enum.with({ A, B, C });

      expect(new Test().toJSON()).toEqual({ A: null });
      expect(new Test(1234, 1).toJSON()).toEqual({ B: 1234 });
    });

    it('allows accessing the type and value', (): void => {
      const text = new Text('foo');
      const enumType = new Enum(
        { Text, U32 },
        { Text: text }
      );

      expect(enumType.type).toBe('Text');
      expect(enumType.value).toEqual(text);
    });

    describe('utils', (): void => {
      const DEF = { num: U32, str: Text };
      const u8a = new Uint8Array([1, 3 << 2, 88, 89, 90]);
      const test = new Enum(DEF, u8a);

      it('compares against index', (): void => {
        expect(test.eq(1)).toBe(true);
      });

      it('compares against u8a', (): void => {
        expect(test.eq(u8a)).toBe(true);
      });

      it('compares against hex', (): void => {
        expect(test.eq(u8aToHex(u8a))).toBe(true);
      });

      it('compares against another enum', (): void => {
        expect(test.eq(new Enum(DEF, u8a))).toBe(true);
      });

      it('compares against another object', (): void => {
        expect(test.eq({ str: 'XYZ' })).toBe(true);
      });

      it('compares against values', (): void => {
        expect(test.eq('XYZ')).toBe(true);
      });

      it('compares basic enum on string', (): void => {
        expect(new Enum(['A', 'B', 'C'], 1).eq('B')).toBe(true);
      });
    });
  });

  describe('string-only construction (old Enum)', (): void => {
    const testDecode = (type: string, input: any, expected: any): void =>
      it(`can decode from ${type}`, (): void => {
        const e = new Enum(['foo', 'bar'], input);

        expect(e.toString()).toBe(expected);
      });

    const testEncode = (to: 'toJSON' | 'toNumber' | 'toString' | 'toU8a', expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const e = new Enum(['foo', 'bar'], 1);

        expect(e[to]()).toEqual(expected);
      });

    testDecode('Enum', undefined, 'foo');
    testDecode('Enum', new Enum(['foo', 'bar'], 1), 'bar');
    testDecode('number', 0, 'foo');
    testDecode('number', 1, 'bar');
    testDecode('string', 'bar', 'bar');
    testDecode('Uint8Array', Uint8Array.from([0]), 'foo');
    testDecode('Uint8Array', Uint8Array.from([1]), 'bar');

    testEncode('toJSON', 1);
    testEncode('toNumber', 1);
    testEncode('toString', 'bar');
    testEncode('toU8a', Uint8Array.from([1]));

    it('provides a clean toString()', (): void => {
      expect(
        new Enum(['foo', 'bar']).toString()
      ).toEqual('foo');
    });

    it('provides a clean toString() (enum)', (): void => {
      expect(
        new Enum(['foo', 'bar'], new Enum(['foo', 'bar'], 1)).toNumber()
      ).toEqual(1);
    });

    it('converts to and from U8a', (): void => {
      expect(
        new Enum(['foo', 'bar'], new Uint8Array([1])).toU8a()
      ).toEqual(new Uint8Array([1]));
    });

    it('converts from JSON', (): void => {
      expect(
        new Enum(['foo', 'bar', 'baz', 'gaz', 'jaz'], 4).toNumber()
      ).toEqual(4);
    });

    it('has correct isXyz getters (Enum.with)', (): void => {
      const test = new (Enum.with(['First', 'Second', 'Third']))('Second') as any as { isSecond: boolean; asSecond: never };

      expect(test.isSecond).toEqual(true);
    });

    describe('utils', (): void => {
      it('compares agains the index value', (): void => {
        expect(
          new Enum(['foo', 'bar'], 1).eq(1)
        ).toBe(true);
      });

      it('compares agains the index value (false)', (): void => {
        expect(
          new Enum(['foo', 'bar'], 1).eq(0)
        ).toBe(false);
      });

      it('compares agains the string value', (): void => {
        expect(
          new Enum(['foo', 'bar'], 1).eq('bar')
        ).toBe(true);
      });

      it('compares agains the string value (false)', (): void => {
        expect(
          new Enum(['foo', 'bar'], 1).eq('foo')
        ).toBe(false);
      });

      it('has isNone set, with correct index (i.e. no values are used)', (): void => {
        const test = new Enum(['foo', 'bar'], 1);

        expect(test.isNone).toBe(true);
        expect(test.index).toEqual(1);
      });
    });
  });

  describe('index construction', (): void => {
    it('creates enum where index is specified', (): void => {
      const Test = Enum.with({
        A: U32,
        B: U32
      });
      const test = new Test(new U32(123), 1);

      expect(test.type).toEqual('B');
      expect((test.value as U32).toNumber()).toEqual(123);
    });

    it('creates enum when value is an enum', (): void => {
      const Test = Enum.with({
        A: U32,
        B: U32
      });
      const test = new Test(new Test(123, 1));

      expect(test.type).toEqual('B');
      expect((test.value as U32).toNumber()).toEqual(123);
    });

    it('creates via enum with nested enums as the value', (): void => {
      const Nest = Enum.with({
        C: U32,
        D: U32
      });
      const Test = Enum.with({
        A: U32,
        B: Nest
      });
      const test = new Test(new Nest(123, 1), 1);

      expect(test.type).toEqual('B');
      expect((test.value as Enum).type).toEqual('D');
      expect(((test.value as Enum).value as U32).toNumber()).toEqual(123);
    });
  });

  describe('outputs', (): void => {
    describe('toRawType', (): void => {
      it('has a sane output for basic enums', (): void => {
        expect(
          new Enum(['foo', 'bar']).toRawType()
        ).toEqual(JSON.stringify({ _enum: ['foo', 'bar'] }));
      });

      it('has a sane output for typed enums', (): void => {
        expect(
          new Enum({ foo: Text, bar: U32 }).toRawType()
        ).toEqual(JSON.stringify({ _enum: { foo: 'Text', bar: 'u32' } }));
      });
    });

    describe('toHex', (): void => {
      it('has a proper hex representation & length', (): void => {
        const Test = Enum.with({
          A: Text,
          B: U32
        });
        const test = new Test(123, 1);

        expect(test.toHex()).toEqual('0x017b000000');
        expect(test.encodedLength).toEqual(1 + 4);
      });
    });
  });
});
