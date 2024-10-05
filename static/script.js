$(".jqEmail").on("input",() => {
  let val=$(".jqEmail").val();
  if(val==="abc@gmail.com")
    $(".hiddenDiv").prop("hidden",false);
  else
    $(".hiddenDiv").prop("hidden",true);
})