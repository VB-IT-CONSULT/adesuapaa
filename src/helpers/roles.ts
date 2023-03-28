interface GrantListInterfaceAttributes {
    role: string;
    resource: string;
    action: string;
}

interface GrantList extends Array<GrantListInterfaceAttributes> {}

// grant list fetched from DB (to be converted to a valid grants object, internally)
const grantList: GrantList  = [
    { role: 'superadmin', resource: 'supplier, product, order, employee, user, report, company, branch, profile, payment, dashboard, inventory, customer, settings', action: 'create'},
    { role: 'superadmin', resource: 'supplier, product, order, employee, user, report, company, branch, profile, payment, dashboard, inventory, customer, settings', action: 'read'},
    { role: 'superadmin', resource: 'supplier, product, order, employee, user, report, company, branch, profile, payment, dashboard, inventory, customer, settings', action: 'update' },
    { role: 'superadmin', resource: 'supplier, product, order, employee, user, report, company, branch, profile, payment, dashboard, inventory, customer, settings', action: 'delete' },

    { role: 'admin', resource: 'supplier, product, order, employee, user, report, branch, profile, payment, inventory, customer, settings', action: 'create' },
    { role: 'admin', resource: 'supplier, product, order, employee, user, report, branch, profile, payment, dashboard, inventory, customer, settings', action: 'read' },
    { role: 'admin', resource: 'supplier, product, order, employee, user, report, branch, profile, payment, inventory, customer, settings', action: 'update' },
    { role: 'admin', resource: 'supplier, product, order, employee, user, report, branch, profile, payment, inventory, customer, settings', action: 'delete' },

    { role: 'accountant', resource: 'product, order, report, profile, payment, inventory, customer', action: 'create' },
    { role: 'accountant', resource: 'supplier, product, order, report, branch, profile, payment, dashboard, inventory, customer', action: 'read' },
    { role: 'accountant', resource: 'product, order, report, profile, payment, inventory, customer', action: 'update' },
    { role: 'accountant', resource: 'product, order, report, profile, payment, inventory', action: 'delete' },

    { role: 'cashier', resource: 'product, order, report, profile, payment, inventory', action: 'create' },
    { role: 'cashier', resource: 'supplier, product, order, report, branch, profile, payment, dashboard, customer', action: 'read' },
    { role: 'cashier', resource: 'product, order, report, profile, payment, inventory', action: 'update' },
    { role: 'cashier', resource: 'product, order, report, profile, payment, inventory', action: 'delete' },

    { role: 'receptionist', resource: 'order, profile', action: 'create' },
    { role: 'receptionist', resource: 'supplier, product, order, branch, profile, customer', action: 'read' },
    { role: 'receptionist', resource: 'product, order, profile', action: 'update' },
    { role: 'receptionist', resource: 'product, order, profile', action: 'delete' },


    { role: 'basic', resource: 'profile', action: 'create' },
    { role: 'basic', resource: 'profile', action: 'read' },
    { role: 'basic', resource: 'profile', action: 'update' },
    { role: 'basic', resource: 'profile', action: 'delete' }
]

  
export { grantList };