$(document).ready(function($) {
	// tabLanguage click
	$('#tabLanguage a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

	// set readonly code
	if ($("#id").val() != "") {
		$("#code").attr('readonly', 'readonly');
	}

	// init by language list
	initByLanguageList();

	// on click cancel
	$('#cancel').on('click', function(event) {
		event.preventDefault();
		var url = BASE_URL + "banner/list";

		// Redirect to page list
		ajaxRedirect(url);
	});

	// on click list
	$('#linkList').on('click', function(event) {
		event.preventDefault();
		var url = BASE_URL + "banner/list";

		// Redirect to page list
		ajaxRedirect(url);
	});

	// on click save
	$('#btnSave').on('click', function(event) {
		event.preventDefault();
		updateElementEditor();
		if ($(".j-form-validate").valid()) {

			var url = "banner/edit";
			var condition = $("#bannerForm").serialize();

			ajaxSubmit(url, condition, event);
		} else {
			// show tab if exists error
			showTabError(LANGUAGE_LIST);
		}
	});
	
	// on change banner type
	$("#bannerType").on('change', function(){	
		updateElementEditor();
		changeBannerType ();	
		checkButtonDisplay();		
	});
	
	$('input[name=buttonEnable]').on('click', function(){		
		checkButtonDisplay();
	});	
	
	//change banner type
	changeBannerType ();
	
	//checked button mobile
	checkButtonDisplay();		
	
	// on click add
	$("#addNew").on("click", function(event) {
		var url = BASE_URL + "banner/edit";
		// Redirect to page add
		ajaxRedirect(url);
	});

});

function changeBannerType (){
	if ($("#bannerType").val() == 1){
		$(".j-banner-middle").hide();
		$(".j-banner-top").show();
		$.each(LANGUAGE_LIST, function(key, val) {
			/**add class required*/
			$("textarea[id='bannerInputTitle" + key + "']").addClass("j-required");
			$("label[id='bannerTitle" + key + "']").addClass("required");
			$("input[id='bannerImg" + key + "']").addClass("j-required");
			$("label[id='bannerImageLBL" + key + "']").addClass("required");
			
			/**remove class required*/
			$("textarea[id='editorLeft" + key + "']").removeClass("j-required");
			$("label[id='bannerText" + key + "']").removeClass("required");
		});
	}else{
		$(".j-banner-middle").show();
		$(".j-banner-top").hide();
		// show tab if exists error
		showTabError(LANGUAGE_LIST);
		
		$.each(LANGUAGE_LIST, function(key, val) {
			/**add class required*/
			$("textarea[id='editorLeft" + key + "']").addClass("j-required");
			$("label[id='bannerText" + key + "']").addClass("required");
			
			/**remove class required*/
			$("textarea[id='bannerInputTitle" + key + "']").removeClass("j-required");
			$("label[id='bannerTitle" + key + "']").removeClass("required");
			$("input[id='bannerImg" + key + "']").removeClass("j-required");
			$("label[id='bannerImageLBL" + key + "']").removeClass("required");
		});		
	}	
}

function checkButtonDisplay(){
	if ( $('input[name=buttonEnable]').is(':checked') ){
		$(".j-button-display").show();
	}else{
		$(".j-button-display").hide();		
	}
}

/**
 * update element editor
 */
function updateElementEditor() {
	for (instance in CKEDITOR.instances) {
		CKEDITOR.instances[instance].updateElement();
	}
}

/**
 * init by language list
 */
function initByLanguageList() {
	// lặp language list
	$.each(LANGUAGE_LIST, function(key, val) {
		// IMAGE signature
		signatureImage(key);

		// VIDEO signature
		signatureVideo(key);

		// init image uploader
		initImageUploader(key);

		// init video uploader
		initVideoUploader(key)
	});
}

/**
 * IMAGE signature
 */
function signatureImage(key) {

	var image = $("#physicalImg" + key).val();
	if (image != "") {
		$("#img_banner" + key).attr("src", BASE_URL + "banner/download?fileName=" + image);
		$("#img_banner" + key).removeClass('hide');
	}
}

/**
 * Video signature
 */
function signatureVideo(key) {
	var video = $("#physicalVideo" + key).val();
	if (video != "") {
		loadVideoPLayer(video, BASE_URL, 'videoContent' + key, key);
		$("#videoContent" + key).show();
	}
}

/**
 * init image uploader
 */
function initImageUploader(key) {
	var requestToken =  $("#requestToken").val();
	var uploadUrl = BASE_URL + "banner/uploadTemp?requestToken=" + requestToken;
	var imagePickfiles = 'imgPickfiles' + key;
	var imageContainer = 'imageContainer' + key;
	var imageMaxFileSize = '7mb';
	var imageMimeTypes = [ {
		title : "Image files",
		extensions : "jpg,bmp,png,jpeg,jfif"
	} ];
	var resize = {
		width : 1366,
		height : 320
	};
	var imageFileList = 'imageFilelist' + key;
	var imageConsole = 'imageConsole' + key;
	var imageFileUploaded = function(up, file, info) {
		$("#bannerImg" + key).val(cutString(file.name));
		$("#physicalImg" + key).val(cutString(info.response));
	};

	var imageUploadComplete = function(up, files) {
		var lstImg = $("#physicalImg" + key).val();
		$("#img_banner" + key).attr("src", BASE_URL + "banner/download?fileName=" + lstImg);
		$("#img_banner" + key).removeClass('hide');
		$("#" + imageConsole).hide();
		$("#" + imageFileList).hide();
	};
	InitPlupload(imagePickfiles, imageContainer, uploadUrl, false, imageMaxFileSize, imageMimeTypes, imageFileList,
			imageConsole, imageFileUploaded, imageUploadComplete, BASE_URL);
}

/**
 * init video uploader
 */
function initVideoUploader(key) {
	var videoPickfiles = 'videoPickfiles' + key;
	var videoContainer = 'videoContainer' + key;
	var uploadUrl = BASE_URL + "ajax/uploadVideo";
	var videoMaxFileSize = '10mb';
	var videoMimeTypes = [ {
		title : "Video files",
		extensions : "avi,wmv,wma,mp4,flv"
	} ];
	var videoFileList = 'videoFilelist' + key;
	var videoConsole = 'videoConsole' + key;
	var videoFileUploaded = function(up, file, info) {
		$("#bannerVideo" + key).val(cutString(file.name));
		$("#physicalVideo" + key).val(cutString(info.response));
	};
	var videoUploadComplete = function(up, files) {
		// play video
		loadVideoPLayer($("#physicalVideo" + key).val(), BASE_URL, 'videoContent' + key, key);
		$("#" + videoConsole).hide();
		$("#" + videoFileList).hide();
		$("#videoContent" + key).show();
	};

	InitPlupload(videoPickfiles, videoContainer, uploadUrl, false, videoMaxFileSize, videoMimeTypes, videoFileList,
			videoConsole, videoFileUploaded, videoUploadComplete, BASE_URL);
}

/**
 * load video player
 */
function loadVideoPLayer(video, url, ele, key) {
	ajaxUrl = url + '/ajax/showVideo?fileName=' + video;
	$.ajax({
		url : ajaxUrl,
		cache : false,
		success : function(fileName) {
			// set html wrap_video
			$("#wrap_video" + key).find('#wrap_object' + key).html('').html(
					'<div id="videoContent' + key + '" class="videoContent"> </div>');

			$("#" + ele).html(fileName);
			var flashvars = {
				file : BASE_URL + 'ajax/download?fileName=' + fileName,
				autostart : 'false'
			};
			var params = {
				allowfullscreen : 'true',
				allowscriptaccess : 'always'
			};

			var attributes = {
				id : 'player',
				name : 'player'
			};
			swfobject.embedSWF(BASE_URL + 'static/images/mediaplayer.swf', ele, '800', '450', '9.0.115', 'true',
					flashvars, params, attributes);
		}
	});
}

/**
 * delete image
 */
function deleteImage(key) {
	$("#bannerImg" + key).val("");
	$("#physicalImg" + key).val("");
	$("#img_banner" + key).attr("src", "");
	$("#img_banner" + key).addClass('hide');
}

/**
 * delete video
 */
function deleteVideo(key) {
	$("#bannerVideo" + key).val("");
	$("#physicalVideo" + key).val("");
	$("#wrap_video" + key).find('object').remove();
	$("#wrap_video" + key).find('#wrap_object' + key).html('').html(
			'<div id="videoContent' + key + '" class="videoContent"> </div>');
}