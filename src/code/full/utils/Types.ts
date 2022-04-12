/**
 * L_T & R_T with conflicts choosing L_T properties instead
 */
export type MergeTypeDominatingLeft<L_T, R_T> =
    L_T &
    Omit<R_T, keyof L_T>

export type Subset<T extends U, U> = U
export type Superset<T, U extends T> = T

export type Super<T> = T extends infer U ? U : never

export type NotFunction<T> = T extends Function ? never : T

export type UnionToIntersection<U> =
    (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never

export type FilteredKeysByType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T];
export type FilteredKeysByNotType<T, U> = { [P in keyof T]: T[P] extends U ? never : P }[keyof T];
export type KeyThatDoNotMapToFunction<T> = FilteredKeysByNotType<T, Function>

export type WithoutFunctions<T> = {
    [key in FilteredKeysByNotType<T, Function>]: T[key]
}

export type ErrorBrand<Err extends string> = Readonly<{
    [key in Err]: void;
}>;

export type Filter<Obj extends Object, ValueType> = {
    [Key in keyof Obj
        as ValueType extends Obj[Key] ? Key : never]
    : Obj[Key]
}

// export type IsNever<T> = [T] extends [never] ? true : false;

type TypePropertyIsNotAllowed<error_message extends string> =
    error_message;
export type NoType<T, error_message extends string> = T extends { type: any }
    ? TypePropertyIsNotAllowed<error_message>
    : T;

export type IsNever<T> = [T] extends [never] ? true : false
type x = IsNever<never>
type y = IsNever<{ name: "Alexey" }>
// export type WithoutFunctions<T> = {
//     [key in keyof T]: T[key] extends Function ? never : T[key]
// }[keyof T]