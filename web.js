// 保存照片列表信息
var photoList = [];
// 申明变量，保存当前照片信息,0就是第一张照片
var currentIndex_photo = 0;
//申明变量，定义是哪个相册
var photo_num = 0;
var photoList_number = [];
var photo_gif;
var photo_time;
// 保存音乐列表信息
var musicList = [];
// 申明变量，保存当前音乐信息,0就是第一首歌曲
var currentIndex = 0;

//音乐
// 1.加载音乐列表信息
$.ajax({
  type: "GET",
  url: "./music.json",
  dataType: "json",
  success: function (data) {
    musicList = data;
    console.log(data); //将内容输出在控制台中
    render(musicList[currentIndex]);
    renderMusicList(musicList);
    
  },
});
$.ajax({
  type: "GET",
  url: "./photo.json",
  dataType: "json",
success: function (data) {
      photoList = data[currentIndex];
      console.log(photoList); //将内容输出在控制台中
      photo_time = photoList.time;
      photoList_number[0] = photoList.photo_1;
      photoList_number[1] = photoList.photo_2;
      photoList_number[2] = photoList.photo_3;
      photoList_number[3] = photoList.photo_4;
      photo_gif = photoList.gif;
      $(".buttom_control").css({ opacity: "1" });
      $("#prephoto").css("pointer-events", "auto");
      $("#nextphoto").css("pointer-events", "auto");
      $("#transferphoto").css({ opacity: "0" });
      $("#transferphoto").css("pointer-events", "none");
      $("#image_1").css("pointer-events", "auto");
      $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
    },
});

$(".player-warp").mouseenter(function () {
  // 让音乐卡片信息显示出来，animate 属性 时间
  $(".player-info").animate(
    {
      top: "105%",
      opacity: 1,
    },
    "slow"
  );
});

$(".player-warp").mouseleave(function () {
  //  让音乐卡片消失
  $(".player-info").animate(
    {
      top: "115%",
      opacity: 0,
    },
    "slow"
  );
});
// 给播放按钮绑定事件
$("#playButtom").on("click", function () {
  if ($("audio").get(0).paused) {
    // if ($(this).hasClass("fa fa-play")) {
    //暂停状态，应该播放
    // 移除类名，添加新类名,修改播放按钮的图标状态
    $(this).removeClass("fa fa-play").addClass("fa fa-pause");
    // $("audio"获取的是jquery对象，.get(0)是为了获取第一个元素，即原声
    $("audio").get(0).play();
    //让封面旋转
    $(".cover").css({ "animation-play-state": "running" });
  } else {
    $(this).removeClass("fa fa-pause").addClass("fa fa-play");

    // 让音乐暂停
    $("audio").get(0).pause();
    // 让封面暂停
    $(".cover").css({ "animation-play-state": "paused" });
  }
  //重新渲染列表数据
  renderMusicList(musicList);
  // 加载照片列表信息
  $.ajax({
    type: "GET",
    url: "./photo.json",
    dataType: "json",
    success: function (data) {
      photoList = data[currentIndex];
      console.log(photoList); //将内容输出在控制台中
      photo_time = photoList.time;
      photoList_number[0] = photoList.photo_1;
      photoList_number[1] = photoList.photo_2;
      photoList_number[2] = photoList.photo_3;
      photoList_number[3] = photoList.photo_4;
      photo_gif = photoList.gif;
      $(".buttom_control").css({ opacity: "1" });
      $("#prephoto").css("pointer-events", "auto");
      $("#nextphoto").css("pointer-events", "auto");
      $("#transferphoto").css({ opacity: "0" });
      $("#transferphoto").css("pointer-events", "none");
      $("#image_1").css("pointer-events", "auto");
      $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
    },
  });
});

// 给上一首按钮绑定事件
$("#preButtom").on("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = musicList.length - 1;
  }
  // 重新渲染歌曲信息
  render(musicList[currentIndex]);
  if ($("#playButtom").hasClass("fa fa-pause")) {
    $("audio").get(0).play();
  }
  renderMusicList(musicList);
  // 加载照片列表信息
  $.ajax({
    type: "GET",
    url: "./photo.json",
    dataType: "json",
    success: function (data) {
      photoList = data[currentIndex];
      console.log(photoList); //将内容输出在控制台中
      photo_time = photoList.time;
      photoList_number[0] = photoList.photo_1;
      photoList_number[1] = photoList.photo_2;
      photoList_number[2] = photoList.photo_3;
      photoList_number[3] = photoList.photo_4;
      photo_gif = photoList.gif;
      $(".buttom_control").css({ opacity: "1" });
      $("#prephoto").css("pointer-events", "auto");
      $("#nextphoto").css("pointer-events", "auto");
      $("#transferphoto").css({ opacity: "0" });
      $("#transferphoto").css("pointer-events", "none");
      $("#image_1").css("pointer-events", "auto");
      $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
    },
  });
});

// 给下一首按钮绑定事件
$("#nextButtom").on("click", function () {
  if (currentIndex < musicList.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  // 重新渲染歌曲信息
  render(musicList[currentIndex]);
  if ($("#playButtom").hasClass("fa fa-pause")) {
    $("audio").get(0).play();
  }
  renderMusicList(musicList);
  // 加载照片列表信息
  $.ajax({
    type: "GET",
    url: "./photo.json",
    dataType: "json",
    success: function (data) {
      photoList = data[currentIndex];
      console.log(photoList); //将内容输出在控制台中
      photo_time = photoList.time;
      photoList_number[0] = photoList.photo_1;
      photoList_number[1] = photoList.photo_2;
      photoList_number[2] = photoList.photo_3;
      photoList_number[3] = photoList.photo_4;
      photo_gif = photoList.gif;
      $(".buttom_control").css({ opacity: "1" });
      $("#prephoto").css("pointer-events", "auto");
      $("#nextphoto").css("pointer-events", "auto");
      $("#transferphoto").css({ opacity: "0" });
      $("#transferphoto").css("pointer-events", "none");
      $("#image_1").css("pointer-events", "auto");
      $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
    },
  });
});
// 给模块按钮绑定事件
$("#module").on("click", function () {
  if ($(".modal-box").css("opacity") == 0) {
    $(".modal-box").animate(
      {
        left: "-70%",
        opacity: 1,
      },
      "slow"
    );
    $(".modal").css({ "z-index": "1" });
  } else {
    $(".modal-box").animate(
      {
        left: "-150%",
        opacity: 0,
      },
      "slow"
    );
    $(".modal").css({ "z-index": "-1" });
  }
});

// 监听audio标签timeupdate事件
$("audio").on("timeupdate", function () {
  //获取音乐当前的时间，单位：秒
  var currentTime = $("audio").get(0).currentTime;
  //获取音乐的总时长，单位：秒
  var duration = $("audio").get(0).duration;
  //设置当前播放时间
  $(".current-time").text(formatTime(currentTime));
  //设置进度条
  var value = (currentTime / duration) * 100;
  $(".music_progress_line").css({
    width: value + "%",
  });
}); //触发一个事件

//监听音乐播放完毕的事件
$("audio").on("ended", function () {
  //播放完关闭
  //$("#playButtom").removeClass("fa fa-pause").addClass("fa fa-play");
  //$(".cover").css({ "animation-play-state": "paused" });
  //播放完循环
  $("#playButtom").trigger("click");
});
//通过事件委托给音乐列表的播放列表绑定点击事件
$(".music-list").on("click", ".play-circle", function () {
  if ($(this).hasClass("fa-play-circle")) {
    var index = $(this).attr("data-index");
    currentIndex = index;
    render(musicList[currentIndex]);
    $("#playButtom").trigger("click");
  } else {
    $("#playButtom").trigger("click");
  }
  // 加载照片列表信息
  $.ajax({
    type: "GET",
    url: "./photo.json",
    dataType: "json",
    success: function (data) {
      photoList = data[currentIndex];
      console.log(photoList); //将内容输出在控制台中
      photo_time = photoList.time;
      photoList_number[0] = photoList.photo_1;
      photoList_number[1] = photoList.photo_2;
      photoList_number[2] = photoList.photo_3;
      photoList_number[3] = photoList.photo_4;
      photo_gif = photoList.gif;
      $(".buttom_control").css({ opacity: "1" });
      $("#prephoto").css("pointer-events", "auto");
      $("#nextphoto").css("pointer-events", "auto");
      $("#transferphoto").css({ opacity: "0" });
      $("#transferphoto").css("pointer-events", "none");
      $("#image_1").css("pointer-events", "auto");
      $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
    },
  });
});
//格式化时间  329->05:29
function formatTime(time) {
  var min = parseInt(time / 60); //取整
  var sec = parseInt(time % 60);
  min = min < 10 ? "0" + min : min; //判断min是否小于10，小于10则为0加min
  sec = sec < 10 ? "0" + sec : sec;
  return `${min}:${sec}`;
}

//根据音乐列表数据，创建li标签
function renderMusicList(list) {
  $(".music-list").empty(); //清空
  $.each(list, function (index, item) {
    var $li = $(`
             <li  class = "${index == currentIndex ? "playing" : ""}">
               <span > ${index < 9 ? "0" + (index + 1) : index}.${
      item.number
    }</span>
               <span data-index = "${index}" class="fa ${
      index == currentIndex && !$("audio").get(0).paused
        ? "fa-pause-circle"
        : "fa-play-circle"
    } play-circle "></span>
             </li>
             `);
    $(".music-list").append($li);
    $(".playing").css({
      color: list[currentIndex].color,
    });
  });
}
// 根据信息，设置页面对应标签中的内容
function render(data) {
  $(".name").text(data.name); //将对象中的name赋给标签中的name
  $(".singer").text(data.singer); //.text(`${data.singer} - ${data.album}`)
  $(".time").text(data.time);
  $(".cover img").attr("src", data.cover); //cover标签中的img
  $("audio").attr("src", data.audio_url); //audio标签
  $(".mask_bg").css({
    background: `url("${data.cover}")no-repeat center center`,
  });
  $(".music_progress_top").css({
    color: data.color,
  });
  $(".music_progress_line").css({
    "background-color": data.color,
  });
}

//照片
console.log(photoList_number);
$("#image_1").on("click", function () {
  $(".buttom_control").css({ opacity: "0" });
  $("#prephoto").css("pointer-events", "none");
  $("#nextphoto").css("pointer-events", "none");
  $("#transferphoto").css({ opacity: "1" });
  $("#transferphoto").css("pointer-events", "auto");
  $(".photo_cover img").attr("src", photo_gif);
  $("#image_1").css("pointer-events", "none");
});

$("#transferphoto").on("click", function () {
  $(".buttom_control").css({ opacity: "1" });
  $("#prephoto").css("pointer-events", "auto");
  $("#nextphoto").css("pointer-events", "auto");
  $("#transferphoto").css({ opacity: "0" });
  $("#transferphoto").css("pointer-events", "none");
  $("#image_1").css("pointer-events", "auto");
  $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
});
// 给上一首按钮绑定事件
$("#prephoto").on("click", function () {
  if (currentIndex_photo > 0) {
    currentIndex_photo--;
  } else {
    currentIndex_photo = photoList_number.length - 1;
  }
  // 重新渲染歌曲信息
  $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
});

// 给下一首按钮绑定事件
$("#nextphoto").on("click", function () {
  if (currentIndex_photo < photoList_number.length - 1) {
    currentIndex_photo++;
  } else {
    currentIndex_photo = 0;
  }
  // 重新渲染图片信息
  $(".photo_cover img").attr("src", photoList_number[currentIndex_photo]);
});
