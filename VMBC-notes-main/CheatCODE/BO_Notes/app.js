var CN = document.getElementById('CN');
var NoteArray = [];
var checkboxes = document.querySelectorAll('.form-check-input');
/*for(var checkbox of checkboxes) {
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
*/
var gridp = document.getElementById("gridp"); 
for(var cb of checkboxes) {
    cb.addEventListener('click',function() {
        if (this.checked == true) {
        	NoteArray.push(this.value);
        	gridp.innerHTML = NoteArray.join('/');
        } else {
        	NoteArray = NoteArray.filter(e => e !== this.value);
					gridp.innerHTML = NoteArray.join('/');
       }
   })
}
function QAcopy(){
  var copyText = document.getElementById("CN");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
/*function AP() {
var checkBox = document.getElementById('AP');
var n = document.getElementById('ADS');
var t = document.getElementById('listnote');
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
}*/

const items = {
  AP:['Program proof valid', 'DOB match', 'Not expired', 'FN match', 'LN match', 'Readable'],
  DP:['Borders not shown', 'Purchase receipt incomplete', 'Purchase receipt declined', 'Purchase receipt expired', 'Name interchanged', 'FN is mismatch', 'LN is mismatch', 'DOB is mismatch', 'Address on proof does not match the address registered', 'Expired proof', 'Key information erased or modified'], 
  AD:['Program proof valid', 'Address match', 'Not expired', 'FN match', 'LN match', 'Readable'], 
  AA:['Program proof valid', 'Address match', 'Not expired', 'FN match', 'LN match', 'Readable'], 
  AFAP:['Address match', 'Program proof valid', 'Not expired', 'FN match', 'LN match', 'Readable'],  
  AI:['FN match', 'LN match', 'Income proof valid', 'Income amount does not exceed the limit', 'Readable'], 
  ASP:['FN match', 'LN match', 'SSN proof valid', 'Income amount does not exceed the limit', 'Four digit number match', 'Readable'], 
  ADSP:['FN match', 'LN match', 'Dependent SSN proof valid', 'Four digit number match', 'Without signature accepted under 18', 'Readable'],  
  ADDP:['FN match', 'LN match', 'Dependent DOB proof valid', 'Readable'],  
  DD:['Borders not shown', 'Name interchanged', 'FN is mismatch', 'LN is mismatch', 'DOB is mismatch', 'Letter no longer valid', 'Expired proof', 'Not allowed type of proof', 'Key information erased or modified'],  
  DAP:['Address on proof does not match the address registered', 'Name interchanged', 'FN is mismatch', 'LN is mismatch', 'Letter no longer valid', 'Not allowed type of proof', 'Key information erased or modified'],  
  DFAP:['Address on proof does not match the address registered', 'Name interchanged', 'FN is mismatch', 'LN is mismatch', 'Letter no longer valid', 'Not allowed type of proof', 'Expired proof older than 90 days', 'Key information erased or modified', 'Rental letter not allowed'],  
  DI:['Name interchanged', 'FN is mismatch', 'LN is mismatch', 'Letter no longer valid', 'Income amount exceeds the limit', 'Expired proof', 'Key information erased or modified'], 
  DSP:['FN is mismatch', 'LN is mismatch', 'Name interchanged', 'Missing signature', 'Old SSN card no longer valid', 'Type of proof not allowed', 'Four digit number on proof does not match the number registered', 'Key information erased or modified'], 
  DDSP:['FN is mismatch', 'LN is mismatch', 'Name interchanged', 'Four digit number on proof does not match the number registered', 'Dependent SSN invalid', 'Type of proof not allowed', 'Key information erased or modified'],  
  DDD:['FN is mismatch', 'LN is mismatch', 'Name interchanged', 'Dependent DOB invalid', 'Key information erased or modified']
}

function handleCheckbox(checkbox){
  const lnt = document.getElementById('listnote');
  const cln = document.getElementById('cnts');
  let selecteditems = [];
  switch (checkbox.value){
    case 'Approved - Program Proof':
      selecteditems.push(...items.AP);
      break;
    case 'Disapproved - Program Proof':
      selecteditems.push(...items.DP);
      break;
    case 'Approved - DOB Proof':
      selecteditems.push(...items.AD);
      break;
    case 'Approved - Address Proof':
      selecteditems = items.AA;
      break;
    case 'Approved - FAP':
      selecteditems = items.AFAP;
      break;
    case 'Approved - Income Proof':
      selecteditems = items.AI;
      break;
    case 'Approved - SSN Proof':
      selecteditems = items.ASP;
      break;
    case 'Approved - Dependent SSN Proof':
      selecteditems = items.ADSP;
      break;
    case 'Approved - Dependent DOB Proof':
      selecteditems = items.ADDP;
      break;
    case 'Disapproved - DOB Proof':
      selecteditems = items.DD;
      break;
    case 'Disapproved - Address Proof':
      selecteditems = items.DAP;
      break;
    case 'Disapproved - FAP':
      selecteditems = items.DFAP;
      break;
    case 'Disapproved - Income Proof':
      selecteditems = items.DI;
      break;
    case 'Disapproved - SSN Proof':
      selecteditems = items.DSP;
      break;
    case 'Disapproved - Dependent SSN Proof':
      selecteditems = items.DDSP;
      break;
    case 'Disapproved - Dependent DOB Proof':
      selecteditems = items.DDD;
      break;
    default:
      console.log('Unknown Action');
      return;
  }

  if(checkbox.checked){
    selecteditems.forEach(itemz =>{
      const button = `${checkbox.value}-${itemz.replace(/\s+/g, '-')}`;
      if(!document.getElementById(button)){
        const lstbutton = document.createElement('button');  
        lstbutton.className = 'btn btn-outline-primary';
        lstbutton.textContent = itemz;
        lstbutton.id = button;
        lstbutton.style.margin = '4px';
        lstbutton.addEventListener('click', () => {
          if(cln.children.length > 0 ){
            const separator = document.createTextNode(', ');
            cln.appendChild(separator);
          }
          const nnts = `${itemz.replace(/\s+/g, ' ')}`;
          const lc = document.createElement('span');
          lstbutton.hidden = true;
          lc.textContent = nnts;
          lc.id = nnts;
          lc.style.cursor = 'pointer';
          cln.appendChild(lc);
          lc.addEventListener('click' , () =>{
            lstbutton.hidden = false;
            cln.removeChild(lc);
          if(cln.lastChild && cln.lastChild.nodeType === Node.TEXT_NODE){
            cln.removeChild(cln.lastChild);
          }
          if(cln.firstChild && cln.firstChild.nodeType === Node.TEXT_NODE){
            cln.removeChild(cln.firstChild);
          }
          //alert(`You clicked on ${itemz}!`);
          });
        });
        lnt.appendChild(lstbutton);
      }
    });
  }else{
    selecteditems.forEach(itemzz => {
      const nnls = `${itemzz.replace(/\s+/g, ' ')}`;
      const buttonr = `${checkbox.value}-${itemzz.replace(/\s+/g, '-')}`;
      const remn = document.getElementById(nnls);
      const buttonrr = document.getElementById(buttonr);
      if(buttonrr){
        lnt.removeChild(buttonrr);
      }
      if(remn){
        cln.removeChild(remn);
        while (cln.firstChild && cln.firstChild.nodeType === Node.TEXT_NODE){
          cln.removeChild(cln.firstChild);
        }
        while(cln.lastChild && cln.lastChild.nodeType === Node.TEXT_NODE){
          cln.removeChild(cln.lastChild);
        }
      }
    });
  }
}

function AsssP() {
  const cl = document.getElementById('AP');
  const lnt = document.getElementById('listnote');
  const cln = document.getElementById('cnts');
  var listarray = [];
      listarray.push("Program proof valid","DOB match","Not expired","FN match","LN match","Readable");
  lnt.innerHTML = '';
  if (cl.checked){
    listarray = listarray.filter(e => e !== this.listarray);
    listarray.forEach(lns => {
      const listnotes = document.createElement('li');
      listnotes.textContent = lns;
      listnotes.addEventListener('click', () => {
        const lst = document.createElement('span');
        listnotes.hidden = true;
        if (cln.children.length > 0) {
          const comma = document.createTextNode(' , ');
          cln.appendChild(comma);
        }
        lst.textContent = lns;
        cln.appendChild(lst);
        /*Alert(`${lns}`);*/
        lst.addEventListener('click', () =>{
          listnotes.hidden = false;
          cln.removeChild(lst);
          if(cln.lastChild && cln.lastChild.nodeType === Node.TEXT_NODE){
            cln.removeChild(cln.lastChild);
          }
          if(cln.firstChild && cln.firstChild.nodeType === Node.TEXT_NODE){
            cln.removeChild(cln.firstChild);
          }
        });
      });
      lnt.appendChild(listnotes);
    });
  }else{
    
   while (cln.firstChild) {
      cln.removeChild(cln.firstChild);
    }
  }
  cl.addEventListener('change', AP);
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
function DPsss(){
  const cl = document.getElementById('DP');
  const lnt = document.getElementById('listnote');
  const cln = document.getElementById('cnts');
  var ln = [];
  lnt.innerHTML = '';
  if (cl.checked){
    ln.push("Borders not shown","Purchase receipt incomplete","Purchase receipt declined","Purchase receipt expired","Name interchanged","FN is mismatch","LN is mismatch","DOB is mismatch","Address on proof does not match the address registered","Expired proof","Key information erased or modified");
    ln.forEach(lns => {
      const listnotes = document.createElement('li');
      listnotes.textContent = lns;
      listnotes.addEventListener('click', () => {
        const lst = document.createElement('span');
        listnotes.hidden = true;
        if (cln.children.length > 0) {
          const comma = document.createTextNode(' , ');
          cln.appendChild(comma);
        }
        lst.textContent = lns;
        cln.appendChild(lst);
        /*Alert(`${lns}`);*/
        lst.addEventListener('click', () =>{
          listnotes.hidden = false;
          cln.removeChild(lst);
          if(cln.lastChild && cln.lastChild.nodeType === Node.TEXT_NODE){
            cln.removeChild(cln.lastChild);
          }
          if(cln.firstChild && cln.firstChild.nodeType === Node.TEXT_NODE){
            cln.removeChild(cln.firstChild);
          }
        });
      });
      lnt.appendChild(listnotes);
    });
  }else{
   /* while (cln.firstChild) {
      cln.removeChild(cln.firstChild);
    }*/
  }
  cl.addEventListener('change', DP);
}
/* function DP() {
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
}*/
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
const note= document.getElementById('cnts');
for(var i = 0; i<c.length; i++){
    checkboxes[i].checked = false;
   // window.location.reload(true);
 
  

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
function formatText(command) {
  if (command === 'createLink') {
    const url = prompt('Enter the link URL:');
    if (url) {
      document.execCommand(command, false, url);
    }
  }
  else {
    document.execCommand(command, false, null);
  }
  if (command === 'increaseIndent'){
    document.execCommand('indent', false, null);
  }
  if (command === 'decreaseIndent') {
    document.execCommand('outdent', false, null);
  }
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


