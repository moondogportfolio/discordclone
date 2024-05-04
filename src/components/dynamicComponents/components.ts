import deadlineTimerVue from './deadlineTimer.vue';
import labeledLinkVue from './labeledLink.vue';
import titledParagraphVue from './titledParagraph.vue';

export const dynamicComponents = {
  Paragraph: titledParagraphVue,
  LabeledLink: labeledLinkVue,
  Deadline: deadlineTimerVue,
};
