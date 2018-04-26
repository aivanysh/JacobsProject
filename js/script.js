
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

        var pushleft = document.createElement('a');
        var pushlefttext = document.createTextNode('<');
        pushleft.setAttribute('class', 'prev');
        pushleft.setAttribute('onclick', 'plusSlides(-1)');
        pushleft.appendChild(pushlefttext);
        slideblock.appendChild(pushleft);

        var pushright = document.createElement('a');
        var pushrightext = document.createTextNode('>');
        pushright.setAttribute('class', 'next');
        pushright.setAttribute('onclick', 'plusSlides(-1)');
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
        parent.appendChild(instblock);
        instblock.setAttribute('href',el.file);
        instblock.setAttribute('class','KKinst');

        var insth = document.createElement('h4');
        var insthtext = document.createTextNode(el.header);
        insth.appendChild(insthtext);
        instblock.appendChild(insth);

        var instp = document.createElement('p');
        var instptext = document.createTextNode(el.description);
        instp.appendChild(instptext);
        instblock.appendChild(instp);


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
        parent.appendChild(instblock);
        instblock.setAttribute('href',el.file);
        instblock.setAttribute('class','TAinst');

        var insth = document.createElement('h4');
        var insthtext = document.createTextNode(el.header);
        insth.appendChild(insthtext);
        instblock.appendChild(insth);

        var instp = document.createElement('p');
        var instptext = document.createTextNode(el.description);
        instp.appendChild(instptext);
        instblock.appendChild(instp);


    }

    for(i=0; i<kkinst.length;i++){
        TAInstaPaint(kkinst[i]);
    }
}
TAinst();

/********video********/
function chanel(n){
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

    var header = document.createElement('h3');
    var headertext = document.createTextNode(el.header);
    header.appendChild(headertext);
    elem.appendChild(header);

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

        var listel = document.createElement('li');
        var listelname = document.createTextNode(el.header);
        listel.appendChild(listelname);
        videolist.appendChild(listel);
        listel.setAttribute('onclick','chanel('+el.num+')');
        

    }

    for(i=0; i<video.length;i++){
        VideoPaint(video[i]);
    }
}
videoload();
chanel(0);


/**********slideshov*********/

var myIndex = 0;
var myVar;
carousel(0);

function carousel(i) {
    var x = document.getElementsByClassName("imghold");
    for (i=0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    myVar = setTimeout(carousel, 50000000); // Change image every 2 seconds
}
function plusSlides(n) {
    clearTimeout(myVar);
    carousel(myIndex += n);
  }
/*
document.getElementsByClassName('slides')[0].style.display = 'none';
document.getElementsByClassName('uslinks')[0].style.display = 'none';
document.getElementsByClassName('foo')[0].style.display = 'none';
*/
/*****************Instructions********************************/


