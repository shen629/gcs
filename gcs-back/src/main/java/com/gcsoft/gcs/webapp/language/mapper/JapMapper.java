package com.gcsoft.gcs.webapp.language.mapper;

import com.gcsoft.gcs.webapp.entity.Jap;
import org.springframework.stereotype.Repository;

@Repository
public interface JapMapper {
    void ins(Jap jap);
    void upt(Jap jap);
    Jap sel(int id);
    int cot();

    Jap selKanji(String kanji);
}
