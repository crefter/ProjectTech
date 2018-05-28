$(document).ready(function() {

	$(".congr").css("opacity", 0);
	$(".otvet").hide();
	$(".tablem").hide();
	$(".marq").hide();
	$("#voited").hide();
	$("#voited").css("opacity", 0);
	$(".navtext_1").hide();
	$(".repeat-btn").hide();

	var t = "компас";



	$(".btntest").click(function() {

		var n = $("#name").val();
		var f = $("#familia").val();
		var o = $("#othces").val();

		if(n != "" && f != "" && o != ""){

			$(".btntest").hide(100);
			$("#voited").show(200);
			$("#voited").animate({opacity: 1}, 700)
			$(".navtext_1").show();
			$(".content").hide(200);
			$("#fs").hide(200);
			$(".headd").hide(200);

			$("html, body").animate({scrollTop: $(".headd").offset().top },500);

		}else{
			alert("Введите имя, фамилию и отчество в поле ввода");
			$("html, body").animate({scrollTop: $(".headd").offset().top },500);
		}


	});

		$(".btn").click(function() {


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
			if ($("#twoo").prop("checked")) {
				ball -= 1;
			}

			if ($("#fivee").prop("checked")) {
				ball -= 1;
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
					2000);
			}

			$("html, body").animate({scrollTop: $(".footer").offset().top }, 2500);

			$(".marque").html("<marquee direction=left loop=50 behavior=scroll scrollamount=5 class=marq>" + 
				"Спасибо за прохождение теста:)" + "</marquee>");



		}else{
			alert("Заполните поля фамилии, имени, отчества");
		}

		$(".repeat-btn").show(100);

		$(".repeat-btn").click(function() {

			$(":input", "#voited").not(":button").val("");
			$("input[type='radio']").prop("checked", "");
			$("input[type='checkbox']").prop("checked", "");
			ball = 0;
			mark = "-";
			$(".congr").hide();
			$(".otvet").html(f + " " + n + " " + o + ", " +
			" колличество набранных баллов: " + ball + "<br>"
			 + "<br>" + "Ваша оценка:" + "<b>" + mark + "</b>");
			$(".marque").html("<marquee direction=left loop=50 behavior=scroll scrollamount=5 class=marq>" 
				+ "P.S. Не забудьте поставить оценку за проект:)" + "</marquee>");
			$("html, body").animate({scrollTop: $("#voited").offset().top }, 500);
		});

		$(".otvet").show('1000');


});
	$("#tbtn").click(function() {

		$(".tablem").toggle('800');

	});



});
