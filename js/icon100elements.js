// JavaScript Document
$(function(){
	
	//DATAS	
	var INTORO_MSGBOX_TEXT = [
		["コンニチワ. ","ワタシノナマエハ “コロン” "],
		["アナタガ ホシイ ","アイコン ヲ テイアンスル "],
		["アイコン コンシェルジュ ","AI デス！"]
	];

	var REPORT_MSGBOX_TEXT = [
		['ブンセキ カンリョウ ','ケッカヲ オススメ ジュン ニ ヒョウジシマス '],
		['サユウ ノ ヤジルシ ヲ オスト ','ヒョウジ ヲ キリカエ ラレマス！']
	];
	var ICON_TYPE_AND_LOG = [
			{"type":"camera","use":false},
			{"type":"clock","use":false}, 
			{"type":"mail","use":false},
			{"type":"play","use":false},
			{"type":"user","use":false},
			{"type":"vol","use":false},
			{"type":"zoom","use":false}
	];

	var ICON_DATAS = {
		"saya" : {
			"CREATOR_NAME":"高橋 沙弥",
			"ICON_NAME":"顔つきアイコン",
			"ICON_CAPTION_MIN":"とにかくかわいさと見やすさを重視して制作しました。工夫点は各アイコンの大きさの統一と、わかりやすさを重視した点です。",
			"ICON_CAMTION":"アイコン自体の大きさを統一したことと、なるべく文字を使わず見てわかりやすいアイコンを目指して制作しました。なるべく同じモチーフのアイコンでも見たことのある形やデザインにならないよう、気を付けました。",
			"ICON_HOW":"子供向けのかわいらしいサイトや、少しポップ調のサイトに似合うと思います。",
			"ICON_TYPE":"C",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"ken" : { 
			"CREATOR_NAME":"鈴木　健太郎",
			"ICON_NAME":"太丸太枠アイコン",
			"ICON_CAPTION_MIN":"とてもシンプルで使いやすいアイコンをテーマに作成しました。",
			"ICON_CAMTION":"見た目の通り太丸太枠アイコンです。視認性に優れており、年配の方やあまり目のすぐれない方々にも使いやすいデザインになっています。",
			"ICON_HOW":"幼児向けのサイト、年配向けのサイト",
			"ICON_TYPE":"B",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"hayato" : {
			"CREATOR_NAME":"加藤 颯人",
			"ICON_NAME":"シンプルアイコン",
			"ICON_CAPTION_MIN":"角丸と線を太くすることで、どんなサイトでも利用できることを想定しました。",
			"ICON_CAMTION":"わかりやすいシェイプと、角丸と線を太くすることで、視認性を高め、どんなサイトでも利用できることを想定して制作しました。",
			"ICON_HOW":"シンプルなデザインのサイト",
			"ICON_TYPE":"B",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"nakazawa" : {
			"CREATOR_NAME":"nakazawa yuuta",
			"ICON_NAME":"六角形アイコン",
			"ICON_CAPTION_MIN":"六角形がちりばめられたアイコンです。隠れ中二病にオススメ！！",
			"ICON_CAMTION":"六角形がちりばめられたアイコンです。六角形が無いように見えてもどこかに隠れていたり、六角形の一部を使ったりしています。",
			"ICON_HOW":"幾何学模様を使ったサイトや、近未来的デザインのサイトに",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"dora" : {
			"CREATOR_NAME":"DorA",
			"ICON_NAME":"ノスタルジックアイコン",
			"ICON_CAPTION_MIN":"大正や昭和チックなノスタルジーに浸れるアイコンです。",
			"ICON_CAMTION":"大正や昭和チックなノスタルジーに浸れるアイコンです。一癖も二癖もあるので汎用的ではないですがくすっと笑えたりできる仕様になっております。",
			"ICON_HOW":"明治から平成前までの記念展や没してる方の作品展や、風変わりで時代背景が今より昔の小説やアニメ、マンガなどに使えます。",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"keito" : { 
			"CREATOR_NAME":"伊藤 圭杜",
			"ICON_NAME":"点線アイコン",
			"ICON_CAPTION_MIN":"今回は点線をテーマに作りました。細かな点線たちが一つのアイコンを作り上げシンプルでシックな物に仕上がりました。",
			"ICON_CAMTION":"今回は点線をテーマに作りました。細かな点線たちが一つのアイコンを作り上げシンプルでシックな物に仕上がりました。誰が見てもわかりやすく、多くのジャンルに特化したアイコンです。",
			"ICON_HOW":"おすすめのサイトはアパレルなどのシンプルでシックなデザインのサイトです。しかし点線ということもありいろんなサイトに合うと思われますのでぜひご利用ください。",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"lavp" : {
			"CREATOR_NAME":"L⊿AVP*",
			"ICON_NAME":"NEON",
			"ICON_CAPTION_MIN":"ネオン管をモチーフに線のみで制作されたアイコンです。",
			"ICON_CAMTION":"ネオン管をモチーフに線のみで制作されたアイコンです。バンドのサイトなど暗めの背景によく合います。このアイコンは、SVG Filterと組み合わせるとネオン管のように光らせることができます。",
			"ICON_HOW":"イベントやバンドのWebサイトなど",
			"ICON_TYPE":"C",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"samu" : {
			"CREATOR_NAME":"沈家康",
			"ICON_NAME":"直線",
			"ICON_CAPTION_MIN":"シンプルで、簡潔で、見やすいためにこのデザインにしました。誰でも見てすぐわかるデザインです。無料で使えるので、どうぞご自由に使ってください。",
			"ICON_CAMTION":"ネオン管をモチーフに線のみで制作されたアイコンです。バンドのサイトなど暗めの背景によく合います。このアイコンは、SVG Filterと組み合わせるとネオン管のように光らせることができます。",
			"ICON_HOW":"シンプル、簡潔なサイト",
			"ICON_TYPE":"C",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"kimura" : {
			"CREATOR_NAME":"木村 大貴",
			"ICON_NAME":"マジシャンアイコン",
			"ICON_CAPTION_MIN":"マジシャンにまつわる道具やマジックをもとに不思議な雰囲気で制作。",
			"ICON_CAMTION":"シンプルで、簡潔で、見やすいためにこのデザインにしました。複雑すぎないように、より多くサイトで使えるように作りました。線だけで構成されて、誰でも見てすぐわかるデザインです。色は自由に変えられるので、よりカラフルなサイトも使えます。",
			"ICON_HOW":"ゲーム系やファンタジーな雰囲気なサイト。動きが面白いサイトなどにおすすめ。",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		"matuba" : { 
			"CREATOR_NAME":"松葉",
			"ICON_NAME":"角丸アイコン",
			"ICON_CAPTION_MIN":"パッとみてもなんのアイコンなのかわかるようにシンプルに作成しました。",
			"ICON_CAMTION":"パッとみてもすぐになんのアイコンなのかわかるように線を太くしてアプリなどにも使いやすいように角丸でシンプルに作成しました。",
			"ICON_HOW":"シンプルなサイトやアプリなどに",
			"ICON_TYPE":"B",
			"FLAG":false,
			"SELECT_LOG":0
		}
	};

	var ICON_ID = ["saya","ken","hayato","nakazawa","dora","keito","lavp","samu","kimura","matuba"];

	var icon_analytics = [];
	var rankSortBefore = [0,0,0,0,0,0,0,0,0,0];
	
	// jQueryでSleepする方法
    function wait(sec) {
 
        // jQueryのDeferredを作成します。
        var objDef = new $.Deferred;
 
        setTimeout(function () {
 
            // sec秒後に、resolve()を実行して、Promiseを完了します。
            objDef.resolve(sec);
 
        }, sec*1000);
 
        return objDef.promise();
 
    };
 
	//一文字づつ表示する関数
	function typeText(arrayName, targetElement) {
		let i = 0;
		let j = 0;
		let k = 0;
		let delay = 200;
		(function loop() {
			setTimeout(function () {
				//次のメイン処理へ
				if (i >= arrayName.length) {
					//はじめのメッセージボックス終了
					if(arrayName.length == 3){
						displayCont("#msgBox", 0);
						alartBox();
					//あとのメッセージボックス終了
					}else{
						scrollFunc();
					}
				}
				//文字書き換え
				targetElement.innerText += arrayName[i][j][k];

				k += 1;
				delay = 200;
				if(k == arrayName[i][j].length-1){
					delay = 1200;
				}
				//1文字列が全部打ち終わったら
				if (k == arrayName[i][j].length) {
					targetElement.innerHTML += "<br>";
					j += 1;
					k = 0;
				}

				//１行が全部打ち終わったら
				if (j == arrayName[i].length) {
					targetElement.innerText = "";
					i += 1;
					j = 0;
				}			
				
				//ボックス高さサイズ調整
				
				
				loop();
			}, delay);
		})();
	}
	//displayFunc
	function displayCont(idName,trigger){
		if(trigger == 0){
			$(idName).addClass("none");
		}
		else{
			$(idName).removeClass("none");
		}
		
	};
	
	//各セクション処理---------------------
	intoroFunc();
	function intoroFunc(){
		displayCont("#fixedBrain",1);
		displayCont("#msgBox",1);
		
		//文字列表示
		typeText(INTORO_MSGBOX_TEXT,document.querySelector("#msg1"));
		
	};
	function alartBox(){
		displayCont("#alertBox",1);
		$("#alart-Buttons li").on("click",function(){
			displayCont("#alertBox",0);
			if($(this).text() == "YES"){
				analyticsFunc();
			}else{
				intoroFunc();
			}
		})
	}
	function analyticsFunc(){
		displayCont("#analyticsBox",1);
		var quizCount = 1;
		var selectLog = [];
		var likeType = "";
		nextQuiz();
		
		function nextQuiz(){
			if(quizCount <= 3){
				console.log(quizCount);
				getLikeType();
			}else if(quizCount <= 7){
				if(quizCount == 4){
					var likeType = decideLikeType();
					console.log(quizCount);
					getMoreLike(likeType);
				}
				console.log(quizCount);
				getMoreLike(likeType);
			}else{
				rankSort();
			}
		}
		
		function rankSort(){
			//押された回数 * 好きなタイプ
			
			//所属のアイコンタイプに応じて倍加算する
			for(var i = 0;i < 10;i++){
				if(ICON_DATAS[ICON_ID[i]].ICON_TYPE == likeType){
					ICON_DATAS[ICON_ID[i]].SELECT_LOG*10;
				}else{
					switch(likeType){
						case "A":
							if(ICON_DATAS[ICON_ID[i]].ICON_TYPE == 'B'){
								ICON_DATAS[ICON_ID[i]].SELECT_LOG*5;
							}else{
								ICON_DATAS[ICON_ID[i]].SELECT_LOG*1;
							}
							break;
						case "B":
							if(ICON_DATAS[ICON_ID[i]].ICON_TYPE == 'C'){
								ICON_DATAS[ICON_ID[i]].SELECT_LOG*5;
							}else{
								ICON_DATAS[ICON_ID[i]].SELECT_LOG*1;
							}
							break;
						case "C":
							if(ICON_DATAS[ICON_ID[i]].ICON_TYPE == 'A'){
								ICON_DATAS[ICON_ID[i]].SELECT_LOG*5;
							}else{
								ICON_DATAS[ICON_ID[i]].SELECT_LOG*1;
							}
							break;
					}
				}
			}
			
			var sortResult = [];
			var sortMax = 0;
			var sortCnt = 0;
			var sortBreak = false;
			//SELECT_LOGの多い順に並び替えて、同時にそのID名を保存
			while(sortBreak == false){
				for(var j = 0;j < 10;j++){
					if(ICON_DATAS[ICON_ID[j]].SELECT_LOG >= sortMax && ICON_DATAS[ICON_ID[j]].FLAG == false){
						sortResult.unshift(ICON_ID[j]); //配列の先頭にID名を差し込む
						sortCnt++;
						sortMax = ICON_DATAS[ICON_ID[j]].SELECT_LOG;
						ICON_DATAS[ICON_ID[j]].FLAG == true;
						console.log("bbbbbbbbbbbbb");
						break;
					}
				}
				if(sortCnt == 9){
					sortBreak = true;
				}
				console.log(sortResult);
			}

			endQuiz();
		}
		
		function judgeQuiz(panel_users){
			$("#analytics-Title").text("0" + quizCount);
			$("#analytics-Buttons li").on("click",function(e){
				var thisTmp = $(this);
				ICON_DATAS[thisTmp.find("img").attr("data-icon-id")].SELECT_LOG++;
				quizCount++;
				console.log("run");
				nextQuiz();
			});
		}
		
		//返す値はrangeを最大値とした値が３つ配列に入る
		function makeRundSet(range,kosuu){
			range-=1;
			var randNum = [];
			for(var i = 0;i < kosuu;i++){
				randNum[i] = Math.floor(Math.random()*(range-0)+0);
			}
			console.log(randNum);
			return randNum;
		}


		
		function getLikeType(){ //好きなタイプ集計 ３回呼び出せばいい
			console.log("getLikeType");
			var useUser = []; //表示対象に決定されたユーザー
			
			//表示対象にするアイコンの種類を決定
			var randIconType = makeRundSet(7,1);
			console.log("randIconType = "+randIconType);
			console.log(ICON_TYPE_AND_LOG[randIconType[0]].use);
			while(ICON_TYPE_AND_LOG[randIconType[0]].use == true){
				randIconType = makeRundSet(7,1);
				console.log("aaaaaaaaaaaaaaa");
			}
			
			//３人のユーザーを決定する
			var randUser = makeRundSet(10,10);
			console.log(randUser);
			var breakFlag = false;
			const TYPESET = "ABC";
			while(breakFlag == false){
				var j = 0; //3type決めるための
				for(var i = 0;i < 10;i++){
					var tmp = false;
					while(tmp == false){
						console.log(ICON_DATAS[ICON_ID[randUser[i]]].ICON_TYPE);
						if(ICON_DATAS[ICON_ID[randUser[i]]].ICON_TYPE == TYPESET[j]){
							useUser[j] = ICON_ID[randUser[i]];
							j++;
							tmp = true;
							breakFlag = true;
						}else{
							i++;
							tmp = true;
						}
					}
				}
				breakFlag = true;
			}
			
			//問題出題
			overwrite(ICON_TYPE_AND_LOG[randIconType[0]].type,useUser[0],useUser[1],useUser[2]);
		}

		function decideLikeType(){
			var typeA = [0,"A"],
				typeB = [0,"B"],
				typeC = [0,"C"];
			var likeTypeIS = ""
			for(var i = 0;i < 3;i++){
				switch(ICON_DATAS[selectLog[i]].ICON_TYPE){
					case "A":
						typeA[0]++;
						break;
					case "B":
						typeB[0]++;
						break;
					case "C":
						typeC[0]++;
						break;
				}
			}
			
			var tmp = Math.max(typeA[0],typeB[0],typeC[0]);
			if(tmp == typeA[0]) likeTypeIS = typeA[1];
			if(tmp == typeB[0]) likeTypeIS = typeB[1];
			if(tmp == typeC[0]) likeTypeIS = typeC[1];
			
			return likeTypeIS;
		}

		function getMoreLike(LIKE_TYPE){
			console.log("getMoreLike");
			var useUser = []; //表示対象に決定されたユーザー
			
			//表示対象にするアイコンの種類を決定
			var randIconType = makeRundSet(7,1);
			while(ICON_TYPE_AND_LOG[randIconType[0]].use == true){
				randIconType = makeRundSet(7,1);
			}
			
			//３人のユーザーを決定する
			var randUser = makeRundSet(10,10);
			var breakFlag = false;
			while(breakFlag == false){
				var j = 0; //3type決めるための
				for(var i = 0;i < 10;i++){
					var tmp = false;
					while(tmp == false){
						if(tmp == false){
							if(ICON_DATAS[ICON_ID[randUser[i]]].ICON_TYPE == LIKE_TYPE){
								useUser[j] = ICON_ID[randUser[i]];
								j++;
								tmp = true;
								breakFlag = true;
							}else{
								i++;
								tmp = true;
							}
						}else{
							randUser = makeRundSet(10,3);
						}
					}
				}
				breakFlag = true;
			}
			console.log("THAT"+ICON_ID[randIconType[0]]);
			//問題出題
			overwrite(ICON_TYPE_AND_LOG[randIconType[0]].type,useUser[0],useUser[1],useUser[2]);
		}
		
		function overwrite(iconType,panel1_user,panel2_user,panel3_user){
			var panel_users = [panel1_user,panel2_user,panel3_user];
			for(var i = 0;i < 3;i++){
				$("#analytics-Buttons li").eq(i).find("img").attr("src","images/analyticsIcons/" + panel_users[i] + "-" + iconType + ".svg");
				$("#analytics-Buttons li").eq(i).find("img").attr("data-icon-id",panel_users[i]);
				$("#analytics-Buttons li").eq(i).find("img").attr("alt",panel_users[i]);
			}
			judgeQuiz(panel_users);
		}
		
		function endQuiz(){
			displayCont("#analyticsBox",0);
			doneAlartFunc();
		}
		
		
	}
	function doneAlartFunc(){
		displayCont("#msgBox",1);
		
		//文字列表示
		typeText(REPORT_MSGBOX_TEXT,document.querySelector("#msg1"));
	}
	function scrollFunc(){
		var rankView = 0;
		makeList();
		//displayCont("#scrollContents",1);
		//$("#scroll").on("click",function(){
			rankView = 1;
			changeRankView(rankView);
			displayCont("#scrollContents",1);
			displayCont("#nextBtn",1);
			displayCont("#msgBox",0);
			displayCont("#fixedBrain",0);
			displayCont("#scroll",0);
		//})
		function changeRankView(){
			$("#scrollContents").css({
				"right":"calc(100vw * " + rankView + ")"
			});
		}
		$("#backBtn").on("click",function(){
			rankView--;
			if(rankView == 1){
				displayCont("#backBtn",0);
			}else{
				displayCont("#nextBtn",1);
				displayCont("#backBtn",1);
			}
			changeRankView(rankView);
			
		})
		$("#nextBtn").on("click",function(){
			rankView++;
			if(rankView == 10){
				displayCont("#nextBtn",0);
			}else{
				displayCont("#nextBtn",1);
				displayCont("#backBtn",1);
			}
			changeRankView(rankView);
		})
		
		function makeList(){
			console.log(rankResult);
			//リスト生成
			var listHTML = "";
			for(var i = 0;i < 10;i++){
				if(i != 9){
					listHTML += '<!--report '+(i+1)+'--><li class="content"><div class="content-left"><h2 class="rank">0'+(i+1)+'</h2><p class="caption">'+ICON_DATAS[rankResult[i]].ICON_CAPTION_MIN+'</p><ul class="actionButtons"><li class="actionButton" data-icon-user="'+rankResult[i]+'"><a href="#"><img src="images/report.svg" alt="REPORT"><span>REPORT</span></a></li><li class="actionButton"><a href="download/icon100-NEON.ai"><img src="images/download.svg" alt="DOWNLOAD"><span>DOWNLOAD</span></a></li></ul></div><img class="content-right" src="images/reportThumbnail/'+rankResult[i]+'.svg" alt="matuba"></li>'
				}else{
					listHTML += '<!--report '+10+'--><li class="content"><div class="content-left"><h2 class="rank">'+10+'</h2><p class="caption">'+ICON_DATAS[rankResult[i]].ICON_CAPTION_MIN+'</p><ul class="actionButtons"><li class="actionButton" data-icon-user="'+rankResult[i]+'"><a href="#"><img src="images/report.svg" alt="REPORT"><span>REPORT</span></a></li><li class="actionButton"><a href="download/icon100-NEON.ai"><img src="images/download.svg" alt="DOWNLOAD"><span>DOWNLOAD</span></a></li></ul></div><img class="content-right" src="images/reportThumbnail/'+rankResult[i]+'.svg" alt="matuba"></li>'
				}
			}
			
			//リスト書き込み
			$("#contents").html(listHTML);
		}
		//Report表示
		$(".actionButton").on("click",function(){
			reportFunc($(this).attr("data-icon-user"));
		});
	}
	function reportFunc(rankViewUserID){
		displayCont("#report-backdrop",1);
		displayCont("#reportBox",1);
		//CloseBox
		$("#closeReport").on("click",function(){
			displayCont("#report-backdrop",0);
			displayCont("#reportBox",0);
		})
		$("#report-backdrop").on("click",function(){
			displayCont("#report-backdrop",0);
			displayCont("#reportBox",0);
		})
		//書き換え
		$("#report-Thumbnail").attr("src",'images/reportThumbnail/'+rankViewUserID+'.svg');
		$("#report-icon-title").text(ICON_DATAS[rankViewUserID].ICON_NAME);
		$("#report-icon-creator").html('<img src="images/writer.svg" alt="">'+ICON_DATAS[rankViewUserID].CREATOR_NAME);
		$("#report-icon-caption").text(ICON_DATAS[rankViewUserID].ICON_CAMTION);
		$("#report-icon-how").text(ICON_DATAS[rankViewUserID].ICON_HOW);
		$("#report-icon-setlist").attr("src",'images/reportIconSetList/'+rankViewUserID+'.svg');
	}
	
});