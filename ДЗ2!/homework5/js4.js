//=========первый вариант========//

function replace_string2(string, pat) {

  for (i = 0; i < pat.length; i++) {
    string = string.replace(new RegExp(`${pat[i]}`, "gi"), "");
  }

  return string;
}

var k = replace_string2("Hello Vasiliy", ["l", "a"]);
console.log(k);
//==========второй вариант==========//


function sad(str, slov) {
  newStr = str.split("");

  for (j = 0; j < slov.length; j++) {

    for (i = 0; i < newStr.length; i++) {

      if (slov[j] === newStr[i]) {
        delete newStr[i];
      }
    }
  }

  newStr = newStr.join("");
  console.log(newStr);
}

sad("Hello Vasiliy", ["l", "a"]);


//======== третий варинат =========///



function mySplit2(string, del) {
  string = string.split('');

  for (var i = 0; i < del.length; i++) {
    var index = string.indexOf(del[i]);

    if (index != -1) {
      string.splice(index, 1);
      i--;
    }

  }

  string = string.join('');
  return string;
}

console.log(mySplit2("Hello Vasiliy", ["l", "a"]));