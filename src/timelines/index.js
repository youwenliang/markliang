import { TimelineMax as Timeline, Power1 } from 'gsap';

export const play = (node, mobile) => {
  var time = mobile ? .01 : .6;
  const timeline = new Timeline({ paused: true });
  timeline.from(node, time, { autoAlpha: 0, ease: Power1.easeOut }, time);
  timeline.play();
}

export const exit = (node, mobile) => {
  var time = mobile ? .01 : .4;
  const timeline = new Timeline({ paused: true });
  timeline.to(node, time, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}