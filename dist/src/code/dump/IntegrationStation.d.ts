export declare function IntegrateWithComponent<GREATER_INTEGRATION, // extends (COMPONENT & INTEGRATION)
INTEGRATION, COMPONENT extends IntegratedComponent<GREATER_INTEGRATION, INTEGRATION>>(component: COMPONENT, integration: INTEGRATION): GREATER_INTEGRATION;
export declare function IntegrateHostWithComponent<INTEGRATION, HOST, // extends (COMPONENT & INTEGRATION)
COMPONENT extends IntegratedComponent<HOST, INTEGRATION>>(component: COMPONENT, integrationProcedureDetails: IntegrationProcedureDetails<COMPONENT>): HOST;
interface IntegrationProcedureDetails<COMPONENT> {
    funcsTakingOver: Set<string>;
    hostInMimicking: COMPONENT;
}
export declare type IntegratedComponent<GREATER_INTEGRATED, PARENT> = Exclude<GREATER_INTEGRATED, PARENT>;
export {};
