/**
 * L_T & R_T with conflicts choosing L_T properties instead
 */
export declare type MergeTypeDominatingLeft<L_T, R_T> = L_T & Omit<R_T, keyof L_T>;
export declare type ErrorBrand<Err extends string> = Readonly<{
    [key in Err]: void;
}>;
export declare type Filter<Obj extends Object, ValueType> = {
    [Key in keyof Obj as ValueType extends Obj[Key] ? Key : never]: Obj[Key];
};
declare type TypePropertyIsNotAllowed<error_message extends string> = error_message;
export declare type NoType<T, error_message extends string> = T extends {
    type: any;
} ? TypePropertyIsNotAllowed<error_message> : T;
export declare type AType<T, U> = T extends U ? U extends T ? T : [T, U] : [T, U];
export declare type Subset<T extends U, U> = U;
export declare type Superset<T, U extends T> = T;
export declare type Super<T> = T extends infer U ? U : never;
export declare type NotFunction<T> = T extends Function ? never : T;
export {};
