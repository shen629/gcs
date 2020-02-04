package com.gcsoft.gcs.webapp.language.service;

import com.gcsoft.gcs.webapp.entity.Jap;
import com.gcsoft.gcs.webapp.language.mapper.JapMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JapService {

    @Autowired
    private JapMapper mapper;

    public void insert(Jap jap) {
        Jap japx = mapper.selKanji(jap.getKanji());
        if (japx != null) {
            jap.setId(japx.getId());
            mapper.upt(jap);
        } else {
            mapper.ins(jap);
        }
    }

    public Jap select(int id) {
        return mapper.sel(id);
    }

    public int count() {
        return mapper.cot();
    }
}
