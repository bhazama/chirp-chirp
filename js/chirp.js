function chirp(n){
  if(n === 1){             // 2 === 1, 1 == 1, "chirp"
    return "chirp";
  }else {
    return "chirp " + chirp(--n); // chirp(3),chirp(2),
  }

  //chirp(--n);
  console.log("chirp");
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});

//chirp + chirp(2);


