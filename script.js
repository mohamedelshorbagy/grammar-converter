/*global console, $, alert*/

var input = document.getElementById('input');
var btn = document.getElementById('btn');
var test = document.getElementById('test');
var select = document.getElementById('select');
var past,
    future;
    


    

var nlp = window.nlp_compromise;







btn.onclick = function() {
    'use strict';
    
    if (select.options[select.selectedIndex].value  == 'future') {
    
        var sent = nlp.sentence(input.value);
        var output = '';
        for (var i = 0 ; i < sent.terms.length ; i++){
            var pos = sent.terms[i].pos;
            var word = sent.terms[i].text;
            
            
            if (pos.Verb) {
                
                var x = word.indexOf(' ');
                if (x == -1){
                
                word = nlp.verb(word).conjugate().future;
                } else if (x > -1) {
                        word = word.substr(word.indexOf(' ') + 1);
                         word = nlp.verb(word).conjugate().future;
                }
                
                
            }
            
            
            
            output += word;
            output += sent.terms[i].whitespace.trailing;
        
        
        
        
        }

    
             
             
             
             
             
             
    test.textContent = output;
    
        
        
    

} else if (select.options[select.selectedIndex].value == 'past') {
    
var sent = nlp.sentence(input.value);

var output = '';
            for (var i = 0 ; i < sent.terms.length ; i++){
                var pos = sent.terms[i].pos;
                var word = sent.terms[i].text;
               
                if (pos.Verb) {
                    
                     var x = word.indexOf(' ');
                if (x == -1){
                
                if (word == 'am'){
                        word = 'was';
                    }    
                    
                    else {
                word = nlp.verb(word).conjugate().past;
                    }
                
                
                } else if (x > -1) {
                        word = word.substr(word.indexOf(' ') + 1);
                         word = nlp.verb(word).conjugate().past;
                }
                    
                    
                }
                
                output += word;
                output += sent.terms[i].whitespace.trailing;
                
            
            }    
    test.textContent = output;
    
    
    
    
    
    
  
} else if (select.options[select.selectedIndex].value == 'Negative') {

var sent = nlp.statement(input.value);

var output = sent.negate().text();

    
    test.textContent = output;
    
    
    
    
    

} else if (select.options[select.selectedIndex].value == 'Present'){

            var sent = nlp.sentence(input.value);
            var output = '';
            for (var i = 0 ; i < sent.terms.length ; i++){
                var pos = sent.terms[i].pos;
                var word = sent.terms[i].text;
               
                if (pos.Verb) {
                    
                     var x = word.indexOf(' ');
                if (x == -1){
                
                    if (word == 'am'){
                        var d = 0;
                    }
                
                    else {
                    word = nlp.verb(word).conjugate().present;
                    }
                
                
                
                } else if (x > -1) {
                    
                    
                        word = word.substr(word.indexOf(' ') + 1);
                         word = nlp.verb(word).conjugate().present;
                }
                    
                    
                }
                
                output += word;
                output += sent.terms[i].whitespace.trailing;
                
            
            }


        test.textContent = output;


}

    
    
    
    
    

}





