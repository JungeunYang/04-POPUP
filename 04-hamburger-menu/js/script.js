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

    isActive === false ? openMenu() : closeMenu();
    // = !isActive ? openMenu() : closeMenu();
  });

  $dim.on('click', closeMenu);

  // 공통의 동작을 함수로 정의
  // 1. 메뉴의 움직임 (보이거나 숨기거나)
  function slideMenu(pos) {
    /* pos:매개변수 / 매개변수 이름은 내 마음대로 /
    (pos, dur) 포지션 지속시간 이런식으로 여러개 매개변수로 잡아줄 수 있음 */
    $menu.stop().animate(
      {
        left: pos,
      },
      350
    );
  }

  // 2. openMenu : 메뉴를 보이게(메뉴, active부여, dim fadeIn, isActive true)
  function openMenu() {
    $btnMenu.addClass('active');
    $dim.stop().fadeIn();
    slideMenu(0);
    isActive = true;
  }
  // 3. closeMenu : 메뉴를 안보이게(메뉴, active삭제, dim fadeOut, isActive false)
  function closeMenu() {
    $btnMenu.removeClass('active');
    $dim.stop().fadeOut();
    slideMenu('-100%');
    isActive = false;

    // 서브메뉴 초기화
    // $menuList.removeClass('on');
    // $submenu.slideUp();
    initSubmenu();
  }

  // 서브메뉴 동작
  const $menuList = $('.menu >li');
  const $submenu = $('.submenu');

  $menuList.on('click', function (e) {
    e.preventDefault();

    // $menuList.removeClass('on');
    /* not this로 쓰려면 FAQ 파일 참고 선택된 this를 상수로 정의해주고 그 앞에 not(클릭된 this를 표현하는 상수) 이렇게 써줘야함 */

    // $(this).siblings().removeClass('on');
    // $(this).siblings().find($submenu).slideUp();
    initSubmenu();

    $(this).toggleClass('on');
    $(this).find($submenu).stop().slideToggle();
  });

  // 서브메뉴 초기화를 함수로 분리
  function initSubmenu() {
    $submenu.stop().slideUp();
    $menuList.removeClass('on');
  }
});
