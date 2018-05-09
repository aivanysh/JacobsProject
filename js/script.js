
/***************************************************** */

function SlidesPrint(){
    function SlidePaint(el){
        var parent = document.getElementsByClassName('slides')[0];

        var slideblock = document.createElement('div');
        slideblock.setAttribute('class', 'imghold fade');
        slideblock.style.background = 'url('+ el.background +')';
        slideblock.style.backgroundSize = '100% 100%';
        slideblock.style.backgroundRepeat = 'no-repeat';

        var textblock = document.createElement('div');
        textblock.setAttribute('class', 'texthold');
        slideblock.appendChild(textblock);

        var sloganelement = document.createElement('p');
        var slogantext = document.createTextNode(el.slogan);
        sloganelement.appendChild(slogantext);
        textblock.appendChild(sloganelement);

        var but = document.createElement('a');
        but.setAttribute('target','_blank');
        var buttext = document.createTextNode(el.buttontext);
        but.setAttribute('href',el.link);            
        but.appendChild(buttext);
        textblock.appendChild(but);

        var pushleft = document.createElement('a');
        var pushlefttext = document.createTextNode("◄");
        pushleft.setAttribute('class', 'prev');
        pushleft.setAttribute('onclick', 'minusSlides()');
        pushleft.appendChild(pushlefttext);
        slideblock.appendChild(pushleft);

        var pushright = document.createElement('a');
        var pushrightext = document.createTextNode('►');
        pushright.setAttribute('class', 'next');
        pushright.setAttribute('onclick', 'plusSlides()');
        pushright.appendChild(pushrightext);
        slideblock.appendChild(pushright);

        parent.appendChild(slideblock);
    }

    for(i=0; i<slides.length;i++){
        SlidePaint(slides[i]);
    }
}
SlidesPrint();

/**************uselinks print***************************** */

function LinksPrint(){
    function LinkPaint(el){
        var parent = document.getElementsByClassName('uslinks')[0];
        
        var linkblock = document.createElement('a');
        linkblock.setAttribute('target','_blank');
        linkblock.setAttribute('class','uslink');
        linkblock.setAttribute('href',el.link);

        var linkimg = document.createElement('img');
        linkimg.setAttribute('src',el.picture);
        linkimg.setAttribute('alt','img is loading');    
        linkblock.appendChild(linkimg);

        var linkheader = document.createElement('h3');
        var linkheadertext = document.createTextNode(el.header);
        linkheader.appendChild(linkheadertext);
        linkblock.appendChild(linkheader);

        var linktext = document.createElement('p');
        var linktexttext = document.createTextNode(el.text);
        linktext.appendChild(linktexttext);
        linkblock.appendChild(linktext);


        parent.appendChild(linkblock);
    }

    for(i=0; i<uslinks.length;i++){
        LinkPaint(uslinks[i]);
    }
}
LinksPrint();
/*************apps********** */
function AppsPrint(){
    function AppsPaint(el){
        var parent = document.getElementsByClassName('appsholder')[0];
        
        var appblock = document.createElement('a');
        appblock.setAttribute('target','_blank');
        appblock.setAttribute('href',el.link);
        
        var appimg =  document.createElement('img');
        appimg.setAttribute('src',el.picture);
        appimg.setAttribute('alt','is loading');

        var appheader = document.createElement('h3');
        var appheadertext = document.createTextNode(el.header);
        appheader.appendChild(appheadertext);

        var appparagraph = document.createElement('p');
        var appparagraphtext = document.createTextNode(el.text);
        appparagraph.appendChild(appparagraphtext);

        appblock.appendChild(appimg);
        appblock.appendChild(appheader);
        appblock.appendChild(appparagraph);

        parent.appendChild(appblock);
    }

    for(i=0; i<apps.length;i++){
        AppsPaint(apps[i]);
    }
}
AppsPrint();
/***********KKinstruction*********** */
function KKinst(){
    function KKInstaPaint(el){
        var parent = document.getElementsByClassName('KKinstHold')[0];
        
        var instblock = document.createElement('a');
        instblock.setAttribute('target','_blank');
        parent.appendChild(instblock);
        instblock.setAttribute('href',el.file);
        instblock.setAttribute('class','KKinst');

        var instimg = document.createElement('img');
        var textblock = document.createElement('div');
        instblock.appendChild(instimg);
        instblock.appendChild(textblock);
        instimg.setAttribute('src','img/pdf.png')


        var insth = document.createElement('h4');
        var insthtext = document.createTextNode(el.header);
        insth.appendChild(insthtext);
      /*  instblock.appendChild(insth);*/
      textblock.appendChild(insth);

        var instp = document.createElement('p');
        var instptext = document.createTextNode(el.description);
        instp.appendChild(instptext);
       /* instblock.appendChild(instp);*/
       textblock.appendChild(instp);


    }

    for(i=0; i<kkinst.length;i++){
        KKInstaPaint(kkinst[i]);
    }
}
KKinst();

/***********TAinstruction*********** */
function TAinst(){
    function TAInstaPaint(el){
        var parent = document.getElementsByClassName('TAinstHold')[0];
        
        var instblock = document.createElement('a');
        instblock.setAttribute('target','_blank');
        parent.appendChild(instblock);
        instblock.setAttribute('href',el.file);
        instblock.setAttribute('class','TAinst');

        var instimg = document.createElement('img');
        var textblock = document.createElement('div');
        instblock.appendChild(instimg);
        instblock.appendChild(textblock);
        instimg.setAttribute('src','img/pdf.png')


        var insth = document.createElement('h4');
        var insthtext = document.createTextNode(el.header);
        insth.appendChild(insthtext);
      /*  instblock.appendChild(insth);*/
      textblock.appendChild(insth);

      var instp = document.createElement('p');
      var instptext = document.createTextNode(el.description);
      instp.appendChild(instptext);
     /* instblock.appendChild(instp);*/
     textblock.appendChild(instp);


    }

    for(i=0; i<kkinst.length;i++){
        TAInstaPaint(kkinst[i]);
    }
}
TAinst();

/********video********/
function stylech(el){
    var elem = document.getElementsByClassName('videolistel')[0];
    for(i=0; i<elem.length; i++){
        elem[i].style.backgroundcolor = 'rgb(45, 60, 65)'
    }	
    el.style.backgroundcolor = 'black';
}

function chanel(n,listel){
    
    var list = document.getElementsByClassName('videolistel');	
    for(j=0; j<list.length; j++){
        list[j].style.backgroundColor = 'rgb(45, 60, 65)';
    }
    listel.style.backgroundColor = 'black';

    var el = {};
    for(i=0; i<video.length;i++){
        if (i == video[n].num){
            el = video[n];
        }
    }
    
    var elem = document.getElementsByClassName('videohold')[0];	
    var c = document.getElementsByClassName('videohold')[0].childNodes.length;
    for(var i = 0; i<c; i++){
        elem.removeChild(elem.childNodes[0]);
    }

    var youtube = document.createElement('iframe');
    youtube.setAttribute('src',el.link);
    youtube.setAttribute('class','yoto');
    youtube.setAttribute('frameborder','0');
    youtube.setAttribute('allowfullscreen','1');
   elem.appendChild(youtube);

}

function videoload(){
    function VideoPaint(el){
        var videolist = document.getElementsByClassName('videolist')[0];
        var videohold = document.getElementsByClassName('videohold')[0];

        var listel = document.createElement('p');
        var listelname = document.createTextNode(el.header);
        listel.appendChild(listelname);
        listel.setAttribute('class','videolistel')
        videolist.appendChild(listel);
        listel.setAttribute('onclick','chanel('+el.num+',this)');
      /*  listel.setAttribute('onclick','stylech(this)');*/
        

    }

    for(i=0; i<video.length;i++){
        VideoPaint(video[i]);
    }
}
videoload();
var listelfirst = document.getElementsByClassName('videolistel')[0];
chanel(0,listelfirst);


/**********slideshov*********/

var myIndex = 0;
var myVar;
carousel(0);

function carousel() {
    var x = document.getElementsByClassName("imghold");
    for (i=0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    myVar = setTimeout(carousel, 5000); // Change image every 5 seconds
}
function carousel2() {
    var x = document.getElementsByClassName("imghold");
    for (i=0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex--;
    if (myIndex == 0) {myIndex = x.length}    
    x[myIndex-1].style.display = "block";  
}
function plusSlides() {
    clearTimeout(myVar);
    carousel();
  }
function minusSlides() {
    clearTimeout(myVar);
    carousel2();
  }

/*****************Instructions********************************/
document.getElementsByClassName('instructions')[0].style.display = 'none';
function mainpaint(){
    document.getElementsByClassName('slides')[0].style.display = 'block';
    document.getElementsByClassName('uslinks')[0].style.display = 'flex'; 
    document.getElementsByClassName('apps')[0].style.display = 'block';
    document.getElementsByClassName('instructions')[0].style.display = 'none';

}

function manualpaint(){
    document.getElementsByClassName('slides')[0].style.display = 'none';
    document.getElementsByClassName('uslinks')[0].style.display = 'none'; 
    document.getElementsByClassName('apps')[0].style.display = 'none';
    document.getElementsByClassName('instructions')[0].style.display = 'block';

}
