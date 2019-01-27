/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
(function(app) {
  app.LangsComponent = ng.core
    .Component({
      selector: 'lang-names',
      templateUrl: 'langs.component.html',
      providers: [ng.http.HTTP_PROVIDERS, app.LangsService],
      pipes: [app.SortPipe]
    })
    .Class({
      constructor: [ app.LangsService, function(_langsService) {
        this.langsService = _langsService;
        this.langs = [];   
        this.message = '';
      }],

      getLangs: function() {
        this.langsService.get()
                         .subscribe(
                           this.updateLangs.bind(this), 
                           this.updateError.bind(this));
      },

      updateLangs: function(langs) {    
        this.message = '';
        this.langs = langs.split('\n');
      },                    

      updateError: function(error) {
        this.message = error;
        this.langs = [];
      },

      ngOnInit: function() {
        this.getLangs();
      }
    });
})(window.app || (window.app = {}));
