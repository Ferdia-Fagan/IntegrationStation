/**
 * L_T & R_T with conflicts choosing L_T properties instead
 */
export type MergeTypeDominatingLeft<L_T, R_T> =
    L_T &
    Omit<R_T, keyof L_T>


export type ErrorBrand<Err extends string> = Readonly<{
    [key in Err]: void;
}>;
export type Filter<Obj extends Object, ValueType> = {
    [Key in keyof Obj as ValueType extends Obj[Key] ? Key : never]
    : Obj[Key]
}
type TypePropertyIsNotAllowed<error_message extends string> =
    error_message;
export type NoType<T, error_message extends string> = T extends { type: any }
    ? TypePropertyIsNotAllowed<error_message>
    : T;
export type AType<T, U> = T extends U ? U extends T ? T : [T, U] : [T, U]

export type Subset<T extends U, U> = U
export type Superset<T, U extends T> = T

export type Super<T> = T extends infer U ? U : never

export type NotFunction<T> = T extends Function ? never : T

