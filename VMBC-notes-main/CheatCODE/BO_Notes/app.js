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
      selecteditems.push(...items.AA);
      break;
    case 'Approved - FAP':
      selecteditems.push(...items.AFAP);
      break;
    case 'Approved - Income Proof':
      selecteditems.push(...items.AI);
      break;
    case 'Approved - SSN Proof':
      selecteditems.push(...items.ASP);
      break;
    case 'Approved - Dependent SSN Proof':
      selecteditems.push(...items.ADSP);
      break;
    case 'Approved - Dependent DOB Proof':
      selecteditems.push(...items.ADDP);
      break;
    case 'Disapproved - DOB Proof':
      selecteditems.push(...items.DD);
      break;
    case 'Disapproved - Address Proof':
      selecteditems.push(...items.DAP);
      break;
    case 'Disapproved - FAP':
      selecteditems.push(...items.DFAP);
      break;
    case 'Disapproved - Income Proof':
      selecteditems.push(...items.DI);
      break;
    case 'Disapproved - SSN Proof':
      selecteditems.push(...items.DSP);
      break;
    case 'Disapproved - Dependent SSN Proof':
      selecteditems.push(...items.DDSP);
      break;
    case 'Disapproved - Dependent DOB Proof':
      selecteditems.push(...items.DDD);
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

/*function AsssP() {
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
        /*lst.addEventListener('click', () =>{
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
        /*lst.addEventListener('click', () =>{
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
 /* }
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
/*function DD() {
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
*/
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

let mybutton = document.getElementById("btn-back-to-top");

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

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const typedSpan = document.getElementById("typed");
const totype = ["Support", "Email", "Templates"];
const delayTyping_char = 70;
const delayErasing_text = 70;
const delayTyping_text = 7000;
let totypeIndex = 0;
let charIndex = 0;

function typeText() {
	if (charIndex < totype[totypeIndex].length) {
		typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	}
	else {
		setTimeout(eraseText, delayTyping_text);
	}
}

function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
	else {
		totypeIndex++;
		if (totypeIndex >= totype.length)
			totypeIndex = 0;
			setTimeout(typeText, delayTyping_text);
	}
}

window.onload = function() {
	if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}

//function phtime() {
//  const now = new Date();
//  let hours = now.getHours();
//  const minutes = now.getMinutes().toString().padStart(2, '0');
// const seconds = now.getSeconds().toString().padStart(2, '0');
// const ampm = hours >= 12 ? 'PM' : 'AM';
//  hours = hours % 12 || 12;
//  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
//  document.getElementById("phtime").textContent = timeString;
//}

//setInterval(phtime, 1000);

//function maniladisplayTime(timeZone) {
//  const now = new Date();
  // Specify time zone 'Asia/Manila'
//  const options = {
//    hour12: true,
//    hour: 'numeric',
//    minute: 'numeric',
//    second: 'numeric',
//    timeZone: 'Asia/Manila'
//  };

//  const dates = {
//    year: 'numeric',
//    month: 'long',
//    day: 'numeric'
//  }
//  const formattedDate = new Intl.DateTimeFormat('en-US', dates).format(now);
  // Format the date and time according to the specified time zone
//  const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
  // const usampm = formattedDate >= 24 ? 'PM' : 'AM';

  // Display the formatted date and time in an HTML element
//  document.getElementById('phtime').textContent = formattedTime;
//  document.getElementById('phdate').textContent = formattedDate;
//}
// Example usage:
//const phdesiredTimeZone = 'Asia/Manila'; // Replace with your desired time zone
//maniladisplayTime(phdesiredTimeZone);
// Update the time every second
//setInterval(() => maniladisplayTime(phdesiredTimeZone), 1000);

//function displayTime(timeZone) {
//  const now = new Date();
//  const timeDiffMs = 3 * 60 * 60 * 1000; // 3 hours difference
  // Subtract the time difference from the GMT time
//  const gmtMinus3Time = new Date(now.getTime() - timeDiffMs);
  // Specify the desired time zone with DST consideration
//  const formatter = new Intl.DateTimeFormat('en-US', {
//    hour12: false,
//    year: 'numeric',
//    month: 'long',
//    day: 'numeric',
//    hour: 'numeric',
//    minute: 'numeric',
//    second: 'numeric',
//    timeZone: 'GMT' // Replace with your desired time zone
//  });
//  const formattedGMTMinus3Time = formatter.format(gmtMinus3Time);
//  const gmtampm = formatter >= 24 ? 'PM' : 'AM';
  // Display the formatted date and time in an HTML element
//  document.getElementById('GMT-3').textContent = `${formattedGMTMinus3Time} ${gmtampm}`;
//}

//const desiredTimeZone = 'GMT';
//displayTime(desiredTimeZone);
//setInterval(() => displayTime(desiredTimeZone), 1000);

//function usdisplayTime(timeZone) {
//  const now = new Date();

  // Specify the time zone EST
 // const options = {
  //  hour12: false,
//    year: 'numeric',
//    month: 'long',
//    day: 'numeric',
//    hour: 'numeric',
//    minute: 'numeric',
//    second: 'numeric',
//    timeZone: 'EST'
//  };

  // Format the date and time according to the specified time zone
//  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
//  const usampm = formattedDate >= 24 ? 'PM' : 'AM';
  // Display the formatted date and time in an HTML element
//  document.getElementById('est').textContent = `${formattedDate} ${usampm}`;
//}

// Example usage:
//const usdesiredTimeZone = 'EST'; // Replace with your desired time zone
//usdisplayTime(usdesiredTimeZone);

// Update the time every second
//setInterval(() => usdisplayTime(usdesiredTimeZone), 1000);

function displayTime12hours(timeZone, hour24 = true) {
  const now = new Date();
  const options = {
    timeZone: timeZone,
    hour12: hour24,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDateTime = formatter.format(now);
  return formattedDateTime;
}

function displayTime24hours(timeZone){
  const now = new Date();
  const time = {
    timeZone: timeZone,
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const formatter = new Intl.DateTimeFormat('en-US', time).format(now);
  const pstAmpm = formatter >= 24 ? 'AM' : 'PM';
  return `${formatter} ${pstAmpm}`;
}

function displayDate(dtimeZone){
  const now = new Date();
  const opdate = {
    timeZone: dtimeZone,
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formatDate = new Intl.DateTimeFormat('en-US', opdate);
  const formatedDate = formatDate.format(now);
  return formatedDate;
}

const phTimeZone = 'Asia/Manila';
const estTimeZone = 'America/Toronto';
const pstTimeZone = 'PST';
const phTime = document.getElementById('ph_time');
const asiaDate = document.getElementById('asia_date');
const pstTime = document.getElementById('pst-time');
const pstDate = document.getElementById('pst-date');
const estTime = document.getElementById('est-time');
const estDate = document.getElementById('est-date');

function updateTimedate(){  
  phTime.textContent = displayTime12hours(phTimeZone);
  asiaDate.textContent = displayDate(phTimeZone);
  pstTime.textContent = displayTime24hours(pstTimeZone);
  pstDate.textContent = displayDate(pstTimeZone);
  estTime.textContent = displayTime12hours(estTimeZone);
  estDate.textContent = displayDate(estTimeZone);
}
setInterval(updateTimedate, 1000);

const modal = document.getElementById('view_modal');
const img = document.querySelector('#myImg');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeSpan = document.getElementsByClassName("close")[0];

function viewImage(){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.textContent = img.alt;
}

function closeImage(){
  modal.style.display = "none";
}


// Chat Bot -->
const chatBody = document.querySelector(".chatbot-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");

const API_KEY = "AIzaSyAdO-HlAEw5Y2TtsVuFNRdiRZ8X243PR1c";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null
  }
}
const initialHeight = messageInput.scrollHeight;

const generateBotresponse = async (incomingBotmessagediv) => {
  const messageElement = incomingBotmessagediv.querySelector(".message-text");
  const requestOptions = {
    method: "POST",
    headers:{ "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: userData.message
         }, ...(userData.file.data ? [{ inline_data: userData.file}] : [])]
      }]
    })
  }
try {
  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();
  if(!response.ok)throw new Error(data.error.message);

  //BOT response -->
  const apiResponsetext = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "**$1**").replace(/\* /g, '\n ').replace(/\*/g, ' ').replace(/\s{2,}/g, " ").replace(/\./g, '.\r\n').trim();
  messageElement.innerHTML = apiResponsetext;
} catch (error) {
  console.log(error);
  messageElement.innerHTML = error.message;
  messageElement.style.color = "#ff0000";
} finally {
  userData.file = {};
  incomingBotmessagediv.classList.remove("think");
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
}
}

//Message creation-->
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
}

// AssiAIzaSyBdyAOqXO2L_DRLHZ6c1BqBzamdb9AwFAsc-4-12-24
//Message handler-->
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = "";
  fileUploadview.classList.remove("file-uploaded");
  messageInput.dispatchEvent(new Event("input"));
  const messageContent = `<div class="message-text"></div>
  ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />` : ""}`;
  const outgoingMessagediv = createMessageElement(messageContent,"user-message");
  outgoingMessagediv.querySelector(".message-text").textContent = userData.message;
  chatBody.appendChild(outgoingMessagediv);
  chatBody.scrollTo({ 
    top: chatBody.scrollHeight, 
    behavior: "smooth" 
  });

  //Bot response using setTimeout method
  setTimeout(() => {
    const messageContent = `
    <i class="bi bi-robot fs-3 rob-avatar"></i>
    <div class="message-text">
     <div class="think-indicator">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
     </div>
    </div>`; //<-- Declaration of const with a value of div/style using template literals
    
    const incomingBotmessagediv = createMessageElement(messageContent, "bot-message", "think");//<-- Declaration of
    chatBody.appendChild(incomingBotmessagediv);
    chatBody.scrollTo({ 
      top: chatBody.scrollHeight, 
      behavior: "smooth"
     });
    generateBotresponse(incomingBotmessagediv);
  }, 600);
}

//Message passer
messageInput.addEventListener("keydown",(e)=>{
const userMessage = e.target.value.trim();
if(e.key === "Enter" && userMessage && !e.shiftKey && window.innerWidth > 768){
  handleOutgoingMessage(e);
}
}); // <-- Keypress send with shiftkey dynamic
sendMessage.addEventListener("click", (e) => handleOutgoingMessage(e)); //<-- Click Send

//Dynamic scroll height
messageInput.addEventListener("input", () => {
  messageInput.style.height = `${initialHeight}px`;// <-- Declare initial height
  messageInput.style.height = `${messageInput.scrollHeight}px`; // <-- Declare scrolling effect
  document.querySelector(".chat-form").style.borderRadius = messageInput.scrollHeight > initialHeight ? "15px" : "32px"; // <-- Condition Min and Max height using ternary opperator
}); 

//File upload
const fileInput = document.querySelector("#file-input");
const fileUploadview = document.querySelector(".file-upload-wrapper");
const cancelButtonfile = document.querySelector("#cancel-upload");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if(!file){
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    fileUploadview.querySelector("img").src = e.target.result;
    fileUploadview.classList.add("file-uploaded");
    const base64String = e.target.result.split(",")[1];

    userData.file = {
      data: base64String,
      mime_type: file.type
    }
    fileInput.value = "";
  }
  reader.readAsDataURL(file);
});

cancelButtonfile.addEventListener("click", () => {
  userData.file = {};
  fileUploadview.classList.remove("file-uploaded");
});

document.querySelector("#file-upload").addEventListener("click", () => fileInput.click());


//Chatbot toggler
const chatBotshow = document.querySelector("#chatbot-toggler");
chatBotshow.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

//Chatbot close
const closeChat = document.querySelector("#close-chatbot");
closeChat.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

// Emoji setup
const picker = new EmojiMart.Picker({
  theme: "light",
  skinTonePosition: "none",
  previewPosition: "none",
  onEmojiSelect: (emoji) => {
    const { selectionStart:start, selectionEnd: end } = messageInput;
    messageInput.setRangeText(emoji.native, start, end, "end");
    messageInput.focus();
  },
  onClickOutside:  (e) => {
    e.target.id === "emoji-picker" ? document.body.classList.toggle("show-emoji-picker") : document.body.classList.remove("show-emoji-picker")
  }
});

document.querySelector(".chat-form").appendChild(picker);

