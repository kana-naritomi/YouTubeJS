let unko = "Hello world!";

// unko = "Hello world2!!";
console.log(unko);




//関数
const inoki = ["いーち","にーい","さーん","ダーーー！"];

const test = (arg) => {
  if(inoki.length > arg){
    console.log("ボンバイエ！");
  } else {
    console.log("ボンバ...！");
  }
};
test(6);


// オブジェクト
const unko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("Hello world!");
  }
};

console.log(unko2.goToilet());

console.log(window.innerWidth);
window.alert("Hi!");

console.log(document);
console.log(document.getElementsByTagName("button")[0].addEventListener("click",()=> {
  window.alert("Hello!");
}));

