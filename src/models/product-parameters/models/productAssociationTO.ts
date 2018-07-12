/**
 * Replenishment Parameters for Product Template API
 * API for Replenishment Parameters functional module related to Product Template You can find out more about Replenishment Parameters Product Template API on related [API Definition](https://oneit.wba.com/confluence/display/RXRNWAPI/Product+Template+-+API+Definition). 
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ServiceResult } from './serviceResult';


export interface ProductAssociationTO {
    /**
     * It is the product association type
     */
    type: ProductAssociationTO.TypeEnum;
    /**
     * For PAG is PagName, for PRODUCT_GROUP is the ProductGroup Name
     */
    name: string;
    /**
     * For PAG is PagCode, for PRODUCT_GROUP is the ProductGroup Number
     */
    code: string;
    serviceResult?: ServiceResult;
}
export namespace ProductAssociationTO {
    export type TypeEnum = 'PAG' | 'PRODUCT_GROUP';
    export const TypeEnum = {
        PAG: 'PAG' as TypeEnum,
        PRODUCTGROUP: 'PRODUCT_GROUP' as TypeEnum
    }
}