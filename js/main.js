/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                
        $("#btn_test").click(function () {
            csInterface.evalScript('sayHello()');
        });
        
        $("#btn_lomo").click(function () {
            csInterface.evalScript('lomoEffect()');
        });
        
        $("#btn_holga").click(function () {
            csInterface.evalScript('holgaEffect()');
        });
        
    }
        
    init();

}());
    
