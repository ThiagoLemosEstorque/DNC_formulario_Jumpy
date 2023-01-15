function mascaraCpf(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += '.';
    if (v.length == 11) i.value += '-';
 }

 function mascaraTelefone(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 1) i.value = `(${i.value}`;
    if (v.length == 3) i.value += ')';
    if (v.length == 8) i.value += '-';
 }