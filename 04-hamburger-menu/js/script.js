$(function () {
  // 대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $menu = $('.menu-wrap');
  const $dim = $('.dim');

  // flag : 아직 활성화 되지 않음
  // -> 한 요소한테 토글효과를 주려면 플래그를 써야함 or hasClass로 if문을 쓰든 혹은 css로 active클래스를 주든
  let isActive = false;

  // 햄버거 버튼을 클릭했을 때
  $btnMenu.on('click', function (e) {
    e.preventDefault(); /* a의 기본동작을 무력화 : 이거 안하면 계속 a 링크로 넘어가려 할 것임 */
    // 버튼에 active 클래스 토글
    // $(this).toggleClass('active');

    // // $dim 활성화
    // $dim.fadeToggle();

    //   // $menu가 보여지게 : isActive 조건에 따라서
    //   if (isActive === false) {
    //     // $menu를 보이게
    //     $menu.animate(
    //       {
    //         left: 0,
    //       },
    //       350
    //     );

    //     isActive = true;
    //     /* 여기서 true로 다시 돌려줘야 다시 false로 감 */
    //   } else {
    //     // $menu를 안보이게
    //     $menu.animate(
    //       {
    //         left: '-100%',
    //       },
    //       350
    //     );

    //     isActive = false;
    //     /* 여기서는 다시 false로 */
    //   }
    // });

    if (isActive === false) {
      openMenu();
      // slideMenu(0);
      // isActive = true;
    } else {
      // slideMenu('-100%');
      // isActive = false;
      closeMenu();
    }
  });
  // $dim을 클릭했을 때
  // $dim.on('click', function () {
  //   // 1. $dim이 fadeOut
  //   $dim.fadeOut();

  //   // 2. $menu를 안보이게
  //   slideMenu('-100%');
  //   isActive = false;
  // });
  $dim.on('click', closeMenu);

  // 공통의 동작을 함수로 정의
  // 1. 메뉴의 움직임 (보이거나 숨기거나)
  function slideMenu(pos) {
    /* pos:매개변수 / 매개변수 이름은 내 마음대로 /
    (pos, dur) 포지션 지속시간 이런식으로 여러개 매개변수로 잡아줄 수 있음 */
    $menu.animate(
      {
        left: pos,
      },
      350
    );
  }

  // 2. openMenu : 메뉴를 보이게(메뉴, active부여, dim fadeIn, isActive true)
  function openMenu() {
    $btnMenu.addClass('active');
    $dim.fadeIn();
    slideMenu(0);
    isActive = true;
  }
  // 3. closeMenu : 메뉴를 안보이게(메뉴, active삭제, dim fadeOut, isActive false)
  function closeMenu() {
    $btnMenu.removeClass('active');
    $dim.fadeOut();
    slideMenu('-100%');
    isActive = false;
  }
});
