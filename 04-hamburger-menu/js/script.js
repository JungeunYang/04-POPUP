$(function () {
  // 대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $menu = $('.menu-wrap');
  const $dim = $('.dim');

  // flag : 아직 활성화 되지 않음
  let isActive = false;

  // 햄버거 버튼을 클릭했을 때
  $btnMenu.on('click', function (e) {
    e.preventDefault(); /* a의 기본동작을 무력화 : 이거 안하면 계속 a 링크로 넘어가려 할 것임 */
    // 버튼에 active 클래스 토글
    $(this).toggleClass('active');

    // $dim 활성화
    $dim.fadeToggle();

    // $menu가 보여지게 : isActive 조건에 따라서
    if (isActive === false) {
      // $menu를 보이게
      $menu.animate(
        {
          left: 0,
        },
        350
      );

      isActive = true;
      /* 여기서 true로 다시 돌려줘야 다시 false로 감 */
    } else {
      // $menu를 안보이게
      $menu.animate(
        {
          left: '-100%',
        },
        350
      );

      isActive = false;
      /* 여기서는 다시 false로 */
    }
  });
});
