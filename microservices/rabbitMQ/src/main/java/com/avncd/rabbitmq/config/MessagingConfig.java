package com.avncd.rabbitmq.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

@Configuration
public class MessagingConfig {
	
	/*
	 * public static final String QUEUE = "ust_queue"; public static final String
	 * EXCHANGE = "ust_exchange"; public static final String ROUTING_KEY =
	 * "ust_routingkey";
	 */
	
	@Value("${avncd.rabbitmq.queue}")
	String queue;
	
	@Value("${avncd.rabbitmq.exchange}")
	String exchange;
	
	@Value("${avncd.rabbitmq.routingkey}")
	String routingkey;
		
	@Bean
	public Queue queue(){
		return new Queue(queue);
	//	return new Queue();
	}
	
	@Bean
	public TopicExchange exchange() {
		return new TopicExchange(exchange);
	}
	
	@Bean
	public Binding binding(Queue queue,TopicExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with(routingkey);
	}
	
	@Bean
	public MessageConverter converter() {
		return new Jackson2JsonMessageConverter();
	}
	
	public AmqpTemplate template(ConnectionFactory connectionfactory) {
		final RabbitTemplate template = new RabbitTemplate(connectionfactory);
		template.setMessageConverter(converter());
		return template;
	}
}
