const headerBanner = document.querySelector('.header__banner');
const navigationItemWrap = document.querySelector('.navigation__item_wrap');
const navigationItemResourses = document.querySelector('.navigation__item_resourses');
const questionsList = document.querySelector('.questions__list');
const headerMidas = document.querySelector('.header__midas');
const navigation = document.querySelector('.navigation');
const headerMenuBtn = document.querySelector('.header__menu_btn');

headerBanner.children[0].children[1].addEventListener('click', () => {
  headerBanner.style.display = 'none';
})

headerMenuBtn.addEventListener('click', () => {
  if (navigation.style.left !== '0px') {
    navigation.style.left = '0';
    headerMenuBtn.children[0].classList.add('btn_top_transform');
    headerMenuBtn.children[1].classList.add('btn_middle_transform');
    headerMenuBtn.children[2].classList.add('btn_down_transform');
  } else {
    navigation.style.left = '-100%';
    headerMenuBtn.children[0].classList.remove('btn_top_transform');
    headerMenuBtn.children[1].classList.remove('btn_middle_transform');
    headerMenuBtn.children[2].classList.remove('btn_down_transform');
  }
});

questionsList.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('.question__btn')) {
    const questionsListItem = target.closest('.questions__list_item');
    if (questionsListItem.style.maxHeight !== '600px') {
      questionsListItem.style.maxHeight = '600px';
      questionsListItem.style.borderColor = '#43A1F7';
    } else {
      questionsListItem.style.maxHeight = '80px';
      questionsListItem.style.borderColor = '#ffffff0a';
    }
  }
});

navigationItemWrap.addEventListener('click', () => {
  navigationItemResourses.classList.toggle('resourses_show');
});

headerMidas.addEventListener('click', () => {
  headerMidas.children[1].classList.toggle('link__ftm_show');
});
