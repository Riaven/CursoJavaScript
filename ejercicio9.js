function genera(){
    //Se crean los numero random
    var numero1 = (Math.random() * 10).toFixed();
    var numero2 = (Math.random() * 10).toFixed();
    //Se obtienen los elementos de los divs correspondientes
    var div1 = document.getElementById("primero");
    var div2 = document.getElementById("segundo");
    //obtener los hijos
    var primer_anterior = div1.firstChild;
    var segundo_anterior = div2.firstChild;
    //Se crean dos parrafos
    var parrafo1 = document.createElement("p");
    var parrafo2 = document.createElement("p");
    //textos
    var texto_div1 = document.createTextNode(numero1);
    var texto_div2 = document.createTextNode(numero2);
    //agregar los textos a los parrafos
    parrafo1.appendChild(texto_div1);
    parrafo2.appendChild(texto_div2);
    //para comprobar que los parrafos estén vacíos
    if(primer_anterior != null && segundo_anterior != null){
        div1.replaceChild(parrafo1, primer_anterior);
        div2.replaceChild(parrafo2, segundo_anterior);
    }else{
        div1.appendChild(texto_div1);
        div2.appendChild(texto_div2);
    }
    


    //comprobar la función
    console.log(numero1 + "    " + numero2);
}

function compara(){
    //obtener los divs
    var div1 = document.getElementById("primero");
    var div2 = document.getElementById("segundo");

    var div_resultado = document.getElementById("resultado");
    var resultado = document.createElement("p");
    var antiguo_child = div_resultado.firstChild;
    var texto_resultado ;
    //parrafos de cada uno de los divs
    var parrafo_div1 = div1.firstChild;
    var parrafo_div2 = div2.firstChild;
    //obtener info de los parrafos y comparar
    
    if(parseInt(parrafo_div1.textContent) > parseInt(parrafo_div2.textContent)){
        texto_resultado = document.createTextNode(parrafo_div1.textContent);
    }else{
        texto_resultado = document.createTextNode(parrafo_div2.textContent);
    }
    
    resultado.appendChild(texto_resultado);
    if(antiguo_child == null){
        div_resultado.appendChild(resultado);
    }else{
        div_resultado.replaceChild(resultado, antiguo_child);
    }
        

    console.log(resultado.textContent);


}

