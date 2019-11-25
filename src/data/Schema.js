// https://rxdb.info/rx-schema.html#example

export const schemaNames = {
  vehicles: '',
  clients: '',
  workOrders: '',
  customers: '',
  billings: '',
  suppliers: '',
  parts: '',
  equipments: '',
  calender: ''
}
export  const heroSchema = {
  'title': 'hero schema',
  'description': 'describes a simple hero',
  'version': 0,
  'type': 'object',
  'properties': {
      'name': {
          'type': 'string',
          'primary': true
      },
      'color': {
          'type': 'string'
      }
  },
  'required': ['color']
};
export const vehicles = {
  title: "vehicles",
  version: 0,
  description: "describes vehicle details",
  type: "object",
  properties: {
    vtype: {
      type: "string"
    },
    brand: {
      type: "string"
    },
    model: {
      type: "string"
    },
    unit_id: {
      type: "string"
    },
    license: {
      type: "string",
      primary: true
    },
    vin: {
      type: "string"
    },
    manufacture_year: {
      type: "number"
    },
    engine_capacity: {
      type: "number"
    },
    engine_number: {
      type: "number"
    },
    color: {
      type: "string"
    },
    current: {
      type: "object",
      properties: {
        odometer: {
          type: "string"
        },
        hours: {
          type: "string"
        }
      }
    },
    last: {
      type: "object",
      properties: {
        odometer: {
          type: "string"
        },
        hours: {
          type: "string"
        }
      }
    }
  },
  required: ["vtype", "brand", "model", "license", "vin", "current", "last"]
}

export const clients = {
  title: "clients",
  version: 0,
  description: "describes clients details",
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    company: {
      type: "string"
    },
    type: {
      type: "string"
    },
    city: {
      type: "string"
    },
    provState: {
      type: "string"
    },
    address: {
      type: "string"
    },
    zip_post: {
      type: "string"
    },
    country: {
      type: "string"
    },
    email: {
      type: "string"
    },
    telephone: {
      type: "string"
    },
    fax: {
      type: "integer"
    },
    tollFree: {
      type: "integer"
    },
    extenstion: {
      type: "string"
    },
  },
  required: ["name", "company", "type", "city", "provState",
    "address", "zip_post", "country",
    "email", "telephone", "fax"]
}

export const workOrders = {
  title: "work orders",
  version: 0,
  description: "describes word orders details",
  type: "object",
  properties: {
    vehicle: {
      type: "string"
    },
 
    client: {
      type: "string"
    },
    additional_info: {
      type: "string"
    },
    date: {
      type: "string"
    },
    status: {
      type: "string"
    },
    customer: {
      type: "string"
    },
    repaired_truck_trailer: {
      type: "string"
    },
    parts_price: {
      type: "integer"
    },
    labor_price: {
      type: "integer"
    },
    total: {
      type: "integer"
    },
  }
}

export const customers = {
  title: "work orders",
  version: 0,
  description: "describes word orders details",
  type: "object",
  properties: {
    company: {
      type: "string"
    },
    city: {
      type: "string"
    },
    provState: {
      type: "string"
    },
    name: {
      type: "string"
    },
    address: {
      type: "string"
    },
    priority: {
      type: "string"
    },
    type: {
      type: "string"
    },
    zipPost: {
      type: "string"
    },
    contacts: {
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        email: {
          type: "string"
        },
        tel: {
          type: "integer"
        },
        fax: {
          type: "integer"
        },
        tollFree: {
          type: "integer"
        },
        tel2: {
          type: "integer"
        },
        extension: {
          type: "integer"
        },
      },
      required: ["name", "email", "tel"]
    },
  },
  required: ["company", "city", "provState",
    "name", "address", "priority", "type"
    , "zipPost", "contacts"]
}


export const billings = {
  title: "billings",
  version: 0,
  description: "describes billings details",
  type: "object",
  properties: {
    client: {
      type: "string"
    },
    credit_limit: {
      type: "integer"
    },
    laborDiscount: {
      type: "integer"
    },
    partsDiscount: {
      type: "integer"
    },
  },
  required: ["client", "credit_limit", "laborDiscount", "partsDiscount"]
}


export const suppliers = {
  title: "suppliers",
  version: 0,
  description: "describes suppliers details",
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    company: {
      type: "string"
    },
    city: {
      type: "string"
    },
    provState: {
      type: "string"
    },
    zipPost: {
      type: "integer"
    },
    address: {
      type: "string"
    },
    priority: {
      type: "integer"
    },
    contacts: {
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        email: {
          type: "string"
        },
        tel: {
          type: "integer"
        },
        fax: {
          type: "integer"
        },
        tollFree: {
          type: "integer"
        },
        tel2: {
          type: "string"
        },
        extension: {
          type: "string"
        }
      },
      required: ["name", "email", "tel", "fax"]
    },
    billing: "string"
  },
  required: ["name", "company", "city", "provState", "priority", "contacts"]
}


export const parts = {
}


export const equipments = {
}


export const settings = {
}


export const calender = {
}