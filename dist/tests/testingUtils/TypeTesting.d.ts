export declare type DoesLTypeExtendsRType<L, R> = R extends L ? true : false;
export declare type AssertTypeLIsWithinR<L extends Partial<R>, R> = Required<R> extends Required<L> ? true : false;
export declare type Exact<A, B> = A extends B ? B extends A ? A : never : never;
export declare type IsNever<T> = [T] extends [never] ? true : false;
export declare type TypesAreTheSame<L, R> = Exclude<L, R> extends never ? Exclude<R, L> extends never ? true : false : false;
export declare type IsTWithinUnion<T, U> = T extends U ? true : false;
