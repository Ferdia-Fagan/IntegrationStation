
export type DoesLTypeExtendsRType<L, R extends keyof L> = Omit<L, keyof Pick<L, R>> extends never ? true : false
    // Exclude<L, R> extends never ? true : false
    // Exclude<L, R> extends never ? true : false

