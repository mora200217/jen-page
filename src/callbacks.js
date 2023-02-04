
import MyJSON from './coolAnswers.json'; 

export function declinedCallback(idx){
    const answers = MyJSON.answers; 
    const value = answers[idx  % answers.length]; 
    alert(value); 
}

export function acceptedCallback(){
        alert("SIUUUUUUU (Cierra todas las alertas que te salgan)"); 
        alert("Top 10 Invitaciones"); 
        alert("*No le gusta"); 
        alert("Cough"); 
        alert("Bueno. Gracias por aceptar directamente (espero)"); 
        alert("Seras direccionada a la reserva."); 
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
        
}
