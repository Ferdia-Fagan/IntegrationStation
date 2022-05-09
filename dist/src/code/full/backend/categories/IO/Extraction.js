/**
 * Notes:
 * Use ts-transformer-keys to convert interface to array of keys
 * @constructor
 */
export function ExtractFunctionsFrom(component, extractedFunctionKeys) {
    return extractedFunctionKeys
        .reduce((result, key) => {
        result = component[key];
        return result;
    }, {});
}
//# sourceMappingURL=Extraction.js.map