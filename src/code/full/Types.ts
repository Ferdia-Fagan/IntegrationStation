import {
    FilteredKeysByNotType, FilteredKeysByType,
    KeysOfPropertiesOfT,
    MergeTypeDominatingLeft,
    NotFunction, NoType, Subset, Super, Superset,
    UnionToIntersection,
    WithoutFunctions
} from "./utils/Types";

export namespace ChildComponent_NS {

    export interface ChildComponentLogistics<Cc, k extends keyof Iccc, Iccc> {
        childComponent: Cc
        refName: k // used by parent container
    }

    export type ChildComponent<
        Cc,
        refName extends keyof Iccc,
        Iccc extends IntegrationContainer_NS.ParentContainerOfChildComponent<Cc, refName, Iccc>
    > =
        Cc
    // Record<FilteredKeysByType<Iccc, Cc>, Cc>[FilteredKeysByType<Iccc, Cc>]
    export type ChildComponentT<Iccc> = {
        [key in FilteredKeysByNotType<Iccc, Function>]: Iccc[key] extends infer R ? Iccc[key] : never
    }[FilteredKeysByNotType<Iccc, Function>]

    // export type ChildComponent2<    // TODO: correct this
    //     Iccc,
    // > = UnionToIntersection<{
    //     [refName in keyof Iccc]: Iccc[refName] extends Cc["cc"] ? Cc : never
    // }[keyof Iccc]>

    // export type ChildComponent2<    // TODO: correct this
    //     refname extends keyof Iccc,
    //     Cc extends X<refname,Iccc>,
    //     Iccc,
    // > = UnionToIntersection<{
    //     [refName in keyof Iccc]: Iccc[refName] extends Cc["cc"] ? Cc : never
    // }[keyof Iccc]>

    export type ChildComponentsMapWithinIntergrationContainer<Iccc> = {
        [refname in keyof Iccc]?: Iccc[refname] extends Function ? never : (
            Iccc[refname] extends infer R ? Iccc[refname] : never
        )
    }
        // {
        // [refname in keyof Iccc]?: Iccc[refname] extends infer R & {}? (
        //     NotFunction<Iccc[refname]> extends never ? never : Iccc[refname]   // extends Function ? never : Iccc[refname]
        //     ) : never
    // }

    export type IntegrationContainerChildComponentsArray<Iccc> = {
        [refname in keyof Iccc]?: Iccc[refname] extends Function ? never : (
            Iccc[refname] extends infer R ? Iccc[refname] : never
        )
    }[keyof Iccc]

    export type CoverageByChildComponentsArray<
        Cca extends IntegrationContainerChildComponentsArray<any>
    > = UnionToIntersection<Cca>

    export function isChildComponent<
        Cc,
        CcRefName extends keyof Iccc,
        Iccc extends IntegrationContainer_NS.ParentContainerOfChildComponent<Cc, CcRefName, Iccc>
    > (potentialChildComponent: unknown, ccRefName: CcRefName, iccc: Iccc): potentialChildComponent is ChildComponent<Cc, CcRefName, Iccc> {
        return iccc[ccRefName] == potentialChildComponent
    }


}

export namespace IntegrationContainer_NS {

    export type ParentContainerOfChildComponent<Cc, refName extends keyof Iccc, Iccc> = {
        [k in refName]: Iccc[k] extends Cc ? Cc: never;
    }

    // TODO: I want to include specifying the interface for the Integration Component Container local  controller
    export interface IntegrationChildComponentContainerIntegrationConstructor<
        Cc,
        refName extends keyof Iccc,
        Iccc extends ParentContainerOfChildComponent<Cc, refName, Iccc>,
        Ic extends IntegratedComponent_NS.IntegratedComponent<
            Cc,
            refName,
            Iccc
        >
    > {
        integrateIntegrationChildComponentContainer(cc: ChildComponent_NS.ChildComponent<Cc, refName, Iccc>): Ic
    }

    export type IntegrationChildComponentContainer<
        Cc,
        refName extends keyof Iccc,
        Iccc extends ParentContainerOfChildComponent<Cc, refName, Iccc>
    > =
        Iccc

    export type IntegrationChildComponentPoints<
        Ic,
        Iccc
    > =
        Exclude<Ic, Iccc>

}

export namespace IntegratedComponent_NS {
    export type IntegratedComponent<    // TODO: correct
        Cc,
        refName extends keyof Iccc,
        Iccc
    > = {
        [k in keyof Partial<MergeTypeDominatingLeft<
            Iccc,
            Cc
        >>]: k extends keyof MergeTypeDominatingLeft<
            Iccc,
            Cc
            >? MergeTypeDominatingLeft<
            Iccc,
            Cc
            >[k] : never
    }

    // (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)
    export type IntegrateableComponent<
        Cc extends ChildComponent_NS.ChildComponentT<Iccc>,
        Iccc,
        Ic,
        T = (Pick<
            Cc,
            FilteredKeysByType<
                Cc,
                Function
                >
            >
        &
        Pick<
        Iccc,
        FilteredKeysByType<
        Iccc,
        Function
    >
        > extends Ic ? Ic : never) // ERROR MESSAGE
            // (ChildComponent_NS.CoverageByChildComponentsArray<Cc>
            // &
            // Pick<
            //     Iccc,
            //     FilteredKeysByType<Iccc, Function>
            // >) // extends Ic ? Ic : never// extends Ic ? Ic : never
    > = Ic
            // ChildComponent_NS.CoverageByChildComponentsArray<
        //     Cc
        //     >
        // &
        // Pick<
        //     Iccc,
        //     FilteredKeysByType<
        //         Iccc,
        //         Function
        //         >
        // > extends Ic ? Ic : undefined
        // {
        // [key in keyof (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)]: (
        //     (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)[key] extends infer R ? (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)[key] : never
        // )
    // }

    // export type IntegrateableComponentT<
    //     Cc extends ChildComponent_NS.ChildComponentT<Iccc>,
    //     Iccc,
    //
    // >

        // {
        // [key in key]
    // }
        // Ic extends Partial<(ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)> ? Ic : never
        // {
        // [key in keyof (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)]: (
        //     (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)[key] extends infer R ? (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)[key] : never
        // )
    //     [key in keyof Ic]: (
    //         Ic[key] extends (ChildComponent_NS.CoverageByChildComponentsArray<Cc> & Pick<Iccc,FilteredKeysByType<Iccc, Function>>)[key] ? Ic[key] : never
    //     )
    // }

}

// throwaways???:

// ChildComponent

// interface ChildComponent_DO<T> {
//
// }

// export type ChildComponentsArray<T, refName extends keyof Iccc, Iccc extends ParentContainerOfChildComponent<T, refName, Iccc>> =
//     T extends (infer E)[] ? E : never;
//ChildComponent<infer R,refname, ParentContainerOfChildComponent<infer R, refName, Iccc>>


// export type IntegrationContainerChildComponentsArray<Iccc> = {
//     // [refname in keyof Iccc]?: Iccc[refname] extends infer R & {}? (
//     //     NotFunction<Iccc[refname]> extends never ? never : Iccc[refname]   // extends Function ? never : Iccc[refname]
//     // ) : never
//     [refname in keyof Iccc]?: Iccc[refname] extends Function ? never : (
//         Iccc[refname] extends infer R ? Iccc[refname] : never
//     )
// }[keyof Iccc]

// export type CoverageByComponents<Iccc> = UnionToIntersection<ChildComponentsMap<Iccc>[number]>

// export type CoverageByChildComponentsArray<
//     Cca extends IntegrationContainerChildComponentsArray<any>
// > = UnionToIntersection<Cca>

// export function getCoverageByChildComponentsArray<Iccc, T extends ChildComponentsMap<Iccc>>(childComponentsUnionArray: T): UnionToIntersection<any> {
//     const x = Object.values(childComponentsUnionArray)
//     type a = typeof x[number]
//     const xx: UnionToIntersection<a> = childComponentsUnionArray.reduce((r: Partial<UnionToIntersection<a>>,l: T) => {
//         return {
//             ...r,
//             ...l
//         }
//     },{})
//     return xx
// }


// export function isChildComponent<
//     Cc,
//     CcRefName extends keyof Iccc,
//     Iccc extends ParentContainerOfChildComponent<Cc, CcRefName, Iccc>
// > (potentialChildComponent: unknown, ccRefName: CcRefName, iccc: unknown): potentialChildComponent is ChildComponent<Cc, CcRefName, Iccc> {
//     return iccc[ccRefName] == potentialChildComponent
// }
//
// export type ParentContainerOfChildComponent<Cc, refName extends keyof Iccc, Iccc> = {
//     [k in refName]: Iccc[k] extends Cc ? Cc: never;
// }
// Integration Container :

// TODO: I want to include specifying the interface for the Integration Component Container local  controller

// export interface IntegrationChildComponentContainerIntegrationConstructor<
//     Cc,
//     refName extends keyof Iccc,
//     Iccc extends ParentContainerOfChildComponent<Cc, refName, Iccc>,
//     Ic extends IntegratedComponent<
//         Cc,
//         refName,
//         Iccc
//     >
// > {
//     integrateIntegrationChildComponentContainer(cc: ChildComponent<Cc, refName, Iccc>): Ic
// }

// export type IntegrationChildComponentContainer<
//     Cc,
//     refName extends keyof Iccc,
//     Iccc extends ParentContainerOfChildComponent<Cc, refName, Iccc>
// > =
//     Iccc

// translation :
// export type IntegrationChildComponentPoints<
//     Ic,
//     Iccc
// > =
//     Exclude<Ic, Iccc>

// output :
// export type IntegratedComponent<
//     Cc,
//     refName extends keyof Iccc,
//     Iccc
// > = {
//     [k in keyof (Cc & Iccc)]: k
// }
// export type IntegratedComponent<
//     Cc,
//     refName extends keyof Iccc,
//     Iccc
// > = {
//     [k in keyof Partial<MergeTypeDominatingLeft<
//         Iccc,
//         Cc
//     >>]: k extends keyof MergeTypeDominatingLeft<
//         Iccc,
//         Cc
//     >? MergeTypeDominatingLeft<
//         Iccc,
//         Cc
//     >[k] : never
// }

    // {
    // [k in keyof ({ Iccc, ...Cc })]: k
// }
// > = Required<IntegrationChildComponentPoints<Cc, Iccc>>

// export interface ComponentI {
//     function1(a: number): string
//     function2(a: string): number
//     function3(a: string): string
// }
// export type ComponentIT = ComponentI
//
// export interface IntegrationContainerI {
//     component: ComponentI
//     function3(a: number): string
//     other(a: string): string
// }
// export type IntegrationContainerIT = IntegrationContainerI

