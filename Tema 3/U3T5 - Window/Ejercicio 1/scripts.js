/*
Crea un programa que tenga botones para permitir modificar las siguientes propiedades de una  ventana:

    - Abrir una ventana nueva:
    - Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
    - La nueva ventana tendrá las siguientes propiedades: no tendrá barrade herramientas, ni location, ni barra de  menú, ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
    - La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
    - Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
    - Mover la ventana 10 píxeles a la derecha y abajo.
    - Mover la ventana a la posición 100,100.
    - Aumentar el tamaño de la ventana 10 píxeles de ancho y largo.
    - Aumentar el tamaño de la ventana a 400x200.
    - Colocar el scroll de la ventana arriba del todo
    - Colocar el scroll de la ventana a 10 píxeles de la parte superior.
    - Todos los botones, exceptoel primero y el segundo, los puedes programar diréctamente mediante la  propiedad onClick, por ejemplo:<input type=“button” value=“Imprimir” onClick=“print()”/>

Recuerda que no es necesario utilizar “window” delante de la propiedad.


*/

let ventana;

ventana = window.name = "miventana";



    function abrirVentana(){
        do{
            pregunta = prompt("Quieres abrir una ventana ")
            pregunta.toLowerCase();
    
        }while(pregunta != 'si' && pregunta != 'no')
    
        if(pregunta === 'si'){
            
            ventana = open("", "", "menubar=no, scrollbars=no, width=400, height=400");

            ventana.document.write('<p> Esto es un pequeño texto</p> <input type="button" id="" onclick="cerrarVentana();" value="Abrir Ventana">');

            
                     
            
        }
    }

  

    

    