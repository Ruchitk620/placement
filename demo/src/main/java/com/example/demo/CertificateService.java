package com.example.demo;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CertificateService {

    @Autowired
    private CertificateRepository repo;

    public List<Certificate> listAll() {
        return repo.findAll();
    }

    public void save(Certificate certificate) {
        repo.save(certificate);
    }

    public Certificate get(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }
}