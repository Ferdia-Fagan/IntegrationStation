

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

