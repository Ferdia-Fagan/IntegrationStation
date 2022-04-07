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

// export type WithoutFunctions<T> = {
//     [key in keyof T]: T[key] extends Function ? never : T[key]
// }[keyof T]