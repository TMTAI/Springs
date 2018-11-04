/**phatvt:handle ajax global*/
$(document).bind("ajaxSend", function(){
    blockbg();
 }).bind("ajaxComplete", function(){
	unblockbg();
 }).bind("ajaxSuccess", function(){
	 unblockbg();
 }).bind("ajaxError", function(xhr, textStatus, error){
	 unblockbg();
	 console.log(xhr);
	 console.log(textStatus);
	 console.log(error);
 });
/**
 * Redirect url method GET
 * 
 * @param url
 * @returns
 */
function redirect(url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like IE8 & lower does)
    else { 
        window.location.href = url; 
    }
}

/**
 * Open popup confirm
 * 
 * @param msgConfirm
 * @param methodCallback
 * @returns
 */
function popupConfirm( msgConfirm, methodCallback) {
	bootbox.setLocale( APP_LOCALE );
	return bootbox.confirm( msgConfirm, methodCallback ); 
}

/**
 * Open popup confirm
 * 
 * @param msgConfirm
 * @param methodCallback
 * @returns
 */
function popupConfirmWithButtons( msgConfirm, buttons, methodCallback) {
	bootbox.setLocale( APP_LOCALE );
	
	return bootbox.confirm({
		message: msgConfirm,
	    buttons: buttons,
	    callback: methodCallback
	}); 
}

/**
 * Open popup alert
 * 
 * @param msgAlert
 * @returns
 */
function popupAlert( msgAlert ) {
	bootbox.setLocale( APP_LOCALE );
	return bootbox.alert( msgAlert ); 
}

/**
 * Submit form with url and data
 * @param url
 * @param data
 * @returns
 */
function makePostRequest( url, data ) {
	var newForm = jQuery("<form>", {
        'action' : url,
        'method' : 'POST'
    });
	
	// add fields
	for (name in data) {
		newForm.append(jQuery("<input>", {	
	        "name" : name,
	        "value": data[name],
	        "type" : "hidden"
	    }));
	}
	
	// _csrf must be add in <head>
    var token = $("meta[name='_csrf']").attr("content");
    var csrfToken = $(document.createElement('input'));
    $(csrfToken).attr("type", "hidden");
    $(csrfToken).attr("name", "_csrf");
    $(csrfToken).val(token);
    $(newForm).append($(csrfToken));
	
	newForm.appendTo(document.body);
	newForm.submit();
}

/**
 * Validation checked list
 * @param elementList
 * @returns boolean
 */
function validationCheckedList( elementList ) {
	var isChecked = true;
	
	$(elementList).each(function() {
    	if( $(this).is(':checked') == false ) {
    		isChecked = false;
    		return false;
    	};
	});
	
	return isChecked;
}

function parseNumber2(valStr) {
	if ($.trim(valStr).length > 0) {
		valStr = $.parseNumber(valStr, {
			format : FORMAT_NUMBER,
			locale : APP_LOCALE
		});
		return parseFloat(valStr);
	} else {
		return 0;
	}
}

function openPopup( id, url, typeSubmit , data, callBack ) {
	var idRandom = Date.parse(new Date());
	var idPopup = "popup-" + id;
	var idModal = "popup-modal-" + id;
	
	$.ajax({
        url : url,
        type: typeSubmit,
        data : data,
        success:function(data, textStatus, jqXHR) {
        	
        	if( $("body").has("div#"+idPopup).length == 0 ) {
        		
        		var divPopup = $("<div>", {	
                    "id" : idPopup
                });
            	
            	divPopup.append($("<div>", {
            		"id"       : idModal,
                    "class"    : "modal modal-custom fade",
                    "tabindex" : "-1",
                    "role"     : "dialog"
                }));
            	
            	$("body").append(divPopup);
        	}
        	
        	$("#"+idModal).html(data);
        	$("#"+idModal).modal('show');
        	
        	if ( $.isFunction( callBack ) ) {
        		callBack( idModal );
            }
        },
		error : function(xhr, textStatus, error) {
			console.log(xhr);
			console.log(textStatus);
			console.log(error);
		}
    });
	
	return [idPopup, idModal];
}

function formatNumber(element, formatNumber) {
	if( formatNumber == null || formatNumber == '' ) {
		formatNumber = FORMAT_NUMBER;
	}
	
    $(element).parseNumber({format: formatNumber, locale: APP_LOCALE});
    $(element).formatNumber({format: formatNumber, locale: APP_LOCALE});
}

function openProcessImage(processId, processIntanceId, borrowRequestId, isProcessCurrent) {
	var ajaxUrl = BASE_URL + 'jbpm/deployment/processes/model';
	var data= {
		'processId'    : processId,
		'processIntanceId': processIntanceId,
		'borrowRequestId' : borrowRequestId,
		'isProcessCurrent': isProcessCurrent
	}
	openPopup( "popupProcessModal", ajaxUrl, "GET", data, null );
}

function openHistoryApprove(referenceId, referenceType) {
	var ajaxUrl = BASE_URL + 'popup/history_approve/view';
	var data= {
		'referenceId'    : referenceId,
		'referenceType'  : referenceType,
	}
	openPopup( "popupHistoryAprove", ajaxUrl, "GET", data, null );
}

function changeLang(url, lang) {
	var pathname = $(location).attr('pathname');
	var param = $(location).attr('search');
	
	if(param.length > 0){
		if(param[0] == "?"){
			param = param.substring(1, param.length);
 		}
		if(param.lastIndexOf("lang=") != -1){
			param = param.substring(0, param.lastIndexOf("lang="));
		}

		while(param.lastIndexOf("&") != -1){
			param = param.replace('&',',');
		};
 		
	}
	window.location = BASE_URL+"change/lang?lang=" + lang + "&url=" + pathname + "&param=" + param;
}

/**
 *  InitPlupload
 * @param browse_button
 * @param container
 * @param uploadUrl 
 * @param multi_selection
 * @param max_file_size
 * @param mime_types
 * @param filelist
 * @param console
 * @param FileUploaded
 * @param UploadComplete
 * @param url
 * @returns
 */
function InitPlupload(browse_button, container, uploadUrl, multi_selection, max_file_size, mime_types, filelist, console, FileUploaded, UploadComplete, url) {
	var uploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',

		browse_button : browse_button, // you can pass in id...
		container : document.getElementById(container), // ... or DOM Element
		// itself

		url : uploadUrl,

		// Resize images on client-side if we can
		resize : {},

		multi_selection : multi_selection,

		filters : {
			max_file_size : max_file_size,
			mime_types : mime_types
		},

		// Flash settings
		flash_swf_url : url + 'static/js/plupload-2.1.2/Moxie.swf',

		// Silverlight settings
		silverlight_xap_url : url + 'static/js/plupload-2.1.2/Moxie.xap',

		init : {
			PostInit : function() {
				document.getElementById(filelist).innerHTML = '';
			},

			FilesAdded : function(up, files) {
				// multi_selection is false
				if (!multi_selection) {
					// set empty fileList
					$("#" + filelist).empty();
				}
				plupload.each(files, function(file) {
					document.getElementById(filelist).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
				});

				$("#" + filelist).show();
				uploader.start(); // auto start when FilesAdded
			},

			UploadProgress : function(up, file) {
				document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
			},

			Error : function(up, err) {
				document.getElementById(console).innerHTML = "\nError #" + err.code + ": " + err.message;
				$("#" + console).show();
			},

			FileUploaded : FileUploaded,
			UploadComplete : UploadComplete
		}
	});

	uploader.init();
}

/**
 * cut string
 * @param str
 * @returns str
 */
function cutString(str) {
	if (str != null && str != '') {
		if (str.length > 2) {
			if (str.indexOf('["') == 0) {
				str = str.substring(2, str.length);
			}
			if (str.indexOf('"]') == str.length - 2) {
				str = str.substring(0, str.length - 2);
			}
		}
	}

	return str;
}

/**
 * ajax search method post
 * @param url
 * @param condition
 * @param tableId
 * @param element
 * @param event
 */
function ajaxSearch(url, condition, tableId, element, event) {
	event.preventDefault();

	var me = $(element);
	if (me.data('requestRunning')) {
		return;
	}
	me.data('requestRunning', true);

	$.ajax({
		type : "POST",
		url : BASE_URL + url,
		data : condition,
		success : function(data) {
			$("#" + tableId).html(data);
		},
		complete : function(result) {
			me.data('requestRunning', false);
		},
		error : function(xhr, textStatus, error) {
			console.log(xhr);
			console.log(textStatus);
			console.log(error);
		}
	});
}

/**
 * ajax redirect method get
 * @param url
 */
function ajaxRedirect(url) {
	$.ajax({
		type : "GET",
		url : url,
		beforeSend: blockbg(),
		success : function(data) {
			var content = $(data).find('.body-content');
			$(".main_content").html(content);
			window.history.pushState('', '', url);
		},
		error : function(xhr, textStatus, error) {
			console.log(xhr);
			console.log(textStatus);
			console.log(error);
		}
	});
}

/**
 * ajax submit method POST
 * @param url
 * @param condition
 * @param event
 */
function ajaxSubmit(url, condition, event) {
	event.preventDefault();

	$.ajax({
		type : "POST",
		url : BASE_URL + url,
		data : condition,
		success : function(data) {
			var content = $(data).find('.body-content');
			$(".main_content").html(content);
			
			var urlPage = $(data).find('#url').val();
			if (urlPage != null && urlPage != '') {
				window.history.pushState('', '', BASE_URL + urlPage);
			}
		},
		error : function(xhr, textStatus, error) {
			console.log(xhr);
			console.log(textStatus);
			console.log(error);
		}
	});
}

/**
 * show tab if exists error
 */
function showTabError(languageList) {
	if (languageList !== undefined && languageList != null) {
		$.each(languageList, function(key) {
			var errorServer = $("#language" + key).find(".has-error").length;
			var errorClient = false;

			$("#language" + key).find("label.error").each(function() {
				if ($(this).html().length > 0) {
					errorClient = true;
					return false;
				}
			});

			if (errorClient || errorServer > 0) {
				$('#tabLanguage a[href="#language' + key +'"]').tab('show')
				return false;
			}
		});
	}

}

function isNumber(evt, element) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    // only accept number in range 0->9 and . and backspace 		
    if ((charCode >= 48 && charCode <= 57) || charCode == 46 || charCode == 8){
    	if (charCode == 46) {
    		// only 1 element .
    		var text = $(element).val();
            if (text.toString().indexOf(".") != -1) {
                return false;
            }
        }
    	return true;
    }        
    return false;
}  

function blockbg() {
	$.isLoading({
		text : "Loading"
	});
}
function unblockbg() {
	$.isLoading("hide");
}

function date_time(id)
{
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
}

function goTopPage(){
	$("html, body").animate({ scrollTop: 0 }, "1");
}

function sendMessage() {
    stompClient.send("/app/session-listener", {}, JSON.stringify({}));
}


$(document).ready(function(){
	 $(document).on('change', ':file', function() {
	     var input = $(this),
	         numFiles = input.get(0).files ? input.get(0).files.length : 1,
	         label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	     input.trigger('fileselect', [numFiles, label]);
	  });

	    $(':file').on('fileselect', function(event, numFiles, label) {
	        var input = $(this).parents('.input-group').find(':text'),
	            log = numFiles > 1 ? numFiles + ' files selected' : label;
	        if( input.length ) {
	            input.val(log);
	        } else {
	            if( log ) alert(log);
	          }
	    });
})

