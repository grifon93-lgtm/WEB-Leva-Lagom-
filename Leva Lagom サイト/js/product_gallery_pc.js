//console.log('--- TEST: Script file is being executed! ---'); // この行を一番先頭に追加
//jQuery発動
$(document).ready(function(){
/// console.log('--- TEST: Document ready event fired! ---'); // この行を追加

    /*1　ページが読み込まれた最初の状態*/
        /*1-1　先頭のliをopenにしておく*/
        $('.product_gallery_pc ul li:first-child').addClass('open');
        /*1-2　先頭以外のliのクラスにcloseを追加する*/
        $('.product_gallery_pc ul li:not(:first-child)').addClass('close');

    $('.product_gallery_pc ul li').mouseenter(function(event){
        /*2-1　マウスオーバーされたliのクラスからcloseを削除しopenのクラスを追加する*/
        $(this).removeClass('close').addClass('open');
        /*2-2　マウスオーバーされたli以外のliのクラスからopenを削除しcloseのクラスを追加する*/
        $(this).siblings().removeClass('open').addClass('close');       
    });

    /*2-3　.product_gallery以外にマウスオーバーを感知したら*/
    $('.product_gallery_pc ul li').mouseleave(function(event){
        /*2-3-1　.product_galleryの状態は最後の状態ままにしておく*/
    });


}); // $(document).ready(function)の終了


