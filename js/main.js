/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    var myPanelPath = csInterface.getSystemPath(SystemPath.EXTENSION);
    
    
    function init() {
                
        themeManager.init();
                
        
        $("#btn_6x6Film").click(function () {
            csInterface.evalScript('cropImage(1, 1)');
        });
        
        $("#btn_6x45Film").click(function () {
            csInterface.evalScript('cropImage(4.5, 6)');
        });
        
        $("#btn_lomo").click(function () {
            csInterface.evalScript('lomoEffect()');
        });
        
        $("#btn_holga").click(function () {
            csInterface.evalScript('holgaEffect()');
        });
        
        $("#btn_border1").click(function () {
            csInterface.evalScript('border1()');
        });
        
        $("#btn_white").click(function () {
            csInterface.evalScript('showWhiteBorder()');
        });
        
        $("#btn_border2").click(function () {
	       csInterface.evalScript("addBorder('" + myPanelPath + "');");
        });

    }
        
    init();

}());
    
