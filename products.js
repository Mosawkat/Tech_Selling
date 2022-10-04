function initialize()
{
    s=document.getElementById("productsWhole");
    s.style.animation ='productsFade 1s';

    const pminiImgs = 
    [
        'phonemini1.png', 'phonemini2.png', 'phonemini3.png', 'phonemini5.jpeg', 'phonemini4.jpeg'
    ];

    const buttonText =
    [
        "View Samples", "Shop Accesories"
    ];
    const pmini = 
    [   
    "This is the Phone Mini",
    "Our most revolutionary product yet",
    "The Best Camera System. Ever.",
    "All New 108 MP Sensor combined with our groundbreaking Photonic Fusion Engine brings the details to life. Never worry about space with unlimited cloud storage.",
    "Stay Connected",
    "With Enhanced Connectivity, you'll be connected no matter where you go. The next generation of Cell Connectivity allows for more range and faster speeds. Enjoy music, phone calls, video streaming and gaming from anywhere.",
    "All. About. Accessories.",
    "With the All new design, it makes it easier than ever to connect accessories. Extend your battery with the battery pack, lopps to carry it around, and folio cases to cover the screen when you don't need it.",
    "Available this October",
    "$1499",
    ];

    document.getElementById("accB").style.display="block";


    x=document.getElementById("phonemini");
    x.style.color='white';
    x.style.backgroundColor='orangered';

    fimg=document.getElementById("introImg");

    text1=document.getElementById("text1");
    text1.innerHTML=pmini[0];

    text2=document.getElementById("text2");
    text2.innerHTML=pmini[1];

    text3=document.getElementById("featOneTitle");
    text3.innerHTML=pmini[2];

    text4=document.getElementById("featOneSubtitle");
    text4.innerHTML=pmini[3];

    text5=document.getElementById("featTwoTitle");
    text5.innerHTML=pmini[4];

    text6=document.getElementById("featTwoSubtitle");
    text6.innerHTML=pmini[5];

    text7=document.getElementById("featThreeTitle");
    text7.innerHTML=pmini[6];

    text8=document.getElementById("featThreeSubtitle");
    text8.innerHTML=pmini[7];

    text9=document.getElementById("featFourTitle");
    text9.innerHTML=pmini[8];

    text10=document.getElementById("featFourSubtitle");
    text10.innerHTML=pmini[9];

    introImg=document.getElementById("introImage");
    introImg.src=pminiImgs[0];

    img2=document.getElementById("featOneImg");
    img2.src=pminiImgs[1];

    img3=document.getElementById("fTwoContainerPicture");
    img3.src=pminiImgs[2];

    img4=document.getElementById("fThreeContainerPicture");
    img4.src=pminiImgs[3];

    img5=document.getElementById("fFourContainerPic");
    img5.src=pminiImgs[4];

    button1max=document.getElementById('viewB');
    button1max.innerHTML=buttonText[0];

    button2=document.getElementById("accB");
    button2.innerHTML=buttonText[1];
}

function change(n)
{
    document.getElementById('phonemini').style.color='black';
    document.getElementById('phonemini').style.backgroundColor='whitesmoke';

    document.getElementById('phonemax').style.color='black';
    document.getElementById('phonemax').style.backgroundColor='whitesmoke';

    document.getElementById('watch').style.color='black';
    document.getElementById('watch').style.backgroundColor='whitesmoke';

    document.getElementById('irpods').style.color='black';
    document.getElementById('irpods').style.backgroundColor='whitesmoke';

    x=document.getElementById(n);
    x.style.color='white';
    x.style.backgroundColor='orangered';

    z=document.getElementById("productsWhole");

    if (n=='phonemini')
    {
        initialize();
    }
    if (n=='phonemax')
    {
        switchMax();
    }
    if (n=='watch')
    {
        switchWatch();
    }
    if (n=='irpods')
    {
        switchIrpods();
    }
}

function switchMax()
{
    document.getElementById("productsWhole").style.animation ='productsFade 1s';

    const pmaxImgs = 
    [
        'phonemax1.jpeg', 'phonemax2.png', 'phonemax3.png', 'phonemax5.png', 'phonemax4.jpeg', 'phonemax6.png'
    ];
    const buttonTextMax =
    [
        "View Samples", "View Zoom Photos"
    ];
    const pmax = 
    [
    "This is the Phone Max",
    "Taken to a whole new level",
    "Camera. Modules.",
    "With removable cameras, you can capture photos remotely. With the new camera technologies and the freedom, there is nothing you can't do.",
    "All Body Display",
    "The New Plasma Retina display can go upto 3000 nits of brightness, while maintaining 1:1,000,000,000 contrast. This is the best display ever. ",
    "200x Zoom",
    "With the new periscope lens, zoom just got upgarde. Combined with our software and hardware prowess, zoom has never been better. Zoom up to 200 times whithout losing a single hair of detail. Photos and videos will never be the same again",
    "Available in October",
    "$1999",
    ];

    document.getElementById("accB").style.display="block";

    var maxtheImg = document.getElementById('introImage');
    maxtheImg.style.width = "70%";
    maxtheImg.style.height = "90%";

    text1max=document.getElementById("text1");
    text1max.innerHTML=pmax[0];

    text2max=document.getElementById("text2");
    text2max.innerHTML=pmax[1];

    text3max=document.getElementById("featOneTitle");
    text3max.innerHTML=pmax[2];

    text4max=document.getElementById("featOneSubtitle");
    text4max.innerHTML=pmax[3];

    text5max=document.getElementById("featTwoTitle");
    text5max.innerHTML=pmax[4];

    text6max=document.getElementById("featTwoSubtitle");
    text6max.innerHTML=pmax[5];

    text7max=document.getElementById("featThreeTitle");
    text7max.innerHTML=pmax[6];

    text8max=document.getElementById("featThreeSubtitle");
    text8max.innerHTML=pmax[7];

    text9max=document.getElementById("featFourTitle");
    text9max.innerHTML=pmax[8];

    text10max=document.getElementById("featFourSubtitle");
    text10max.innerHTML=pmax[9];

    button1max=document.getElementById('viewB');
    button1max.innerHTML=buttonTextMax[0];

    button2=document.getElementById("accB");
    button2.innerHTML=buttonTextMax[1];

    introImg=document.getElementById("introImage");
    introImg.src=pmaxImgs[5];

    img1=document.getElementById("introImg");
    img1.src=pmaxImgs[4];

    img2=document.getElementById("featOneImg");
    img2.src=pmaxImgs[3];

    img3=document.getElementById("fTwoContainerPicture");
    img3.src=pmaxImgs[2];

    img4=document.getElementById("fThreeContainerPicture");
    img4.src=pmaxImgs[1];

    img5=document.getElementById("fFourContainerPic");
    img5.src=pmaxImgs[0];
}

function switchWatch()
{

    document.getElementById("productsWhole").style.animation ='productsFade 1s';

    const watchImgs = 
    [
        'watch1.jpeg', 'watch2.jpeg', 'watch3.png', 'watch4.jpeg', 'watch5.jpeg', 'watch6.jpeg', 'watch7.png'
    ];
    const buttonTextWatch =
    [
        "Watch Health Demo", "Learn More"
    ];
    const watch = 
    [
    "This is Watch",
    "The Biggest Leap Ever",
    "Health Reimagined",
    "Taking your blood pressure has never been easier. Temperature? It can do that too. What can't it do?",
    "Comfort just got more comfortable",
    "The new shape of the Watch combined with the soft materials for the new bands gives comfort a whole new meaning.",
    "Biggest Display Ever",
    "A 45mm display is the biggest display on a watch. The All New Retina Display can display colors upto 1500 nits, the brightest ever on a watch.",
    "Available in October",
    "$699",
    ];

    document.getElementById("accB").style.display="none";
    var maxtheImg = document.getElementById('introImage');
    maxtheImg.style.width = "70%";
    maxtheImg.style.height = "90%";


    text1max=document.getElementById("text1");
    text1max.innerHTML=watch[0];

    text2max=document.getElementById("text2");
    text2max.innerHTML=watch[1];

    text3max=document.getElementById("featOneTitle");
    text3max.innerHTML=watch[2];

    text4max=document.getElementById("featOneSubtitle");
    text4max.innerHTML=watch[3];

    text5max=document.getElementById("featTwoTitle");
    text5max.innerHTML=watch[4];

    text6max=document.getElementById("featTwoSubtitle");
    text6max.innerHTML=watch[5];

    text7max=document.getElementById("featThreeTitle");
    text7max.innerHTML=watch[6];

    text8max=document.getElementById("featThreeSubtitle");
    text8max.innerHTML=watch[7];

    text9max=document.getElementById("featFourTitle");
    text9max.innerHTML=watch[8];

    text10max=document.getElementById("featFourSubtitle");
    text10max.innerHTML=watch[9];

    button1max=document.getElementById('viewB');
    button1max.innerHTML=buttonTextWatch[0];

    button2=document.getElementById("accB");
    button2.innerHTML=buttonTextWatch[1];

    introImg=document.getElementById("introImage");
    introImg.src=watchImgs[6];

    img1=document.getElementById("introImg");
    img1.src=watchImgs[4];

    img2=document.getElementById("featOneImg");
    img2.src=watchImgs[3];

    img3=document.getElementById("fTwoContainerPicture");
    img3.src=watchImgs[2];

    img4=document.getElementById("fThreeContainerPicture");
    img4.src=watchImgs[1];

    img5=document.getElementById("fFourContainerPic");
    img5.src=watchImgs[0];
}

function switchIrpods()
{
    document.getElementById("productsWhole").style.animation ='productsFade 1s';

    const pmax = 
    [
    "This is Irpods",
    "It's Magical",
    "3",
    "4",
    ];

    document.getElementById("text1").innerHTML=pmax[1];
    document.getElementById("text2").innerHTML=pmax[2];
}