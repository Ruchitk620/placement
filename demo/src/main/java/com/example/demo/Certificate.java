package com.example.demo;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int year;
    private int collegeId;

    public Certificate() {
    }

    public Certificate(Integer id, int year, int collegeId) {
        this.id = id;
        this.year = year;
        this.collegeId = collegeId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getCollegeId() {
        return collegeId;
    }

    public void setCollegeId(int collegeId) {
        this.collegeId = collegeId;
    }

    @Override
    public String toString() {
        return "Certificate [id=" + id + ", year=" + year + ", collegeId=" + collegeId + "]";
    }
}

