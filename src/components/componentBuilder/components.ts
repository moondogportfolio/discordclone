import titledParagraphVue from './titledParagraph.vue';
import labeledLinkVue from './labeledLink.vue';

export const components = {
  LabeledLink: labeledLinkVue,
  TitledParagraph: titledParagraphVue,
};

export const componentNames = Object.keys(components);
