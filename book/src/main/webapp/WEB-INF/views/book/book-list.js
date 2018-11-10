$(document).ready(function($) {

	// datatable load
	$(".unit-bg-table").datatables({
		url : BASE_URL + 'banner/ajaxList',
		type : 'POST',
		setData : setConditionSearch
	});

	// on click add
	$("#addNew").on("click", function(event) {
		var url = BASE_URL + "banner/edit";
		// Redirect to page add
		ajaxRedirect(url);
	});

	// on click edit
	$(".j-btn-edit").on("click", function(event) {
		editBanner(this, event);
	});

	// on click delete
	$(".j-btn-delete").on("click", function(event) {
		deleteBanner(this, event);
	});

	// on click detail
	$(".j-btn-detail").on("click", function(event) {
		detail(this, event);
	});

	// on click search
	$("#btnSearch").on('click', function(event) {
		onClickSearch(this, event);
	});

	$("#btnRefresh").on('click', function(event) {
		refresh();
	});
	
	//double click
	$(".trEdit").on("dblclick", function(event) {
		editBanner(this, event, $(this));
	});	
});

/**
 * editBanner
 * 
 * @param element
 * @param event
 */
function editBanner(element, event, row) {
	event.preventDefault();

	// Prepare data
	if (row == null) {
		row = $(element).parents("tr");
	}
	
	var id = row.data("banner-id");
	var url = BASE_URL + "banner/edit?id=" + id;

	// Redirect to page detail
	ajaxRedirect(url);
}

/**
 * delete banner
 * 
 * @param element
 * @param event
 */
function deleteBanner(element, event) {
	event.preventDefault();

	// Prepare data
	var row = $(element).parents("tr");
	var bannerId = row.data("banner-id");

	popupConfirm(MSG_DEL_CONFIRM, function(result) {
		if (result) {
			var url = "banner/delete";
			var condition = {
				"id" : bannerId
			}
			
			ajaxSubmit(url, condition, event);
			
		}
	});
}

/**
 * detail
 * 
 * @param element
 * @param event
 */
function detail(element, event) {
	event.preventDefault();

	// Prepare data
	var row = $(element).parents("tr");
	var id = row.data("banner-id");
	var url = BASE_URL + "banner/detail?id=" + id;

	// Redirect to page detail
	ajaxRedirect(url);
}

/**
 * on click button search
 */
function onClickSearch(element, event) {

	setDataSearchHidd();
	
	if ($("#bannerPC").is(':checked')){
		if ($("#fieldValuesHidd").val() == null || $("#fieldValuesHidd").val() == ""){
			$("#fieldValuesHidd").val($("#bannerPC").val());
		}else{
			$("#fieldValuesHidd").val($("#bannerPC").val() + "," + $("#fieldValuesHidd").val());
		}
	}
	
	if ($("#bannerMobile").is(':checked')){
		if ($("#fieldValuesHidd").val() == null || $("#fieldValuesHidd").val() == ""){
			$("#fieldValuesHidd").val($("#bannerMobile").val());
		}else{
			$("#fieldValuesHidd").val($("#bannerMobile").val() + "," + $("#fieldValuesHidd").val());
		}
	}
	
	ajaxSearch("banner/ajaxList", setConditionSearch(), "tableList", element, event);
}

/**
 * setConditionSearch
 */
function setConditionSearch() {
	var condition = {};
	condition["fieldSearch"] = $("#fieldSearchHidd").val();
	condition["fieldValues"] = $("#fieldValuesHidd").val();
	condition["name"] = $("#name").val();
	condition["code"] = $("#code").val();
	condition["status"] = $("#status").val();
	return condition;
}

/**
 * setDataSearchHidd
 */
function setDataSearchHidd() {
	$("#fieldSearchHidd").val($("#fieldSearch").val());
	$("#fieldValuesHidd").val($("select[name=fieldValues]").val());
}

function refresh() {
	$("#code").val('');
	$("#name").val('');
	$("#status").val("").change();
	
	$('#btnSearch').trigger('click');
	
	$('input[type=checkbox]').prop("checked", false);
}