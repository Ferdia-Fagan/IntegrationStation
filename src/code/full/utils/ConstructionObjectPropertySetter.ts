import {TWithOnlyMethods, TWithOnlyProperties} from "./Types";

export declare const PropertyOfT: unique symbol
export type PropertyOfT<T> = {
    [propertyKeyOfT in keyof TWithOnlyProperties<T>]: T[propertyKeyOfT] extends infer R ? R : never
}

export declare const MethodOfT: unique symbol
export type MethodOfT<T> = {
    [methodKeyOfT in keyof TWithOnlyMethods<T>]: T[methodKeyOfT] extends infer R ? T[methodKeyOfT] : never
}

export type MethodOrPropertyOfT<T> = {
    [key in keyof T]: T[key] extends infer R ? T[key] : never
}

export interface ConstructorWithSelfAssignments<
    T,
    SelfAssignments extends PropertyOfT<T> | MethodOfT<T> | MethodOrPropertyOfT<T>
> {
    new (objProperties: SelfAssignments): T;
}

export abstract class ConstructorWithPropertiesA<
    T,
     SelfAssignments extends PropertyOfT<T> | MethodOfT<T> | MethodOrPropertyOfT<T>
> {
    constructor(objSelfAssignments: SelfAssignments) {
        Object.assign(this, objSelfAssignments)
    }
}

