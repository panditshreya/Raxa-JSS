/*
 * This screen shows Lab order form
 */
Ext.define("Screener.view.LabView", {
    extend: 'Ext.Container',
    xtype: 'labForm',

    config: {
        title: 'Laboratory Order',
        autoscroll: true,
        items: [{
            xtype: 'textfield',
            label: 'Patient ID',
            placeHolder: 'IDXXXXXXX',
        },

        {
            xtype: 'textfield',
            label: 'Select Drug',
            placeHolder: 'Enter Drug Name',

        }, {
            xtype: 'checkboxfield',
            name: 'addadditionaltest',
            label: 'Add Test',
            value: '0',
        },

        {
            xtype: 'checkboxfield',
            name: 'urgent',
            label: 'Urgent',
            value: '0',
        }, {
            xtype: 'button',
            text: 'Submit Request',
            centered: 1,
            action: 'submit Request',
        }]
    }


});
