package com.example.bootsecurity.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.bootsecurity.MyUserDetailsService;
import com.example.bootsecurity.model.AuthenticationRequest;
import com.example.bootsecurity.model.AuthenticationResponse;
import com.example.bootsecurity.util.JwtUtil;

@RestController
public class EmployeeResource {
	
	@Autowired
	private AuthenticationManager authenticationmanager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	JwtUtil jwtutil;
	
	@GetMapping("/")
	public String greet() {
		return "working..";
	}
	@GetMapping
	@RequestMapping("/admin")
	public String greetAdmin() {
		return "Admin working..";
	}
	
	@GetMapping
	@RequestMapping("/user")
	public String greetUser() {
		return "User working..";
	}
	@RequestMapping(value="/authenticate", method=RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
               System.out.println(authenticationRequest.getUsername() + authenticationRequest.getPassword());	
		try {
		authenticationmanager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		}catch(BadCredentialsException e) {
			
			throw new Exception("Incorrect username or password",e);
		}
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String jwt = jwtutil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
		
	}


}
