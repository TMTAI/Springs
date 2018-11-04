(function($) {
	
	var datatables;
	
    datatables = function( options ) {
    
        // Establish our default settings
        var settings = $.extend({
            url          : null,
            type         : "GET",
            dataDefault  : null,
            setData      : null, // Function
            complete     : null
        }, options);
        
        var defaults = datatables.defaults;
        
        var boxTables = this;
        // Registry event for list page
        var pageLst = boxTables.find(".pagination a");
        pageLst.each( function() {
            $(this).on('click', function( event ) {
            	event.preventDefault();
            	
            	if ( $.isFunction( settings.setData ) ) {
            		settings.dataDefault = settings.setData.call( this );
                }
            	
            	var elementThis = $(this);
            	
            	var params = settings.dataDefault;
            	var page = elementThis.data("page");
            	params["page"] = page;
            	
            	$.ajax({
                    url : settings.url,
                    type: settings.type,
                    data : params,
                    success:function(data, textStatus, jqXHR) {
                    	if ( $.isFunction( settings.complete ) ) {
                    		settings.complete( data );
                        } else {
                        	drawTable( boxTables, data );
                        }
                    	
                    	anchorTop( elementThis );
                    }
                });
            });
        });
        
        // Registry event for list page
        var pageSelected = boxTables.find(".pagination-select select.select-page");
        $(pageSelected).on('change', function( event ) {
        	event.preventDefault();
        	
        	if ( $.isFunction( settings.setData ) ) {
        		settings.dataDefault = settings.setData.call( this );
            }
        	
        	var elementThis = $(this);
        	
        	var params = settings.dataDefault;
        	var page = elementThis.val();
        	params["page"] = page;
        	
        	$.ajax({
                url : settings.url,
                type: settings.type,
                data : params,
                success:function(data, textStatus, jqXHR) {
                	if ( $.isFunction( settings.complete ) ) {
                		settings.complete( data );
                    } else {
                    	drawTable( boxTables, data );
                    }
                	
                	anchorTop( elementThis );
                }
            });
        });
        
        // Show message no data
        var tbody = boxTables.find("table.table tbody");
        var tbodyData = tbody.html();
        tbodyData = $.trim(tbodyData)
        if( tbodyData == "" ) {
        	 var countCol = boxTables.find("table.table thead th").length;
    		 var tr = $("<tr>", {	
    	         "class"     : "odd"
    	     });
    		 
			 var td = $("<td>", {	
		         "class"     : "dataTables_empty",
		         "valign"    : "top",
		         "colspan"   : countCol
		     });
			 td.text(defaults.language.emptyTable);
			 
			 tr.append(td);
			 tbody.append(tr);
        }
        
        function drawTable( element, data ) {
        	element.html(data);
        }
        
        function anchorTop( element ) {
        	var popup = element.parents("div.modal-dialog");
        	
        	var eBody = "body";
        	if( popup.hasClass("modal-dialog") ) {
        		eBody = "";
        	}
        	
        	if( eBody != null && eBody != '' ) {
        		$('html, body').animate({
        	        scrollTop: $(eBody).offset().top
        	    }, 0);
        	}
        }
    }
    
    datatables.defaults = {
		"language": {
	    	"emptyTable"    :     "No data"
	    }
    }
    
    $.fn.datatables = datatables;
    
    $.fn.datatables.defaults = datatables.defaults;
    
    return $.fn.datatables;
}(jQuery));