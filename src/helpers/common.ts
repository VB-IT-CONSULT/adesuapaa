import {
  getCurrentDate
} from './utils';

const operations = ['Equal to', 'Not Equals', 'Greater Than or Equals', 'Greater Than', 'Less Than or Equals', 'Less Than']

 export const operators_type = {
  'Equal to': (a: number, b: number) => a == b, // "=="
  "Not Equals": (a: number, b: number) => a != b, // "!="
  "Greater Than": (a: number, b: number) => a > b, //  ">"
  "Less Than": (a: number, b: number) => a < b, // "<"
  "Greater Than or Equals": (a: number, b: number) => a >= b, // ">="
  "Less Than or Equals": (a: number, b: number) => a <= b, // "<="
}


//  search and table values
export const form_data_search_value = {
  receiving_discount: 0,
  sales_discount: 0,
  rows_per_page: 25,
  sales_discount_toggle: false,
  receiving_discount_toggle: false,
  notification: {
    notification_options_y: ['Top', 'Bottom'],
    notification_options_x: ['Left', 'Center', 'Right'],
    notification_value: {
      value_x: "",
      value_y: ""
    }
  },
  items_shelf: {
    shelves: ['Shelf One', 'from db', 'from db'], // Values from the database should be take out and replaced with an API request. Eventually these values are going to be commented out
    shelf_search_value: ""
  },
  items_expiring: {
    expiring_options: ['Before', 'After'],
    expiry_search_value: "",
    expiry_date: getCurrentDate()
  },
  items_quatity: {
    quantity_options: operations,
    quantity_search_value: "" || null,
    quatity_value: 0
  },
  items_price: {
    price_options: operations,
    price_search_value: "" || null,
    price_value: 0
  },
  item_category: {
    category_options: ['No category'],
    category_value: "" || null
  },
  taxable_items: {
    taxable_items_options: ['Yes', 'No'],
    taxable_items_value: "" || null
  },
  perishable_items: {
    perishable_items_options: ['Perisable', 'Non perishable'],
    perishable_items_value: ""
  },
};

//  add and edit values
export const form_data_add_value = {
  items_shelf: {
    shelves: ['Shelf One', 'from db', 'from db'], // Values from the database should be take out and replaced with an API request. Eventually these values are going to be commented out
    shelf_value: ""
  },
  items_expiring: {
    expiring_options: ['Before', 'After'],
    expiry_search_value: "",
    expiry_date: getCurrentDate()
  },
  items_quatity: {
    quatity_value: 0
  },
  items_price: {
    price_value: 0
  },
  item_category: {
    category_options: ['No category'],
    category_value: ""
  },
  perishable_items: {
    perishable_items_options: ['Perisable', 'Non perishable'],
    perishable_items_value: ""
  },
}