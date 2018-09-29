import html2canvas from 'html2canvas';

const VueHtml2Canvas = {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        async $html2canvas (el, options = {}) {
          const { type } = options;
          const canvas = await html2canvas(el, options);
          if (type && type === 'dataURL') { return canvas.toDataURL(); } else {
            console.warn('Vue Html2Canvas Warn: Invalid option type. Use \'dataURL\' instead. Returning canvas.');
            return canvas;
          }
        }
      }
    });
  }
};

export default VueHtml2Canvas;
