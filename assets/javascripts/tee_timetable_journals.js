$(document).ready(function(){
	$('.workable').on('click', function(){
		if($(this).attr('checked')){
			num = $(this).attr('id')

			for(var i=1; i<=5; i++){
				$("#tee_timetable_journals_attributes_"+num+"_start_time_"+i.toString()+"i").attr("disabled",false);
				$("#tee_timetable_journals_attributes_"+num+"_end_time_"+i.toString()+"i").attr("disabled",false);
			}
			
		} else {
			num = $(this).attr('id')

			for(var i=1; i<=5; i++){
				$("#tee_timetable_journals_attributes_"+num+"_start_time_"+i.toString()+"i").attr("disabled",true);
				$("#tee_timetable_journals_attributes_"+num+"_end_time_"+i.toString()+"i").attr("disabled",true);
			}

			$("#tee_timetable_journals_attributes_"+num+"_start_time_4i option:eq(0)").prop('selected',true);
			$("#tee_timetable_journals_attributes_"+num+"_start_time_5i option:eq(0)").prop('selected',true);
			$("#tee_timetable_journals_attributes_"+num+"_end_time_4i option:eq(0)").prop('selected',true);
			$("#tee_timetable_journals_attributes_"+num+"_end_time_5i option:eq(0)").prop('selected',true);
		}
	});

	$('.timetable_default').on('click', function(){
		if($(this).attr('checked')){
			disabledTimetableDates();
			$("#tee_timetable_start_date").prop("value",null);
			$("#tee_timetable_end_date").prop("value",null);
		} else {
			$("#tee_timetable_start_date").attr("disabled",false);
			$("#tee_timetable_end_date").attr("disabled",false);
		}
	});

	$(".timetable.timetable_form").ready(function() {
		if($('.timetable_default').attr('checked')){
			disabledTimetableDates();
		}

	});	

	function disabledTimetableDates(){
		$("#tee_timetable_start_date").attr("disabled",true);
		$("#tee_timetable_end_date").attr("disabled",true);
	}
});