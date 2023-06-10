package com.awslambda;

public class HelloJava {
	public static String hellolambda(String greet) {
		return greet;
		
	}

	public static void main(String[] args) {
		String greet="Sree";
		hellolambda(greet);
		
	}
}
