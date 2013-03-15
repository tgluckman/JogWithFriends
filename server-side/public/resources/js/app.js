/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    paths: {
        JWF: '/resources/js'
    }
});

Ext.application({
    viewport: {
        autoMaximize: true
    },

    models: [
        'Run'
    ],
    stores: [
        'Runs'
    ],
    views: [
        'run.List',
        'NoFriends',
        'Main',
        'Login',
        'Form'
    ],
    controllers: [
        'Facebook',
        'Runs'
    ],
    icon: {
        '57': 'resources/icons/icon.png',
        '114': 'resources/icons/icon.png'
    },
    name: 'JWF',
    startupImage: {
        '320x460': 'resources/images/phone_startup.png'
    },

    launch: function() {
        this.facebookAppId = '434161743267382';

        if (this.facebookAppId === '') {
            Ext.create('Ext.Component', {
                fullscreen: true,
                padding: 20,
                html: [
                '<p>Please read the readme to set up this example locally.</p><br/>',
                '<p>For a live example, visit <a href="http://ju.mp/senchajwf">http://ju.mp/senchajwf</a></p>'
                ].join('')
            });
        }
    }

});
