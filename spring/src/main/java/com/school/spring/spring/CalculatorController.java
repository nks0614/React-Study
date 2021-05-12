package com.school.spring.spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @GetMapping("/cal")
    public Integer calculator(
            @RequestParam(required = false, defaultValue = "plus") String symbol,
            @RequestParam(required = false, defaultValue = "1") String num1,
            @RequestParam(required = false, defaultValue = "1") String num2
    ) {
        int n1 = Integer.parseInt(num1);
        int n2 = Integer.parseInt(num2);
        int result = 0;
        switch (symbol) {
            case "plus":
                result = n1 + n2;
                break;
            case "minus":
                result = n1 - n2;
                break;
            case "multiply":
                result = n1 * n2;
                break;
            case "division":
                result = n1 / n2;
                break;
        }
        return result;
    }


}
