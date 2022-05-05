import { keys } from 'ts-transformer-keys';
import {KeysOfMethodsOfT} from "../types/utils/Filtering";


/**
 * EXTRACTED_FUNC_KEYS extends KeysOfMethodsOfT<COMPONENT>
 */
export type ComponentFunctionMapT<
    COMPONENT
> = {
    [key in KeysOfMethodsOfT<COMPONENT>]?: COMPONENT[key] extends infer R ? R : never
}

/**
 * Notes:
 * Use ts-transformer-keys to convert interface to array of keys
 * @constructor
 */
export function ExtractFunctionsFrom<
    COMPONENT
>(
    component: COMPONENT,
    extractedFunctionKeys: Array<KeysOfMethodsOfT<COMPONENT>>
): ComponentFunctionMapT<COMPONENT> {
    return extractedFunctionKeys
        .reduce((result, key) => {
            result = component[key]
            return result
    }, {})
}


