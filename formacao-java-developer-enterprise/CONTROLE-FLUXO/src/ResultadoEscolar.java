public class ResultadoEscolar {

    public static void main(String[] args) {

        int nota = 10;
 
        if(nota >= 7) // Sempre retorna true
         System.out.println("Aprovado");

        else if(nota >=5 && nota <7) // Retorna true or false
        System.out.println("Prova Recuperação");
 
        else
         System.out.println("Reprovado");
     }
    
}
