package com.gcsoft.gcs.webapp.language.controller;

import com.gcsoft.gcs.webapp.entity.Jap;
import com.gcsoft.gcs.webapp.language.service.JapService;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequestMapping("/jap")
public class JapController {
    private JapService service;
    private Random df = new Random();

    public JapController(JapService service) {
        this.service = service;
    }

    @PostMapping("/set")
    public String setJap(@RequestBody Jap jap) {
        service.insert(jap);
        return "success";
    }

    @GetMapping("/get")
    public Jap getJap() {
        int count = service.count();
        if (count < 1) {
            return null;
        }

        int id = df.nextInt(count + 1);
        Jap jap = service.select(id);
        if (jap != null) {
            return jap;
        } else {
            return getJap();
        }
    }
}
