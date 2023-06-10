package com.avncd.rabbitmq.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.avncd.rabbitmq.config.MessagingConfig;
import com.avncd.rabbitmq.model.OrderStatus;

@Component
public class PurchaseOrderConsumer {
	
	@Value("${avncd.rabbitmq.queue}")
	String ust_queue;
	
	@RabbitListener(queues= "ust_queue")
	public void consumerMessageFromQueue(OrderStatus orderStatus) {
		System.out.println("Message received from queue : " + orderStatus);
	}

}
