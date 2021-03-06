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
import { LocationIdentifierTO } from './locationIdentifierTO';
import { ServiceResult } from './serviceResult';


/**
 * A list of values
 */
export interface ProductTemplateBulkListTO {
    /**
     * A list of PAG code
     */
    pagCodeList?: Array<string>;
    locationList?: Array<LocationIdentifierTO>;
    /**
     * A list of location Group Code
     */
    locationGroupList?: Array<string>;
    /**
     * A list of product Group Code
     */
    productGroupList?: Array<string>;
    templateTypeList?: Array<ProductTemplateBulkListTO.TemplateTypeListEnum>;
    serviceResult?: ServiceResult;
}
export namespace ProductTemplateBulkListTO {
    export type TemplateTypeListEnum = 'ORDERING' | 'RANGING' | 'OPOL';
    export const TemplateTypeListEnum = {
        ORDERING: 'ORDERING' as TemplateTypeListEnum,
        RANGING: 'RANGING' as TemplateTypeListEnum,
        OPOL: 'OPOL' as TemplateTypeListEnum
    }
}
