export const supplier = {
    "title": "supplier",
    "version": 0,
    "description": "describes supplier details",
    "type": "object",
    "properties": {
        // New Supplier
        "suppliername": {
            "type": "string"
        },
        "suppliercompany": {
            "type": "string"
        },
        "suppliercity": {
            "type": "string"
        },
        "supplierprovince": {
            "type": "string"
        },
        "supplieraddress": {
            "type": "string"
        },
        "supplierzip": {
            "type": "integer"
        },
        "suppliercountry": {
            "type": "string"
        },
        "supplieremail": {
            "type": "string"
        },
        "suppliertelephone1": {
            "type": "number",
            "primary": true
        },
        "supplierfax": {
            "type": "integer"
        },
        "suppliertollfree": {
            "type": "string"
        },
        "suppliertelephone2": {
            "type": "number"
        },
        "supplierextension": {
            "type": "integer"
        },
        //Billing Company 
        "billingcity": {
            "type": "string"
        },
        "billingprovince": {
            "type": "string"
        },
        "billingaddress": {
            "type": "string"
        },
        "billingzip": {
            "type": "integer"
        },
        "billingcountry": {
            "type": "string"
        },
        "billingemail": {
            "type": "string"
        },
        "billingtelephone1": {
            "type": "number"
        },
        "billingfax": {
            "type": "integer"
        },
        "billingtollfree": {
            "type": "integer"
        },
        "billingtelephone2": {
            "type": "string"
        },
        "billingtextension": {
            "type": "integer"
        },
        //Additional Contact 

        "additionalname": {
            "type": "string"
        },
        "additionalcontacts": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "additionalemail": {
                        "type": "string"
                    },
                    "additionaltelephone1": {
                        "type": "number"
                    },
                    "additionalfax": {
                        "type": "integer"
                    },
                    "additionaltollfree": {
                        "type": "integer"
                    },
                    "additionaltelephone2": {
                        "type": "number"
                    },
                    "additionalextension": {
                        "type": "integer"
                    },

                }
            }
        },

        "comment": {
            "type": "string"
        }
    },
    "required": ["suppliername", "suppliercompany", "suppliercity", "supplierprovince", "supplieraddress", "supplierzip", "suppliercountry", "supplieremail", "suppliertelephone1", "supplierfax", "suppliertollfree", "supplierextension"]

}





export const customer = {
    "title": "customer",
    "version": 0,
    "description": "describes customer details",
    "type": "object",
    "properties": {
        "customername": {
            "type": "string"
        },
        "customercompany": {
            "type": "string"
        },
        "customertype": {
            "type": "string",
        },
        "customercity": {
            "type": "string"
        },
        "customerprovince": {
            "type": "string"
        },
        "customeraddress": {
            "type": "string"
        },
        "customerzip": {
            "type": "integer"
        },
        "customercountry": {
            "type": "string"
        },
        "customeremail": {
            "type": "string"
        },
        "customertelephone1": {
            "type": "number"
        },
        "txtfax": {
            "type": "integer"
        },
        "customertollfree": {
            "type": "integer"
        },
        "customertelephone2": {
            "type": "number"
        },
        "customerextension": {
            "type": "integer"
        },

        //Billing

        "creditlimit": {
            "type": "string"
        },
        "laborprice": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "laborprice": {
                        "type": "string"
                    }
                }
            }
        },
        "partsdiscount": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "partsdiscount": {
                        "type": "string"
                    }
                }
            }
        },
        "labordiscount": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "partsdiscount": {
                        "type": "string"
                    }
                }
            }
        },
        //Add More Contact
        "additionalname": {
            "type": "string"
        },
        "additionalcontacts": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "additionalemail": {
                        "type": "string"
                    },
                    "additionaltelephone1": {
                        "type": "number"
                    },
                    "additionalfax": {
                        "type": "integer"
                    },
                    "additionaltollfree": {
                        "type": "integer"
                    },
                    "additionaltelephone2": {
                        "type": "number"
                    },
                    "additionalextension": {
                        "type": "integer"
                    },

                }
            }
        },

        "comment": {
            "type": "string"
        }
    },
    "required": ["customername", "customercompany", "customertype", "customercity"]

}


















/*

"additionalcontacts": {
"type": "array",
"items": {
    "type": "object",
    "properties": {
    "additionalname": {
                "type": "string"
            },
            "additionalemail": {
                "type": "string"
            },
            "additionaltelephone1": {
                "type": "number"
            },
            "additionalfax": {
                "type": "integer"
            },
            "additionaltollfree": {
                "type": "integer"
            },
            "additionaltelephone2": {
                "type": "number"
            },
            "additionalextension": {
                "type": "integer"
            },
    }
    }
    },

*/