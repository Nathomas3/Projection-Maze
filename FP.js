var canvas;
var ctx;
var w=1450; //1000
var h=745; //700
var color = 0;
var oneDegree = 2*Math.PI/360;
var a = 0; // Outer Boarder
var aMaze = 1;
var radiusMaze = 4; // The red balls








//MAZE STRUCTURE OBJECT PROPERTY
var m1 ={
    x: w/8,
    y: h/9,
    w: 74,
    h: 55,
    c: 30,
    a: 1,
    lw: 5,
}

//BOUNCING OBSTACLE BALL, OBJECT PROPERTIES:
//if the character comes in contact with these balls it will return to the starting point:
var o1 ={ 
    x:1.6*w/8,
    changeX: 10,
    y: h/9,
    changeY:10,
    r: 20,
    c: 71.7,
    a: 1,
    distance: 10,
    angle: rand(360),
    
}
var o3 ={ 
    x:2.78*w/8,
    changeX: 10,
    y: h/9,
    changeY:10,
    r: 20,
    c: 71.7,
    a: 1,
    distance: 7,
    angle: rand(360),
    
}
var o5 ={ 
    x:3.98*w/8,
    changeX: 10,
    y: h/9,
    changeY:10,
    r: 20,
    c: 71.7,
    a: 1,
    distance: 7,
    angle: rand(360),
    
}
var o7 ={ 
    x:5.16*w/8,
    changeX: 10,
    y: h/9,
    changeY:10,
    r: 20,
    c: 71.7,
    a: 1,
    distance: 7,
    angle: rand(360),
    
}
var o9 ={ 
    x:6.35*w/8,
    changeX: 10,
    y: h/9,
    changeY:10,
    r: 20,
    c: 71.7,
    a: 1,
    distance: 7,
    angle: rand(360),
    
}


//CHARACTER OBJECT PROPERTY
var c1 ={ 
    x:w/8,
    changeX: 1,
    y: h/6.6,
    changeY:1,
    r: 15,
    c: 0,
    a: 1,
    distance: 3,
    angle: 0,
    
}


//OUTER MAZE INVISIBLE BORDER PROPERTIES:
//this will alllow the character to remain withinn the maze structure and return it to the starting point if it strays too far
var b1 = {
    x:w/11, //91
    changeX: 1,
    y: h/16, //44
    changeY:1,
    r: 10,
    c: -18,
    a: a,
    angle: 0,
}
var b2 = {
    x:w/11, //91
    changeX: 1,
    y: h/11, //64
    changeY:1,
    r: 10,
    c: -18,
    a: a,
    angle: 0,
}
var b3 = {
    x:w/12, //83.333
    changeX: 1,
    y: 8.5*h/9,
    changeY:1,
    r: 10,
    c: -18,
    a: a,
    angle: 0,
}
var b4 = {
    x:7.2*w/8,
    changeX: 1,
    y: h/11,
    changeY:1,
    r: 10,
    c: -18,
    a: a,
    angle: 0,
}


//when creating the maze i wanted the character to return to the starting positon when in contact with the maze structure, however i fell into a stump....
//..trying to figure out how to code collision detection between a circle and a line. Hence, i decided to use array and create a line balls which will subsitute...
//... for the linear maze structure. This way all i could code collision detection between circles and be able execute my intentions.
// i did realise that the downside of  creating multiple object properties has lead to my character and bouncing balls motions to lag.

//MAZE BORDER COLLISION OBJECT PROPERTIES:
var m2 = {
    x:w/8,
    changeX: 1,
    y: h/11,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m3 = {
    x:2*w/10,
    changeX: 1,
    y: h/11,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m4 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m5 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m6 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m7 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m8 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.1,
    a: aMaze,
    angle: 0,
}
var m9 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m10 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m11 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m12 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m13 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m14 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m15 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m16 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m17 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m18 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m14 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m19 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m20 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m21 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c:30,
    a: aMaze,
    angle: 0,
}
var m22 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m23 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m24 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m25 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m26 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c:30,
    a: aMaze,
    angle: 0,
}
var m27 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m28 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m29 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m30 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m31 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c:71.7,
    a: aMaze,
    angle: 0,
}
var m32 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m33 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m34 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m35 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m36 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m37 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m38 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m39 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m40 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m40_1 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m41 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m42 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m43 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m44 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    distance: 2,
    angle: 0,
}
var m45 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m46 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m47 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r:radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m48 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m49 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.1,
    a: aMaze,
    angle: 0,
}
var m50 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m51 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m52 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m53 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m54 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.1,
    a: aMaze,
    angle: 0,
}
var m55 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m56 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m57 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m58 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m59 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m60 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m61 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m62 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m63 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m64 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m65 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m66 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m67 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m68 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m69 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m70 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}
var m71 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 71.7,
    a: aMaze,
    angle: 0,
}
var m72 = {
    x:2*w/10,
    changeX: 1,
    y: h/2,
    changeY:1,
    r: radiusMaze,
    c: 30,
    a: aMaze,
    angle: 0,
}

setUpCanvas();
animationLoop();
clearInterval();




//USER INTERACTION
    document.querySelector("#myCanvas").onclick = function(e){click(e, c1)};
    document.onkeydown =  function (e){keyDown(e,c1)
    };




function animationLoop(){
    clear();
    maze(m1);
   

   
 
//MAZE COLLISION FUNCTIONS:
    for (var i=0; i<300; i++){
        circle(b1);
        updateData(b1);
        circle(b2);
        updateData2(b2);
        collision(c1,b2)
        circle(b3);
        updateData(b3);
        circle(b4);
        updateData2(b4);
        collision(c1,b4);

        circle(m2);
        updateData3_1(m2);
        collisionMaze(c1,m2);
        circle(m3)
        updateData3_2(m3);
        collisionMaze(c1,m3);
        circle(m4);
        updateData3_3(m4);
        collisionMaze(c1,m4);
        circle(m5);
        updateData3_4(m5);
        collisionMaze(c1,m5);
        circle(m6);
        updateData3_5(m6);
        collisionMaze(c1,m6);
        circle(m7);
        updateData3_6(m7);
        collisionMaze(c1,m7);
        circle(m8);
        updateData3_7(m8);
        collisionMaze(c1,m8);
        circle(m9);
        updateData3_8(m9);
        collisionMaze(c1,m9);
        circle(m10);
        updateData3_9(m10);
        collisionMaze(c1,m10);
        circle(m11);
        updateData3_10(m11);
        collisionMaze(c1,m11);

        circle(m12);
        updateData3_11(m12);
        collisionMaze(c1,m12);
        circle(m13);
        updateData3_12(m13);
        collisionMaze(c1,m13);
        circle(m14);
        updateData3_13(m14);
        collisionMaze(c1,m14);

        circle(m15);
        updateData3_14(m15);
        collisionMaze(c1,m15);
        circle(m16);
        updateData3_15(m16);
        collisionMaze(c1,m16);
        circle(m17);
        updateData3_16(m17);
        collisionMaze(c1,m17);
        circle(m18);
        updateData3_17(m18);
        collisionMaze(c1,m18);
        circle(m19);
        updateData3_18(m19);
        collisionMaze(c1,m19);
        circle(m20);
        updateData3_19(m20);
        collisionMaze(c1,m20);
        circle(m21);
        updateData3_20(m21);
        collisionMaze(c1,m21);
        circle(m22);
        updateData3_21(m22);
        collisionMaze(c1,m22);
        circle(m23);
        updateData3_22(m23);
        collisionMaze(c1,m23);
        circle(m24);
        updateData3_23(m24);
        collisionMaze(c1,m24);
        circle(m25);
        updateData3_24(m25);
        collisionMaze(c1,m25);
        circle(m26);
        updateData3_25(m26);
        collisionMaze(c1,m26);
        
        circle(m27);
        updateData3_26(m27);
        collisionMaze(c1,m27);
        circle(m28);
        updateData3_27(m28);
        collisionMaze(c1,m28);
        circle(m29);
        updateData3_28(m29);
        collisionMaze(c1,m29);
        circle(m30);
        updateData3_29(m30);
        collisionMaze(c1,m30);
        circle(m31);
        updateData3_30(m31);
        collisionMaze(c1,m31);
        circle(m32);
        updateData3_31(m32);
        collisionMaze(c1,m32);
        circle(m33);
        updateData3_32(m33);
        collisionMaze(c1,m33);
        circle(m34);
        updateData3_33(m34);
        collisionMaze(c1,m34);
        circle(m35);
        updateData3_34(m35);
        collisionMaze(c1,m35);
        circle(m36);
        updateData3_35(m36);
        collisionMaze(c1,m36);
        circle(m37);
        updateData3_36(m37);
        collisionMaze(c1,m37);
        circle(m38);
        updateData3_37(m38);
        collisionMaze(c1,m38);
        circle(m39);
        updateData3_38(m39);
        collisionMaze(c1,m39);
        circle(m39);
        updateData3_38(m39);
        collisionMaze(c1,m39);
        circle(m40);
        updateData3_39(m40);
        collisionMaze(c1,m40);

        circle(m40_1);
        updateData3_39_1(m40_1);/////////////////////
        collisionMaze(c1,m40_1);

        circle(m41);
        updateData3_40(m41);
        collisionMaze(c1,m41);
        circle(m42);
        updateData3_41(m42);
        collisionMaze(c1,m42);
        circle(m43);
        updateData3_42(m43);
        collisionMaze(c1,m43);
        circle(m44);
        updateData3_43(m44);
        collisionMaze(c1,m44);
        circle(m45);
        updateData3_44(m45);
        collisionMaze(c1,m45);
        circle(m46);
        updateData3_45(m46);
        collisionMaze(c1,m46);
        circle(m47);
        updateData3_46(m47);
        collisionMaze(c1,m47);
        circle(m48);
        updateData3_47(m48);
        collisionMaze(c1,m48);
        circle(m49);
        updateData3_48(m49);
        collisionMaze(c1,m49);
        circle(m50);/////////////////////////////////////////////////////////////////
        updateData3_49(m50);
        collisionMaze(c1,m50);
        circle(m51);
        updateData3_50(m51);
        collisionMaze(c1,m51);
        circle(m52);
        updateData3_51(m52);
        collisionMaze(c1,m52);
        // circle(m53);
        // updateData3_52(m53);
        // collisionMaze(c1,m53);
        // circle(m54);
        // updateData3_53(m54);
        // collisionMaze(c1,m54);
        circle(m55);
        updateData3_54(m55);
        collisionMaze(c1,m55);
        // circle(m56);
        // updateData3_55(m56);
        // collisionMaze(c1,m56);
        circle(m57);
        updateData3_56(m57);
        collisionMaze(c1,m57);
        circle(m58);
        updateData3_57(m58);
        collisionMaze(c1,m58);
        circle(m59);
        updateData3_58(m59);
        collisionMaze(c1,m59);
        // circle(m60);
        // updateData3_59(m60);
        // collisionMaze(c1,m60);
        circle(m61);
        updateData3_60(m61);
        collisionMaze(c1,m61);
        circle(m62);
        updateData3_61(m62);
        collisionMaze(c1,m62);
        circle(m63);
        updateData3_62(m63);
        collisionMaze(c1,m63);
        circle(m64);
        updateData3_63(m64);
        collisionMaze(c1,m64);
        circle(m65);
        updateData3_64(m65);
        collisionMaze(c1,m65);
        circle(m66);
        updateData3_65(m66);
        collisionMaze(c1,m66);
        circle(m67);
        updateData3_66(m67);
        collisionMaze(c1,m67);
        circle(m68);
        updateData3_67(m68);
        collisionMaze(c1,m68);
        circle(m69);
        updateData3_68(m69);
        collisionMaze(c1,m69);
        circle(m70);
        updateData3_69(m70);
        collisionMaze(c1,m70);
        circle(m71);
        updateData3_70(m71);
        collisionMaze(c1,m71);
        circle(m72);
        updateData3_71(m72);
        collisionMaze(c1,m72);


    }
    
//CIRCLE FUNCTIONS:  
    //circle(o1);
    //circle(o3);
   // circle(o5);
    //circle(o7);
    // circle(o9);
    circle(c1);
    forward(c1);
    
//Bounce Function:
    // bounceCircle1(o1);
    // setTimeout(function() {
    //     bounceCircle3(o3);
    //  },200);

    // bounceCircle5(o5);
    // setTimeout(function() {
    //     bounceCircle7(o7);
    //  },200);

    // bounceCircle9(o9);
    
//Obstacle Bounce collision with Character;
    // collision(c1, o1);
    // collision(c1, o3);
    // collision(c1, o5);
    // collision(c1, o7);
    // collision(c1, o9);
//Outer Border Collision with Character (keeping the character within the canvas)
    collision(c1,b1);
    collision(c1,b2);
    collision(c1,b3);
    collision(c1,b4);

  
    

requestAnimationFrame(animationLoop);
}


//COLLISION FUNCTIONS:

//Collision Between the character and the bouncing Ball
function collision(object1,object2){
    var xdistance = Math.abs(object1.x-object2.x);
    var ydistance = Math.abs(object1.y-object2.y);
    var hyp = Math.sqrt(xdistance*xdistance + ydistance*ydistance);

    if (hyp < object1.r + object2.r){
        if(xdistance > ydistance){
            object1.angle += 180-2*object1.angle; //basically bounce off in a straight line
            object2.angle += 180-2*object2.angle;
        //these were added so an action (the balls move around randomly) occurs after collision.
            object1.x = w/17;
            object1.y = h/6.6;
            object1.angle = 0;
            object1.distance = 1;
         }else{
             object1.angle += 360-2*object1.angle ; //if the yddistannce is biggeer than the xdifference
             object2.angle += 360-2*object2.angle;

             object1.x = w/17;
             object1.y = h/6.6;
             object1.angle = 0;
             object1.distance = 1;
             
         }}
       
         
}
//COLLISION FUNCTION BETWEEN CHARACTER AND MAZE STRUCTURE
function collisionMaze(object1,object2){
    var xdistance = Math.abs(object1.x-object2.x);
    var ydistance = Math.abs(object1.y-object2.y);
    var hyp = Math.sqrt(xdistance*xdistance + ydistance*ydistance);

    if (hyp < object1.r + object2.r){
        if(xdistance > ydistance){
            object1.angle += 180-2*object1.angle; //basically bounce off in a straight line
            object2.angle += 180-2*object2.angle;
        //these were added so an action (the balls move around randomly) occurs after collision.
        object1.x = w/17;
            object1.y = h/6.6;
            object1.angle = 0;
            object1.distance = 1;object1.x = w/17;
            object1.y = h/6.6;
            object1.angle = 0;
            object1.distance = 1;
            
         }else{
             object1.angle += 360-2*object1.angle ; //if the yddistannce is biggeer than the xdifference
             object2.angle += 360-2*object2.angle;

             object1.x = w/17;
            object1.y = h/6.6;
            object1.angle = 0;
            object1.distance = 1;
             
             
         }}
       
         
}


//updateData was used to create the array of linear balls, utilised for the collision detectionn betweenn the maze and character.
//UPDATEDATA OF THE MAZE STRUCTURE
function updateData(o){
    o.x = o.x + 20;
    if (o.x > w){
        o.x = 0;
    }
}
function updateData2(o){
    o.y = o.y + 20;
    if (o.y > h){
        o.y = 0;
        o.x = 0.25*w/12;
    }
}
function updateData3_1(o){
    o.y = o.y + 20;
    if (o.y > 690){
        o.y = h/5; // o.y = 2*h/9;
        o.x = 0.3*w/10;
    }
}
// Third top
function updateData3_2(o){
    o.y = o.y + 20;
    if (o.y > 240){
        o.y = h/5;
       // o.x = w/2;
    }
}  
//third bottom
function updateData3_3(o){
    o.y = o.y + 20;
    if (o.y > 570){
        o.y = 5.63*h/8.5;
        o.x = 2.2*w/10;
    }
}
function updateData3_4(o){
    o.y = o.y + 20;
    if (o.y > 190){
        o.y = h/8.5;
        o.x = 3.47*w/10;
    }
}
function updateData3_5(o){
    o.y = o.y + 20;
    if (o.y > 430){
        o.y = 2.5*h/5.8;
        o.x = 3*w/10;
    }
}
function updateData3_6(o){
    o.y = o.y + 20;
    if (o.y > 350){
        o.y = 2.95*h/9;
        o.x = w/2.87;
    }
}
function updateData3_7(o){
    o.y = o.y + 20;
    if (o.y > 600){
        o.y = 6.7*h/9;
        o.x = 3.12*w/9;
    }
}
function updateData3_8(o){
    o.y = o.y + 20;
    if (o.y > 500){
        o.y = 4.6*h/9;
        o.x = 3.79*w/9;
    }
}
function updateData3_9(o){
    o.y = o.y + 20;
    if (o.y > 190){
        o.y = 1.65*h/9;
        o.x = 3.8*w/9;
    }
}
function updateData3_10(o){
    o.y = o.y + 20;
    if (o.y > 310){
        o.y = 2.95*h/9;
        o.x = 3.79*w/9;
    }
}
function updateData3_11(o){
    o.y = o.y + 20;
    if (o.y > 210){
        o.y = 1.7*h/9;
        o.x = 4.45*w/9;
    }
}
function updateData3_12(o){
    o.y = o.y + 20;
    if (o.y > 370){
        o.y = 3.9*h/9;
        o.x = 4.46*w/9;
    }
}
function updateData3_13(o){
    o.y = o.y + 20;
    if (o.y > 550){
        o.y = 6*h/9;
        o.x = 4.46*w/9;
    }
}
function updateData3_14(o){
    o.y = o.y + 20;
    if (o.y > 520){
        o.y = 6*h/9;
        o.x = 4.46*w/9;
    }
}
function updateData3_15(o){
    o.y = o.y + 20;
    if (o.y > 600){
        o.y = 6.65*h/9;
        o.x = 5.13*w/9;
    }
}
function updateData3_16(o){
    o.y = o.y + 20;
    if (o.y > 420){
        o.y = 4.55*h/9;
        o.x = 5.13*w/9;
    }
}
function updateData3_17(o){
    o.y = o.y + 20;
    if (o.y > 320){
        o.y = 3.2*h/9;
        o.x = 5.13*w/9;
    }
}
function updateData3_18(o){
    o.y = o.y + 20;
    if (o.y > 360){
        o.y = 2.5*h/9;
        o.x = 5.89*w/9;
    }
}
function updateData3_19(o){
    o.y = o.y + 20;
    if (o.y > 600){
        o.y = 10*h/13.5;
        o.x = 6*w/9;
    }
}
function updateData3_20(o){
    o.y = o.y + 20;
    if (o.y > 140){
        o.y = 1*h/9;
        o.x = 5.79*w/9;
    }
}
function updateData3_21(o){
    o.y = o.y + 20;
    if (o.y > 558){
        o.y = 6*h/9;
        o.x = 7.12*w/9;
    }
}
function updateData3_22(o){
    o.y = o.y + 20;
    if (o.y > 440){
        o.y = 3.9*h/9;
        o.x = 6.45*w/9;
    }
}
function updateData3_23(o){
    o.y = o.y + 20;
    if (o.y > 260){
        o.y = 1.8*h/9;
        o.x = 6.45*w/9;
    }
}
function updateData3_24(o){
    o.y = o.y + 20;
    if (o.y > 430){
        o.y = 4.6*h/9;
        o.x = 7.12*w/9;
    }
}
function updateData3_25(o){
    o.y = o.y + 20;
    o.x = o.x - 4;
    if (o.y > 600){
        o.y = 1*h/9;
        o.x = 8.59*w/9;
    }
}//////////////////////////////////////o.x starts
function updateData3_26(o){
    o.x = o.x + 20;
    if (o.x > 1400){
        o.x = 0.5*w/9;
        o.y = h/9
    }
}
function updateData3_27(o){
    o.x = o.x + 20;
    if (o.x > 430){
        o.x = 1.9*w/9;
        o.y = 1.72*h/9
    }
}
function updateData3_28(o){
    o.x = o.x + 20;
    if (o.x > 610){
        o.x = 1.9*w/9;
        o.y = 2.93*h/9
    }
}
function updateData3_29(o){
    o.x = o.x + 20;
    if (o.x > 510){
        o.x = 2.2*w/9;
        o.y = 2.36*h/9
    }
}
function updateData3_30(o){
    o.x = o.x + 20;
    if (o.x > 480){
        o.x = 2.1*w/9;
        o.y = 5.26*h/9
    }
}
function updateData3_31(o){
    o.x = o.x + 20;
    if (o.x > 600){
        o.x = 2.1*w/9;
        o.y = 5.95*h/9
    }
}
function updateData3_32(o){
    o.x = o.x + 30;
    o.y = o.y - 29;
    if (o.x > 440){
        o.x = 3.6*w/28;
        o.y = 8.1*h/11;
    }
}
/////////////////////////////////////////////////////////////////////
function updateData3_33(o){
    o.x = o.x + 20;
    if (o.x > 570){
        o.x = 2.5*w/9;
        o.y = 6.55*h/9
    }
}
function updateData3_34(o){
    o.x = o.x + 20;
    if (o.x > 610){
        o.x = 3.5*w/9;
        o.y = 4.51*h/9
    }
}
function updateData3_35(o){
    o.x = o.x + 20;
    if (o.x > 730){
        o.x = 3.8*w/9;
        o.y = 3.8*h/9
    }
}
function updateData3_36(o){
    o.x = o.x + 20;
    if (o.x > 830){
        o.x = 4.5*w/9;
        o.y = 4.5*h/9
    }
}
function updateData3_37(o){
    o.x = o.x + 20;
    if (o.x > 940){
        o.x = 4.5*w/9;
        o.y = 5.25*h/9
    }
}
function updateData3_38(o){
    o.x = o.x + 20;
    if (o.x > 1150){
        o.x = 4.5*w/9;
        o.y = 5.95*h/9
    }
}
function updateData3_39(o){
    o.x = o.x + 20;
    o.y = o.y +4
    if (o.x > 445){
        o.x = 2.15*w/9;
        o.y = 3.5*h/9
    }
}////////////////////////////////////////
function updateData3_39_1(o){
    o.x = o.x + 21;
    o.y = o.y + 27;
    if (o.x > 190){
        o.x = 0.8*w/9;
        o.y = 5.8*h/9
    }
}/////////////////////////////////////////////////////////////////////
function updateData3_40(o){
    o.x = o.x + 20;
    o.y = o.y +0.7
    if (o.x > 1300){
        o.x = 0.4*w/9;
        o.y = 8.4*h/9
    }
}
function updateData3_41(o){
    o.x = o.x + 20;
    if (o.x > 930){
        o.x = 4.6*w/9;
        o.y = 1.69*h/9
    }
}
function updateData3_42(o){
    o.x = o.x + 20;
    if (o.x > 950){
        o.x = 4.2*w/9;
        o.y = 3.1*h/9
    }
}
function updateData3_43(o){
    o.x = o.x + 20;
    if (o.x > 1030){
        o.x = 5.2*w/9;
        o.y = 2.4*h/9
    }
}
function updateData3_44(o){
    o.x = o.x + 20;
    if (o.x > 1320){
        o.x = 6.5*w/9;
        o.y = 1.7*h/9
    }
}
function updateData3_45(o){
    o.x = o.x + 20;
    if (o.x > 1280){
        o.x = 6.5*w/9;
        o.y = 3.1*h/9
    }
}
function updateData3_46(o){
    o.x = o.x + 20;
    if (o.x > 1380){
        o.x = 7.1*w/9;
        o.y = 2.4*h/9
    }
}
function updateData3_47(o){
    o.x = o.x + 20;
    if (o.x > 1330){
        o.x = 7.1*w/9;
        o.y = 3.85*h/9
    }
}
function updateData3_48(o){
    o.x = o.x + 20;
    if (o.x > 1150){
        o.x = 6.2*w/9;
        o.y = 5.2*h/9
    }
}
function updateData3_49(o){
    o.x = o.x + 20;
    o.y = o.y + -18;
    if (o.x > 330){
        o.x = 0.5*w/6;
        o.y = 5.7*h/9
    }
}////////////////////////////////////////////////
function updateData3_50(o){
    o.x = o.x + 20;
    if (o.x > 1070){
        o.x = 6*w/9;
        o.y = 6.65*h/9
    }
} 
function updateData3_51(o){
    o.y = o.y + 20;
    if (o.y > 290){
        o.x = w/9;
        o.y = 1.8*h/9;
    }
} 
function updateData3_52(o){
    o.y = o.y + 20;
    if (o.y > 530){
        o.x = 1.2*w/9;
        o.y = 3.4*h/5;
    }
} 
function updateData3_53(o){
    o.x = o.x + 20;
    if (o.x > 260){
        o.x = 0.8*w/9;
        o.y = 3.4*h/5;
    }
} 
function updateData3_54(o){
    o.y = o.y + 20;
    if (o.y > 390){
        o.x = 0.7*w/9;
        o.y = 2.1*h/5;
    }
} 
function updateData3_55(o){
    o.x = o.x + 20;
    if (o.x > 0){
        o.x = 0.3*w/9;
        o.y = 1.4*h/5;
    }
} 
function updateData3_56(o){
    o.x = o.x + 20;
    if (o.x > 100){
        o.x = 0.3*w/9;
        o.y = 1.5*h/5;
    }
} 
function updateData3_57(o){
    o.x = o.x + 20;
    if (o.x > 290){
        o.x = 1.5*w/9;
        o.y = 1.2*h/5;
    }
} 
function updateData3_58(o){
    o.x = o.x + 20;
    if (o.x > 0){
        o.x = 1*w/9;
        o.y = 1.5*h/5;
    }
} 
function updateData3_59(o){
    o.x = o.x + 20;
    if (o.x > 350){
        o.x = 1.6*w/9;
        o.y = 2.5*h/5;
    }
} 

function updateData3_60(o){
    o.x = o.x + 20;
    if (o.x > 660){
        o.x = 3.5*w/9;
        o.y = 2.8*h/5;
    }
} 
function updateData3_61(o){
    o.y = o.y + 20;
    if (o.y > 190){
        o.x = 4.8*w/9;
        o.y = 1.1*h/5;
    }
} 

function updateData3_62(o){
    o.x = o.x + 20;
    if (o.x > 1080){
        o.x = 6.2*w/9;
        o.y = 2.1*h/5;
    }
} 
function updateData3_62(o){
    o.x = o.x + 20;
    if (o.x > 1080){
        o.x = 6.2*w/9;
        o.y = 2.1*h/5;
    }
} 
function updateData3_63(o){
    o.x = o.x + 20;
    if (o.x > 1320){
        o.x = 7.7*w/9;
        o.y = 3.1*h/5;
    }
} 
function updateData3_64(o){
    o.y = o.y + 20;
    if (o.y > 490){
        o.x = 7.6*w/9;
        o.y = 2.7*h/5;
    }
} 
function updateData3_65(o){
    o.y = o.y + 20;
    if (o.y > 6400){
        o.x = 7.5*w/9;
        o.y = 4*h/5;
    }
} 
function updateData3_66(o){
    o.y = o.y + 20;
    if (o.y > 660){
        o.x = 0.7*w/9;
        o.y = 3.9*h/5;
    }
} 
function updateData3_67(o){
    o.y = o.y + 20;
    if (o.y > 690){
        o.x = 1.95*w/9;
        o.y = 4.2*h/5;
    }
} 
function updateData3_68(o){
    o.x = o.x + 20;
    if (o.x > 1080){
        o.x = 4.3*w/9;
        o.y = 7.3*h/9
    }
} 
function updateData3_69(o){
    o.x = o.x + 20;
    if (o.x > 600){
        o.x = 0.8*w/9;
        o.y = 4.1*h/5;
    }
} 
function updateData3_70(o){
    o.x = o.x + 20;
    if (o.x > 800){
        o.x = 3.2*w/9;
        o.y = 4.4*h/5;
    }
} 
function updateData3_71(o){
    o.y = o.y + 20;
    if (o.y > 740){
        o.x = 6.9*w/9;
        o.y = 4.3*h/5;
    }
} 

// third eight


//USER INTERACTION FUNCTIONS:

//THE MOUSE FUNCTION.
//the player can restart the game by clicking the canvas once.
function click(e,c1){
    console.log("Replay");
     if(e.pointerId == 1){
            c1.x = w/8;
            c1.y = h/6.6
            c1.angle = 0; 
            forward(c1);
     }
   
}

//THE KEY FUNCTIONS.
//the player can move the character by using the basic key functions, and can use the spaceBar to stop the motion.
function keyDown(e,c1){
    if(e.key == "ArrowUp"){
        console.log("Spaceship Moves Up");
            c1.angle = 270;
            c1.distance = 2;
    }
    if(e.key == "ArrowDown"){
        console.log("Spaceship Moves Down");
            c1.angle = 90; 
            c1.distance = 2; //used to have a + before =, to increase speed with each press
    }
    if(e.key == "ArrowRight"){ 
        console.log("Spaceship Moves Right");
            c1.angle = 0; 
            c1.distance = 2;
    }
    if(e.key == "ArrowLeft"){ 
        console.log("Spaceship Moves Left");
            c1.angle = 180; 
            c1.distance = 2;
    }
    if(e.key == " "){
        console.log ("STOP");
            c1.distance *= 0;
    }
    
   
}






 //Bounce Function:
function bounceCircle3(o){
    o.x += o.changeX;
    o.y += o.changeY;
   if(o.x = 2.78*w/8 ){
       o.changeX *= -1;
   }
   if (o.y>h || o.y < 0){
       o.changeY *= -1;
 }
   
}
function bounceCircle1(o){
    o.x += o.changeX;
    o.y += o.changeY;
   if(o.x = 1.6*w/8){
       o.changeX *= -1;
   }
   if (o.y>h || o.y < 0){
       o.changeY *= -1;
 }
   
}
function bounceCircle5(o){
    o.x += o.changeX;
    o.y += o.changeY;
   if(o.x = 3.98*w/8){
       o.changeX *= -1;
   }
   if (o.y>h || o.y < 0){
       o.changeY *= -1;
 }
   
}
function bounceCircle7(o){
    o.x += o.changeX;
    o.y += o.changeY;
   if(o.x = 5.16*w/8){
       o.changeX *= -1;
   }
   if (o.y>h || o.y < 0){
       o.changeY *= -1;
 }
   
}
function bounceCircle9(o){
    o.x += o.changeX;
    o.y += o.changeY;
   if(o.x = 6.35*w/8){
       o.changeX *= -1;
   }
   if (o.y>h || o.y < 0){
       o.changeY *= -1;
 }
   
}




function grid(o){
    ctx.beginPath();
    ctx.moveTo(o.x+o.w,o.y); 
    ctx.lineTo(o.x+o.w, o.y+550); 
    ctx.moveTo(o.x+2*o.w,o.y);
    ctx.lineTo(o.x+2*o.w, o.y+550); 
    ctx.moveTo(o.x+3*o.w,o.y);
    ctx.lineTo(o.x+3*o.w, o.y+550);
    ctx.moveTo(o.x+4*o.w,o.y);
    ctx.lineTo(o.x+4*o.w, o.y+550);
    ctx.moveTo(o.x+5*o.w,o.y);
    ctx.lineTo(o.x+5*o.w, o.y+550);
    ctx.moveTo(o.x+6*o.w,o.y);
    ctx.lineTo(o.x+6*o.w, o.y+550);
    ctx.moveTo(o.x+7*o.w,o.y);
    ctx.lineTo(o.x+7*o.w, o.y+550);
    ctx.moveTo(o.x+8*o.w,o.y);
    ctx.lineTo(o.x+8*o.w, o.y+550);
    ctx.moveTo(o.x+9*o.w,o.y);
    ctx.lineTo(o.x+9*o.w, o.y+550);

    ctx.moveTo(o.x,o.y+o.h);
    ctx.lineTo(o.x+740, o.y+o.h);
    ctx.moveTo(o.x,o.y+2*o.h);
    ctx.lineTo(o.x+740, o.y+2*o.h);
    ctx.moveTo(o.x,o.y+3*o.h);
    ctx.lineTo(o.x+740, o.y+3*o.h);
    ctx.moveTo(o.x,o.y+4*o.h);
    ctx.lineTo(o.x+740, o.y+4*o.h);
    ctx.moveTo(o.x,o.y+5*o.h);
    ctx.lineTo(o.x+740, o.y+5*o.h);
    ctx.moveTo(o.x,o.y+6*o.h);
    ctx.lineTo(o.x+740, o.y+6*o.h);
    ctx.moveTo(o.x,o.y+7*o.h);
    ctx.lineTo(o.x+740, o.y+7*o.h);
    ctx.moveTo(o.x,o.y+8*o.h);
    ctx.lineTo(o.x+740, o.y+8*o.h);
    ctx.moveTo(o.x,o.y+9*o.h);
    ctx.lineTo(o.x+740, o.y+9*o.h);
    ctx.strokeStyle = "hsla("+o.c+", 100%, 50%, "+o.a+")"; 
    lineWidth = o.lw;
    ctx.stroke();
}
function forward (o){
    var cx; 
    var cy; 
    
    cx = o.distance*Math.cos(o.angle*oneDegree); 
    cy = o.distance*Math.sin(o.angle*oneDegree);
    o.x += cx;
    o.y += cy;
    
 }
function circle(o){
    var cx = o.x;
    var cy = o.y;
    var cdistance = o.distance;
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.r, o.angle, o.angle+360*oneDegree);
    ctx.fillStyle = "hsla("+o.c+", 100%, 50%, "+o.a+")";
    ctx.fill();
    o.x = cx;
    o.y = cy;
    o.distance = cdistance;
    //console.log(o.c);

 }
 

function maze(o){
    ctx.beginPath();

    ctx.moveTo(o.x, o.y+o.h);
    ctx.lineTo(o.x, o.y+10*o.h);
    ctx.lineTo(o.x+10*o.w, o.y+10*o.h);

    ctx.moveTo(o.x+10*o.w, o.y+9*o.h);
    ctx.lineTo(o.x+10*o.w,o.y);
    ctx.lineTo(o.x,o.y);

    ctx.moveTo(o.x+3*o.w,o.y);
    ctx.lineTo(o.x+3*o.w, o.y+2*o.h);
    ctx.moveTo(o.x+2*o.w, o.y+2*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+2*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+o.h);

    ctx.moveTo(o.x+7*o.w,o.y);
    ctx.lineTo(o.x+7*o.w, o.y+o.h);
    ctx.lineTo(o.x+5*o.w, o.y+o.h);
    ctx.lineTo(o.x+5*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+7*o.w, o.y+3*o.h);

    ctx.moveTo(o.x+6*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+6*o.w, o.y+4*o.h);

    ctx.moveTo(o.x+7*o.w, o.y+2*o.h);
    ctx.lineTo(o.x+7*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+6*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+6*o.w, o.y+9*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+9*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+o.w, o.y+7*o.h);
    ctx.lineTo(o.x+o.w, o.y+9*o.h);
    ctx.lineTo(o.x+2*o.w, o.y+9*o.h);

    ctx.moveTo(o.x+o.w, o.y+7*o.h);
    ctx.lineTo(o.x+1*o.w, o.y+6*o.h);
    ctx.lineTo(o.x+2*o.w, o.y+6*o.h);
    ctx.lineTo(o.x+2*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+4*o.h);
    ctx.lineTo(o.x+5*o.w, o.y+4*o.h);
    ctx.lineTo(o.x+5*o.w, o.y+5*o.h);
    ctx.lineTo(o.x+6*o.w, o.y+5*o.h);
    ctx.lineTo(o.x+6*o.w, o.y+6*o.h);
    ctx.lineTo(o.x+5*o.w, o.y+6*o.h);
    ctx.moveTo(o.x+2*o.w, o.y+6*o.h);
    ctx.lineTo(o.x+3*o.w, o.y+6*o.h);
    ctx.moveTo(o.x+2*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+1*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+1*o.w, o.y+1*o.h);
    ctx.lineTo(o.x+2*o.w, o.y+1*o.h);
    ctx.moveTo(o.x+4*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+4*o.w, o.y+5*o.h);
    ctx.lineTo(o.x+3*o.w, o.y+5*o.h);
    ctx.lineTo(o.x+3*o.w, o.y+4*o.h);
    ctx.moveTo(o.x+3*o.w, o.y+10*o.h);
    ctx.lineTo(o.x+3*o.w, o.y+8*o.h);
    ctx.lineTo(o.x+2*o.w, o.y+8*o.h);
    ctx.moveTo(o.x+6*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+5*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+5*o.w, o.y+8*o.h);
    ctx.moveTo(o.x+7*o.w, o.y+10*o.h);
    ctx.lineTo(o.x+7*o.w, o.y+8*o.h);
    ctx.lineTo(o.x+8*o.w, o.y+8*o.h);
    ctx.moveTo(o.x+6*o.w, o.y+2*o.h);/////////////////////////////////
    ctx.lineTo(o.x+8*o.w, o.y+2*o.h);
    ctx.lineTo(o.x+8*o.w, o.y+1*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+1*o.h);
    ctx.moveTo(o.x+8*o.w, o.y+2*o.h);
    ctx.lineTo(o.x+8*o.w, o.y+3*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+3*o.h);
    ctx.moveTo(o.x+10*o.w, o.y+2*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+2*o.h);
    ctx.moveTo(o.x+10*o.w, o.y+4*o.h);
    ctx.lineTo(o.x+8*o.w, o.y+4*o.h);
    ctx.lineTo(o.x+8*o.w, o.y+6*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+6*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+5*o.h);
    ctx.moveTo(o.x+7*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+7*o.h);
    ctx.lineTo(o.x+9*o.w, o.y+9*o.h);
    ctx.lineTo(o.x+8*o.w, o.y+9*o.h);

   
    
    
    ctx.strokeStyle = "hsla("+o.c+", 0%, 0%, "+o.a+")"; 
    ctx.lineWidth = o.lw;
    ctx.stroke();
}
 function Border_ref(o){
    ctx.beginPath();
    ctx.moveTo(o.x,o.y); 
    ctx.lineTo(o.x+o.w, o.y); 
    ctx.lineTo(o.x+o.w, o.y+o.h); 
    ctx.lineTo(o.x, o.y+o.h);
    ctx.lineTo(o.x,o.y);
    ctx.strokeStyle = "hsla("+o.c+", 100%, 50%, "+o.a+")"; 
    ctx.lineWidth = o.lw; 
    ctx.stroke();
 }




 function clear(){ 
    ctx.clearRect(0,0,w,h);
 }
function randn(range){
    var r = Math.random()*range-(range/2);
    return r
}
function rand(range){
    var r = Math.random()*range;
    return r
}
function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    canvas.width=w;
    canvas.height=h;
    canvas.style.border= "0px solid purple";
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
}

console.log("Final Project");












// var g1 ={
//     x: w/8,
//     y: h/9,
//     w: 74,
//     h: 55,
//     c: 0,
//     a: 0.5,
//     lw: 0.5,
// }

// var ref1 = {
//     x: w/8, //125
//     y: h/9, // 77.78
//     w: 740, //74
//     h: 550, //55
//     c: 0,
//     a: 1,
//     lw: 1,

// }
