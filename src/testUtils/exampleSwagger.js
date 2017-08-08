export default {
  'swagger': '2.0',
  'info': {
    'version': 'v1',
    'title': 'Demo API',
    'description': 'Description for the api',
    'contact': {
      'name': 'Ron Miller',
      'email': 'Ron.Miller@nordstrom.com'
    }
  },
  'paths': {
    '/products/{id}': {
      'get': {
        'tags': [
          'Products'
        ],
        'summary': 'This endpoint returns the product information for an input product id',
        'operationId': 'ProductsByIdGet',
        'consumes': [],
        'produces': [
          'application/json'
        ],
        'parameters': [{
          'name': 'id',
          'in': 'path',
          'description': 'Product Id',
          'required': true,
          'type': 'integer',
          'default': 4443291,
          'format': 'int32'
        },
        {
          'name': 'availableskus',
          'in': 'query',
          'description': 'Return only available skus',
          'required': false,
          'default': true,
          'type': 'bool'
        },
        {
          'name': 'NordApiVersion',
          'in': 'header',
          'description': 'Default version of API is 2.1',
          'required': true,
          'default': '2.1',
          'type': 'string'
        }
        ],
        'responses': {
          '200': {
            'description': 'Success',
            'schema': {
              '$ref': '#/definitions/ProductRootObject'
            },
            'examples': {
              'application/json': {
                'product': {
                  'rmsStyleGroup': '123',
                  'webStyleID': 4443291,
                  'baseStyleID': 4443291,
                  'name': null,
                  'plainName': null,
                  'description': 'Washed Slub Knit Polo',
                  'gender': {
                    'id': 0,
                    'code': 'Male',
                    'name': null
                  },
                  'saleFlag': 'Sale',
                  'isBeauty': false,
                  'isNew': false,
                  'isUMAP': false,
                  'isPickUpStoreEligible': false,
                  'isStyleRestrictedFromIntlShipping': false,
                  'ingredients': null,
                  'primaryCategory': null,
                  'holidayThumbnailIndicator': true,
                  'isLive': true,
                  'isReady': false,
                  'isPublished': true
                },
                'skus': [{
                  'id': 0,
                  'rmsSkuID': null,
                  'color': {
                    'id': 0,
                    'name': null,
                    'displaySuffix': null,
                    'displayRank': 0,
                    'code': 'Red',
                    'useRgb': 'false',
                    'swatchPhotoGroupId': 0
                  },
                  'priceFilterFormattedValue': null,
                  'sizeCode': null,
                  'isPublished': false,
                  'isAvailable': false,
                  'isFCAvailable': false,
                  'fulfillmentChannelId': 0,
                  'isBackOrder': false,
                  'upc': null
                }],
                'availability': {
                  'isFCAvailable': true,
                  'isAvailable': true
                }
              }
            }
          },
          '404': {
            'description': 'Could not find the product',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 404
              }
            }
          },
          '500': {
            'description': 'There was an unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 500
              }
            }
          }
        }
      },
      'put': {
        'tags': [
          'Products'
        ],
        'operationId': 'ProductsByIdPut',
        'consumes': [],
        'produces': [
          'application/json'
        ],
        'parameters': [{
          'name': 'id',
          'in': 'path',
          'required': true,
          'type': 'integer',
          'format': 'int32',
          'default': 4443291,
          'description': 'Product Id to update'
        }],
        'responses': {
          '204': {
            'description': 'Success',
            'schema': {
            }
          },
          '404': {
            'description': 'Could not find the product',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 404
              }
            }
          },
          '500': {
            'description': 'There was an unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 500
              }
            }
          }
        }
      },
      'delete': {
        'tags': [
          'Products'
        ],
        'operationId': 'ProductsByIdDelete',
        'consumes': [],
        'produces': [
          'application/json'
        ],
        'parameters': [{
          'name': 'id',
          'in': 'path',
          'required': true,
          'type': 'integer',
          'format': 'int32',
          'description': 'Product Id to delete',
          'default': 4443291
        }],
        'responses': {
          '204': {
            'description': 'Success',
            'schema': {
            }
          },
          '404': {
            'description': 'Could not find the product',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 404
              }
            }
          },
          '500': {
            'description': 'There was an unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 500
              }
            }
          }
        }
      }
    },
    '/products': {
      'post': {
        'tags': [
          'Products'
        ],
        'operationId': 'ProductsPost',
        'consumes': [
          'application/json',
          'text/json',
          'application/json-patch+json'
        ],
        'produces': [
          'text/plain',
          'application/json',
          'text/json'
        ],
        'parameters': [{
          'name': 'value',
          'description': 'Request object for updating the product',
          'in': 'body',
          'required': false,
          'schema': {
            '$ref': '#/definitions/ProductUpdateRootObject'
          }
        }],
        'responses': {
          '204': {
            'description': 'Success',
            'schema': {
            }
          },
          '404': {
            'description': 'Could not find the product',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 404
              }
            }
          },
          '500': {
            'description': 'There was an unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorResponse'
            },
            'examples': {
              'application/json': {
                'ErrorCode': 500
              }
            }
          }
        }
      }
    }
  },
  'definitions': {
    'SomeObject': {
      'type': 'object',
      'properties': {
        'propOne': {
          '$ref': '#/definitions/propOne'
        },
        'propArray': {
          'type': 'array',
          'items': {
            '$ref': '#/definitions/something'
          }
        }
      }
    }
  }
}
