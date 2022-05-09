import { FilteredKeysByNotType } from "./Filtering";
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
export declare type WithoutFunctions<T> = {
    [key in FilteredKeysByNotType<T, Function>]: T[key];
};
