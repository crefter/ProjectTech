$(document).ready(function() {
	$(".congr").css("opacity", 0);
	$(".otvet").hide();
	$(".tablem").hide();
	$(".marq").hide();

	$(".btn").click(function() {

		var t = "компас";
		var ball = 0;
		var mark = "";

		var n = $("#name").val();
		var f = $("#familia").val();
		var o = $("#othces").val();

		if(n != "" && f != "" && o != ""){

		if ($("#fir").prop("checked")) {
			ball += 1;
		}

		if ($("#sec").prop("checked")) {
			ball += 1;
		}

		if ($("#thir").prop("checked")) {
			ball += 1;
		}

		if ($("#fout").prop("checked")) {
			ball += 1;
		}

		if ($("#fif").prop("checked")) {
			ball += 1;
		}

		if ($("#textpole").val().toUpperCase() == t.toUpperCase()) {
			ball += 1;
		}

		if ($("#onee").prop("checked")) {
			ball += 1;
		}

		if ($("#thre").prop("checked")) {
			ball += 1;
		}

		if ($("#fou").prop("checked")) {
			ball += 1;
		}

		switch (ball) {
			case 3:
			case 4:
				mark = " Неудовлетворительно"
				break;
			case 5:
			case 6:
				mark = " Удовлетворительно"
				break;
			case 7:
			case 8:
				mark = " Хорошо"
				break;
			case 9:
				mark = " Отлично"
				break;

			default:
				mark = " Не аттестован"
				break;
		}	

		$(".otvet").html(f + " " + n + " " + o + ", " + 
		" колличество набранных баллов: " + ball + "<br>"
		 + "<br>" + "Ваша оценка:" + "<b>" + mark + "</b>");	


		if(ball >= 7) {
			$(".congr").text("Поздравляем!");
			$(".congr").animate({
				fontSize: 35,
				opacity: 1,
				wordSpacing: length},
				4000);
		}

		$(".marque").html("<marquee direction=left loop=50 behavior=scroll scrollamount=5 class=marq>" + "P.S. Не забудьте поставить оценку за проект:)" + "</marquee>");

	}else{
		alert("Заполните поля фамилии, имени, отчества");
	}

	});

	$(".btn").click(function() {
		$(".otvet").show('1000');
	});


	$("#tbtn").click(function() {
		$(".tablem").toggle('1000');
	});
});