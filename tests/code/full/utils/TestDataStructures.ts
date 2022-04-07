export interface ComponentI {
    function1(a: number): string
    function2(a: string): number
    function3(a: string): string
}
export type ComponentIT = ComponentI

export interface IntegrationContainerI {
    component: ComponentI
    function3(a: number): string
    other(a: string): string
}
export type IntegrationContainerIT = IntegrationContainerI

export interface IntegrationContainerII {
    function3(a: string): string
    other(a: string): string
}

export interface IntegratedComponentI {
    function1(a: number): string
    function2(a: string): number
    function3(a: string): string
    other(a: string): string
}

