let x = 'hello' as const;

let x1 = 'hello';

const sizes = ['mini'] as const;

const daysOfTheWeek: [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

type A = { a: string } & { a?: string };

const aa: A = {} as A;
aa.a;

type Pick2<T, U> = U extends keyof T ? { [k in U]: T[k] } : never;

type TagColors = {
  color: string;
  bgColor: string;
  borderColor: string;
};

type xx = Pick2<TagColors, 'color'>;

type Exclude2<T, U> = keyof T extends keyof U ? never : { [k in keyof T]: T[k] };

type T1 = Exclude2<'a' | 'b' | 'c', 'a' | 'b'>;

type T2 = Exclude<{ a: number; b: number }, { a: number }>;

type Omit2<T, U extends keyof T> = Pick2<T, Exclude<keyof T, U>>;

type T3 = Omit2<{ a: string; b: string }, 'a'>;


function pick<T extends object, U extends keyof T>(o: T, keys: U[]): {[key in U]: T[key]} {
  return keys.reduce((memo, key) => {
    memo[key] = o[key];
    return memo;
  }, {} as {[key in U]: T[key]});
}

pick({a: 1, b: 2}, ['a']);

function pick2<T>(o: T) {
  if(typeof o === 'number') {
    return o;
  }

  return o;
}

const result = pick2<string>('abc');

type Y1 = {a?: string};
type Y2 = {a: string};

type Y3 = Y1 & Y2;
