'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const left = (wallWidth - spiderWidth) / 2;
  const topPos = (wallHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${topPos}px`;
}

if (wall && spider) {
  centerSpider();
  window.addEventListener('resize', centerSpider);
}
