import Vue from 'vue';
import base from './base';

const directives = { base };

Object.keys(directives).forEach((directiveName) => {
  Vue.directive(directiveName, directives[directiveName]);
});