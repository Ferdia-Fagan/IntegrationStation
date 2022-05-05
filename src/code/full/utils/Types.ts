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
export type KeysOfPropertiesOfT<T> = FilteredKeysByNotType<T, Function>
export type KeysOfMethodsOfT<T> = FilteredKeysByType<T, Function>

export type KeysOfComponentsOfT<T> = FilteredKeysByNotType<T, Function>

export type TWithOnlyProperties<T> = Pick<T, KeysOfPropertiesOfT<T>>
export type SubOfTWithOnlyProperties<T> = Partial<TWithOnlyProperties<T>>
export type TWithOnlyMethods<T> = Pick<T, KeysOfMethodsOfT<T>>
export type SubOfTWithOnlyMethods<T> = Partial<TWithOnlyMethods<T>>

// export type KeyPropertiesOfT<T> = FilteredKeysByNotType<T, Function>
// export type MethodPropertiesOfT<T> = FilteredKeysByType<T, Function>


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

export type AType<T, U> = T extends U ? U extends T ? T : [T, U] : [T, U]

export type TypesAreTheSame<L, R> =
    Exclude<L, R> extends never ?
        Exclude<R, L> extends never ? true : false
    : false

export type IsTWithinUnion<T, U> = T extends U ? true : false

// export type WithoutFunctions<T> = {
//     [key in keyof T]: T[key] extends Function ? never : T[key]
// }[keyof T]

export interface Constructor<T> {
    new (...args: any[]): T;
}

export type Exact<A, B> = A extends B
    ? B extends A
        ? A
        : never
    : never