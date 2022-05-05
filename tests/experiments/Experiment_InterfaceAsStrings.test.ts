import {keys} from "ts-transformer-keys";

interface SampleInterface {
    func1(): number
    func2(): number
    func3(): string
}

describe('sample interface', () => {
    it('fds', () => {
        const inst = keys<SampleInterface>()

        console.log()
    })
})



