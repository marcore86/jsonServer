/*!
* © 2018 Walgreens Boots Alliance, Inc.
*/
import { date, lorem, random } from 'faker'

import { Level } from '@models/product-parameters/models/level'
import { LocationAssociationTO } from '@models/product-parameters/models/locationAssociationTO'
import { ProductAssociationTO } from '@models/product-parameters/models/productAssociationTO'
import { ProductTemplateListTO } from '@models/product-parameters/models/productTemplateListTO'
import { ProductTemplateTO } from '@models/product-parameters/models/productTemplateTO'
import { ReplenishmentParameterTO } from '@models/product-parameters/models/replenishmentParameterTO'

interface Data {
  productParameters: ProductTemplateListTO[]
}

// tslint:disable-next-line:no-big-function
export default function (length = 10) {
  const data: Data = {
    productParameters: [],
  }
  for (let i = 1; i <= length; i++) {
    data.productParameters.push({
      elementsNumber: 0,
      productTemplates: [
        {
          code: 'string',
          createdDate: date.past(),
          lastModifiedDate: date.past(),
          level: ProductTemplateTO.LevelEnum.STORE,
          locationAssociation: {
            code: random.number({ min: 10, max: 10 })
              .toString(),
            name: lorem.words(),
            serviceResult: {
              levels: [
                Level.INFO,
              ],
              resultMessages: [
                {
                  code: 'string',
                  level: {},
                  messageDefault: 'string',
                },
              ],
            },
            type: LocationAssociationTO.TypeEnum.STORE,
          },
          opolParameters: {
            excludeDemand: {
              parameterType: ReplenishmentParameterTO.ParameterTypeEnum.CUSTOM,
              serviceResult: {
                levels: [
                  Level.INFO,
                ],
                resultMessages: [
                  {
                    code: 'string',
                    level: {},
                    messageDefault: 'string',
                  },
                ],
              },
              valueBoolean: true,
              valueInteger: 0,
              valueString: 'string',
            },
            excludedDemandPeriodEndDate: {
              parameterType: ReplenishmentParameterTO.ParameterTypeEnum.CUSTOM,
              serviceResult: {
                levels: [
                  Level.INFO,
                ],
                resultMessages: [
                  {
                    code: 'string',
                    level: {},
                    messageDefault: 'string',
                  },
                ],
              },
              valueBoolean: true,
              valueInteger: 0,
              valueString: 'string',
            },
            excludedDemandPeriodStartDate: {
              parameterType: ReplenishmentParameterTO.ParameterTypeEnum.CUSTOM,
              serviceResult: {
                levels: [
                  Level.INFO,
                ],
                resultMessages: [
                  {
                    code: 'string',
                    level: {},
                    messageDefault: 'string',
                  },
                ],
              },
              valueBoolean: true,
              valueInteger: 0,
              valueString: 'string',
            },
            serviceResult: {
              levels: [
                Level.INFO,
              ],
              resultMessages: [
                {
                  code: 'string',
                  level: {},
                  messageDefault: 'string',
                },
              ],
            },
          },
          orderingParameters: {
            allowManualOrders: {
              parameterType: ReplenishmentParameterTO.ParameterTypeEnum.CUSTOM,
              serviceResult: {
                levels: [
                  Level.INFO,
                ],
                resultMessages: [
                  {
                    code: 'string',
                    level: {},
                    messageDefault: 'string',
                  },
                ],
              },
              valueBoolean: true,
              valueInteger: 0,
              valueString: 'string',
            },
            serviceResult: {
              levels: [
                Level.INFO,
              ],
              resultMessages: [
                {
                  code: 'string',
                  level: {},
                  messageDefault: 'string',
                },
              ],
            },
          },
          productAssociation: {
            code: random.number({ min: 1000000000, max: 9999999999 })
            .toString(),
            name: lorem.words(),
            serviceResult: {
              levels: [
                Level.INFO,
              ],
              resultMessages: [
                {
                  code: 'string',
                  level: {},
                  messageDefault: 'string',
                },
              ],
            },
            type: ProductAssociationTO.TypeEnum.PAG,
          },
          rangingParameters: {
            rangingParameter: {
              parameterType: ReplenishmentParameterTO.ParameterTypeEnum.CUSTOM,
              serviceResult: {
                levels: [
                  Level.INFO,
                ],
                resultMessages: [
                  {
                    code: 'string',
                    level: {},
                    messageDefault: 'string',
                  },
                ],
              },
              valueBoolean: true,
              valueInteger: 0,
              valueString: 'string',
            },
            serviceResult: {
              levels: [
                Level.INFO,
              ],
              resultMessages: [
                {
                  code: 'string',
                  level: {},
                  messageDefault: 'string',
                },
              ],
            },
          },
          serviceResult: {
            levels: [
              Level.INFO,
            ],
            resultMessages: [
              {
                code: 'string',
                level: {},
                messageDefault: 'string',
              },
            ],
          },
          startDate: date.past()
            .toISOString(),
          templateType: ProductTemplateTO.TemplateTypeEnum.ORDERING,
        },
      ],
      serviceResult: {
        levels: [
          Level.INFO,
        ],
        resultMessages: [
          {
            code: 'string',
            level: {},
            messageDefault: 'string',
          },
        ],
      },
    })
  }

  return data
}
