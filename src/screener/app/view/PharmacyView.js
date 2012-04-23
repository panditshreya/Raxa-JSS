/*
 * This screen shows Lab order form
 */
Ext.define("Screener.view.PharmacyView", {
    extend: 'Ext.Container',
    xtype: 'pharmacyForm',
    config: {
        title: 'Pharmacy Order',
        autoscroll: true,
        items: [{
            xtype: 'textfield',
            label: 'Drug Name',
            name: 'drugname',
            required: true,

        }, {
            xtype: 'textfield',
            label: 'Quantity',
            name: 'quantity',
            required: true,
        }, {
            xtype: 'textfield',
            label: 'Frequency',
            name: 'frequency',
            required: true,

        }, {
            xtype: 'textfield',
            label: 'Duration',
            name: 'duration',
            required: true,

        }, {
            xtype: 'button',
            text: 'Submit Request',
            centered: 1,
            action: 'submit Request',
        }]
    }
});
