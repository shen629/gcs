package com.gcsoft.gcs;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.gcsoft.gcs.webapp.language.mapper")
public class GcsBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(GcsBackApplication.class, args);
    }

}
