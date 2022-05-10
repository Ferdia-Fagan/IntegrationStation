
// export const pipe = (...fns: t<T>) => (x) => fns.reduce((v, f) => f(v), x);
export function Pipe<T>(
    ...funcs: ((chainInputFromPrevOutput: T) => T)[]
) {
    return (input: T) => funcs.reduce(
        (chainInput, func) => func(chainInput),
        input
    )
}

export function

