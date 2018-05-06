$(document).ready(function() {
	$(".congr").css("opacity", 0);
	$(".otvet").hide();
	$(".btn").click(function() {

		var ball = 0;
		var mark = "";

		var n = $("#name").val();
		var f = $("#familia").val();
		var o = $("#othces").val();

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

		switch (ball) {
			case 2:
				mark = " Неудовлетворительно"
				break;
			case 3:
				mark = " Удовлетворительно"
				break;
			case 4:
				mark = " Хорошо"
				break;
			case 5:
				mark = " Отлично"
				break;

			default:
				mark = " Не аттестован"
				break;
		}

		$(".otvet").html(f + " " + n + " " + o + ", " + 
		" колличество набранных баллов: " + ball + "<br>"
		 + "<br>" + "Ваша оценка:" + mark);

		$(".btn").val("Скрыть");

		if(ball >= 4) {
			$(".congr").text("Поздравляем!");
			$(".congr").animate({
				fontSize: 35,
				opacity: 1,
				wordSpacing: length},
				4000);
		}

	});

	$(".btn").click(function() {
		$(".otvet").toggle('1000');
	});

});