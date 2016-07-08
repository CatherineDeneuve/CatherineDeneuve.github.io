requirejs.config({
  baseUrl: "js",
  paths: {
    'jquery': ['https://code.jquery.com/jquery-1.12.3'],
    'template': ['template']
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'template' :{
            exports: 'template'}
        }
});

require (['model', 'view', 'controller', 'jquery', 'template'],

  function () {


  });
