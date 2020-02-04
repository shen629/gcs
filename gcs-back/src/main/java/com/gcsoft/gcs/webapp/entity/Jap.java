package com.gcsoft.gcs.webapp.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Jap {
    private Integer id;
    private String kanji;
    private String hiragana;
    private String chinese;
    private boolean noun;
    private boolean adj1;
    private boolean adj2;
    private boolean verb1;
    private boolean verb2;
    private boolean verb3;
    private boolean adverb;
    private String sample;
}
