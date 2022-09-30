let onequal;

function display(a) {
  let result = (document.getElementById("result").value += a);

  for (let i = 0; i < result.length; i++) {
    if (result[i] == "*") {
      onequal = "mul";
    }
    if (result[i] == "-") {
      onequal = "sub";
    }
    if (result[i] == "/") {
      onequal = "div";
    }
    if (result[i] == "+") {
      onequal = "add";
    }
  }
  if (a == "clear") {
    document.getElementById("result").value = "";
  }
}

function op(ch){
  let result = document.getElementById("result");
  let ab = result.value.slice(0,-1);
  let bc = result.value.charAt(result.value.length - 1);
  if(bc != "+" && bc != "*" && bc != "-" && bc != "/"){
    result.value += ch;
}
else{
    result.value = ab + ch;
}

}

function equal() {
  let result = document.getElementById("result").value;
  if (onequal == "mul") {
    const check = result.split("*")[0];
    const check2 = result.split("*")[1];
    const final = check * check2;
    document.getElementById("result").value = final;
  }

  if (onequal == "sub") {
    const check = result.split("-")[0];
    const check2 = result.split("-")[1];
    const final = check - check2;
    document.getElementById("result").value = final;
  }
  if (onequal == "div") {
    const check = parseFloat(result.split("/")[0]);
    const check2 = parseFloat(result.split("/")[1]);
    const final = check / check2;
    document.getElementById("result").value = final;
  }
  if (onequal == "add") {
    const check = parseFloat(result.split("+")[0]);
    const check2 = parseFloat(result.split("+")[1]);
    const final = check + check2;
    document.getElementById("result").value = final;
  }
}
