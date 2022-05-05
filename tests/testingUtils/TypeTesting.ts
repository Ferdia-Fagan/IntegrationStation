
export type DoesLTypeExtendsRType<L, R extends keyof L> = Omit<L, keyof Pick<L, R>> extends never ? true : false
    // Exclude<L, R> extends never ? true : false
    // Exclude<L, R> extends never ? true : false

type RequiredFieldsOnly<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

export type AssertTypeLIsWithinR<
    L extends Partial<R>, R
> = Required<R> extends Required<L> ? true : false
    //{
    // [key in keyof L as L[key] extends R[key] ? key : never]: L[key]
// }
    // Extract<L, L | R> extends never ? false : true

interface L {
    func1(): number
    func2(): number
}

interface R {
    func1(): number
    func2(): number
    func3(): number
}

type a = AssertTypeLIsWithinR<L, R>
type ab = AssertTypeLIsWithinR<L,R>

interface NotL {
    func1(): number
    notFunc(): number
}
type b = AssertTypeLIsWithinR<NotL, R>
type bb = AssertTypeLIsWithinR<NotL,R>


type y = NotL | R
type x = Extract<NotL, NotL | R>

const xx: x = {
    func1(): number {
        return 0;
    }, notFunc(): number {
        return 0;
    }

}

// type x = Exclude<
//     L,
// > Pick<R, keyof L>
