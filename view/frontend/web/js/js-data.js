/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */
/*jshint jquery:true*/

//-

console.warn('/mozgbrasil/magento2-boxpacker-php56/view/frontend/web/js/js-data.js');

//-

define(
    [
    'ko',
    "jquery",
    "jquery/ui",

    ], function (ko, $) {
        'use strict';

        // --

        console.warn('1');
        //console.warn(ko);

        // --

        //MyApp.core.DebugKO(null,'authenticationPopup');
        //MyApp.core.DebugKO(null,'$root');
        //MyApp.core.DebugKO(null,'$data');

        // --

        $.widget(
            'mage.boxpackerDataJs', {
                options: {
                    kountId: false
                },
                _create: function () {

                    console.warn('create');

                    var self = this;
                    var formId = self.options.formId;
                    var defaultPaymentFormId='co-payment-form';
                    if (!$('#' + formId)) {
                        formId = defaultPaymentFormId;
                    }



                    window.onBoxPackerDataLoad = function () {

                        alert('22222');
                        console.info('22222');
                        console.warn('2');

                        var env;
                        if (self.options.kountId) {
                            env = BoxPackerData.environments.production.withId(self.options.kountId);
                        } else {
                            env = BoxPackerData.environments.production;
                        }

                        BoxPackerData.setup(self.options.merchantId, formId, env);
                    };

                    if (formId != defaultPaymentFormId) {
                        $.getScript(self.options.boxpackerDataJs);
                    }
                }
            }
        );
        return $.mage.boxpackerDataJs;
    }
);
