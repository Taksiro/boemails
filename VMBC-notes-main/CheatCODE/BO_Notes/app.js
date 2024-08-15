var CN = document.getElementById('CN');
var NoteArray = [];
var checkboxes = document.querySelectorAll('.form-check-input');
for(var checkbox of checkboxes) {
    checkbox.addEventListener('click',function() {
        if (this.checked == true) {
        	NoteArray.push(this.value);
        	CN.value = NoteArray.join('/');
        } else {
        	NoteArray = NoteArray.filter(e => e !== this.value);
		CN.value = NoteArray.join('/');
       }
   })
}

function QAcopy(){
  var copyText = document.getElementById("CN");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}



function AP() {
var checkBox = document.getElementById('AP');
var n = document.getElementById('ADS');
var t = document.getElementById('NN');
const k = ["Program proof valid","DOB match","Not expired","FN match","LN match","Readable"];
let f = k.length;
let a = " ";
 if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
 } else {
     t.value = "";
  }
}

function AD() {
var checkBox = document.getElementById('AD');
var n = document.getElementById('ADS');
var t = document.getElementById('NN');
const k = ["Program proof valid","Not expired","FN match","LN match","Readable"];
let f = k.length;
let a = " ";
 if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
 } else {
     t.value = "";
  }
}

function AA() {
var checkBox = document.getElementById('AA');
var n = document.getElementById('AAS');
var t = document.getElementById('NN');
const k = ["Program proof valid","Address match","Not expired","FN match","LN match","Readable"];
let f = k.length;
let a = " ";
 if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function AA() {
var checkBox = document.getElementById('AA');
var n = document.getElementById('AAS');
  var t = document.getElementById('NN');
  const k = ["Program proof valid","Address match","Not expired","FN match","LN match","Readable"];
  let f = k.length;
  let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function AFAP() {
var checkBox = document.getElementById('AFAP');
var n = document.getElementById('AFS');
var t = document.getElementById('NN');
const k = ["Address match","FN match","LN match","Not expired, does not exceed 90 days","Readable"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function AI() {
var checkBox = document.getElementById('AI');
var n = document.getElementById('AIS');
var t = document.getElementById('NN');
const k = ["FN match","LN match","Income proof valid","Income amount does not exceed the limit","Readable"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function ASP() {
var checkBox = document.getElementById('ASP');
var n = document.getElementById('ASPS');
var t = document.getElementById('NN');
const k = ["FN match","LN match","SSN proof valid","Four digit number match","Readable"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function ADSP() {
var checkBox = document.getElementById('ADSP');
var n = document.getElementById('ADSS');
var t = document.getElementById('NN');
const k = ["FN match","LN match","Dependent SSN proof valid","Four digit number match","Without signature accepted under 18","Readable"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function ADDP() {
var checkBox = document.getElementById('ADDP');
var n = document.getElementById('ADDS');
var t = document.getElementById('NN');
const k = ["FN match","LN match","Dependent DOB proof valid","Readable"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DP() {
var checkBox = document.getElementById('DP');
var n = document.getElementById('DPS');
var t = document.getElementById('NN');
const k = ["Borders not shown","Purchase receipt incomplete","Purchase receipt declined","Purchase receipt expired","Name interchanged","FN is mismatch","LN is mismatch","DOB is mismatch","Address on proof does not match the address registered","Expired proof","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DD() {
var checkBox = document.getElementById('DD');
var n = document.getElementById('DDS');
var t = document.getElementById('NN');
const k = ["Borders not shown","Name interchanged","FN is mismatch","LN is mismatch","DOB is mismatch","Letter no longer valid","Expired proof","Not allowed type of proof","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DAP() {
var checkBox = document.getElementById('DAP');
var n = document.getElementById('DAPS');
var t = document.getElementById('NN');
const k = ["Address on proof does not match the address registered","Name interchanged","FN is mismatch","LN is mismatch","Letter no longer valid","Not allowed type of proof","Expired proof","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DFAP() {
var checkBox = document.getElementById('DFAP');
var n = document.getElementById('DFAPS');
var t = document.getElementById('NN');
const k = ["Address on proof does not match the address registered","Name interchanged","FN is mismatch","LN is mismatch","Letter no longer valid","Not allowed type of proof","Expired proof older than 90 days","Rental letter not allowed","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DI() {
var checkBox = document.getElementById('DI');
var n = document.getElementById('DIS');
var t = document.getElementById('NN');
const k = ["Name interchanged","FN is mismatch","LN is mismatch","Letter no longer valid","Not allowed type of proof","Income amount exceeds the limit","Expired proof","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DSP() {
var checkBox = document.getElementById('DSP');
var n = document.getElementById('DSPS');
var t = document.getElementById('NN');
const k = ["FN is mismatch","LN is mismatch","Name interchanged","Missing signature","Old SSN card no longer valid","Type of proof not allowed","Four digit number on proof does not match the number registered","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DDSP() {
var checkBox = document.getElementById('DDSP');
var n = document.getElementById('DDSPS');
var t = document.getElementById('NN');
const k = ["FN is mismatch","LN is mismatch","Name interchanged","Four digit number on proof does not match the number registered","Dependent SSN invalid","Type of proof not allowed","Key information erased or modified"];
let f = k.length;
let a = " ";
  if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;
  } else {
     t.value = "";
  }
}

function DDD() {
var checkBox = document.getElementById('DDD');
var n = document.getElementById('DDDS');
var t = document.getElementById('NN');
const k = ["FN is mismatch","LN is mismatch","Name interchanged","Dependent DOB invalid","Key information erased or modified"];
let f = k.length;
let a = " ";
 if (checkBox.checked == true){
  	for(let p = 0; p < f; p++){
  		a += k[p] + "\n ";
  	}
  	 t.value = a;	
  } else {
     t.value = "";
  }
}

function deSelect(){  
var c = document.getElementsByName('chk');
let txtbox = document.getElementById('CN');
const note= document.getElementById('NN');
for(var i = 0; i<c.length; i++){
    c[i].checked = false;
    txtbox.value = '';
    window.location.reload(true);
    note.value = '';

}

//var a= document.getElementById('AP');
//var b= document.getElementById('AD');
//var c= document.getElementById('AA');
//var d= document.getElementById('AFAP');
//var e= document.getElementById('AI');
//var f= document.getElementById('ASP');
//var g= document.getElementById('ADSP');
//var h= document.getElementById('DP');
//var j= document.getElementById('DD');
//var k= document.getElementById('DAP');
//var l= document.getElementById('DFAP');
//var m= document.getElementById('DI');
//var n= document.getElementById('DSP');
//var o= document.getElementById('DDSP');
//var p= document.getElementById('DDD');
//var q= document.getElementById('ADDP');
//a.disabled = false;
//a.parentNode.style.fontWeight = 'normal';
//b.disabled = false;
//b.parentNode.style.fontWeight = 'normal';
//c.disabled = false;
//c.parentNode.style.fontWeight = 'normal';
//d.disabled = false;
//d.parentNode.style.fontWeight = 'normal';
//e.disabled = false;
//e.parentNode.style.fontWeight = 'normal';
//f.disabled = false;
//f.parentNode.style.fontWeight = 'normal';
//g.disabled = false;
//g.parentNode.style.fontWeight = 'normal';
//h.disabled = false;
//h.parentNode.style.fontWeight = 'normal';
//j.disabled = false;
//j.parentNode.style.fontWeight = 'normal';
//k.disabled = false;
//k.parentNode.style.fontWeight = 'normal';
//l.disabled = false;
//l.parentNode.style.fontWeight = 'normal';
//m.disabled = false;
//m.parentNode.style.fontWeight = 'normal';
//n.disabled = false;
//n.parentNode.style.fontWeight = 'normal';
//o.disabled = false;
//o.parentNode.style.fontWeight = 'normal';
//p.disabled = false;
//p.parentNode.style.fontWeight = 'normal';
//q.disabled = false;
//q.parentNode.style.fontWeight = 'normal';

}

function startTime() {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
