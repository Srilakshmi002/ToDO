package com.todo.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class TaskController {

    @GetMapping("/")
    public String defaultpage(){
        return "index";
    }
}
