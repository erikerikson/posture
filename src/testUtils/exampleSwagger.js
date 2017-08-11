export default {
  'swagger': '2.0',
  'infoX': {
    'version': '1.0.0',

    'title': 'Blog Manager',

    'description': 'API for managing user blogs. \n* Posting new blogs\n* Get user profile by bloggerid\n'
  },
  'tags': [
    {
      'name': 'blog',
      'description': 'blog Service'
    }
  ],
  'produces': [],
  'consumes': [],
  'schemes': [
    'https'
  ],
  'paths': {
    '/blog': {
      'get': {
        'tags': [
          'blog'
        ],
        'description': 'Get blogs by Bloger id\n',

        'summary': 'THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG. THIS NAME IS WAY TO LONG.',
        'consumes': [
          'text/html'
        ],
        'produces': [
          'text/html'
        ],
        'parameters': [
          {
            'name': 'blogid',
            'in': 'query',
            'description': 'Get all blogs for supplied blogid',
            'required': true,
            'type': 'number',
            'x-exampleX': 666
          },
          {
            'name': 'pagesize',
            'in': 'query',
            'description': 'Specifies the page size (# of blogs) for each call',
            'required': false,
            'type': 'integer'
          },
          {
            'name': 'page',
            'in': 'query',
            'description': 'Specifies the page number.',
            'required': false,
            'type': 'integer'
          }
        ],
        'responses': {
          '200': {
            'description': 'Successful response',
            'schema': {
              '$ref': '#/definitions/blogdetails'
            }
          },
          'default': {
            '$ref': '#/responses/getblogerror'
          }
        }
      },
      'post': {
        'tags': [
          'blog'
        ],
        'operationId': 'postblog',
        'description': 'Create a new blog\n',

        'summary': 'A friendly name for this operation. Used for navigation.',
        'consumes': [
          'application/json'
        ],
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'preview',
            'in': 'query',
            'description': 'preview of posting the blog',
            'required': false,
            'type': 'boolean'
          },
          {
            'name': 'blog',
            'in': 'body',
            'description': 'blog object',
            'required': true,
            'schema': {
              '$ref': '#/definitions/submitblog'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Successful response',
            'schema': {
              '$ref': '#/definitions/blog'
            }
          },
          'default': {
            '$ref': '#/responses/postblogerror'
          }
        }
      }
    },
    '/profile': {
      'get': {
        'tags': [
          'User Profile'
        ],
        'description': 'Get user profile by blogger id\n',

        'summary': 'A friendly name for this operation. Used for navigation.',
        'consumes': [
          'application/json'
        ],
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'bloggerid',
            'in': 'query',
            'description': 'Get user profile for supplied blogger id',
            'required': true,
            'type': 'string',
            'x-example': 'mybloggerid'
          }
        ],
        'responses': {
          '200': {
            'description': 'Successful response',
            'schema': {
              '$ref': '#/definitions/userprofile'
            }
          },
          'default': {
            '$ref': '#/responses/userprofileerror'
          }
        }
      }
    }
  },
  'responses': {
    'postblogerror': {
      'description': 'Unexpected error. [See http status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)',
      'schema': {
        '$ref': '#/definitions/error'
      }
    },
    'getblogerror': {
      'description': 'Unexpected error. [See http status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)',
      'schema': {
        '$ref': '#/definitions/getblogerror'
      }
    },
    'userprofileerror': {
      'description': 'Unexpected error. [See http status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)',
      'schema': {
        '$ref': '#/definitions/profileerror'
      }
    }
  },
  'definitions': {
    'userprofile': {
      'title': 'userprofile',
      'type': 'object',
      'required': [
        'usernickname'
      ],
      'properties': {
        'usernickname': {
          'type': 'string',
          'description': 'User Nickname'
        },
        'email': {
          'type': 'string',
          'description': 'User Email id'
        }
      }
    },
    'blogsummary': {
      'title': 'blogsummary',
      'type': 'object',
      'required': [
        'totalcount'
      ],
      'properties': {
        'totalcount': {
          'type': 'integer',
          'description': 'Total records',
          'minimum': 1
        }
      }
    },
    'blogdetails': {
      'title': 'blogdetails',
      'type': 'object',
      'required': [
        'page',
        'pagesize',
        'blogsummary',
        'blogs'
      ],
      'properties': {
        'page': {
          'type': 'integer',
          'description': 'Page Number',
          'minimum': 0
        },
        'pagesize': {
          'type': 'integer',
          'description': 'Number of blogs included in page',
          'minimum': 0
        },
        'blogsummary': {
          '$ref': '#/definitions/blogsummary'
        },
        'blogs': {
          'type': 'array',
          'items': {
            '$ref': '#/definitions/blogs'
          }
        }
      }
    },
    'submitblog': {
      'required': [
        'blog'
      ],
      'properties': {
        'blog': {
          '$ref': '#/definitions/blog'
        }
      }
    },
    'blog': {
      'title': 'blog',
      'type': 'object',
      'required': [
        'title',
        'usernickname',
        'userid'
      ],
      'properties': {
        'title': {
          'type': 'string',
          'description': 'blog Title',
          'default': 'title'
        },
        'usernickname': {
          'type': 'string',
          'description': 'user nickname. user nickname should contains only alphanumeric characters',
          'pattern': '[A-Za-z0-9]{4,25}'
        },
        'userid': {
          'type': 'string',
          'description': 'user id/blogger id',
          'default': 'd02663d608fee0655e3f317d8499d5ae646174653d3230313631313239267573657269643d7468697334394973415465737455736572266d61786167653d3336353030'
        }
      }
    },
    'blogs': {
      'title': 'blog',
      'type': 'object',
      'required': [
        'title',
        'usernickname'
      ],
      'properties': {
        'title': {
          'type': 'string',
          'description': 'blog Title',
          'default': 'title'
        },
        'usernickname': {
          'type': 'string',
          'description': 'user nickname. user nickname should contains only alphanumeric characters',
          'pattern': '[A-Za-z0-9]{4,25}'
        }
      }
    },
    'profileerror': {
      'title': 'Error',
      'type': 'object',
      'properties': {
        'message': {
          'type': 'string'
        },
        'errorcode': {
          'type': 'string',
          'description': 'Following are the error codes and descriptions ERROR_INVALID_bloggerid - Invalid blogger id or empty blogger id in request ERROR_INVALID_HEADER - Invalid either AcceptType or ContentType in header ERROR_UNABLE_TO_PROCESS - Unable to process the request. Somthing went wrong...'
        }
      }
    },
    'getblogerror': {
      'title': 'Error',
      'type': 'object',
      'properties': {
        'message': {
          'type': 'string'
        },
        'errorcode': {
          'type': 'string',
          'description': 'Following are the error codes and descriptions ERROR_INVALID_blogid - Invalid Bloger id or empty Bloger id in request, ERROR_INVALID_HEADER - Invalid either AcceptType or ContentType in header, ERROR_INVALID_SORTBY - Invalid sortby parameter value in request query string, ERROR_UNABLE_TO_PROCESS - Unable to process the request. Somthing went wrong...'
        }
      }
    },
    'error': {
      'title': 'Error',
      'type': 'object',
      'properties': {
        'message': {
          'type': 'string'
        },
        'errorcode': {
          'type': 'string',
          'description': 'Following are the error codes and descriptions ERROR_INVALID_BODY - Invalid body or empty request body ERROR_UNABLE_TO_PROCESS - Unable to process the request. Somthing went wrong...'
        }
      }
    }
  }
}
