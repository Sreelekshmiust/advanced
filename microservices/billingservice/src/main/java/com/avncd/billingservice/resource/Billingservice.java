package com.avncd.billingservice.resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/billingservice")
public class Billingservice {
	
	@Value("name")
	String str;
	
	@GetMapping
	public String testWelcome() {
		return "New microservice.." + str;
	}

}
