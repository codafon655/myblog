// ページの読み込み完了と同時に実行されるよう指定
window.onload = firstscript;

function firstscript() {
    var mydiv = document.getElementById('side-div');
    mydiv.innerHTML =
        '<div style="padding:20px;">' +
        '<p style="font-weight:bold;">MENU</p>' +
        '<a href="../index.html">入り口</a><br>' +
        '<a href="">管理人室</a><br>' +
        '<a href="">BBS</a><br>' +
        '<a href="">更新履歴</a><br>' +
        '<a href="">ギャラリー</a><br>' +
        '<a href="">リンク</a><br>' +
        '</div>'
        ;
}