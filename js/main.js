// JavaScript Document
$(function(){
	playClick();
	//DATAS	
	var INTORO_MSGBOX_TEXT = [
		["コンニチワ. ","ワタシノナマエハ “コロン” "],
		["アナタガ ホシイ ","アイコン ヲ テイアンスル "],
		["アイコン コンシェルジュ ","AI デス！"]
	];

	var REPORT_MSGBOX_TEXT = [
		['ブンセキ カンリョウ ケッカヲ ',' オススメ ジュン ニ ヒョウジシマス '],
		['サユウ ノ ヤジルシ ヲ オスト ','ヒョウジ ヲ キリカエ ラレマス ']
	];
	var ICON_TAG_AND_LOG = [
			{"tag":"camera","use":"unuse"},
			{"tag":"clock","use":"unuse"}, 
			{"tag":"mail","use":"unuse"},
			{"tag":"play","use":"unuse"},
			{"tag":"user","use":"unuse"},
			{"tag":"vol","use":"unuse"},
			{"tag":"zoom","use":"unuse"}
	];

	var ICON_DATAS = [
		{
			"ID":"saya",
			"CREATOR_NAME":"高橋 沙弥",
			"ICON_NAME":"顔つきアイコン",
			"ICON_CAPTION_MIN":"とにかくかわいさと見やすさを重視して制作しました。工夫点は各アイコンの大きさの統一と、わかりやすさを重視した点です。",
			"ICON_CAMTION":"アイコン自体の大きさを統一したことと、なるべく文字を使わず見てわかりやすいアイコンを目指して制作しました。なるべく同じモチーフのアイコンでも見たことのある形やデザインにならないよう、気を付けました。",
			"ICON_HOW":"子供向けのかわいらしいサイトや、少しポップ調のサイトに似合うと思います。",
			"ICON_TYPE":"C",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{ 
			"ID":"ken",
			"CREATOR_NAME":"鈴木　健太郎",
			"ICON_NAME":"太丸太枠アイコン",
			"ICON_CAPTION_MIN":"とてもシンプルで使いやすいアイコンをテーマに作成しました。",
			"ICON_CAMTION":"見た目の通り太丸太枠アイコンです。視認性に優れており、年配の方やあまり目のすぐれない方々にも使いやすいデザインになっています。",
			"ICON_HOW":"幼児向けのサイト、年配向けのサイト",
			"ICON_TYPE":"B",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{
			"ID":"hayato",
			"CREATOR_NAME":"加藤 颯人",
			"ICON_NAME":"シンプルアイコン",
			"ICON_CAPTION_MIN":"角丸と線を太くすることで、どんなサイトでも利用できることを想定しました。",
			"ICON_CAMTION":"わかりやすいシェイプと、角丸と線を太くすることで、視認性を高め、どんなサイトでも利用できることを想定して制作しました。",
			"ICON_HOW":"シンプルなデザインのサイト",
			"ICON_TYPE":"B",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{
			"ID":"nakazawa",
			"CREATOR_NAME":"nakazawa yuuta",
			"ICON_NAME":"六角形アイコン",
			"ICON_CAPTION_MIN":"六角形がちりばめられたアイコンです。隠れ中二病にオススメ！！",
			"ICON_CAMTION":"六角形がちりばめられたアイコンです。六角形が無いように見えてもどこかに隠れていたり、六角形の一部を使ったりしています。",
			"ICON_HOW":"幾何学模様を使ったサイトや、近未来的デザインのサイトに",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{
			"ID":"dora",
			"CREATOR_NAME":"DorA",
			"ICON_NAME":"ノスタルジックアイコン",
			"ICON_CAPTION_MIN":"大正や昭和チックなノスタルジーに浸れるアイコンです。",
			"ICON_CAMTION":"大正や昭和チックなノスタルジーに浸れるアイコンです。一癖も二癖もあるので汎用的ではないですがくすっと笑えたりできる仕様になっております。",
			"ICON_HOW":"明治から平成前までの記念展や没してる方の作品展や、風変わりで時代背景が今より昔の小説やアニメ、マンガなどに使えます。",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{ 
			"ID":"keito",
			"CREATOR_NAME":"伊藤 圭杜",
			"ICON_NAME":"点線アイコン",
			"ICON_CAPTION_MIN":"今回は点線をテーマに作りました。細かな点線たちが一つのアイコンを作り上げシンプルでシックな物に仕上がりました。",
			"ICON_CAMTION":"今回は点線をテーマに作りました。細かな点線たちが一つのアイコンを作り上げシンプルでシックな物に仕上がりました。誰が見てもわかりやすく、多くのジャンルに特化したアイコンです。",
			"ICON_HOW":"おすすめのサイトはアパレルなどのシンプルでシックなデザインのサイトです。しかし点線ということもありいろんなサイトに合うと思われますのでぜひご利用ください。",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{
			"ID":"lavp",
			"CREATOR_NAME":"L⊿AVP*",
			"ICON_NAME":"NEON",
			"ICON_CAPTION_MIN":"ネオン管をモチーフに線のみで制作されたアイコンです。",
			"ICON_CAMTION":"ネオン管をモチーフに線のみで制作されたアイコンです。バンドのサイトなど暗めの背景によく合います。このアイコンは、SVG Filterと組み合わせるとネオン管のように光らせることができます。",
			"ICON_HOW":"イベントやバンドのWebサイトなど",
			"ICON_TYPE":"C",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{
			"ID":"samu",
			"CREATOR_NAME":"沈家康",
			"ICON_NAME":"直線",
			"ICON_CAPTION_MIN":"シンプルで、簡潔で、見やすいためにこのデザインにしました。誰でも見てすぐわかるデザインです。無料で使えるので、どうぞご自由に使ってください。",
			"ICON_CAMTION":"ネオン管をモチーフに線のみで制作されたアイコンです。バンドのサイトなど暗めの背景によく合います。このアイコンは、SVG Filterと組み合わせるとネオン管のように光らせることができます。",
			"ICON_HOW":"シンプル、簡潔なサイト",
			"ICON_TYPE":"C",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{
			"ID":"kimura",
			"CREATOR_NAME":"木村 大貴",
			"ICON_NAME":"マジシャンアイコン",
			"ICON_CAPTION_MIN":"マジシャンにまつわる道具やマジックをもとに不思議な雰囲気で制作。",
			"ICON_CAMTION":"シンプルで、簡潔で、見やすいためにこのデザインにしました。複雑すぎないように、より多くサイトで使えるように作りました。線だけで構成されて、誰でも見てすぐわかるデザインです。色は自由に変えられるので、よりカラフルなサイトも使えます。",
			"ICON_HOW":"ゲーム系やファンタジーな雰囲気なサイト。動きが面白いサイトなどにおすすめ。",
			"ICON_TYPE":"A",
			"FLAG":false,
			"SELECT_LOG":0
		},
		{ 
			"ID":"matuba",
			"CREATOR_NAME":"松葉",
			"ICON_NAME":"角丸アイコン",
			"ICON_CAPTION_MIN":"パッとみてもなんのアイコンなのかわかるようにシンプルに作成しました。",
			"ICON_CAMTION":"パッとみてもすぐになんのアイコンなのかわかるように線を太くしてアプリなどにも使いやすいように角丸でシンプルに作成しました。",
			"ICON_HOW":"シンプルなサイトやアプリなどに",
			"ICON_TYPE":"B",
			"FLAG":false,
			"SELECT_LOG":0
		}
	];

	var ICON_ID = ["saya","ken","hayato","nakazawa","dora","keito","lavp","samu","kimura","matuba"];

	var icon_analytics = [];
	var rankSortBefore = [0,0,0,0,0,0,0,0,0,0];
	var analyticsBreak = false;
	
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
	function typeText(arrayName, targetElement,flag) {
		$("#fixedBrain").addClass("fixedBrainCenter");
		let i = 0;
		let j = 0;
		let k = 0;
		let delay = 10;
		(function loop() {
			setTimeout(function () {
				//次のメイン処理へ
				if (i >= arrayName.length) {
					//はじめのメッセージボックス終了
					if(arrayName.length == 3){
						$("#fixedBrain").removeClass("fixedBrainCenter");
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
				playType();
				delay = 200;
				if(k == arrayName[i][j].length-1){
					delay = 600;
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
	
	//各セクション処理---------------------
	$("#fixedBrain").on("mouseup",function(){
		$("#fixedBrain").removeClass("fixedBrainWait");
		intoroFunc();
	});
	function intoroFunc(){
		displayCont("#fixedBrain",1);
		displayCont("#msgBox",1);
		
		//文字列表示
		typeText(INTORO_MSGBOX_TEXT,document.querySelector("#msg1"),1);
		
	};
	function alartBox(){
		displayCont("#alertBox",1);
		playClick();
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
		
		//グローバル変数
		var quizCount = 0; //0は出題前8は全問題処理後の数値
		var likeType = null;
		
		nextQuiz();
		
		//単純にランダムで７回やって、多かったやつの順番じゃだめなのか？
		function nextQuiz(){
			console.log("nextQuiz is work");
			quizCount++;
			console.log(quizCount);
			///問題へ
			if(quizCount <= 7){
        makeQuiz();
        if(quizCount == 3){
          sort();
          }
				
			}
			//出題終了
			if(quizCount == 8){
				hosei();
			}
			if(quizCount >= 9){
				exit;
			}
		}
		
		
		function makeQuiz(){
			console.log("makeQuiz is work");
			//どのTAGのアイコンを出題にするか決定
			//もう使われていたら再度やり直す
			//使った種類はフラグを立てておく
			var randIconTag = makeRundSet(7,1);
			while(ICON_TAG_AND_LOG[randIconTag[0]].use == "use" && quizCount <= 6){
				randIconTag = makeRundSet(7,1);
				console.log("aaaaaaaaaa");
			}
			ICON_TAG_AND_LOG[randIconTag[0]].use = "use";
			
			//どのユーザーを表示させるか決定
			//ifで同じアイコンが出ていたらやり直しするようにする
			//使ったユーザーは
			var randUser = makeRundSet(10,3);
			while(randUser[0] == randUser[1] || randUser[0] == randUser[2] || randUser[1] == randUser[2]){
        if(quizCount >= 4){
        if(ICON_DATAS[randUser[0]].ICON_TYPE == likeType && ICON_DATAS[randUser[2]].ICON_TYPE == likeType){
          break;
          }else{
				
        randUser = makeRundSet(10,3);
          }
         }else{
           randUser = makeRundSet(10,3);
           }
			}
			
			//quizDisplay()に渡す
			console.log(ICON_TAG_AND_LOG[randIconTag[0]].tag);
			console.log(ICON_DATAS[randUser[0]].ID);
			console.log(ICON_DATAS[randUser[1]].ID);
			console.log(ICON_DATAS[randUser[2]].ID);
			
			var tmp1 = ICON_TAG_AND_LOG[randIconTag[0]].tag;
			var tmp2 = ICON_DATAS[randUser[0]].ID;
			var tmp3 = ICON_DATAS[randUser[1]].ID;
			var tmp4 = ICON_DATAS[randUser[2]].ID;
			
			console.log("tmp1 is "+tmp1);
			quizDisplay(tmp1,tmp2,tmp3,tmp4);
		}
		
		function quizDisplay(iconTag,panel_id_1,panel_id_2,panel_id_3){
			console.log("quizDisplay is work");
			//問題番号を書き換える処理
			$("#analytics-Title").text("0"+quizCount);
			//問題を書き換える処理
			//data-icon-idも書き換え
			var panel_users = [panel_id_1,panel_id_2,panel_id_3];
			for(var i = 0;i < 3;i++){
				$("#analytics-Buttons li").eq(i).find("img").attr("src","images/analyticsIcons/" + panel_users[i] + "-" + iconTag + ".svg");
				$("#analytics-Buttons li").eq(i).find("img").attr("data-icon-id",panel_users[i]);
				$("#analytics-Buttons li").eq(i).find("img").attr("alt",panel_users[i]);
			}
			judge();
		}
		
		function judge(){
			if(analyticsBreak == true){
				exit;
			}
			
			
			//どのパネルがmouseupされたか取得
			//クリックされたパネルをICON_DATAS[].SELECTに加算
			$("#analytics-Buttons li img").on("mouseup",function(){
				console.log("judge is work");
				var thisTmp = $(this);
				var thisAttr = thisTmp.attr("data-icon-id");
				for(var i = 0;i < 10;i++){
					if(thisAttr == ICON_DATAS[i].ID){
						ICON_DATAS[i].SELECT_LOG++;
						break;
					}
				}
				//nextQuiz()に戻す
				nextQuiz();
			});
			
			judge();
		}
		
		function hosei(){
			console.log("hosei is work");
			//問題の出し方に条件分岐をするようになったら、ここにlikeTypeに応じてSELECT_LOGの値に適切な数値を掛け算する
			//今は単純な問題の出し方にしているのでこの処理は行われない
				//押された回数 * 好きなタイプ
			
      
			//所属のアイコンタイプに応じて倍加算する
      if(quizCount == 3){
			for(var i = 0;i < 10;i++){
				if(ICON_DATAS[i].ICON_TYPE == likeType){
					ICON_DATAS[i].SELECT_LOG*10;
				}else{
					switch(likeType){
						case "A":
							if(ICON_DATAS[i].ICON_TYPE == 'B'){
								ICON_DATAS[i].SELECT_LOG*5;
							}else{
								ICON_DATAS[i].SELECT_LOG*1;
							}
							break;
						case "B":
							if(ICON_DATAS[i].ICON_TYPE == 'C'){
								ICON_DATAS[i].SELECT_LOG*5;
							}else{
								ICON_DATAS[i].SELECT_LOG*1;
							}
							break;
						case "C":
							if(ICON_DATAS[i].ICON_TYPE == 'A'){
								ICON_DATAS[i].SELECT_LOG*5;
							}else{
								ICON_DATAS[i].SELECT_LOG*1;
							}
							break;
					}
				}
			}
        nextQuiz();
      }
			
			sort();
		}
		
		function sort(){
			console.log("sort is work");
			//試験的に動かしてみる
			//配列の中身をまるごと並び替える
			ICON_DATAS.sort(function(a,b){
				if(a.SELECT_LOG<b.SELECT_LOG) return 1;
				if(a.SELECT_LOG > b.SELECT_LOG) return -1;
				return 0;
			});
			analyticsBreak = true;
      likeType = ICON_DATAS[0].ICON_TYPE;
      if(quizCount != 3){
			  doneAlartFunc();
        }else{
          hosei();
          }
		}
	}
	function doneAlartFunc(){
		console.log("doneAlartFunc is work");
		displayCont("#analyticsBox",0);
		displayCont("#msgBox",1);
		displayCont("#fixedBrain",1);
		
		//文字列表示
		typeText(REPORT_MSGBOX_TEXT,document.querySelector("#msg1"),2);
		
	}
	function scrollFunc(){
		playClick();
		console.log("scrollFunc is work");
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
			console.log("makeList is work");
			//リスト生成
			var listHTML = "";
			for(var i = 0;i < 10;i++){
				if(i != 9){
					listHTML += '<!--report '+(i+1)+'--><li class="content"><div class="content-left"><h2 class="rank">0'+(i+1)+'</h2><p class="caption">'+ICON_DATAS[i].ICON_CAPTION_MIN+'</p><ul class="actionButtons"><li class="actionButton" data-icon-user="'+ICON_DATAS[i].ID+'"><a href="#"><img src="images/report.svg" alt="REPORT"><span>REPORT</span></a></li><li class="actionButton"><a href="download/icon100-NEON.ai"><img src="images/download.svg" alt="DOWNLOAD"><span>DOWNLOAD</span></a></li></ul></div><img class="content-right" src="images/reportThumbnail/'+ICON_DATAS[i].ID+'.svg" alt="matuba"></li>'
				}else{
					listHTML += '<!--report '+10+'--><li class="content"><div class="content-left"><h2 class="rank">'+10+'</h2><p class="caption">'+ICON_DATAS[i].ICON_CAPTION_MIN+'</p><ul class="actionButtons"><li class="actionButton" data-icon-user="'+ICON_DATAS[i].ID+'"><a href="#"><img src="images/report.svg" alt="REPORT"><span>REPORT</span></a></li><li class="actionButton"><a href="download/icon100-NEON.ai"><img src="images/download.svg" alt="DOWNLOAD"><span>DOWNLOAD</span></a></li></ul></div><img class="content-right" src="images/reportThumbnail/'+ICON_DATAS[i].ID+'.svg" alt="matuba"></li>'
				}
			}
			
			//リスト書き込み
			$("#contents").html(listHTML);
		}
		//Report表示
		$(".actionButton").on("mouseover",function(){
			playHover();
		});
		$(".actionButton").on("click",function(){
			reportFunc(rankView-1);
		});
	}
	function reportFunc(rankViewUser){
		playClick();
		console.log("reportFunc is work");
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
		$("#report-Thumbnail").attr("src",'images/reportThumbnail/'+ICON_DATAS[rankViewUser].ID+'.svg');
		$("#report-icon-title").text(ICON_DATAS[rankViewUser].ICON_NAME);
		$("#report-icon-creator").html('<img src="images/writer.svg" alt="">'+ICON_DATAS[rankViewUser].CREATOR_NAME);
		$("#report-icon-caption").text(ICON_DATAS[rankViewUser].ICON_CAMTION);
		$("#report-icon-how").text(ICON_DATAS[rankViewUser].ICON_HOW);
		$("#report-icon-setlist").attr("src",'images/reportIconSetList/'+ICON_DATAS[rankViewUser].ID+'.svg');
	}
	
	
	//効果音再生
	function playHover(){
		$("#playHover")[0].pause();
		$("#playHover")[0].currentTime = 0;
		$("#playHover")[0].play();
	}
	function playClick(){
		$("#playClick")[0].pause();
		$("#playClick")[0].currentTime = 0;
		$("#playClick")[0].play();
	}
	function playType(){
		$("#playType")[0].pause();
		$("#playType")[0].currentTime = 0;
		$("#playType")[0].play();
	}
	
	$("#alart-Buttons li").on("mouseenter",playHover);
	$("#alart-Buttons li").on("click",playClick);
	$("#analytics-Buttons li").on("mouseenter",playHover);
	$("#analytics-Buttons li").on("click",playClick);
	$("#backBtn").on("mouseenter",playHover);
	$("#backBtn").on("click",playClick);
	$("#nextBtn").on("mouseenter",playHover);
	$("#nextBtn").on("click",playClick);
	$("#closeReport").on("mouseenter",playHover);
	$("#closeReport").on("click",playClick);
	$("#report-download").on("mouseenter",playHover);
	$("#report-download").on("click",playClick);
	$(".actionButton").on("mouseenter",playHover);
	$(".actionButton").on("click",playClick);
	$("#frontground a").on("mouseenter",playHover);
	$("#frontground a").on("click",playClick);
	$("#fixedBrain").on("mouseenter",playHover);
	$("#fixedBrain").on("click",playClick);
	$("#report-backdrop").on("click",playClick);
});