const tabBtns = document.querySelectorAll('.tabs__btn');
const tabLists = document.querySelectorAll('.tabs__list');

const onTabClick = () => {
  tabBtns.forEach((el) => {
    el.classList.remove('no-js');
  });
  tabLists.forEach((el) => {
    el.classList.remove('no-js');
  });

  tabBtns.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabBtns.forEach((btn) => {
        btn.classList.remove('active');
      });

      tabLists.forEach((list) => {
        list.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    });
  });
};

export {onTabClick};
