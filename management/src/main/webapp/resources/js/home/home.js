$(document).ready(function() {
	initImageUploader();
	$("#linkList").on("click", function(event) {
		var url = BASE_URL + "/index";
		// Redirect to page list
		ajaxRedirect(url);
	});
	

	$('.datepicker').datepicker({
		format: DATE_FORMAT,
        changeMonth: true,
        changeYear: true,
        autoclose: true,
        keyboardNavigation : true
	});
	
	$('#branchId').combotree({
		editable : true,
		onSelect : function(node) {
			$.ajax({
		        type  : "GET",
		        url   : BASE_URL + "orgInfo/ajax/list",
		        data  : {
		        	"branchId" : node.id
		        },
		        success: function (data) {
		        	$('#departmentId').combotree('clear');
		        	$('#departmentId').combotree('loadData', jQuery.parseJSON(data));
		        }
		    });
        }
    });
	
	if( BRANCH_LIST != null && BRANCH_LIST != '' ) {
		$('#branchId').combotree('loadData', jQuery.parseJSON(BRANCH_LIST));
	}
	
	$('#departmentId').combotree({
		editable : true
    });
	
	if( DEPARTMENT_LIST != null && DEPARTMENT_LIST != '' ) {
		$('#departmentId').combotree('loadData', jQuery.parseJSON(DEPARTMENT_LIST));
	}
	
	// on click saveDraft
	$('.btnSave').on('click', function(event) {
		event.preventDefault();
		if ($(".j-form-validate").valid()) {

			var url = "account/add";
			var condition = $(".j-form-validate").serialize();

			ajaxSubmit(url, condition, event);
		}
	});
});

/**
 * init image uploader
 */
function initImageUploader() {
	var uploadUrl = BASE_URL + "ajax/uploadTemp";
	var imagePickfiles = 'imgPickfiles';
	var imageContainer = 'imageContainer';
	var imageMaxFileSize = '7mb';
	var imageMimeTypes = [ {
		title : "Image files",
		extensions : "jpg,bmp,png"
	} ];
	var resize = {
		width : 1366,
		height : 320
	};
	var imageFileList = 'imageFilelist';
	var imageConsole = 'imageConsole';
	var imageFileUploaded = function(up, file, info) {
		$("#imagePhysicalName").val(cutString(info.response));
		$("#avatar").val(cutString(info.response));
	};

	var imageUploadComplete = function(up, files) {
		var lstImg = $("#imagePhysicalName").val();
		$("#imgAccount").attr("src", BASE_URL + "ajax/download?fileName=" + lstImg);
		$("#imgAccount").removeClass('hide');
		$("#" + imageConsole).hide();
		$("#" + imageFileList).hide();
	};
	InitPlupload(imagePickfiles, imageContainer, uploadUrl, false, imageMaxFileSize, imageMimeTypes, imageFileList,
			imageConsole, imageFileUploaded, imageUploadComplete, BASE_URL);
}

