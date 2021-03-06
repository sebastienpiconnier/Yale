/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function sayHello(){
    alert("hello from ExtendScript");
}

function cropImage(wRatio, hRatio) {   

//Display an alert if a document is not opened

if ( app.documents.length <= 0 ) {alert("You must open a document!");}

if (app.documents.length > 0) {    

// Save the state of the document before you do anything.
var id3 = charIDToTypeID( "Mk  " );
var desc2 = new ActionDescriptor();
var id4 = charIDToTypeID( "null" );
var ref1 = new ActionReference();
var id5 = charIDToTypeID( "SnpS" );
ref1.putClass( id5 );
desc2.putReference( id4, ref1 );
var id6 = charIDToTypeID( "From" );
var ref2 = new ActionReference();
var id7 = charIDToTypeID( "HstS" );
var id8 = charIDToTypeID( "CrnH" );
ref2.putProperty( id7, id8 );
desc2.putReference( id6, ref2 );
executeAction( id3, desc2, DialogModes.NO );

// beginning of the function for cropping image
var docRef = app.activeDocument;
 var WidthRatio = wRatio;
 var HeightRatio = hRatio;
 var boundTop;
 var boundLeft;
 var boundRight;
 var boundBottom;

// Image's aspect ratio is greater than the desired ratio
// so crop out left and right areas of the Image
if ((docRef.width / docRef.height) > (WidthRatio/ HeightRatio))
{
 boundTop = 0;
 boundLeft = ((docRef.width - (docRef.height * (WidthRatio/HeightRatio))) / 2);
 boundBottom = docRef.height;
 boundRight = ((docRef.width + (docRef.height * (WidthRatio/HeightRatio))) / 2);
 bounds = new Array(boundLeft,boundTop,boundRight,boundBottom);
 docRef.crop(bounds);
}

// Image's aspect ratio is less than the desired ratio
// so crop out top and bottom areas of the Image
if ((docRef.width / docRef.height) < (WidthRatio/ HeightRatio))
{
 boundTop = ((docRef.height - (docRef.width * (HeightRatio/WidthRatio))) / 2);
 boundLeft = 0;
 boundBottom = ((docRef.height + (docRef.width * (HeightRatio/WidthRatio))) / 2);
 boundRight = docRef.width;
 bounds = new Array(boundLeft,boundTop,boundRight,boundBottom);
 docRef.crop(bounds);
}

// bounds = new Array(10, 10, app.activeDocument.width - 10, app.activeDocument.height - 10);
// docRef.crop(bounds);

 boundTop = null;
 boundLeft = null;
 boundRight = null;
 boundBottom = null;
 WidthRatio = null;
 HeightRatio = null;
 docRef = null;

}
}

function resizeTool() {
    var idslct = charIDToTypeID( 'slct' );     
    var desc77 = new ActionDescriptor();     
    var idnull = charIDToTypeID( 'null' );         
    var ref77 = new ActionReference();         
    var idcropTool = stringIDToTypeID( 'cropTool' );         
    ref77.putClass( idcropTool );     
    desc77.putReference( idnull, ref77 ); 
    executeAction( idslct, desc77, DialogModes.ALL );
}

function lomoEffect() {
// LOMO Effect Photoshop Script
// v1.1
// May 13, 2005
// By Christopher Holland
// chris@concepthouse.com 
// AIM/iChat conceptDawg


// The script creates a history state when it starts so you can always go back if there is a problem.
// It also creates a layer set to keep all of its layers in (tidy, don't you think?).
// There is really only one thing you might want to change...so here it is.
// The last step is to do a lens blur, but this could take a while on larger images so I leave it as an option here:

// The choices here are: 
// 0 = no
// 1 = yes
// 2 = prompt

var doDefraction = 1;



// Don't change anything below here unless you know what you are doing. Or just want to play. Whatever.

var docRef = app.activeDocument;

// Get Image size for later
var iw = docRef.width;
var ih = docRef.height;
var feather = 1.0;
var maxDim = 1.0;

if (iw > ih)
	maxDim = iw;
else
	maxDim = ih;
feather = maxDim / 12.0;

// =======================================================
var id645 = charIDToTypeID( "Mk  " );
    var desc140 = new ActionDescriptor();
    var id646 = charIDToTypeID( "null" );
        var ref85 = new ActionReference();
        var id647 = stringIDToTypeID( "layerSection" );
        ref85.putClass( id647 );
    desc140.putReference( id646, ref85 );
    var id648 = charIDToTypeID( "Usng" );
        var desc141 = new ActionDescriptor();
        var id649 = charIDToTypeID( "Nm  " );
        desc141.putString( id649, "Lomo Effects" );
    var id650 = stringIDToTypeID( "layerSection" );
    desc140.putObject( id648, id650, desc141 );
executeAction( id645, desc140, DialogModes.NO );

// Contrast
// =======================================================
var id33 = charIDToTypeID( "Mk  " );
    var desc9 = new ActionDescriptor();
    var id34 = charIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var id35 = charIDToTypeID( "AdjL" );
        ref8.putClass( id35 );
    desc9.putReference( id34, ref8 );
    var id36 = charIDToTypeID( "Usng" );
        var desc10 = new ActionDescriptor();
        var id37 = charIDToTypeID( "Type" );
            var desc11 = new ActionDescriptor();
            var id38 = charIDToTypeID( "Cntr" );
            desc11.putInteger( id38, 20 );
        var id39 = charIDToTypeID( "BrgC" );
        desc10.putObject( id37, id39, desc11 );
    var id40 = charIDToTypeID( "AdjL" );
    desc9.putObject( id36, id40, desc10 );
executeAction( id33, desc9, DialogModes.NO );
docRef.activeLayer.name = "Lomo Contrast";

// Hue/Saturation
// =======================================================
var id41 = charIDToTypeID( "Mk  " );
    var desc12 = new ActionDescriptor();
    var id42 = charIDToTypeID( "null" );
        var ref9 = new ActionReference();
        var id43 = charIDToTypeID( "AdjL" );
        ref9.putClass( id43 );
    desc12.putReference( id42, ref9 );
    var id44 = charIDToTypeID( "Usng" );
        var desc13 = new ActionDescriptor();
        var id45 = charIDToTypeID( "Type" );
            var desc14 = new ActionDescriptor();
            var id46 = charIDToTypeID( "Clrz" );
            desc14.putBoolean( id46, false );
            var id47 = charIDToTypeID( "Adjs" );
                var list2 = new ActionList();
                    var desc15 = new ActionDescriptor();
                    var id48 = charIDToTypeID( "H   " );
                    desc15.putInteger( id48, 0 );
                    var id49 = charIDToTypeID( "Strt" );
                    desc15.putInteger( id49, 20 );
                    var id50 = charIDToTypeID( "Lght" );
                    desc15.putInteger( id50, 0 );
                var id51 = charIDToTypeID( "Hst2" );
                list2.putObject( id51, desc15 );
            desc14.putList( id47, list2 );
        var id52 = charIDToTypeID( "HStr" );
        desc13.putObject( id45, id52, desc14 );
    var id53 = charIDToTypeID( "AdjL" );
    desc12.putObject( id44, id53, desc13 );
executeAction( id41, desc12, DialogModes.NO );
docRef.activeLayer.name = "Lomo Saturation";


// Shadow Layers

// =======================================================
var id252 = charIDToTypeID( "Mk  " );
    var desc55 = new ActionDescriptor();
    var id253 = charIDToTypeID( "null" );
        var ref25 = new ActionReference();
        var id254 = stringIDToTypeID( "contentLayer" );
        ref25.putClass( id254 );
    desc55.putReference( id253, ref25 );
    var id255 = charIDToTypeID( "Usng" );
        var desc56 = new ActionDescriptor();
        var id256 = charIDToTypeID( "Nm  " );
        desc56.putString( id256, "Lomo Shadow 1" );
        var id257 = charIDToTypeID( "Md  " );
        var id258 = charIDToTypeID( "BlnM" );
        var id259 = charIDToTypeID( "Ovrl" );
        desc56.putEnumerated( id257, id258, id259 );
        var id260 = charIDToTypeID( "Type" );
            var desc57 = new ActionDescriptor();
            var id261 = charIDToTypeID( "Rvrs" );
            desc57.putBoolean( id261, true );
            var id262 = charIDToTypeID( "Angl" );
            var id263 = charIDToTypeID( "#Ang" );
            desc57.putUnitDouble( id262, id263, 90.000000 );
            var id264 = charIDToTypeID( "Type" );
            var id265 = charIDToTypeID( "GrdT" );
            var id266 = charIDToTypeID( "Rdl " );
            desc57.putEnumerated( id264, id265, id266 );
            var id267 = charIDToTypeID( "Scl " );
            var id268 = charIDToTypeID( "#Prc" );
            desc57.putUnitDouble( id267, id268, 122.000000 );
            var id269 = charIDToTypeID( "Grad" );
                var desc58 = new ActionDescriptor();
                var id270 = charIDToTypeID( "Nm  " );
                desc58.putString( id270, "BT" );
                var id271 = charIDToTypeID( "GrdF" );
                var id272 = charIDToTypeID( "GrdF" );
                var id273 = charIDToTypeID( "CstS" );
                desc58.putEnumerated( id271, id272, id273 );
                var id274 = charIDToTypeID( "Intr" );
                desc58.putDouble( id274, 4096.000000 );
                var id275 = charIDToTypeID( "Clrs" );
                    var list7 = new ActionList();
                        var desc59 = new ActionDescriptor();
                        var id276 = charIDToTypeID( "Clr " );
                            var desc60 = new ActionDescriptor();
                            var id277 = charIDToTypeID( "Rd  " );
                            desc60.putDouble( id277, 0.000000 );
                            var id278 = charIDToTypeID( "Grn " );
                            desc60.putDouble( id278, 0.000000 );
                            var id279 = charIDToTypeID( "Bl  " );
                            desc60.putDouble( id279, 0.000000 );
                        var id280 = charIDToTypeID( "RGBC" );
                        desc59.putObject( id276, id280, desc60 );
                        var id281 = charIDToTypeID( "Type" );
                        var id282 = charIDToTypeID( "Clry" );
                        var id283 = charIDToTypeID( "UsrS" );
                        desc59.putEnumerated( id281, id282, id283 );
                        var id284 = charIDToTypeID( "Lctn" );
                        desc59.putInteger( id284, 0 );
                        var id285 = charIDToTypeID( "Mdpn" );
                        desc59.putInteger( id285, 50 );
                    var id286 = charIDToTypeID( "Clrt" );
                    list7.putObject( id286, desc59 );
                        var desc61 = new ActionDescriptor();
                        var id287 = charIDToTypeID( "Clr " );
                            var desc62 = new ActionDescriptor();
                            var id288 = charIDToTypeID( "Rd  " );
                            desc62.putDouble( id288, 251.996109 );
                            var id289 = charIDToTypeID( "Grn " );
                            desc62.putDouble( id289, 251.996109 );
                            var id290 = charIDToTypeID( "Bl  " );
                            desc62.putDouble( id290, 251.996109 );
                        var id291 = charIDToTypeID( "RGBC" );
                        desc61.putObject( id287, id291, desc62 );
                        var id292 = charIDToTypeID( "Type" );
                        var id293 = charIDToTypeID( "Clry" );
                        var id294 = charIDToTypeID( "UsrS" );
                        desc61.putEnumerated( id292, id293, id294 );
                        var id295 = charIDToTypeID( "Lctn" );
                        desc61.putInteger( id295, 4096 );
                        var id296 = charIDToTypeID( "Mdpn" );
                        desc61.putInteger( id296, 50 );
                    var id297 = charIDToTypeID( "Clrt" );
                    list7.putObject( id297, desc61 );
                desc58.putList( id275, list7 );
                var id298 = charIDToTypeID( "Trns" );
                    var list8 = new ActionList();
                        var desc63 = new ActionDescriptor();
                        var id299 = charIDToTypeID( "Opct" );
                        var id300 = charIDToTypeID( "#Prc" );
                        desc63.putUnitDouble( id299, id300, 80.000000 );
                        var id301 = charIDToTypeID( "Lctn" );
                        desc63.putInteger( id301, 0 );
                        var id302 = charIDToTypeID( "Mdpn" );
                        desc63.putInteger( id302, 50 );
                    var id303 = charIDToTypeID( "TrnS" );
                    list8.putObject( id303, desc63 );
                        var desc64 = new ActionDescriptor();
                        var id304 = charIDToTypeID( "Opct" );
                        var id305 = charIDToTypeID( "#Prc" );
                        desc64.putUnitDouble( id304, id305, 0.000000 );
                        var id306 = charIDToTypeID( "Lctn" );
                        desc64.putInteger( id306, 4096 );
                        var id307 = charIDToTypeID( "Mdpn" );
                        desc64.putInteger( id307, 50 );
                    var id308 = charIDToTypeID( "TrnS" );
                    list8.putObject( id308, desc64 );
                desc58.putList( id298, list8 );
            var id309 = charIDToTypeID( "Grdn" );
            desc57.putObject( id269, id309, desc58 );
        var id310 = stringIDToTypeID( "gradientLayer" );
        desc56.putObject( id260, id310, desc57 );
    var id311 = stringIDToTypeID( "contentLayer" );
    desc55.putObject( id255, id311, desc56 );
executeAction( id252, desc55, DialogModes.NO );

// =======================================================
// =======================================================
var id682 = charIDToTypeID( "Dplc" );
    var desc147 = new ActionDescriptor();
    var id683 = charIDToTypeID( "null" );
        var ref88 = new ActionReference();
        var id684 = charIDToTypeID( "Lyr " );
        var id685 = charIDToTypeID( "Ordn" );
        var id686 = charIDToTypeID( "Trgt" );
        ref88.putEnumerated( id684, id685, id686 );
    desc147.putReference( id683, ref88 );
    var id687 = charIDToTypeID( "Nm  " );
    desc147.putString( id687, "Lomo Shadows 2" );
executeAction( id682, desc147, DialogModes.NO );

// Center Lighting
// =======================================================
var id187 = charIDToTypeID( "Mk  " );
    var desc44 = new ActionDescriptor();
    var id188 = charIDToTypeID( "null" );
        var ref23 = new ActionReference();
        var id189 = stringIDToTypeID( "contentLayer" );
        ref23.putClass( id189 );
    desc44.putReference( id188, ref23 );
    var id190 = charIDToTypeID( "Usng" );
        var desc45 = new ActionDescriptor();
        var id191 = charIDToTypeID( "Nm  " );
        desc45.putString( id191, "Lomo Center Light" );
        var id192 = charIDToTypeID( "Opct" );
        var id193 = charIDToTypeID( "#Prc" );
        desc45.putUnitDouble( id192, id193, 80.000000 );
        var id194 = charIDToTypeID( "Md  " );
        var id195 = charIDToTypeID( "BlnM" );
        var id196 = charIDToTypeID( "Ovrl" );
        desc45.putEnumerated( id194, id195, id196 );
        var id197 = charIDToTypeID( "Type" );
            var desc46 = new ActionDescriptor();
            var id198 = charIDToTypeID( "Angl" );
            var id199 = charIDToTypeID( "#Ang" );
            desc46.putUnitDouble( id198, id199, 90.000000 );
            var id200 = charIDToTypeID( "Type" );
            var id201 = charIDToTypeID( "GrdT" );
            var id202 = charIDToTypeID( "Rdl " );
            desc46.putEnumerated( id200, id201, id202 );
            var id203 = charIDToTypeID( "Scl " );
            var id204 = charIDToTypeID( "#Prc" );
            desc46.putUnitDouble( id203, id204, 95.000000 );
            var id205 = charIDToTypeID( "Grad" );
                var desc47 = new ActionDescriptor();
                var id206 = charIDToTypeID( "Nm  " );
                desc47.putString( id206, "Color to Transparent" );
                var id207 = charIDToTypeID( "GrdF" );
                var id208 = charIDToTypeID( "GrdF" );
                var id209 = charIDToTypeID( "CstS" );
                desc47.putEnumerated( id207, id208, id209 );
                var id210 = charIDToTypeID( "Intr" );
                desc47.putDouble( id210, 4096.000000 );
                var id211 = charIDToTypeID( "Clrs" );
                    var list5 = new ActionList();
                        var desc48 = new ActionDescriptor();
                        var id212 = charIDToTypeID( "Clr " );
                            var desc49 = new ActionDescriptor();
                            var id213 = charIDToTypeID( "Rd  " );
                            desc49.putDouble( id213, 255.000000 );
                            var id214 = charIDToTypeID( "Grn " );
                            desc49.putDouble( id214, 255.000000 );
                            var id215 = charIDToTypeID( "Bl  " );
                            desc49.putDouble( id215, 255.000000 );
                        var id216 = charIDToTypeID( "RGBC" );
                        desc48.putObject( id212, id216, desc49 );
                        var id217 = charIDToTypeID( "Type" );
                        var id218 = charIDToTypeID( "Clry" );
                        var id219 = charIDToTypeID( "UsrS" );
                        desc48.putEnumerated( id217, id218, id219 );
                        var id220 = charIDToTypeID( "Lctn" );
                        desc48.putInteger( id220, 0 );
                        var id221 = charIDToTypeID( "Mdpn" );
                        desc48.putInteger( id221, 50 );
                    var id222 = charIDToTypeID( "Clrt" );
                    list5.putObject( id222, desc48 );
                        var desc50 = new ActionDescriptor();
                        var id223 = charIDToTypeID( "Clr " );
                            var desc51 = new ActionDescriptor();
                            var id224 = charIDToTypeID( "Rd  " );
                            desc51.putDouble( id224, 255.000000 );
                            var id225 = charIDToTypeID( "Grn " );
                            desc51.putDouble( id225, 255.000000 );
                            var id226 = charIDToTypeID( "Bl  " );
                            desc51.putDouble( id226, 255.000000 );
                        var id227 = charIDToTypeID( "RGBC" );
                        desc50.putObject( id223, id227, desc51 );
                        var id228 = charIDToTypeID( "Type" );
                        var id229 = charIDToTypeID( "Clry" );
                        var id230 = charIDToTypeID( "UsrS" );
                        desc50.putEnumerated( id228, id229, id230 );
                        var id231 = charIDToTypeID( "Lctn" );
                        desc50.putInteger( id231, 4096 );
                        var id232 = charIDToTypeID( "Mdpn" );
                        desc50.putInteger( id232, 50 );
                    var id233 = charIDToTypeID( "Clrt" );
                    list5.putObject( id233, desc50 );
                desc47.putList( id211, list5 );
                var id234 = charIDToTypeID( "Trns" );
                    var list6 = new ActionList();
                        var desc52 = new ActionDescriptor();
                        var id235 = charIDToTypeID( "Opct" );
                        var id236 = charIDToTypeID( "#Prc" );
                        desc52.putUnitDouble( id235, id236, 100.000000 );
                        var id237 = charIDToTypeID( "Lctn" );
                        desc52.putInteger( id237, 0 );
                        var id238 = charIDToTypeID( "Mdpn" );
                        desc52.putInteger( id238, 50 );
                    var id239 = charIDToTypeID( "TrnS" );
                    list6.putObject( id239, desc52 );
                        var desc53 = new ActionDescriptor();
                        var id240 = charIDToTypeID( "Opct" );
                        var id241 = charIDToTypeID( "#Prc" );
                        desc53.putUnitDouble( id240, id241, 0.000000 );
                        var id242 = charIDToTypeID( "Lctn" );
                        desc53.putInteger( id242, 4096 );
                        var id243 = charIDToTypeID( "Mdpn" );
                        desc53.putInteger( id243, 50 );
                    var id244 = charIDToTypeID( "TrnS" );
                    list6.putObject( id244, desc53 );
                desc47.putList( id234, list6 );
            var id245 = charIDToTypeID( "Grdn" );
            desc46.putObject( id205, id245, desc47 );
        var id246 = stringIDToTypeID( "gradientLayer" );
        desc45.putObject( id197, id246, desc46 );
    var id247 = stringIDToTypeID( "contentLayer" );
    desc44.putObject( id190, id247, desc45 );
executeAction( id187, desc44, DialogModes.NO );



// ---------------------
// Do blurry layer stuff now...

docRef.activeLayer = docRef.artLayers[docRef.artLayers.length-1];

var lomoSet = docRef.layerSets.getByName("Lomo Effects");
var yesOrNo;
var newLayer;

if (doDefraction == 1)
	yesOrNo = true;
else if (doDefraction == 2)
	yesOrNo = prompt("Proceed with the lens defraction layer? It could take some time.");
else
	yesOrNo = false;

if (yesOrNo)
{
	var layerCount = docRef.artLayers.length;
	var found = false;
	
	// This finds the lowest layer to use as the background blur...then copies it and puts it in the layer set.
	// I had to step through the layers in case some image doesn't have a real "background" layer.
	for (var layerIndex = layerCount; layerIndex > 0; layerIndex--)
	{
		if (found == false)
		{
			var currentLayer = docRef.artLayers[layerIndex-1];
			if ( (currentLayer.visible) && (currentLayer.kind == LayerKind.NORMAL) )
			{
				found = true;
				newLayer = currentLayer.duplicate(lomoSet.artLayers.getByName("Lomo Contrast"),ElementPlacement.PLACEAFTER);
				docRef.activeLayer = newLayer;
				newLayer.blendMode = BlendMode.OVERLAY;
				newLayer.opacity = 80.00;
				newLayer.name = "Lomo Blur";
				newLayer.move(lomoSet.artLayers.getByName("Lomo Saturation"),ElementPlacement.PLACEAFTER);
				
				// Do the lens blur here...
				// =======================================================
				var id872 = charIDToTypeID( "Bokh" );
				var desc184 = new ActionDescriptor();
				var id873 = charIDToTypeID( "BkDi" );
				var id874 = charIDToTypeID( "BtDi" );
				var id875 = charIDToTypeID( "BeIn" );
				desc184.putEnumerated( id873, id874, id875 );
				var id876 = charIDToTypeID( "BkDp" );
				desc184.putInteger( id876, 0 );
				var id877 = charIDToTypeID( "BkDs" );
				desc184.putBoolean( id877, false );
				var id878 = charIDToTypeID( "BkIs" );
				var id879 = charIDToTypeID( "BtIs" );
				var id880 = charIDToTypeID( "BeS8" );
				desc184.putEnumerated( id878, id879, id880 );
				var id881 = charIDToTypeID( "BkIb" );
				desc184.putDouble( id881, maxDim / 60.0 );
				var id882 = charIDToTypeID( "BkIc" );
				desc184.putInteger( id882, 23 );
				var id883 = charIDToTypeID( "BkIr" );
				desc184.putInteger( id883, 0 );
				var id884 = charIDToTypeID( "BkSb" );
				desc184.putDouble( id884, 10.000000 );
				var id885 = charIDToTypeID( "BkSt" );
				desc184.putInteger( id885, 247 );
				var id886 = charIDToTypeID( "BkNa" );
				desc184.putInteger( id886, 0 );
				var id887 = charIDToTypeID( "BkNt" );
				var id888 = charIDToTypeID( "BtNt" );
				var id889 = charIDToTypeID( "BeNu" );
				desc184.putEnumerated( id887, id888, id889 );
				var id890 = charIDToTypeID( "BkNm" );
				desc184.putBoolean( id890, false );
				executeAction( id872, desc184, DialogModes.NO );
			}
		}
	}
} // end of lensblur option

}

function holgaEffect() {
// JavaScript Document
// Fake Holga Script
// v1.1
// May 14, 2005
// By Christopher Holland
// chris@concepthouse.com 
// AIM/iChat conceptDawg

// The script creates a history state when it starts so you can always go back if there is a problem.
// It also creates a layer set to keep all of its layers in (tidy, don't you think?).

// v1.0 - original release
// v1.1 - reversed the gradient on the base image mask (it was wrong the other way)
// 	added a step to convert the image to 8-bit so that filters will work.



// Don't change anything below here unless you know what you are doing. Or just want to play. Whatever.


var docRef = app.activeDocument;


// Get Image size for later
var iw = docRef.width;
var ih = docRef.height;
var maxDim = 1.0;

if (iw > ih)
	maxDim = iw;
else
	maxDim = ih;




// Make the image 8-bit so that filters will work...
// =======================================================
var id5405 = charIDToTypeID( "CnvM" );
    var desc1090 = new ActionDescriptor();
    var id5406 = charIDToTypeID( "Dpth" );
    desc1090.putInteger( id5406, 8 );
executeAction( id5405, desc1090, DialogModes.NO );


// Reset the color swatches to black and white.
// =======================================================
var id12575 = charIDToTypeID( "Rset" );
    var desc2553 = new ActionDescriptor();
    var id12576 = charIDToTypeID( "null" );
        var ref1510 = new ActionReference();
        var id12577 = charIDToTypeID( "Clr " );
        var id12578 = charIDToTypeID( "Clrs" );
        ref1510.putProperty( id12577, id12578 );
    desc2553.putReference( id12576, ref1510 );
executeAction( id12575, desc2553, DialogModes.NO );


// Make a new set...

var holgaSet = docRef.layerSets.add();
holgaSet.name = "Holga Effects";



// Make a copy of the background layer now...
var layerCount = docRef.artLayers.length;
var found = false;
var backgroundImage;
var baseImage;

// This finds the lowest layer to use as the base image...then copies it and puts it in the layer set.
// I had to step through the layers in case some image doesn't have a real "background" layer.
for (var layerIndex = layerCount; layerIndex > 0; layerIndex--)
{
	if (found == false)
	{
		var currentLayer = docRef.artLayers[layerIndex-1];
		if ( (currentLayer.visible) && (currentLayer.kind == LayerKind.NORMAL) )
		{
			found = true;
			backgroundImage = currentLayer;
			baseImage = currentLayer.duplicate(holgaSet,ElementPlacement.INSIDE);
			baseImage.name = "Holga Base Image";
			docRef.activeLayer = baseImage;
		}
	}
}


// =======================================================
var id12565 = charIDToTypeID( "Mk  " );
    var desc2552 = new ActionDescriptor();
    var id12566 = charIDToTypeID( "Nw  " );
    var id12567 = charIDToTypeID( "Chnl" );
    desc2552.putClass( id12566, id12567 );
    var id12568 = charIDToTypeID( "At  " );
        var ref1509 = new ActionReference();
        var id12569 = charIDToTypeID( "Chnl" );
        var id12570 = charIDToTypeID( "Chnl" );
        var id12571 = charIDToTypeID( "Msk " );
        ref1509.putEnumerated( id12569, id12570, id12571 );
    desc2552.putReference( id12568, ref1509 );
    var id12572 = charIDToTypeID( "Usng" );
    var id12573 = charIDToTypeID( "UsrM" );
    var id12574 = charIDToTypeID( "RvlA" );
    desc2552.putEnumerated( id12572, id12573, id12574 );
executeAction( id12565, desc2552, DialogModes.NO );

// =======================================================
var id18586 = charIDToTypeID( "slct" );
    var desc3756 = new ActionDescriptor();
    var id18587 = charIDToTypeID( "null" );
        var ref2084 = new ActionReference();
        var id18588 = charIDToTypeID( "Chnl" );
        var id18589 = charIDToTypeID( "Chnl" );
        var id18590 = charIDToTypeID( "Msk " );
        ref2084.putEnumerated( id18588, id18589, id18590 );
    desc3756.putReference( id18587, ref2084 );
executeAction( id18586, desc3756, DialogModes.NO );


// =======================================================
var id18223 = charIDToTypeID( "Grdn" );
    var desc3691 = new ActionDescriptor();
    var id18224 = charIDToTypeID( "From" );
        var desc3692 = new ActionDescriptor();
        var id18225 = charIDToTypeID( "Hrzn" );
        var id18226 = charIDToTypeID( "#Pxl" );
        desc3692.putUnitDouble( id18225, id18226, iw * 0.5 ); //1029.000000 );
        var id18227 = charIDToTypeID( "Vrtc" );
        var id18228 = charIDToTypeID( "#Pxl" );
        desc3692.putUnitDouble( id18227, id18228, ih * 0.5 ); //912.000000 );
    var id18229 = charIDToTypeID( "Pnt " );
    desc3691.putObject( id18224, id18229, desc3692 );
    var id18230 = charIDToTypeID( "T   " );
        var desc3693 = new ActionDescriptor();
        var id18231 = charIDToTypeID( "Hrzn" );
        var id18232 = charIDToTypeID( "#Pxl" );
        desc3693.putUnitDouble( id18231, id18232, maxDim );
        var id18233 = charIDToTypeID( "Vrtc" );
        var id18234 = charIDToTypeID( "#Pxl" );
        desc3693.putUnitDouble( id18233, id18234, maxDim );
    var id18235 = charIDToTypeID( "Pnt " );
    desc3691.putObject( id18230, id18235, desc3693 );
    var id18236 = charIDToTypeID( "Type" );
    var id18237 = charIDToTypeID( "GrdT" );
    var id18238 = charIDToTypeID( "Rdl " );
    desc3691.putEnumerated( id18236, id18237, id18238 );
    var id18239 = charIDToTypeID( "Dthr" );
    desc3691.putBoolean( id18239, true );
    var id18240 = charIDToTypeID( "UsMs" );
    desc3691.putBoolean( id18240, true );
    var id18241 = charIDToTypeID( "Rvrs" );
    desc3691.putBoolean( id18241, false );
    var id18242 = charIDToTypeID( "Grad" );
        var desc3694 = new ActionDescriptor();
        var id18243 = charIDToTypeID( "Nm  " );
        desc3694.putString( id18243, "Foreground to Background" );
        var id18244 = charIDToTypeID( "GrdF" );
        var id18245 = charIDToTypeID( "GrdF" );
        var id18246 = charIDToTypeID( "CstS" );
        desc3694.putEnumerated( id18244, id18245, id18246 );
        var id18247 = charIDToTypeID( "Intr" );
        desc3694.putDouble( id18247, 4096.000000 );
        var id18248 = charIDToTypeID( "Clrs" );
            var list813 = new ActionList();
                var desc3695 = new ActionDescriptor();
                var id18249 = charIDToTypeID( "Type" );
                var id18250 = charIDToTypeID( "Clry" );
                var id18251 = charIDToTypeID( "FrgC" );
                desc3695.putEnumerated( id18249, id18250, id18251 );
                var id18252 = charIDToTypeID( "Lctn" );
                desc3695.putInteger( id18252, 0 );
                var id18253 = charIDToTypeID( "Mdpn" );
                desc3695.putInteger( id18253, 50 );
            var id18254 = charIDToTypeID( "Clrt" );
            list813.putObject( id18254, desc3695 );
                var desc3696 = new ActionDescriptor();
                var id18255 = charIDToTypeID( "Type" );
                var id18256 = charIDToTypeID( "Clry" );
                var id18257 = charIDToTypeID( "BckC" );
                desc3696.putEnumerated( id18255, id18256, id18257 );
                var id18258 = charIDToTypeID( "Lctn" );
                desc3696.putInteger( id18258, 4096 );
                var id18259 = charIDToTypeID( "Mdpn" );
                desc3696.putInteger( id18259, 50 );
            var id18260 = charIDToTypeID( "Clrt" );
            list813.putObject( id18260, desc3696 );
        desc3694.putList( id18248, list813 );
        var id18261 = charIDToTypeID( "Trns" );
            var list814 = new ActionList();
                var desc3697 = new ActionDescriptor();
                var id18262 = charIDToTypeID( "Opct" );
                var id18263 = charIDToTypeID( "#Prc" );
                desc3697.putUnitDouble( id18262, id18263, 100.000000 );
                var id18264 = charIDToTypeID( "Lctn" );
                desc3697.putInteger( id18264, 0 );
                var id18265 = charIDToTypeID( "Mdpn" );
                desc3697.putInteger( id18265, 50 );
            var id18266 = charIDToTypeID( "TrnS" );
            list814.putObject( id18266, desc3697 );
                var desc3698 = new ActionDescriptor();
                var id18267 = charIDToTypeID( "Opct" );
                var id18268 = charIDToTypeID( "#Prc" );
                desc3698.putUnitDouble( id18267, id18268, 100.000000 );
                var id18269 = charIDToTypeID( "Lctn" );
                desc3698.putInteger( id18269, 4096 );
                var id18270 = charIDToTypeID( "Mdpn" );
                desc3698.putInteger( id18270, 50 );
            var id18271 = charIDToTypeID( "TrnS" );
            list814.putObject( id18271, desc3698 );
        desc3694.putList( id18261, list814 );
    var id18272 = charIDToTypeID( "Grdn" );
    desc3691.putObject( id18242, id18272, desc3694 );
executeAction( id18223, desc3691, DialogModes.NO );

// =======================================================
var id5634 = charIDToTypeID( "Invr" );
executeAction( id5634, undefined, DialogModes.NO );

// =======================================================
var id18641 = charIDToTypeID( "slct" );
    var desc3765 = new ActionDescriptor();
    var id18642 = charIDToTypeID( "null" );
        var ref2085 = new ActionReference();
        var id18643 = charIDToTypeID( "Chnl" );
        var id18644 = charIDToTypeID( "Chnl" );
        var id18645 = charIDToTypeID( "RGB " );
        ref2085.putEnumerated( id18643, id18644, id18645 );
    desc3765.putReference( id18642, ref2085 );
executeAction( id18641, desc3765, DialogModes.NO );

// =======================================================
var id18646 = charIDToTypeID( "Bokh" );
    var desc3766 = new ActionDescriptor();
    var id18647 = charIDToTypeID( "BkDi" );
    var id18648 = charIDToTypeID( "BtDi" );
    var id18649 = charIDToTypeID( "BeIt" );
    desc3766.putEnumerated( id18647, id18648, id18649 );
    var id18650 = charIDToTypeID( "BkDc" );
    var id18651 = charIDToTypeID( "BtDc" );
    var id18652 = charIDToTypeID( "BeCm" );
    desc3766.putEnumerated( id18650, id18651, id18652 );
    var id18653 = charIDToTypeID( "BkDp" );
    desc3766.putInteger( id18653, 0 );
    var id18654 = charIDToTypeID( "BkDs" );
    desc3766.putBoolean( id18654, true );
    var id18655 = charIDToTypeID( "BkIs" );
    var id18656 = charIDToTypeID( "BtIs" );
    var id18657 = charIDToTypeID( "BeS8" );
    desc3766.putEnumerated( id18655, id18656, id18657 );
    var id18658 = charIDToTypeID( "BkIb" );
	var blurAmount1 = maxDim / 35.0;
	if (blurAmount1 > 100)
		blurAmount1 = 100;
    desc3766.putDouble( id18658, blurAmount1 );
    var id18659 = charIDToTypeID( "BkIc" );
    desc3766.putInteger( id18659, 47 );
    var id18660 = charIDToTypeID( "BkIr" );
    desc3766.putInteger( id18660, 0 );
    var id18661 = charIDToTypeID( "BkSb" );
    desc3766.putDouble( id18661, 1.000000 );
    var id18662 = charIDToTypeID( "BkSt" );
    desc3766.putInteger( id18662, 213 );
    var id18663 = charIDToTypeID( "BkNa" );
    desc3766.putInteger( id18663, maxDim / 50.0 );
    var id18664 = charIDToTypeID( "BkNt" );
    var id18665 = charIDToTypeID( "BtNt" );
    var id18666 = charIDToTypeID( "BeNu" );
    desc3766.putEnumerated( id18664, id18665, id18666 );
    var id18667 = charIDToTypeID( "BkNm" );
    desc3766.putBoolean( id18667, true );
executeAction( id18646, desc3766, DialogModes.NO );



// Film buckle Blur
var filmBuckleBlur = backgroundImage.duplicate(holgaSet,ElementPlacement.INSIDE);
filmBuckleBlur.name = "Holga Film Buckling Blur";
docRef.activeLayer = filmBuckleBlur;


// Add a layer mask to the background layer for helping the lens blur...
// =======================================================
var id12565 = charIDToTypeID( "Mk  " );
    var desc2552 = new ActionDescriptor();
    var id12566 = charIDToTypeID( "Nw  " );
    var id12567 = charIDToTypeID( "Chnl" );
    desc2552.putClass( id12566, id12567 );
    var id12568 = charIDToTypeID( "At  " );
        var ref1509 = new ActionReference();
        var id12569 = charIDToTypeID( "Chnl" );
        var id12570 = charIDToTypeID( "Chnl" );
        var id12571 = charIDToTypeID( "Msk " );
        ref1509.putEnumerated( id12569, id12570, id12571 );
    desc2552.putReference( id12568, ref1509 );
    var id12572 = charIDToTypeID( "Usng" );
    var id12573 = charIDToTypeID( "UsrM" );
    var id12574 = charIDToTypeID( "RvlA" );
    desc2552.putEnumerated( id12572, id12573, id12574 );
executeAction( id12565, desc2552, DialogModes.NO );

// Clouds for the variable lens blurriness
// =======================================================
var id12579 = charIDToTypeID( "Clds" );
executeAction( id12579, undefined, DialogModes.NO );

// Gaussian blur on the clouds mask layer...
// =======================================================
var id12580 = charIDToTypeID( "GsnB" );
    var desc2554 = new ActionDescriptor();
    var id12581 = charIDToTypeID( "Rds " );
    var id12582 = charIDToTypeID( "#Pxl" );
	var blurAmount2 = maxDim / 36.0;
	if (blurAmount2 > 250)
		blurAmount2 = 250;
    desc2554.putUnitDouble( id12581, id12582, (blurAmount2) );
executeAction( id12580, desc2554, DialogModes.NO );

// =======================================================
var id12583 = charIDToTypeID( "slct" );
    var desc2555 = new ActionDescriptor();
    var id12584 = charIDToTypeID( "null" );
        var ref1511 = new ActionReference();
        var id12585 = charIDToTypeID( "Chnl" );
        var id12586 = charIDToTypeID( "Chnl" );
        var id12587 = charIDToTypeID( "RGB " );
        ref1511.putEnumerated( id12585, id12586, id12587 );
    desc2555.putReference( id12584, ref1511 );
executeAction( id12583, desc2555, DialogModes.NO );

// =======================================================
var id12588 = charIDToTypeID( "Bokh" );
    var desc2556 = new ActionDescriptor();
    var id12589 = charIDToTypeID( "BkDi" );
    var id12590 = charIDToTypeID( "BtDi" );
    var id12591 = charIDToTypeID( "BeIt" );
    desc2556.putEnumerated( id12589, id12590, id12591 );
    var id12592 = charIDToTypeID( "BkDc" );
    var id12593 = charIDToTypeID( "BtDc" );
    var id12594 = charIDToTypeID( "BeCm" );
    desc2556.putEnumerated( id12592, id12593, id12594 );
    var id12595 = charIDToTypeID( "BkDp" );
    desc2556.putInteger( id12595, 198 );         // Focal distance
    var id12596 = charIDToTypeID( "BkDs" );
    desc2556.putBoolean( id12596, false );
    var id12597 = charIDToTypeID( "BkIs" );
    var id12598 = charIDToTypeID( "BtIs" );
    var id12599 = charIDToTypeID( "BeS8" );
    desc2556.putEnumerated( id12597, id12598, id12599 );
    var id12600 = charIDToTypeID( "BkIb" );
	var blurAmount3 = maxDim / 40.0;
	if (blurAmount3 > 100)
		blurAmount3 = 100;
    desc2556.putDouble( id12600, blurAmount3 ); // 76.0
    var id12601 = charIDToTypeID( "BkIc" );
    desc2556.putInteger( id12601, 23 );
    var id12602 = charIDToTypeID( "BkIr" );
    desc2556.putInteger( id12602, 0 );
    var id12603 = charIDToTypeID( "BkSb" );
    desc2556.putDouble( id12603, 4.000000 );   // Brightness of the specular highlights
    var id12604 = charIDToTypeID( "BkSt" );
    desc2556.putInteger( id12604, 213 );       // Light threshold
    var id12605 = charIDToTypeID( "BkNa" );
    desc2556.putInteger( id12605, maxDim * 0.05 );
    var id12606 = charIDToTypeID( "BkNt" );
    var id12607 = charIDToTypeID( "BtNt" );
    var id12608 = charIDToTypeID( "BeNu" );
    desc2556.putEnumerated( id12606, id12607, id12608 );
    var id12609 = charIDToTypeID( "BkNm" );
    desc2556.putBoolean( id12609, true );
executeAction( id12588, desc2556, DialogModes.NO );

filmBuckleBlur.blendMode = BlendMode.MULTIPLY;
filmBuckleBlur.opacity = 80.0;



// Light Leaks
var lightLeaksSet = docRef.layerSets.add();
lightLeaksSet.name = "Holga Light Leaks";
lightLeaksSet.move(baseImage, ElementPlacement.PLACEBEFORE);

var blobs = docRef.artLayers.add();
blobs.name = "Holga Blobs";
blobs.move(lightLeaksSet, ElementPlacement.INSIDE);
blobs.applyClouds();
blobs.opacity = 50.0;
blobs.blendMode = BlendMode.NORMAL;
var blurAmount5 = maxDim / 20.0;
	if (blurAmount5 > 250)
		blurAmount5 = 250;
blobs.applyGaussianBlur(blurAmount5);

var lightLeaks2 = docRef.artLayers.add();
lightLeaks2.name = "Holga Streaks";
lightLeaks2.move(lightLeaksSet, ElementPlacement.INSIDE);
lightLeaks2.opacity = 70.0;
lightLeaks2.blendMode = BlendMode.OVERLAY;
docRef.activeLayer = lightLeaks2;
docRef.selection.fill(app.foregroundColor);

// Apply Render Fibers...
// =======================================================
var id13295 = charIDToTypeID( "Fbrs" );
    var desc2699 = new ActionDescriptor();
    var id13296 = charIDToTypeID( "Vrnc" );
    desc2699.putInteger( id13296, 5 );
    var id13297 = charIDToTypeID( "Strg" );
    desc2699.putInteger( id13297, 1 );
    var id13298 = charIDToTypeID( "RndS" );
    desc2699.putInteger( id13298, Math.random() * 1000 );
executeAction( id13295, desc2699, DialogModes.NO );

blurAmount5 = maxDim / 74.0;
	if (blurAmount5 > 250)
		blurAmount5 = 250;
lightLeaks2.applyGaussianBlur(blurAmount5);


// New Center Highlight Gradient Layer
// =======================================================
var id13829 = charIDToTypeID( "Mk  " );
    var desc2819 = new ActionDescriptor();
    var id13830 = charIDToTypeID( "null" );
        var ref1654 = new ActionReference();
        var id13831 = stringIDToTypeID( "contentLayer" );
        ref1654.putClass( id13831 );
    desc2819.putReference( id13830, ref1654 );
    var id13832 = charIDToTypeID( "Usng" );
        var desc2820 = new ActionDescriptor();
        var id13833 = charIDToTypeID( "Nm  " );
        desc2820.putString( id13833, "Holga Center Light" );
        var id13834 = charIDToTypeID( "Opct" );
        var id13835 = charIDToTypeID( "#Prc" );
        desc2820.putUnitDouble( id13834, id13835, 60.000000 );
        var id13836 = charIDToTypeID( "Md  " );
        var id13837 = charIDToTypeID( "BlnM" );
        var id13838 = charIDToTypeID( "Ovrl" );
        desc2820.putEnumerated( id13836, id13837, id13838 );
        var id13839 = charIDToTypeID( "Type" );
            var desc2821 = new ActionDescriptor();
            var id13840 = charIDToTypeID( "Angl" );
            var id13841 = charIDToTypeID( "#Ang" );
            desc2821.putUnitDouble( id13840, id13841, 90.000000 );
            var id13842 = charIDToTypeID( "Type" );
            var id13843 = charIDToTypeID( "GrdT" );
            var id13844 = charIDToTypeID( "Rdl " );
            desc2821.putEnumerated( id13842, id13843, id13844 );
            var id13845 = charIDToTypeID( "Scl " );
            var id13846 = charIDToTypeID( "#Prc" );
            desc2821.putUnitDouble( id13845, id13846, 134.000000 );
            var id13847 = charIDToTypeID( "Grad" );
                var desc2822 = new ActionDescriptor();
                var id13848 = charIDToTypeID( "Nm  " );
                desc2822.putString( id13848, "Custom" );
                var id13849 = charIDToTypeID( "GrdF" );
                var id13850 = charIDToTypeID( "GrdF" );
                var id13851 = charIDToTypeID( "CstS" );
                desc2822.putEnumerated( id13849, id13850, id13851 );
                var id13852 = charIDToTypeID( "Intr" );
                desc2822.putDouble( id13852, 4096.000000 );
                var id13853 = charIDToTypeID( "Clrs" );
                    var list620 = new ActionList();
                        var desc2823 = new ActionDescriptor();
                        var id13854 = charIDToTypeID( "Clr " );
                            var desc2824 = new ActionDescriptor();
                            var id13855 = charIDToTypeID( "Rd  " );
                            desc2824.putDouble( id13855, 255.000000 );
                            var id13856 = charIDToTypeID( "Grn " );
                            desc2824.putDouble( id13856, 255.000000 );
                            var id13857 = charIDToTypeID( "Bl  " );
                            desc2824.putDouble( id13857, 255.000000 );
                        var id13858 = charIDToTypeID( "RGBC" );
                        desc2823.putObject( id13854, id13858, desc2824 );
                        var id13859 = charIDToTypeID( "Type" );
                        var id13860 = charIDToTypeID( "Clry" );
                        var id13861 = charIDToTypeID( "UsrS" );
                        desc2823.putEnumerated( id13859, id13860, id13861 );
                        var id13862 = charIDToTypeID( "Lctn" );
                        desc2823.putInteger( id13862, 0 );
                        var id13863 = charIDToTypeID( "Mdpn" );
                        desc2823.putInteger( id13863, 50 );
                    var id13864 = charIDToTypeID( "Clrt" );
                    list620.putObject( id13864, desc2823 );
                        var desc2825 = new ActionDescriptor();
                        var id13865 = charIDToTypeID( "Clr " );
                            var desc2826 = new ActionDescriptor();
                            var id13866 = charIDToTypeID( "Rd  " );
                            desc2826.putDouble( id13866, 255.000000 );
                            var id13867 = charIDToTypeID( "Grn " );
                            desc2826.putDouble( id13867, 255.000000 );
                            var id13868 = charIDToTypeID( "Bl  " );
                            desc2826.putDouble( id13868, 255.000000 );
                        var id13869 = charIDToTypeID( "RGBC" );
                        desc2825.putObject( id13865, id13869, desc2826 );
                        var id13870 = charIDToTypeID( "Type" );
                        var id13871 = charIDToTypeID( "Clry" );
                        var id13872 = charIDToTypeID( "UsrS" );
                        desc2825.putEnumerated( id13870, id13871, id13872 );
                        var id13873 = charIDToTypeID( "Lctn" );
                        desc2825.putInteger( id13873, 4096 );
                        var id13874 = charIDToTypeID( "Mdpn" );
                        desc2825.putInteger( id13874, 50 );
                    var id13875 = charIDToTypeID( "Clrt" );
                    list620.putObject( id13875, desc2825 );
                desc2822.putList( id13853, list620 );
                var id13876 = charIDToTypeID( "Trns" );
                    var list621 = new ActionList();
                        var desc2827 = new ActionDescriptor();
                        var id13877 = charIDToTypeID( "Opct" );
                        var id13878 = charIDToTypeID( "#Prc" );
                        desc2827.putUnitDouble( id13877, id13878, 100.000000 );
                        var id13879 = charIDToTypeID( "Lctn" );
                        desc2827.putInteger( id13879, 0 );
                        var id13880 = charIDToTypeID( "Mdpn" );
                        desc2827.putInteger( id13880, 50 );
                    var id13881 = charIDToTypeID( "TrnS" );
                    list621.putObject( id13881, desc2827 );
                        var desc2828 = new ActionDescriptor();
                        var id13882 = charIDToTypeID( "Opct" );
                        var id13883 = charIDToTypeID( "#Prc" );
                        desc2828.putUnitDouble( id13882, id13883, 0.000000 );
                        var id13884 = charIDToTypeID( "Lctn" );
                        desc2828.putInteger( id13884, 4096 );
                        var id13885 = charIDToTypeID( "Mdpn" );
                        desc2828.putInteger( id13885, 50 );
                    var id13886 = charIDToTypeID( "TrnS" );
                    list621.putObject( id13886, desc2828 );
                desc2822.putList( id13876, list621 );
            var id13887 = charIDToTypeID( "Grdn" );
            desc2821.putObject( id13847, id13887, desc2822 );
        var id13888 = stringIDToTypeID( "gradientLayer" );
        desc2820.putObject( id13839, id13888, desc2821 );
    var id13889 = stringIDToTypeID( "contentLayer" );
    desc2819.putObject( id13832, id13889, desc2820 );
executeAction( id13829, desc2819, DialogModes.NO );

var centerLight = docRef.activeLayer;
centerLight.move(holgaSet, ElementPlacement.INSIDE);
centerLight.blendMode = BlendMode.SOFTLIGHT;


// Now do lens abberation layer
// =======================================================
var id2293 = charIDToTypeID( "Mk  " );
    var desc515 = new ActionDescriptor();
    var id2294 = charIDToTypeID( "null" );
        var ref400 = new ActionReference();
        var id2295 = stringIDToTypeID( "contentLayer" );
        ref400.putClass( id2295 );
    desc515.putReference( id2294, ref400 );
    var id2296 = charIDToTypeID( "Usng" );
        var desc516 = new ActionDescriptor();
        var id2297 = charIDToTypeID( "Nm  " );
        desc516.putString( id2297, "Holga Dark Lens Abberations" );
        var id2298 = charIDToTypeID( "Opct" );
        var id2299 = charIDToTypeID( "#Prc" );
        desc516.putUnitDouble( id2298, id2299, 30.000000 );
        var id2300 = charIDToTypeID( "Md  " );
        var id2301 = charIDToTypeID( "BlnM" );
        var id2302 = charIDToTypeID( "Ovrl" );
        desc516.putEnumerated( id2300, id2301, id2302 );
        var id2303 = charIDToTypeID( "Type" );
            var desc517 = new ActionDescriptor();
            var id2304 = charIDToTypeID( "Angl" );
            var id2305 = charIDToTypeID( "#Ang" );
            desc517.putUnitDouble( id2304, id2305, 90.000000 );
            var id2306 = charIDToTypeID( "Type" );
            var id2307 = charIDToTypeID( "GrdT" );
            var id2308 = charIDToTypeID( "Rdl " );
            desc517.putEnumerated( id2306, id2307, id2308 );
            var id2309 = charIDToTypeID( "Scl " );
            var id2310 = charIDToTypeID( "#Prc" );
            desc517.putUnitDouble( id2309, id2310, 120.000000 );
            var id2311 = charIDToTypeID( "Grad" );
                var desc518 = new ActionDescriptor();
                var id2312 = charIDToTypeID( "Nm  " );
                desc518.putString( id2312, "Custom" );
                var id2313 = charIDToTypeID( "GrdF" );
                var id2314 = charIDToTypeID( "GrdF" );
                var id2315 = charIDToTypeID( "ClNs" );
                desc518.putEnumerated( id2313, id2314, id2315 );
                var id2316 = charIDToTypeID( "ShTr" );
                desc518.putBoolean( id2316, true );
                var id2317 = charIDToTypeID( "VctC" );
                desc518.putBoolean( id2317, true );
                var id2318 = charIDToTypeID( "ClrS" );
                var id2319 = charIDToTypeID( "ClrS" );
                var id2320 = charIDToTypeID( "LbCl" );
                desc518.putEnumerated( id2318, id2319, id2320 );
                var id2321 = charIDToTypeID( "RndS" );
                desc518.putInteger( id2321, 1591981047 );
                var id2322 = charIDToTypeID( "Smth" );
                desc518.putInteger( id2322, 1434 );
                var id2323 = charIDToTypeID( "Mnm " );
                    var list206 = new ActionList();
                    list206.putInteger( 0 );
                    list206.putInteger( 50 );
                    list206.putInteger( 50 );
                    list206.putInteger( 0 );
                desc518.putList( id2323, list206 );
                var id2324 = charIDToTypeID( "Mxm " );
                    var list207 = new ActionList();
                    list207.putInteger( 50 );
                    list207.putInteger( 50 );
                    list207.putInteger( 51 );
                    list207.putInteger( 100 );
                desc518.putList( id2324, list207 );
            var id2325 = charIDToTypeID( "Grdn" );
            desc517.putObject( id2311, id2325, desc518 );
        var id2326 = stringIDToTypeID( "gradientLayer" );
        desc516.putObject( id2303, id2326, desc517 );
    var id2327 = stringIDToTypeID( "contentLayer" );
    desc515.putObject( id2296, id2327, desc516 );
executeAction( id2293, desc515, DialogModes.NO );





var abberation = docRef.activeLayer;
abberation.move(holgaSet, ElementPlacement.INSIDE);
abberation.blendMode = BlendMode.OVERLAY;
abberation.opacity = 43.0;


// Make Photo Filter layer for warming filter...
// =======================================================
var id14680 = charIDToTypeID( "Mk  " );
    var desc2997 = new ActionDescriptor();
    var id14681 = charIDToTypeID( "null" );
        var ref1753 = new ActionReference();
        var id14682 = charIDToTypeID( "AdjL" );
        ref1753.putClass( id14682 );
    desc2997.putReference( id14681, ref1753 );
    var id14683 = charIDToTypeID( "Usng" );
        var desc2998 = new ActionDescriptor();
        var id14684 = charIDToTypeID( "Type" );
            var desc2999 = new ActionDescriptor();
            var id14685 = charIDToTypeID( "Clr " );
                var desc3000 = new ActionDescriptor();
                var id14686 = charIDToTypeID( "H   " );
                var id14687 = charIDToTypeID( "#Ang" );
                desc3000.putUnitDouble( id14686, id14687, 44.000244 );
                var id14688 = charIDToTypeID( "Strt" );
                desc3000.putDouble( id14688, 91.999695 );
                var id14689 = charIDToTypeID( "Brgh" );
                desc3000.putDouble( id14689, 91.999695 );
            var id14690 = charIDToTypeID( "HSBC" );
            desc2999.putObject( id14685, id14690, desc3000 );
            var id14691 = charIDToTypeID( "Dnst" );
            desc2999.putInteger( id14691, 36 );
        var id14692 = stringIDToTypeID( "photoFilter" );
        desc2998.putObject( id14684, id14692, desc2999 );
    var id14693 = charIDToTypeID( "AdjL" );
    desc2997.putObject( id14683, id14693, desc2998 );
executeAction( id14680, desc2997, DialogModes.NO );

var warming = docRef.activeLayer;
warming.move(holgaSet, ElementPlacement.INSIDE);
warming.blendMode = BlendMode.NORMAL;
warming.opacity = 50.0;
warming.name = "Holga Warming Filter";

baseImage.applyAddNoise(maxDim / 250.0, NoiseDistribution.GAUSSIAN, true);
baseImage.applyRadialBlur(maxDim / 40.0, RadialBlurMethod.ZOOM, RadialBlurQuality.BEST);
filmBuckleBlur.applyAddNoise(maxDim / 200.0, NoiseDistribution.GAUSSIAN, true);

// Contrast Layer
// =======================================================
var id14796 = charIDToTypeID( "Mk  " );
    var desc3029 = new ActionDescriptor();
    var id14797 = charIDToTypeID( "null" );
        var ref1776 = new ActionReference();
        var id14798 = charIDToTypeID( "AdjL" );
        ref1776.putClass( id14798 );
    desc3029.putReference( id14797, ref1776 );
    var id14799 = charIDToTypeID( "Usng" );
        var desc3030 = new ActionDescriptor();
        var id14800 = charIDToTypeID( "Nm  " );
        desc3030.putString( id14800, "Holga Contrast" );
        var id14801 = charIDToTypeID( "Type" );
            var desc3031 = new ActionDescriptor();
            var id14802 = charIDToTypeID( "Brgh" );
            desc3031.putInteger( id14802, 5 );
            var id14803 = charIDToTypeID( "Cntr" );
            desc3031.putInteger( id14803, 5 );
        var id14804 = charIDToTypeID( "BrgC" );
        desc3030.putObject( id14801, id14804, desc3031 );
    var id14805 = charIDToTypeID( "AdjL" );
    desc3029.putObject( id14799, id14805, desc3030 );
executeAction( id14796, desc3029, DialogModes.NO );

var hContrast = docRef.activeLayer;
hContrast.move(holgaSet, ElementPlacement.INSIDE);

// Hue and Saturation
// =======================================================
var id14806 = charIDToTypeID( "Mk  " );
    var desc3032 = new ActionDescriptor();
    var id14807 = charIDToTypeID( "null" );
        var ref1777 = new ActionReference();
        var id14808 = charIDToTypeID( "AdjL" );
        ref1777.putClass( id14808 );
    desc3032.putReference( id14807, ref1777 );
    var id14809 = charIDToTypeID( "Usng" );
        var desc3033 = new ActionDescriptor();
        var id14810 = charIDToTypeID( "Nm  " );
        desc3033.putString( id14810, "Holga Saturation" );
        var id14811 = charIDToTypeID( "Type" );
            var desc3034 = new ActionDescriptor();
            var id14812 = charIDToTypeID( "Clrz" );
            desc3034.putBoolean( id14812, false );
            var id14813 = charIDToTypeID( "Adjs" );
                var list670 = new ActionList();
                    var desc3035 = new ActionDescriptor();
                    var id14814 = charIDToTypeID( "H   " );
                    desc3035.putInteger( id14814, 0 );
                    var id14815 = charIDToTypeID( "Strt" );
                    desc3035.putInteger( id14815, 20 );
                    var id14816 = charIDToTypeID( "Lght" );
                    desc3035.putInteger( id14816, 0 );
                var id14817 = charIDToTypeID( "Hst2" );
                list670.putObject( id14817, desc3035 );
            desc3034.putList( id14813, list670 );
        var id14818 = charIDToTypeID( "HStr" );
        desc3033.putObject( id14811, id14818, desc3034 );
    var id14819 = charIDToTypeID( "AdjL" );
    desc3032.putObject( id14809, id14819, desc3033 );
executeAction( id14806, desc3032, DialogModes.NO );

var hSaturation = docRef.activeLayer;
hSaturation.move(holgaSet, ElementPlacement.INSIDE);

// =======================================================
var id14976 = charIDToTypeID( "Mk  " );
    var desc3074 = new ActionDescriptor();
    var id14977 = charIDToTypeID( "null" );
        var ref1802 = new ActionReference();
        var id14978 = charIDToTypeID( "Lyr " );
        ref1802.putClass( id14978 );
    desc3074.putReference( id14977, ref1802 );
executeAction( id14976, desc3074, DialogModes.NO );

var lensFrame = docRef.activeLayer;
lensFrame.move(holgaSet, ElementPlacement.INSIDE);
lensFrame.blendMode = BlendMode.MULTIPLY;
lensFrame.opacity = ((Math.random() * 50.0) + 50);
lensFrame.name = "Holga Film Frame";

// =======================================================
var id14979 = charIDToTypeID( "setd" );
    var desc3075 = new ActionDescriptor();
    var id14980 = charIDToTypeID( "null" );
        var ref1803 = new ActionReference();
        var id14981 = charIDToTypeID( "Chnl" );
        var id14982 = charIDToTypeID( "fsel" );
        ref1803.putProperty( id14981, id14982 );
    desc3075.putReference( id14980, ref1803 );
    var id14983 = charIDToTypeID( "T   " );
    var id14984 = charIDToTypeID( "Ordn" );
    var id14985 = charIDToTypeID( "Al  " );
    desc3075.putEnumerated( id14983, id14984, id14985 );
executeAction( id14979, desc3075, DialogModes.NO );

// =======================================================
var id14986 = charIDToTypeID( "Brdr" );
    var desc3076 = new ActionDescriptor();
    var id14987 = charIDToTypeID( "Wdth" );
    var id14988 = charIDToTypeID( "#Pxl" );
    var bwidth = maxDim / 10.0;
    desc3076.putUnitDouble( id14987, id14988, bwidth );
executeAction( id14986, desc3076, DialogModes.NO );

// =======================================================
var id14989 = charIDToTypeID( "Fl  " );
    var desc3077 = new ActionDescriptor();
    var id14990 = charIDToTypeID( "Usng" );
    var id14991 = charIDToTypeID( "FlCn" );
    var id14992 = charIDToTypeID( "Clr " );
    desc3077.putEnumerated( id14990, id14991, id14992 );
    var id14993 = charIDToTypeID( "Clr " );
        var desc3078 = new ActionDescriptor();
        var id14994 = charIDToTypeID( "H   " );
        var id14995 = charIDToTypeID( "#Ang" );
        desc3078.putUnitDouble( id14994, id14995, 0.000000 );
        var id14996 = charIDToTypeID( "Strt" );
        desc3078.putDouble( id14996, 0.000000 );
        var id14997 = charIDToTypeID( "Brgh" );
        desc3078.putDouble( id14997, 0.000000 );
    var id14998 = charIDToTypeID( "HSBC" );
    desc3077.putObject( id14993, id14998, desc3078 );
    var id14999 = charIDToTypeID( "Opct" );
    var id15000 = charIDToTypeID( "#Prc" );
    desc3077.putUnitDouble( id14999, id15000, 100.000000 );
    var id15001 = charIDToTypeID( "Md  " );
    var id15002 = charIDToTypeID( "BlnM" );
    var id15003 = charIDToTypeID( "Nrml" );
    desc3077.putEnumerated( id15001, id15002, id15003 );
executeAction( id14989, desc3077, DialogModes.NO );

// =======================================================
var id15004 = charIDToTypeID( "setd" );
    var desc3079 = new ActionDescriptor();
    var id15005 = charIDToTypeID( "null" );
        var ref1804 = new ActionReference();
        var id15006 = charIDToTypeID( "Chnl" );
        var id15007 = charIDToTypeID( "fsel" );
        ref1804.putProperty( id15006, id15007 );
    desc3079.putReference( id15005, ref1804 );
    var id15008 = charIDToTypeID( "T   " );
    var id15009 = charIDToTypeID( "Ordn" );
    var id15010 = charIDToTypeID( "None" );
    desc3079.putEnumerated( id15008, id15009, id15010 );
executeAction( id15004, desc3079, DialogModes.NO );

// =======================================================
var id15011 = charIDToTypeID( "Trnf" );
    var desc3080 = new ActionDescriptor();
    var id15012 = charIDToTypeID( "null" );
        var ref1805 = new ActionReference();
        var id15013 = charIDToTypeID( "Lyr " );
        var id15014 = charIDToTypeID( "Ordn" );
        var id15015 = charIDToTypeID( "Trgt" );
        ref1805.putEnumerated( id15013, id15014, id15015 );
    desc3080.putReference( id15012, ref1805 );
    var id15016 = charIDToTypeID( "FTcs" );
    var id15017 = charIDToTypeID( "QCSt" );
    var id15018 = charIDToTypeID( "Qcsa" );
    desc3080.putEnumerated( id15016, id15017, id15018 );
    var id15019 = charIDToTypeID( "Ofst" );
        var desc3081 = new ActionDescriptor();
        var id15020 = charIDToTypeID( "Hrzn" );
        var id15021 = charIDToTypeID( "#Pxl" );
        desc3081.putUnitDouble( id15020, id15021, -2.593097 );
        var id15022 = charIDToTypeID( "Vrtc" );
        var id15023 = charIDToTypeID( "#Pxl" );
        desc3081.putUnitDouble( id15022, id15023, 16.202501 );
    var id15024 = charIDToTypeID( "Ofst" );
    desc3080.putObject( id15019, id15024, desc3081 );
    var id15025 = charIDToTypeID( "Wdth" );
    var id15026 = charIDToTypeID( "#Prc" );
    desc3080.putUnitDouble( id15025, id15026, 111.131408 );
    var id15027 = charIDToTypeID( "Hght" );
    var id15028 = charIDToTypeID( "#Prc" );
    desc3080.putUnitDouble( id15027, id15028, 105.882813 );
    var id15029 = charIDToTypeID( "Skew" );
        var desc3082 = new ActionDescriptor();
        var id15030 = charIDToTypeID( "Hrzn" );
        var id15031 = charIDToTypeID( "#Ang" );
        desc3082.putUnitDouble( id15030, id15031, -3.432201 );
        var id15032 = charIDToTypeID( "Vrtc" );
        var id15033 = charIDToTypeID( "#Ang" );
        desc3082.putUnitDouble( id15032, id15033, 0.000000 );
    var id15034 = charIDToTypeID( "Pnt " );
    desc3080.putObject( id15029, id15034, desc3082 );
    var id15035 = charIDToTypeID( "Angl" );
    var id15036 = charIDToTypeID( "#Ang" );
    desc3080.putUnitDouble( id15035, id15036, -1.651183 );
    var id15037 = charIDToTypeID( "Usng" );
        var desc3083 = new ActionDescriptor();
        var id15038 = charIDToTypeID( "Hrzn" );
        var id15039 = charIDToTypeID( "#Prc" );
        desc3083.putUnitDouble( id15038, id15039, -0.000685 );
        var id15040 = charIDToTypeID( "Vrtc" );
        var id15041 = charIDToTypeID( "#Prc" );
        desc3083.putUnitDouble( id15040, id15041, 0.002320 );
    var id15042 = charIDToTypeID( "Pnt " );
    desc3080.putObject( id15037, id15042, desc3083 );
executeAction( id15011, desc3080, DialogModes.NO );

// =======================================================
var id15043 = charIDToTypeID( "GsnB" );
    var desc3084 = new ActionDescriptor();
    var id15044 = charIDToTypeID( "Rds " );
    var id15045 = charIDToTypeID( "#Pxl" );
	blurAmount5 = maxDim / 100.0;
	if (blurAmount5 > 250)
		blurAmount5 = 250;
    desc3084.putUnitDouble( id15044, id15045,blurAmount5 );
executeAction( id15043, desc3084, DialogModes.NO );

var rotateAmount = (Math.random() * 7.5) - 2.5;
lensFrame.rotate(rotateAmount);

// Now do circular layer
// =======================================================
var id15046 = charIDToTypeID( "Mk  " );
    var desc3085 = new ActionDescriptor();
    var id15047 = charIDToTypeID( "null" );
        var ref1806 = new ActionReference();
        var id15048 = stringIDToTypeID( "contentLayer" );
        ref1806.putClass( id15048 );
    desc3085.putReference( id15047, ref1806 );
    var id15049 = charIDToTypeID( "Usng" );
        var desc3086 = new ActionDescriptor();
        var id15050 = charIDToTypeID( "Type" );
            var desc3087 = new ActionDescriptor();
            var id15051 = charIDToTypeID( "Rvrs" );
            desc3087.putBoolean( id15051, true );
            var id15052 = charIDToTypeID( "Angl" );
            var id15053 = charIDToTypeID( "#Ang" );
            desc3087.putUnitDouble( id15052, id15053, 90.000000 );
            var id15054 = charIDToTypeID( "Type" );
            var id15055 = charIDToTypeID( "GrdT" );
            var id15056 = charIDToTypeID( "Rdl " );
            desc3087.putEnumerated( id15054, id15055, id15056 );
            var id15057 = charIDToTypeID( "Scl " );
            var id15058 = charIDToTypeID( "#Prc" );
            desc3087.putUnitDouble( id15057, id15058, 150.000000 );
            var id15059 = charIDToTypeID( "Grad" );
                var desc3088 = new ActionDescriptor();
                var id15060 = charIDToTypeID( "Nm  " );
                desc3088.putString( id15060, "Custom" );
                var id15061 = charIDToTypeID( "GrdF" );
                var id15062 = charIDToTypeID( "GrdF" );
                var id15063 = charIDToTypeID( "CstS" );
                desc3088.putEnumerated( id15061, id15062, id15063 );
                var id15064 = charIDToTypeID( "Intr" );
                desc3088.putDouble( id15064, 4096.000000 );
                var id15065 = charIDToTypeID( "Clrs" );
                    var list682 = new ActionList();
                        var desc3089 = new ActionDescriptor();
                        var id15066 = charIDToTypeID( "Clr " );
                            var desc3090 = new ActionDescriptor();
                            var id15067 = charIDToTypeID( "Rd  " );
                            desc3090.putDouble( id15067, 0.000000 );
                            var id15068 = charIDToTypeID( "Grn " );
                            desc3090.putDouble( id15068, 0.000000 );
                            var id15069 = charIDToTypeID( "Bl  " );
                            desc3090.putDouble( id15069, 0.000000 );
                        var id15070 = charIDToTypeID( "RGBC" );
                        desc3089.putObject( id15066, id15070, desc3090 );
                        var id15071 = charIDToTypeID( "Type" );
                        var id15072 = charIDToTypeID( "Clry" );
                        var id15073 = charIDToTypeID( "UsrS" );
                        desc3089.putEnumerated( id15071, id15072, id15073 );
                        var id15074 = charIDToTypeID( "Lctn" );
                        desc3089.putInteger( id15074, 0 );
                        var id15075 = charIDToTypeID( "Mdpn" );
                        desc3089.putInteger( id15075, 50 );
                    var id15076 = charIDToTypeID( "Clrt" );
                    list682.putObject( id15076, desc3089 );
                        var desc3091 = new ActionDescriptor();
                        var id15077 = charIDToTypeID( "Clr " );
                            var desc3092 = new ActionDescriptor();
                            var id15078 = charIDToTypeID( "Rd  " );
                            desc3092.putDouble( id15078, 0.000000 );
                            var id15079 = charIDToTypeID( "Grn " );
                            desc3092.putDouble( id15079, 0.000000 );
                            var id15080 = charIDToTypeID( "Bl  " );
                            desc3092.putDouble( id15080, 0.000000 );
                        var id15081 = charIDToTypeID( "RGBC" );
                        desc3091.putObject( id15077, id15081, desc3092 );
                        var id15082 = charIDToTypeID( "Type" );
                        var id15083 = charIDToTypeID( "Clry" );
                        var id15084 = charIDToTypeID( "UsrS" );
                        desc3091.putEnumerated( id15082, id15083, id15084 );
                        var id15085 = charIDToTypeID( "Lctn" );
                        desc3091.putInteger( id15085, 4096 );
                        var id15086 = charIDToTypeID( "Mdpn" );
                        desc3091.putInteger( id15086, 50 );
                    var id15087 = charIDToTypeID( "Clrt" );
                    list682.putObject( id15087, desc3091 );
                desc3088.putList( id15065, list682 );
                var id15088 = charIDToTypeID( "Trns" );
                    var list683 = new ActionList();
                        var desc3093 = new ActionDescriptor();
                        var id15089 = charIDToTypeID( "Opct" );
                        var id15090 = charIDToTypeID( "#Prc" );
                        desc3093.putUnitDouble( id15089, id15090, 100.000000 );
                        var id15091 = charIDToTypeID( "Lctn" );
                        desc3093.putInteger( id15091, 0 );
                        var id15092 = charIDToTypeID( "Mdpn" );
                        desc3093.putInteger( id15092, 50 );
                    var id15093 = charIDToTypeID( "TrnS" );
                    list683.putObject( id15093, desc3093 );
                        var desc3094 = new ActionDescriptor();
                        var id15094 = charIDToTypeID( "Opct" );
                        var id15095 = charIDToTypeID( "#Prc" );
                        desc3094.putUnitDouble( id15094, id15095, 0.000000 );
                        var id15096 = charIDToTypeID( "Lctn" );
                        desc3094.putInteger( id15096, 1034 );
                        var id15097 = charIDToTypeID( "Mdpn" );
                        desc3094.putInteger( id15097, 50 );
                    var id15098 = charIDToTypeID( "TrnS" );
                    list683.putObject( id15098, desc3094 );
                        var desc3095 = new ActionDescriptor();
                        var id15099 = charIDToTypeID( "Opct" );
                        var id15100 = charIDToTypeID( "#Prc" );
                        desc3095.putUnitDouble( id15099, id15100, 0.000000 );
                        var id15101 = charIDToTypeID( "Lctn" );
                        desc3095.putInteger( id15101, 4096 );
                        var id15102 = charIDToTypeID( "Mdpn" );
                        desc3095.putInteger( id15102, 11 );
                    var id15103 = charIDToTypeID( "TrnS" );
                    list683.putObject( id15103, desc3095 );
                desc3088.putList( id15088, list683 );
            var id15104 = charIDToTypeID( "Grdn" );
            desc3087.putObject( id15059, id15104, desc3088 );
        var id15105 = stringIDToTypeID( "gradientLayer" );
        desc3086.putObject( id15050, id15105, desc3087 );
    var id15106 = stringIDToTypeID( "contentLayer" );
    desc3085.putObject( id15049, id15106, desc3086 );
executeAction( id15046, desc3085, DialogModes.NO );

var circFrame = docRef.activeLayer;
circFrame.move(holgaSet, ElementPlacement.INSIDE);
circFrame.blendMode = BlendMode.COLORBURN;
circFrame.opacity = 50.0;
circFrame.name = "Holga Lens Frame";

/*
var blurLayer = baseImage.duplicate(baseImage,ElementPlacement.PLACEBEFORE);
docRef.activeLayer = blurLayer;
blurLayer.blendMode = BlendMode.MULTIPLY;
blurLayer.opacity = 80.00;
blurLayer.name = "Holga Blur";


// =======================================================
var id18586 = charIDToTypeID( "slct" );
    var desc3756 = new ActionDescriptor();
    var id18587 = charIDToTypeID( "null" );
        var ref2084 = new ActionReference();
        var id18588 = charIDToTypeID( "Chnl" );
        var id18589 = charIDToTypeID( "Chnl" );
        var id18590 = charIDToTypeID( "Msk " );
        ref2084.putEnumerated( id18588, id18589, id18590 );
    desc3756.putReference( id18587, ref2084 );
executeAction( id18586, desc3756, DialogModes.NO );


// =======================================================
var id18223 = charIDToTypeID( "Grdn" );
    var desc3691 = new ActionDescriptor();
    var id18224 = charIDToTypeID( "From" );
        var desc3692 = new ActionDescriptor();
        var id18225 = charIDToTypeID( "Hrzn" );
        var id18226 = charIDToTypeID( "#Pxl" );
        desc3692.putUnitDouble( id18225, id18226, iw * 0.5 ); //1029.000000 );
        var id18227 = charIDToTypeID( "Vrtc" );
        var id18228 = charIDToTypeID( "#Pxl" );
        desc3692.putUnitDouble( id18227, id18228, ih * 0.5 ); //912.000000 );
    var id18229 = charIDToTypeID( "Pnt " );
    desc3691.putObject( id18224, id18229, desc3692 );
    var id18230 = charIDToTypeID( "T   " );
        var desc3693 = new ActionDescriptor();
        var id18231 = charIDToTypeID( "Hrzn" );
        var id18232 = charIDToTypeID( "#Pxl" );
        desc3693.putUnitDouble( id18231, id18232, maxDim * 0.1 );
        var id18233 = charIDToTypeID( "Vrtc" );
        var id18234 = charIDToTypeID( "#Pxl" );
        desc3693.putUnitDouble( id18233, id18234, maxDim * 0.1 );
    var id18235 = charIDToTypeID( "Pnt " );
    desc3691.putObject( id18230, id18235, desc3693 );
    var id18236 = charIDToTypeID( "Type" );
    var id18237 = charIDToTypeID( "GrdT" );
    var id18238 = charIDToTypeID( "Rdl " );
    desc3691.putEnumerated( id18236, id18237, id18238 );
    var id18239 = charIDToTypeID( "Dthr" );
    desc3691.putBoolean( id18239, true );
    var id18240 = charIDToTypeID( "UsMs" );
    desc3691.putBoolean( id18240, true );
    var id18241 = charIDToTypeID( "Rvrs" );
    desc3691.putBoolean( id18241, false );
    var id18242 = charIDToTypeID( "Grad" );
        var desc3694 = new ActionDescriptor();
        var id18243 = charIDToTypeID( "Nm  " );
        desc3694.putString( id18243, "Foreground to Background" );
        var id18244 = charIDToTypeID( "GrdF" );
        var id18245 = charIDToTypeID( "GrdF" );
        var id18246 = charIDToTypeID( "CstS" );
        desc3694.putEnumerated( id18244, id18245, id18246 );
        var id18247 = charIDToTypeID( "Intr" );
        desc3694.putDouble( id18247, 4096.000000 );
        var id18248 = charIDToTypeID( "Clrs" );
            var list813 = new ActionList();
                var desc3695 = new ActionDescriptor();
                var id18249 = charIDToTypeID( "Type" );
                var id18250 = charIDToTypeID( "Clry" );
                var id18251 = charIDToTypeID( "FrgC" );
                desc3695.putEnumerated( id18249, id18250, id18251 );
                var id18252 = charIDToTypeID( "Lctn" );
                desc3695.putInteger( id18252, 0 );
                var id18253 = charIDToTypeID( "Mdpn" );
                desc3695.putInteger( id18253, 50 );
            var id18254 = charIDToTypeID( "Clrt" );
            list813.putObject( id18254, desc3695 );
                var desc3696 = new ActionDescriptor();
                var id18255 = charIDToTypeID( "Type" );
                var id18256 = charIDToTypeID( "Clry" );
                var id18257 = charIDToTypeID( "BckC" );
                desc3696.putEnumerated( id18255, id18256, id18257 );
                var id18258 = charIDToTypeID( "Lctn" );
                desc3696.putInteger( id18258, 4096 );
                var id18259 = charIDToTypeID( "Mdpn" );
                desc3696.putInteger( id18259, 50 );
            var id18260 = charIDToTypeID( "Clrt" );
            list813.putObject( id18260, desc3696 );
        desc3694.putList( id18248, list813 );
        var id18261 = charIDToTypeID( "Trns" );
            var list814 = new ActionList();
                var desc3697 = new ActionDescriptor();
                var id18262 = charIDToTypeID( "Opct" );
                var id18263 = charIDToTypeID( "#Prc" );
                desc3697.putUnitDouble( id18262, id18263, 100.000000 );
                var id18264 = charIDToTypeID( "Lctn" );
                desc3697.putInteger( id18264, 0 );
                var id18265 = charIDToTypeID( "Mdpn" );
                desc3697.putInteger( id18265, 50 );
            var id18266 = charIDToTypeID( "TrnS" );
            list814.putObject( id18266, desc3697 );
                var desc3698 = new ActionDescriptor();
                var id18267 = charIDToTypeID( "Opct" );
                var id18268 = charIDToTypeID( "#Prc" );
                desc3698.putUnitDouble( id18267, id18268, 100.000000 );
                var id18269 = charIDToTypeID( "Lctn" );
                desc3698.putInteger( id18269, 4096 );
                var id18270 = charIDToTypeID( "Mdpn" );
                desc3698.putInteger( id18270, 50 );
            var id18271 = charIDToTypeID( "TrnS" );
            list814.putObject( id18271, desc3698 );
        desc3694.putList( id18261, list814 );
    var id18272 = charIDToTypeID( "Grdn" );
    desc3691.putObject( id18242, id18272, desc3694 );
executeAction( id18223, desc3691, DialogModes.NO );

// =======================================================
var id18641 = charIDToTypeID( "slct" );
    var desc3765 = new ActionDescriptor();
    var id18642 = charIDToTypeID( "null" );
        var ref2085 = new ActionReference();
        var id18643 = charIDToTypeID( "Chnl" );
        var id18644 = charIDToTypeID( "Chnl" );
        var id18645 = charIDToTypeID( "RGB " );
        ref2085.putEnumerated( id18643, id18644, id18645 );
    desc3765.putReference( id18642, ref2085 );
executeAction( id18641, desc3765, DialogModes.NO );

// =======================================================
var id18646 = charIDToTypeID( "Bokh" );
    var desc3766 = new ActionDescriptor();
    var id18647 = charIDToTypeID( "BkDi" );
    var id18648 = charIDToTypeID( "BtDi" );
    var id18649 = charIDToTypeID( "BeIt" );
    desc3766.putEnumerated( id18647, id18648, id18649 );
    var id18650 = charIDToTypeID( "BkDc" );
    var id18651 = charIDToTypeID( "BtDc" );
    var id18652 = charIDToTypeID( "BeCm" );
    desc3766.putEnumerated( id18650, id18651, id18652 );
    var id18653 = charIDToTypeID( "BkDp" );
    desc3766.putInteger( id18653, 0 );
    var id18654 = charIDToTypeID( "BkDs" );
    desc3766.putBoolean( id18654, false );
    var id18655 = charIDToTypeID( "BkIs" );
    var id18656 = charIDToTypeID( "BtIs" );
    var id18657 = charIDToTypeID( "BeS8" );
    desc3766.putEnumerated( id18655, id18656, id18657 );
    var id18658 = charIDToTypeID( "BkIb" );
    desc3766.putDouble( id18658, maxDim * 0.1 );
    var id18659 = charIDToTypeID( "BkIc" );
    desc3766.putInteger( id18659, 47 );
    var id18660 = charIDToTypeID( "BkIr" );
    desc3766.putInteger( id18660, 0 );
    var id18661 = charIDToTypeID( "BkSb" );
    desc3766.putDouble( id18661, 1.000000 );
    var id18662 = charIDToTypeID( "BkSt" );
    desc3766.putInteger( id18662, 213 );
    var id18663 = charIDToTypeID( "BkNa" );
    desc3766.putInteger( id18663, maxDim * 0.01 );
    var id18664 = charIDToTypeID( "BkNt" );
    var id18665 = charIDToTypeID( "BtNt" );
    var id18666 = charIDToTypeID( "BeNu" );
    desc3766.putEnumerated( id18664, id18665, id18666 );
    var id18667 = charIDToTypeID( "BkNm" );
    desc3766.putBoolean( id18667, true );
executeAction( id18646, desc3766, DialogModes.NO );
*/


/*
// =======================================================
var id390 = charIDToTypeID( "Mk  " );
    var desc82 = new ActionDescriptor();
    var id391 = charIDToTypeID( "null" );
        var ref49 = new ActionReference();
        var id392 = stringIDToTypeID( "contentLayer" );
        ref49.putClass( id392 );
    desc82.putReference( id391, ref49 );
    var id393 = charIDToTypeID( "Usng" );
        var desc83 = new ActionDescriptor();
        var id394 = charIDToTypeID( "Nm  " );
        desc83.putString( id394, "Holga Lens Abberations" );
        var id395 = charIDToTypeID( "Opct" );
        var id396 = charIDToTypeID( "#Prc" );
        desc83.putUnitDouble( id395, id396, 50.000000 );
        var id397 = charIDToTypeID( "Md  " );
        var id398 = charIDToTypeID( "BlnM" );
        var id399 = charIDToTypeID( "SftL" );
        desc83.putEnumerated( id397, id398, id399 );
        var id400 = charIDToTypeID( "Type" );
            var desc84 = new ActionDescriptor();
            var id401 = charIDToTypeID( "Angl" );
            var id402 = charIDToTypeID( "#Ang" );
            desc84.putUnitDouble( id401, id402, 90.000000 );
            var id403 = charIDToTypeID( "Type" );
            var id404 = charIDToTypeID( "GrdT" );
            var id405 = charIDToTypeID( "Rdl " );
            desc84.putEnumerated( id403, id404, id405 );
            var id406 = charIDToTypeID( "Scl " );
            var id407 = charIDToTypeID( "#Prc" );
            desc84.putUnitDouble( id406, id407, 134.000000 );
            var id408 = charIDToTypeID( "Grad" );
                var desc85 = new ActionDescriptor();
                var id409 = charIDToTypeID( "Nm  " );
                desc85.putString( id409, "Custom" );
                var id410 = charIDToTypeID( "GrdF" );
                var id411 = charIDToTypeID( "GrdF" );
                var id412 = charIDToTypeID( "ClNs" );
                desc85.putEnumerated( id410, id411, id412 );
                var id413 = charIDToTypeID( "ShTr" );
                desc85.putBoolean( id413, true );
                var id414 = charIDToTypeID( "VctC" );
                desc85.putBoolean( id414, true );
                var id415 = charIDToTypeID( "ClrS" );
                var id416 = charIDToTypeID( "ClrS" );
                var id417 = charIDToTypeID( "LbCl" );
                desc85.putEnumerated( id415, id416, id417 );
                var id418 = charIDToTypeID( "RndS" );
                desc85.putInteger( id418, Math.random() * 100000 );
                var id419 = charIDToTypeID( "Smth" );
                desc85.putInteger( id419, 1638 );
                var id420 = charIDToTypeID( "Mnm " );
                    var list22 = new ActionList();
                    list22.putInteger( 0 );
                    list22.putInteger( 50 );
                    list22.putInteger( 43 );
                    list22.putInteger( 0 );
                desc85.putList( id420, list22 );
                var id421 = charIDToTypeID( "Mxm " );
                    var list23 = new ActionList();
                    list23.putInteger( 100 );
                    list23.putInteger( 57 );
                    list23.putInteger( 59 );
                    list23.putInteger( 100 );
                desc85.putList( id421, list23 );
            var id422 = charIDToTypeID( "Grdn" );
            desc84.putObject( id408, id422, desc85 );
        var id423 = stringIDToTypeID( "gradientLayer" );
        desc83.putObject( id400, id423, desc84 );
    var id424 = stringIDToTypeID( "contentLayer" );
    desc82.putObject( id393, id424, desc83 );
executeAction( id390, desc82, DialogModes.NO );


var lightAber = docRef.activeLayer;
lightAber.opacity = 70.0;
lightAber.move(centerLight, ElementPlacement.PLACEBEFORE);
*/

// Now do color light leaks if it is color film....
// =======================================================
var id709 = charIDToTypeID( "Mk  " );
    var desc152 = new ActionDescriptor();
    var id710 = charIDToTypeID( "null" );
        var ref95 = new ActionReference();
        var id711 = stringIDToTypeID( "contentLayer" );
        ref95.putClass( id711 );
    desc152.putReference( id710, ref95 );
    var id712 = charIDToTypeID( "Usng" );
        var desc153 = new ActionDescriptor();
        var id713 = charIDToTypeID( "Nm  " );
        desc153.putString( id713, "Color Light Leaks" );
        var id714 = charIDToTypeID( "Md  " );
        var id715 = charIDToTypeID( "BlnM" );
        var id716 = charIDToTypeID( "SftL" );
        desc153.putEnumerated( id714, id715, id716 );
        var id717 = charIDToTypeID( "Type" );
            var desc154 = new ActionDescriptor();
            var id718 = charIDToTypeID( "Angl" );
            var id719 = charIDToTypeID( "#Ang" );
            desc154.putUnitDouble( id718, id719, 90.000000 );
            var id720 = charIDToTypeID( "Type" );
            var id721 = charIDToTypeID( "GrdT" );
            var id722 = charIDToTypeID( "Rdl " );
            desc154.putEnumerated( id720, id721, id722 );
            var id723 = charIDToTypeID( "Scl " );
            var id724 = charIDToTypeID( "#Prc" );
            desc154.putUnitDouble( id723, id724, 150.000000 );
            var id725 = charIDToTypeID( "Grad" );
                var desc155 = new ActionDescriptor();
                var id726 = charIDToTypeID( "Nm  " );
                desc155.putString( id726, "Color Light Leaks" );
                var id727 = charIDToTypeID( "GrdF" );
                var id728 = charIDToTypeID( "GrdF" );
                var id729 = charIDToTypeID( "ClNs" );
                desc155.putEnumerated( id727, id728, id729 );
                var id730 = charIDToTypeID( "ShTr" );
                desc155.putBoolean( id730, true );
                var id731 = charIDToTypeID( "VctC" );
                desc155.putBoolean( id731, true );
                var id732 = charIDToTypeID( "ClrS" );
                var id733 = charIDToTypeID( "ClrS" );
                var id734 = charIDToTypeID( "LbCl" );
                desc155.putEnumerated( id732, id733, id734 );
                var id735 = charIDToTypeID( "RndS" );
                desc155.putInteger( id735, 870329188 );
                var id736 = charIDToTypeID( "Smth" );
                desc155.putInteger( id736, 819 );
                var id737 = charIDToTypeID( "Mnm " );
                    var list35 = new ActionList();
                    list35.putInteger( 0 );
                    list35.putInteger( 49 );
                    list35.putInteger( 30 );
                    list35.putInteger( 0 );
                desc155.putList( id737, list35 );
                var id738 = charIDToTypeID( "Mxm " );
                    var list36 = new ActionList();
                    list36.putInteger( 23 );
                    list36.putInteger( 100 );
                    list36.putInteger( 50 );
                    list36.putInteger( 100 );
                desc155.putList( id738, list36 );
            var id739 = charIDToTypeID( "Grdn" );
            desc154.putObject( id725, id739, desc155 );
        var id740 = stringIDToTypeID( "gradientLayer" );
        desc153.putObject( id717, id740, desc154 );
    var id741 = stringIDToTypeID( "contentLayer" );
    desc152.putObject( id712, id741, desc153 );
executeAction( id709, desc152, DialogModes.NO );

var colorLeaks = docRef.activeLayer;
colorLeaks.opacity = 50.0;
colorLeaks.move(holgaSet, ElementPlacement.INSIDE);

lightLeaksSet.blendMode = BlendMode.OVERLAY;



// =======================================================
var id1960 = charIDToTypeID( "slct" );
    var desc441 = new ActionDescriptor();
    var id1961 = charIDToTypeID( "null" );
        var ref348 = new ActionReference();
        var id1962 = charIDToTypeID( "Lyr " );
        ref348.putName( id1962, "Holga Effects" );
    desc441.putReference( id1961, ref348 );
executeAction( id1960, desc441, DialogModes.NO );

// Do a levels at the end so that there is something to edit.
// =======================================================
var id1963 = charIDToTypeID( "Mk  " );
    var desc442 = new ActionDescriptor();
    var id1964 = charIDToTypeID( "null" );
        var ref349 = new ActionReference();
        var id1965 = charIDToTypeID( "AdjL" );
        ref349.putClass( id1965 );
    desc442.putReference( id1964, ref349 );
    var id1966 = charIDToTypeID( "Usng" );
        var desc443 = new ActionDescriptor();
        var id1967 = charIDToTypeID( "Type" );
            var desc444 = new ActionDescriptor();
            var id1968 = charIDToTypeID( "Adjs" );
                var list179 = new ActionList();
                    var desc445 = new ActionDescriptor();
                    var id1969 = charIDToTypeID( "Chnl" );
                        var ref350 = new ActionReference();
                        var id1970 = charIDToTypeID( "Chnl" );
                        var id1971 = charIDToTypeID( "Chnl" );
                        var id1972 = charIDToTypeID( "Cmps" );
                        ref350.putEnumerated( id1970, id1971, id1972 );
                    desc445.putReference( id1969, ref350 );
                    var id1973 = charIDToTypeID( "AuCo" );
                    desc445.putBoolean( id1973, true );
                var id1974 = charIDToTypeID( "LvlA" );
                list179.putObject( id1974, desc445 );
            desc444.putList( id1968, list179 );
        var id1975 = charIDToTypeID( "Lvls" );
        desc443.putObject( id1967, id1975, desc444 );
    var id1976 = charIDToTypeID( "AdjL" );
    desc442.putObject( id1966, id1976, desc443 );
executeAction( id1963, desc442, DialogModes.NO );
}

function border1() {
// Set Adobe(r) Photoshop(r) to use pixels
var startRulerUnits = app.preferences.rulerUnits 
var startTypeUnits = app.preferences.typeUnits 


app.preferences.rulerUnits = Units.PIXELS 
app.preferences.typeUnits = TypeUnits.PIXELS 

// Get a reference to the working document
var docRef = app.activeDocument;

// Flatten the document
docRef.flatten();

// Transform background into a layer
docRef.activeLayer.isBackgroundLayer = false;
docRef.activeLayer.name = "Original picture";
				
// Add a layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "White Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a white colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 255;
fillColor.rgb.green = 255;
fillColor.rgb.blue = 255;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;

// Add a another layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Black Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a black colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 0;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 0;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;
}

function addBorder1(inPanelLocation)
{
    // Set Adobe(r) Photoshop(r) to use pixels
var startRulerUnits = app.preferences.rulerUnits 
var startTypeUnits = app.preferences.typeUnits 


app.preferences.rulerUnits = Units.PIXELS 
app.preferences.typeUnits = TypeUnits.PIXELS 

// Get a reference to the working document
var docRef = app.activeDocument;

// Flatten the document
docRef.flatten();

// Transform background into a layer
docRef.activeLayer.isBackgroundLayer = false;
docRef.activeLayer.name = "Original picture";
				
// Add a layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "White Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a white colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 255;
fillColor.rgb.green = 255;
fillColor.rgb.blue = 255;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;

// Add a another layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Black Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a black colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 0;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 0;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;
    
    ///open border
	var idOpn = charIDToTypeID( "Opn " );
    var desc176 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc176.putPath( idnull, new File( inPanelLocation + "/assets/borders/EFXDAR003.png") );
	executeAction( idOpn, desc176, DialogModes.NO );
    
    //get a a reference to the picture
var maskDoc = app.activeDocument;

//Transform background into a layer and renamed it
maskDoc.activeLayer.isBackgroundLayer = false;
maskDoc.activeLayer.name = "Layer mask";

//Determine if the working document is a landscape or portrait format, if it is a landscape the document used to be a mask layer is rotated
			
if (docRef.width.value > docRef.height.value)
			{
			maskDoc.rotateCanvas(-90);
			}
		
// The document "Layer mask" is resized to fit the working document
maskDoc.resizeImage (docRef.width, docRef.height);

// Copy the document "Layer mask"
maskDoc.activeLayer.copy();

// Close the document "Layer mask" without saving it
maskDoc.close(SaveOptions.DONOTSAVECHANGES);
    
    //---------------------------------------------------
//Add a layer mask 
//---------------------------------------------------
var idslct = charIDToTypeID( "slct" );
    var desc1 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Original picture" );
    desc1.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc1.putBoolean( idMkVs, false );
executeAction( idslct, desc1, DialogModes.NO );

//---------------------------------------------------
var idMk = charIDToTypeID( "Mk  " );
    var desc2 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var idChnl = charIDToTypeID( "Chnl" );
    desc2.putClass( idNw, idChnl );
    var idAt = charIDToTypeID( "At  " );
        var ref2 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idMsk = charIDToTypeID( "Msk " );
        ref2.putEnumerated( idChnl, idChnl, idMsk );
    desc2.putReference( idAt, ref2 );
    var idUsng = charIDToTypeID( "Usng" );
    var idUsrM = charIDToTypeID( "UsrM" );
    var idHdAl = charIDToTypeID( "HdAl" );
    desc2.putEnumerated( idUsng, idUsrM, idHdAl );
executeAction( idMk, desc2, DialogModes.NO );

//---------------------------------------------------
var idShw = charIDToTypeID( "Shw " );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list1 = new ActionList();
            var ref3 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref3.putEnumerated( idChnl, idOrdn, idTrgt );
        list1.putReference( ref3 );
    desc3.putList( idnull, list1 );
executeAction( idShw, desc3, DialogModes.NO );

//---------------------------------------------------
var idpast = charIDToTypeID( "past" );
    var desc4 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc4.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc4, DialogModes.NO );

//---------------------------------------------------
var idsetd = charIDToTypeID( "setd" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref4.putProperty( idChnl, idfsel );
    desc5.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc5.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc5, DialogModes.NO );

//---------------------------------------------------
var idHd = charIDToTypeID( "Hd  " );
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list2 = new ActionList();
            var ref5 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref5.putEnumerated( idChnl, idOrdn, idTrgt );
        list2.putReference( ref5 );
    desc6.putList( idnull, list2 );
executeAction( idHd, desc6, DialogModes.NO );

//---------------------------------------------------
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref6 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref6.putEnumerated( idLyr, idOrdn, idTrgt );
    desc7.putReference( idnull, ref6 );
    var idT = charIDToTypeID( "T   " );
        var desc8 = new ActionDescriptor();
        var idUsrs = charIDToTypeID( "Usrs" );
        desc8.putBoolean( idUsrs, false );
    var idLyr = charIDToTypeID( "Lyr " );
    desc7.putObject( idT, idLyr, desc8 );
executeAction( idsetd, desc7, DialogModes.NO );

}

function addBorder2(inPanelLocation)
{
    // Set Adobe(r) Photoshop(r) to use pixels
var startRulerUnits = app.preferences.rulerUnits 
var startTypeUnits = app.preferences.typeUnits 


app.preferences.rulerUnits = Units.PIXELS 
app.preferences.typeUnits = TypeUnits.PIXELS 

// Get a reference to the working document
var docRef = app.activeDocument;

// Flatten the document
docRef.flatten();

// Transform background into a layer
docRef.activeLayer.isBackgroundLayer = false;
docRef.activeLayer.name = "Original picture";
				
// Add a layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "White Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a white colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 255;
fillColor.rgb.green = 255;
fillColor.rgb.blue = 255;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;

// Add a another layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Black Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a black colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 0;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 0;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;
    
    ///open border
	var idOpn = charIDToTypeID( "Opn " );
    var desc176 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc176.putPath( idnull, new File( inPanelLocation + "/assets/borders/EFXDAR014.png") );
	executeAction( idOpn, desc176, DialogModes.NO );
    
    //get a a reference to the picture
var maskDoc = app.activeDocument;

//Transform background into a layer and renamed it
maskDoc.activeLayer.isBackgroundLayer = false;
maskDoc.activeLayer.name = "Layer mask";

//Determine if the working document is a landscape or portrait format, if it is a landscape the document used to be a mask layer is rotated
			
if (docRef.width.value > docRef.height.value)
			{
			maskDoc.rotateCanvas(-90);
			}
		
// The document "Layer mask" is resized to fit the working document
maskDoc.resizeImage (docRef.width, docRef.height);

// Copy the document "Layer mask"
maskDoc.activeLayer.copy();

// Close the document "Layer mask" without saving it
maskDoc.close(SaveOptions.DONOTSAVECHANGES);
    
    //---------------------------------------------------
//Add a layer mask 
//---------------------------------------------------
var idslct = charIDToTypeID( "slct" );
    var desc1 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Original picture" );
    desc1.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc1.putBoolean( idMkVs, false );
executeAction( idslct, desc1, DialogModes.NO );

//---------------------------------------------------
var idMk = charIDToTypeID( "Mk  " );
    var desc2 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var idChnl = charIDToTypeID( "Chnl" );
    desc2.putClass( idNw, idChnl );
    var idAt = charIDToTypeID( "At  " );
        var ref2 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idMsk = charIDToTypeID( "Msk " );
        ref2.putEnumerated( idChnl, idChnl, idMsk );
    desc2.putReference( idAt, ref2 );
    var idUsng = charIDToTypeID( "Usng" );
    var idUsrM = charIDToTypeID( "UsrM" );
    var idHdAl = charIDToTypeID( "HdAl" );
    desc2.putEnumerated( idUsng, idUsrM, idHdAl );
executeAction( idMk, desc2, DialogModes.NO );

//---------------------------------------------------
var idShw = charIDToTypeID( "Shw " );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list1 = new ActionList();
            var ref3 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref3.putEnumerated( idChnl, idOrdn, idTrgt );
        list1.putReference( ref3 );
    desc3.putList( idnull, list1 );
executeAction( idShw, desc3, DialogModes.NO );

//---------------------------------------------------
var idpast = charIDToTypeID( "past" );
    var desc4 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc4.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc4, DialogModes.NO );

//---------------------------------------------------
var idsetd = charIDToTypeID( "setd" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref4.putProperty( idChnl, idfsel );
    desc5.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc5.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc5, DialogModes.NO );

//---------------------------------------------------
var idHd = charIDToTypeID( "Hd  " );
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list2 = new ActionList();
            var ref5 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref5.putEnumerated( idChnl, idOrdn, idTrgt );
        list2.putReference( ref5 );
    desc6.putList( idnull, list2 );
executeAction( idHd, desc6, DialogModes.NO );

//---------------------------------------------------
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref6 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref6.putEnumerated( idLyr, idOrdn, idTrgt );
    desc7.putReference( idnull, ref6 );
    var idT = charIDToTypeID( "T   " );
        var desc8 = new ActionDescriptor();
        var idUsrs = charIDToTypeID( "Usrs" );
        desc8.putBoolean( idUsrs, false );
    var idLyr = charIDToTypeID( "Lyr " );
    desc7.putObject( idT, idLyr, desc8 );
executeAction( idsetd, desc7, DialogModes.NO );

}

function addBorder3(inPanelLocation)
{
    // Set Adobe(r) Photoshop(r) to use pixels
var startRulerUnits = app.preferences.rulerUnits 
var startTypeUnits = app.preferences.typeUnits 


app.preferences.rulerUnits = Units.PIXELS 
app.preferences.typeUnits = TypeUnits.PIXELS 

// Get a reference to the working document
var docRef = app.activeDocument;

// Flatten the document
docRef.flatten();

// Transform background into a layer
docRef.activeLayer.isBackgroundLayer = false;
docRef.activeLayer.name = "Original picture";
				
// Add a layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "White Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a white colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 255;
fillColor.rgb.green = 255;
fillColor.rgb.blue = 255;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;

// Add a another layer and renamed it
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Black Background";
layerBackground.moveToEnd(docRef); // move this layer to end 

// Fill the layer with a black colour
var selRef = app.activeDocument.selection;
var fillColor = new SolidColor();
fillColor.rgb.red  = 0;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 0;
selRef.fill( fillColor, ColorBlendMode.NORMAL, 100, false );
selRef = null;
fillColor = null;
    
    ///open border
	var idOpn = charIDToTypeID( "Opn " );
    var desc176 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc176.putPath( idnull, new File( inPanelLocation + "/assets/borders/EFXDAR021.png") );
	executeAction( idOpn, desc176, DialogModes.NO );
    
    //get a a reference to the picture
var maskDoc = app.activeDocument;

//Transform background into a layer and renamed it
maskDoc.activeLayer.isBackgroundLayer = false;
maskDoc.activeLayer.name = "Layer mask";

//Determine if the working document is a landscape or portrait format, if it is a landscape the document used to be a mask layer is rotated
			
if (docRef.width.value > docRef.height.value)
			{
			maskDoc.rotateCanvas(-90);
			}
		
// The document "Layer mask" is resized to fit the working document
maskDoc.resizeImage (docRef.width, docRef.height);

// Copy the document "Layer mask"
maskDoc.activeLayer.copy();

// Close the document "Layer mask" without saving it
maskDoc.close(SaveOptions.DONOTSAVECHANGES);
    
    //---------------------------------------------------
//Add a layer mask 
//---------------------------------------------------
var idslct = charIDToTypeID( "slct" );
    var desc1 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Original picture" );
    desc1.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc1.putBoolean( idMkVs, false );
executeAction( idslct, desc1, DialogModes.NO );

//---------------------------------------------------
var idMk = charIDToTypeID( "Mk  " );
    var desc2 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var idChnl = charIDToTypeID( "Chnl" );
    desc2.putClass( idNw, idChnl );
    var idAt = charIDToTypeID( "At  " );
        var ref2 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idMsk = charIDToTypeID( "Msk " );
        ref2.putEnumerated( idChnl, idChnl, idMsk );
    desc2.putReference( idAt, ref2 );
    var idUsng = charIDToTypeID( "Usng" );
    var idUsrM = charIDToTypeID( "UsrM" );
    var idHdAl = charIDToTypeID( "HdAl" );
    desc2.putEnumerated( idUsng, idUsrM, idHdAl );
executeAction( idMk, desc2, DialogModes.NO );

//---------------------------------------------------
var idShw = charIDToTypeID( "Shw " );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list1 = new ActionList();
            var ref3 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref3.putEnumerated( idChnl, idOrdn, idTrgt );
        list1.putReference( ref3 );
    desc3.putList( idnull, list1 );
executeAction( idShw, desc3, DialogModes.NO );

//---------------------------------------------------
var idpast = charIDToTypeID( "past" );
    var desc4 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc4.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc4, DialogModes.NO );

//---------------------------------------------------
var idsetd = charIDToTypeID( "setd" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref4.putProperty( idChnl, idfsel );
    desc5.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc5.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc5, DialogModes.NO );

//---------------------------------------------------
var idHd = charIDToTypeID( "Hd  " );
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list2 = new ActionList();
            var ref5 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref5.putEnumerated( idChnl, idOrdn, idTrgt );
        list2.putReference( ref5 );
    desc6.putList( idnull, list2 );
executeAction( idHd, desc6, DialogModes.NO );

//---------------------------------------------------
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref6 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref6.putEnumerated( idLyr, idOrdn, idTrgt );
    desc7.putReference( idnull, ref6 );
    var idT = charIDToTypeID( "T   " );
        var desc8 = new ActionDescriptor();
        var idUsrs = charIDToTypeID( "Usrs" );
        desc8.putBoolean( idUsrs, false );
    var idLyr = charIDToTypeID( "Lyr " );
    desc7.putObject( idT, idLyr, desc8 );
executeAction( idsetd, desc7, DialogModes.NO );

}

function showBlackBorder() {
    showBlackLayer = app.activeDocument.layers.getByName("Black Background");
    showBlackLayer.visible = true;
    hideWhiteLayer = app.activeDocument.layers.getByName("White Background");
    hideWhiteLayer.visible = false;
}

function showWhiteBorder() {
    showWhiteLayer = app.activeDocument.layers.getByName("White Background");
    showWhiteLayer.visible = true;
    hideBlackLayer = app.activeDocument.layers.getByName("Black Background");
    hideBlackLayer.visible = false;  
}