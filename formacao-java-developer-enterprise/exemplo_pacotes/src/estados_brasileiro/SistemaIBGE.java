package estados_brasileiro;

public class SistemaIBGE {
	public static void main(String[] args) {
		for(EstadosBrasileiros es: EstadosBrasileiros.values()){
			
			//System.out.println(es.getSigla() + " - " + es.getNome() + es.getIbge());
			
		}
		
		EstadosBrasileiros eb = EstadosBrasileiros.CEARA;
		
		
		System.out.println(eb.getNome());
		System.out.println(eb.getSigla());
		System.out.println(eb.getNomeMaiusculo());
		System.out.println(eb.getIbge());
	}

}
