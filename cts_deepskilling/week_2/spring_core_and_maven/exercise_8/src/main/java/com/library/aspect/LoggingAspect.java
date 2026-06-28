package com.library.aspect;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.library.service.*.*(..))")
    public void logBefore(JoinPoint jp) {
        System.out.println("[Before] Executing: " + jp.getSignature().getName());
    }
    @After("execution(* com.library.service.*.*(..))")
    public void logAfter(JoinPoint jp) {
        System.out.println("[After]  Completed: " + jp.getSignature().getName());
    }
}
