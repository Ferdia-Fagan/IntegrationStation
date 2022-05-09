export declare type FilteredKeysByType<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export declare type FilteredKeysByNotType<T, U> = {
    [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];
export declare type KeysOfPropertiesOfT<T> = FilteredKeysByNotType<T, Function>;
export declare type KeysOfMethodsOfT<T> = FilteredKeysByType<T, Function>;
export declare type KeysOfComponentsOfT<T> = FilteredKeysByNotType<T, Function>;
export declare type TWithOnlyProperties<T> = Pick<T, KeysOfPropertiesOfT<T>>;
export declare type SubOfTWithOnlyProperties<T> = Partial<TWithOnlyProperties<T>>;
export declare type TWithOnlyMethods<T> = Pick<T, KeysOfMethodsOfT<T>>;
export declare type SubOfTWithOnlyMethods<T> = Partial<TWithOnlyMethods<T>>;
