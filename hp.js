window.onload=startTime;

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let epoc = Math.trunc(today.getTime() / 1000);
  m = checkTime(m);
  s = checkTime(s);
  let hms = `${h}:${m}:${s}`;
  let utch=`${today.getUTCHours()}`;
  let utchms = `${utch}:${m}:${s}`;
 
  if (h < 10) {
    hms=`0${hms}`;
  }
  if (utch < 10) {
    utchms=`0${utchms}`;
  }

  document.getElementById('epoc').innerHTML = "UTC: " + utchms + "~" + epoc;
  document.getElementById('clock').innerHTML =  hms;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
