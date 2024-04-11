public class FormatadorCepExemplo {
    public static void main(String[] args) {
       try{
        String cepFormatado = formatarCep("2376506");
        System.out.println("Cep formatado: " + cepFormatado);
        
       }
       catch(CepInvalidoException e){
        System.err.println("O cep não esta de acordo com as regras de negócios.");
       }
    }

    static String formatarCep(String cep) throws CepInvalidoException{
        if(cep.length() != 8)
          throw new CepInvalidoException();
        
          //simulando um cep formatado
          return "23.765-064";
    }
    
}
