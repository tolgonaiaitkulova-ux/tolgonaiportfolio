function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ek0X4FadBW":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var course_code =  player.GetVar("course_code")
var relevant =  player.GetVar("relevant")
var relevant_comment =  player.GetVar("relevant_comment")
var useful =  player.GetVar("useful")
var useful_comment =  player.GetVar("useful_comment")
var clearly =  player.GetVar("clearly")
var clearly_comment =  player.GetVar("clearly_comment")
var worked_properly =  player.GetVar("worked_properly")
var worked_properly_comment =  player.GetVar("worked_properly_comment")
var total =  player.GetVar("total")
var total_comment =  player.GetVar("total_comment")
var comment_msc_blok1 = player.GetVar("comment_msc_blok1")
var comment_msc_blok2 = player.GetVar("comment_msc_blok2")
var comment_msc_blok3 = player.GetVar("comment_msc_blok3")
var comment_reg_blok2 = player.GetVar("comment_reg_blok2")
var comment_reg_blok3 = player.GetVar("comment_reg_blok3")

var relevant_comment = comment_msc_blok1 + "/" + comment_msc_blok2 + "/" + comment_msc_blok3;
var useful_comment = comment_reg_blok2 + "/" + comment_reg_blok3;

window.location.href = "https://bu-online.beeline.ru/custom_web_template.html?object_id=6406208877856126179&course_code=" + course_code + "&relevant=" + relevant + "&relevant_comment=" + relevant_comment + "&useful=" + useful + "&useful_comment=" + useful_comment + "&clearly=" + clearly + "&clearly_comment=" + clearly_comment + "&worked_properly=" + worked_properly + "&worked_properly_comment=" + worked_properly_comment + "&total=" + total + "&total_comment=" +  encodeURIComponent(total_comment);
}

