window.onload=function (){
        audio.play();
        var b=document.getElementById('box');//获取id
        var row=15;//设置15*15的表盘
        var hengxian,shuxian;
    for( i=0;i<row;i++){  //利用循环画 横线，竖线
        hengxian=document.createElement('div');
        hengxian.style.position='absolute';
        hengxian.style.width='600px';
        hengxian.style.height='1px';
        hengxian.style.top=(600/row)/2+(600/row)*i+'px';
        hengxian.style.background='black';
        hengxian.style.boxShadow='0 0 2px black ';
        b.appendChild(hengxian);  //将横线添加的div里面；

        shuxian=document.createElement('div');
        shuxian.style.position='absolute';
        shuxian.style.height=600+'px';
        shuxian.style.width=1+'px';
        shuxian.style.left=(600/row)/2+(600/row)*i+'px';
        shuxian.style.background='black';
        shuxian.style.boxShadow='0 0 2px black ';
        b.appendChild(shuxian);
    }

    var b=document.getElementById('box'),row=15,width=(600-row)/row+'px',q;
    for(var i=0;i<row;i++){  //两层循环 可以循环出所有的div
        for(var j=0;j<row;j++){
            var q=document.createElement('div');//创建div
            q.setAttribute('class','qizi'); //添加类名
            q.setAttribute('id',i+'_'+j);
           q.style.width=width;
           q.style.height=width;
            b.appendChild(q);
        }
    }

    var qs=document.getElementsByClassName('qizi');
    var flag=true;
    var dict1={};
    var dict2={};
    var panduan=function(id,dic){
        var x=Number(id.split('_')[0]);
        var y=Number(id.split('_')[1]);
        var tx,ty;
        var hang=1;
        tx=x;ty=y;
        while(dic[tx+'_'+(ty+1)]){hang++;ty++}
        tx=x;ty=y;
        while(dic[tx+'_'+(ty-1)]){hang++;ty--}
        if(hang==5){return true}

        var lie=1;
        tx=x;ty=y;
        while(dic[(tx+1)+'_'+ty]){lie++;tx++}
        tx=x;ty=y;
        while(dic[(tx-1)+'_'+ty]){lie++;tx--}
        if(lie==5){return true}

        var zx=1;
        tx=x;ty=y;
        while(dic[(tx+1)+'_'+(ty-1)]){zx++;tx++;ty--}
        tx=x;ty=y;
        while(dic[(tx-1)+'_'+(ty+1)]){zx++;tx--;ty++}
        if(zx==5){return true}

        var yx=1;
        tx=x;ty=y;
        while(dic[(tx-1)+'_'+(ty-1)]){yx++;tx--;ty--}
        tx=x;ty=y;
        while(dic[(tx+1)+'_'+(ty+1)]){yx++;tx++;ty++}
        if(yx==5){return true}

    };


    kaiguan.onclick=function(){
        kaiguan.style.backgroundImage='url(./images/start.png)';
        kaiguan.style.backgroundPosition='165px 0' ;

        for( i=0;i<qs.length;i++){
            qs[i].onclick=function(){
                if(this.hasAttribute('hasColor')){return}
                this.style.boxShadow='0 0 10px black inset';
                this.style.webkitTransform='scale(0.9,0.9)';
                if(flag){
                    this.style.background='white';flag=false;
                    this.style.boxShadow='0 0 8px black inset';
                    dict1[this.getAttribute('id')]=true;
                    if(panduan(this.getAttribute('id'),dict1)){
                        baiqi.style.display='block';
                        zailai.style.display='block';
                    }
                }else{
                    this.style.background='black';flag=true;
                    this.style.boxShadow='0 0 8px black ';
                    dict2[this.getAttribute('id')]=true;
                    if(panduan(this.getAttribute('id'),dict2)){
                       heiqi.style.display='block';
                       zailai.style.display='block';
                    }
                }
                console.log(dict1);
                this.setAttribute('hasColor','true');
            }
        }
    }

    zailai.onclick=function(){
        location.reload();
    }
















};