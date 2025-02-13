package br.com.dio.calculadora;

import java.util.Scanner;

public class CalculadoraJava {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		double a, b;
		
		System.out.println("Digite o primeiro valor: ");
		a = scan.nextInt();
		
		System.out.println("Digite o segundo valor: ");
		b = scan.nextInt();
		
		double soma = soma(a,b);
		double subtracao = subtracao(a,b);
		double multiplicacao = multiplicacao(a,b);
		double divisao = divisao(a,b);
		
		System.out.println("Soma:" + soma);
		System.out.println("Subtração: " + subtracao);
		System.out.println("Multiplicação: "+ multiplicacao);
		System.out.println("Divisão: " + divisao);

	}
	public static int soma(double a,double b) {
		return (int) (a + b);
	}
	public static int subtracao(double a,double b) {
		return (int) (a - b);
	}

	public static int multiplicacao(double a,double b) {
		return (int) (a * b);
	}
	public static double divisao(double a,double b) {
		return a / b;
	}

}
