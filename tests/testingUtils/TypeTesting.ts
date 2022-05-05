
export type DoesLTypeExtendsRType<L, R extends keyof L> = Omit<L, keyof Pick<L, R>> extends never ? true : false
    // Exclude<L, R> extends never ? true : false
    // Exclude<L, R> extends never ? true : false

type RequiredFieldsOnly<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

export type AssertTypeLIsWithinR<
    L extends Partial<R>, R
> = Required<R> extends Required<L> ? true : false

export type Exact<A, B> = A extends B
    ? B extends A
        ? A
        : never
    : never

// export type WithoutFunctions<T> = {
//     [key in keyof T]: T[key] extends Function ? never : T[key]
// }[keyof T]

export type IsNever<T> = [T] extends [never] ? true : false
export type TypesAreTheSame<L, R> =
    Exclude<L, R> extends never ?
        Exclude<R, L> extends never ? true : false
        : false
export type IsTWithinUnion<T, U> = T extends U ? true : false