// feedreader.js
 
$(function() {
  
    describe('RSS Feeds', function() {
       
         /*loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('definido', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URl existe e não está vazia', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined(); 
                expect(allFeeds[i].url).not.toBe(''); 
            }
        });

        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('Nome existe e não está vazio', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });

    

        /* ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    describe('O Menu', function(){

        it('Menu oculto por padrão', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* ensures the menu changes
          * visibility when the menu icon is clicked.
          */


        it('Menu altera visibilidade quando clicado', function(){

            $('.menu-icon-link').click(); 
            expect($('body').hasClass('menu-hidden')).toBe(false);


            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    

        /* ensures when the loadFeed
         * function is called and completes its work
         */

    describe('Entradas iniciais', function(){

        beforeEach(function(done){
            loadFeed(0, done);
        }); 

        it('Consiste de pelo menos uma entrada', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

    describe('Nova seleção de feed', function(){

        var feed, newfeed;

        beforeEach(function(done){
            loadFeed(0, function(){ 
                feed = $('.feed').html();
                done();
            }); 
            
        }); 

        it('Muda conteudo do feed quando carregado', function(done){
                
            loadFeed(1, function() {
                newfeed = $('.feed').html();
                expect(newfeed).not.toEqual(feed);
                done();;
            });
        });
    });

}());

