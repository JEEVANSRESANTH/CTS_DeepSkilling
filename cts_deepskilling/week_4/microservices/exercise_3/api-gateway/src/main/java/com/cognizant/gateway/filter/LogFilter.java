package com.cognizant.gateway.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import reactor.core.publisher.Mono;

@Configuration
public class LogFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(LogFilter.class);

    @Bean
    @Order(1)
    public GlobalFilter globalLoggingFilter() {
        return (exchange, chain) -> {
            String path = exchange.getRequest().getURI().getPath();
            String method = exchange.getRequest().getMethod().name();
            LOGGER.info("Incoming Request: [{}] {}", method, path);

            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
                int statusCode = exchange.getResponse().getStatusCode().value();
                LOGGER.info("Response Status: {} for path: {}", statusCode, path);
            }));
        };
    }
}
