$(document).ready(function(){
    // クラスとセレクタの定義
    const $navWrap = $('.nav-wrap');
    const $trigger = $('.trigger');
    const $parentList = $('.parent-list');
    // 子要素の定義
    const $hasChildLis = $('.parent-list > li').has('.child-box');
    const $childBoxes = $('.child-box');
    // 戻るボタンの定義
    const $toBeforeButtons = $('.to-before');
    // ナビ背景の定義
    const $triggerBg = $('.triggerBg');

    // ナビゲーションの状態を示すクラス
    const NAV_OPEN_CLASS = 'is-open';
    // ナビゲーションが開いているときのトリガーの状態を示すクラス
    const TRIGGER_ACTIVE_CLASS = 'is-active';
    // 親リストが左にスライドした状態を示すクラス
    const PARENT_LIST_SLIDED_CLASS = 'is-slided-left';
    // 子ボックスが表示されている状態を示すクラス
    const CHILD_BOX_ACTIVE_CLASS = 'is-active';
    // ナビ背景が表示されている状態を示すクラス
    const TRIGGERBG_ACTIVE_CLASS = 'is-active';


    // 1 ナビゲーション全体を開く
        // triggerがクリックされたとき
        $trigger.on('click', function(){
            $trigger.toggleClass(TRIGGER_ACTIVE_CLASS);
            $navWrap.toggleClass(NAV_OPEN_CLASS);
            $triggerBg.toggleClass(TRIGGERBG_ACTIVE_CLASS);

            if (!$navWrap.hasClass(NAV_OPEN_CLASS)){
                $parentList.removeClass(PARENT_LIST_SLIDED_CLASS);
                $childBoxes.removeClass(CHILD_BOX_ACTIVE_CLASS); 
            };
        });

    // 2 子要素を持つliがクリックされたとき、child-boxを開く
        $hasChildLis.on('click', function(e){
            e.stopPropagation();
            const $this = $(this);
            const $childBox = $this.children('.child-box');

            if ($childBox.length > 0){
                $parentList.addClass(PARENT_LIST_SLIDED_CLASS);
                $childBoxes.removeClass(CHILD_BOX_ACTIVE_CLASS);
                $childBox.addClass(CHILD_BOX_ACTIVE_CLASS);
            };
        });

    // 戻るボタンの設定
        $toBeforeButtons.on('click', function(e){
            e.stopPropagation();
            const $activeChildBox = $(this).closest('.child-box');
            $activeChildBox.removeClass(CHILD_BOX_ACTIVE_CLASS)
            $parentList.removeClass(PARENT_LIST_SLIDED_CLASS);

        });

    // 3 ナビゲーション全体を閉じる
        // trigger.is-activeがクリックされるか、
        /*
        $('.trigger.is-active').on('click', function(){
            $(this).removeClass(TRIGGER_ACTIVE_CLASS);
            $triggerBg.removeClass(TRIGGERBG_ACTIVE_CLASS);
            $navWrap.removeClass(NAV_OPEN_CLASS);
            $parentList.removeClass(PARENT_LIST_SLIDED_CLASS);
            $childBoxes.removeClass(CHILD_BOX_ACTIVE_CLASS);
        })
        */

        // nav.openの以外の場所がクリックされたとき、
        $triggerBg.on('click', function(){
            $(this).removeClass(TRIGGERBG_ACTIVE_CLASS);
            $trigger.removeClass(TRIGGER_ACTIVE_CLASS);
            $navWrap.removeClass(NAV_OPEN_CLASS);
            $parentList.removeClass(PARENT_LIST_SLIDED_CLASS);
            $childBoxes.removeClass(CHILD_BOX_ACTIVE_CLASS);
        });
        
});