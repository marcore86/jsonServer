/**
 * Replenishment Parameters for Location API
 * API for Replenishment Parameters functional module related to Location Template You can find out more about Replenishment Parameters Location Template API on related [API Definition](https://oneit.wba.com/confluence/display/RXRNWAPI/Location+Template+-+API+Definition) 
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ServiceResult } from './serviceResult';


export interface ProductExclusionAttributeTO {
    /**
     * Resource access path
     */
    path: string;
    /**
     * Operation type
     */
    operation: ProductExclusionAttributeTO.OperationEnum;
    /**
     * Property name
     */
    name?: string;
    /**
     * Property value
     */
    value?: string;
    serviceResult?: ServiceResult;
}
export namespace ProductExclusionAttributeTO {
    export type OperationEnum = 'ADD' | 'REMOVE';
    export const OperationEnum = {
        ADD: 'ADD' as OperationEnum,
        REMOVE: 'REMOVE' as OperationEnum
    }
}