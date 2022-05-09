import { KeysOfMethodsOfT } from "../types/utils/Filtering";
/**
 * EXTRACTED_FUNC_KEYS extends KeysOfMethodsOfT<COMPONENT>
 */
export declare type ComponentFunctionMapT<COMPONENT> = {
    [key in KeysOfMethodsOfT<COMPONENT>]?: COMPONENT[key] extends infer R ? R : never;
};
/**
 * Notes:
 * Use ts-transformer-keys to convert interface to array of keys
 * @constructor
 */
export declare function ExtractFunctionsFrom<COMPONENT>(component: COMPONENT, extractedFunctionKeys: Array<KeysOfMethodsOfT<COMPONENT>>): ComponentFunctionMapT<COMPONENT>;
