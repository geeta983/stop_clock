
 	 var ms=0 ,s=0,m=0;
 	 var timer;
 	 var sw=document.querySelector('.stopwatch');
       var lc=document.querySelector('.laps');
function start(){
	if(!timer)
	{
		timer = setInterval(run,10);
	}
	
	
}
function run() {
	sw.textContent=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
	ms++;
	if(ms==100)
		 {
		 	ms=0;
		 	s++;
		 }
    if(s==60)
    {
    	s=0;
    	m++;
    }

}
function pause()
{
	 clearInterval(timer);
	 timer=false;
}
function stop()
{
	 clearInterval(timer);
	 timer=false;
	 ms=0 ,s=0,m=0;
	 
	
}
function restart()
{clearInterval(timer);
	 timer=false;
	 ms=0 ,s=0,m=0;
	sw.textContent=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
}
function lap()
{
	if(timer)
	{
		var li=document.createElement('li');
		li.innerText=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
		lc.appendChild(li);
	}
}
function resetlaps()
{
	lc.innerHTML=" ";
}