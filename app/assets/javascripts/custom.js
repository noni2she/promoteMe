$(function(){

	$(window).stellar();

	$(".slide").waypoint(function(event, direction){
		var dataslide = $(this).attr("data-slide");

		if (direction === "down") {
			$(".navigation li[data-slide='"+dataslide+"']").addClass("active").prev().removeAttr("class");
		} else {
			dataslide = $(this).prev().attr("data-slide");
			$(".navigation li[data-slide='"+dataslide+"']").addClass("active").next().removeAttr("class");
		}

		/*$(".navigation li").each(function(){
			$(this).removeAttr("class");
		});
		$(".navigation li[data-slide='"+dataslide+"']").addClass("active");*/

	});

	$(window).scroll(function() {
		if ($(window).scrollTop() === 0) {
			$(".navigation li[data-slide='home']").addClass("active");
			$(".navigation li[data-slide='about']").removeClass("active");
		}
	});

	var links = $(".navigation").find("li");
	var buttons = $(".button");

	links.click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr("data-slide");
        goToByScroll(dataslide);
    });

    buttons.click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr("data-slide");
        goToByScroll(dataslide);

    });

	$(".skill_photo").hide();
	
	$("body").on("click", "img.skill_photo", function() {
		switch(this.id) {
			case "photo_html5":
				createDialog({
					title: "HTML Skill",
					message: "以往的Web Application開發皆以HTML原生tag進行網頁或操作介面的架構開發，有使用過DIV+CSS排版經驗，會自訂標籤屬性，在進行HTML開發時不參雜CSS與JavaScript以實現Web三元素『架構、表現、行為』的分別設計與維護；在接觸HTML5後，有使用語意標籤的經驗."
				});
				break;
			case "photo_css3":
				createDialog({
					title: "CSS Skill",
					message: "有基本的CSS觀念及開發經驗，如box model、float、position等等，有使用Bootstrap做排版等等的開發經驗."
				});
				break;
			case "photo_rails":
				createDialog({
					title: "Rails Skill",
					message: "有使用Rails框架的經驗，了解MVC架構及RESTful原理."
				});
				break;
			case "photo_java":
				createDialog({
					title: "Java Skill",
					message: "以往的專案經驗多以Java為開發語言，JSP/servlet為主要開發技術，也有使用過Struts開發的經驗，而資料庫聯結有用過JDBC，有使用過MS SQL和Oracle資料庫."
				});
				break;
			case "photo_javascript":
				createDialog({
					title: "JavaScript Skill",
					message: "有基本的JavaScript語言觀念及開發經驗，常使用jQuery做為開發工具；此外，也有使用AngularJS的經驗."
				});
				break;
			
		}
	});

	$("img.skill_photo").hoverpulse({
		size: 40,
		speed: 100
	});

	$("#showBtn").click(function(){
		$("#photo_web-design").fadeOut('250', function() {
			$(this).hide();
			$(".skill_photo").fadeIn();
		});
	});

	$(".projectTables").cycle({
		fx: "fade",
		speed: "fast",
		timeout: 0,
		prev: "#prev",
		next: "#next"
	});

	
});

var createDialog = function(info) {
	bootbox.dialog({
		title: info.title,
		message: info.message,
		buttons: {
			main: {
				label: "I know!",
				className: "btn-primary"
			}
		}
	});
};

var goToByScroll = function(dataslide) {
	$("html,body").animate({
        scrollTop: $(".slide[data-slide='" + dataslide + "']").offset().top
    }, 2000, "easeInOutQuint");
};