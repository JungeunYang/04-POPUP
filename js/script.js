$(function () {
  // 1. 셀렉트박스 이용
  const $selectMenu = $('.select-menu');

  // 셀렉트박스를 클릭하면 --> option의 선택이 바뀌면
  // change 이벤트 : input, textarea, select 등 요소의 value의 변화가 일어날 때
  $selectMenu.on('change', function () {
    // 클릭한 option의 value값을 가져와서 : val()
    const linkValue = $(this).val();
    console.log(linkValue);

    // 브라우저의 주소창에 적용시킨다. --> 페이지 이동 : location.href 라는 속성 사용
    // location.href = linkValue;

    // 새 창 열기 --> window.open()
    window.open(linkValue);
  });

  // 2. 디자인 커스텀
  const $selectWrap = $('.select-wrap');
  const $selectList = $('.select-list');

  // strong(Family site)을 $selectList가 보이게
  $selectWrap.find('strong').on('click', function () {
    $selectList.slideToggle();
  });

  $selectList.children('li').on('click', function () {
    // attr('속성명')
    // const linkValue = $(this).attr('data-link');

    // data('속성명') = attr('data-속성명')
    const linkValue = $(this).data('link');

    /* 위에 똑같은 상수명이 있는데 왜 오류가 안날까?
    const나 let은 중괄호를 지역범위(전국구가 X)로 가지기 때문에 겹치지 않는 걸로 인식 */
    console.log(linkValue);

    window.open(linkValue);
    $selectList.slideUp();
  });
});
