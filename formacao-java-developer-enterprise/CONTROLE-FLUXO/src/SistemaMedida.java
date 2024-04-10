// public class SistemaMedida {
//     // Modo condicional if/else
// 	public static void main(String[] args) {
// 		String sigla = "M";

// 		if(sigla == "P")
// 			System.out.println("PEQUENO");
// 		else if(sigla == "M")
// 			System.out.println("MEDIO");
// 		else if(sigla == "G")
// 			System.out.println("GRANDE");
// 		else
// 			System.out.println("INDEFINIDO");


// 	}
// }

// SistemaMedida.java

// Modo condicional switch / case
public class SistemaMedida {
	public static void main(String[] args) {
		String sigla = "M";

		switch (sigla) {
		case "P":{
			System.out.println("PEQUENO");
			break;
		}
		case "M":{
			System.out.println("MEDIO");
			break;
		}
		case "G":{
			System.out.println("GRANDE");
			break;
		}
		default:
			System.out.println("INDEFINIDO");
		}


	}
}