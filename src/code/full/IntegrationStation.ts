
// single:

// import {
//     ChildComponent_NS,
//     IntegratedComponent_NS,
//     IntegrationChildComponentContainer, IntegrationChildComponentContainerIntegrationConstructor,
//     ParentContainerOfChildComponent
// } from "./Types";
//
// function integrateIntegrationChildComponentContainer<
//     Cc,
//     refName extends keyof Iccc,
//     Iccc extends ParentContainerOfChildComponent<Cc, refName, Iccc>,
//     Ic extends IntegratedComponent_NS<
//         Cc,
//         refName,
//         Iccc
//     >
// >(
//     cc: ChildComponent_NS<Cc, refName, Iccc>,
//     iccc: IntegrationChildComponentContainer<Cc, refName, Iccc> & IntegrationChildComponentContainerIntegrationConstructor<Cc, refName, Iccc, Ic>
// ): Ic {
//     return iccc.integrateIntegrationChildComponentContainer(cc)
// }




// merge multiple



