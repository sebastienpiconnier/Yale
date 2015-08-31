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
        
        $("#btn_resize").click(function () {
            csInterface.evalScript('resizeTool()');
        });
        
        $("#btn_lomo").click(function () {
            csInterface.evalScript('lomoEffect()');
        });
        
        $("#btn_holga").click(function () {
            csInterface.evalScript('holgaEffect()');
        });
        
        $("#btn_border1").click(function () {
	       csInterface.evalScript("addBorder1('" + myPanelPath + "');");
        });
        
        $("#btn_border2").click(function () {
	       csInterface.evalScript("addBorder2('" + myPanelPath + "');");
        });
        
        $("#btn_border3").click(function () {
	       csInterface.evalScript("addBorder3('" + myPanelPath + "');");
        });
        
        $("#btn_black").click(function () {
            csInterface.evalScript('showBlackBorder()');
        });
             
        $("#btn_white").click(function () {
            csInterface.evalScript('showWhiteBorder()');
        });
        


    }
        
    init();

}());
    
