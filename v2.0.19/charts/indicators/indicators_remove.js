define(["jquery","datatables","charts/charts"],function(a){function b(b,d){require(["text!charts/indicators/indicators_remove.html"],function(e){e=a(e),c=e.hide().find("table").DataTable({paging:!1,scrollY:200,info:!1}),e.appendTo("body"),a(".indicator_remove_dialog").dialog({autoOpen:!1,modal:!0,my:"center",at:"center",width:330,of:window,resizable:!1,buttons:[{text:"Remove Selected",click:function(){var b=c.rows(".selected").data().length;if(b>0){var d=a(".indicator_remove_dialog").data("refererChartID");c.rows(".selected").nodes().to$().each(function(){var b=a(this).data("seriesIDs"),e=a(d).highcharts();e.series.forEach(function(a){a.options.isInstrument&&a.removeIndicator(b)}),c.row(a(this)).remove().draw()})}else a.growl.error({message:"Please select indicators to remove"})}},{text:"Cancel",click:function(){a(".indicator_remove_dialog").dialog("close")}}]}),a.isFunction(d)&&d(b)})}var c=void 0,d=void 0;return require(["text!charts/indicators/indicators.json"],function(a){d=JSON.parse(a)}),{openDialog:function(e){if(0==a(".indicator_remove_dialog").length)return void b(e,this.openDialog);c.clear().draw();var f=a(e).highcharts();f&&(f.series.forEach(function(b){if(b.options.isInstrument)for(var e in d){var f=d[e];b[f.id]&&b[f.id].forEach(function(b){var d=b.toString();a(c.row.add([d]).draw().node()).click(function(){a(this).toggleClass("selected")}).data({seriesIDs:b.getIDs()})})}}),a(".indicator_remove_dialog").data("refererChartID",e).dialog("open"))}}});