package com.example.blogprojekt;

import java.util.Date;

public class Blogs {
    private int id;
    private String text;
    private String user;
    private Date timestamp;

    public Blogs(int id,String text, String user, Date timestamp){
        this.id=id;
        this.text=text;
        this.user=user;
        this.timestamp=timestamp;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getText() { return text; }
    public void setText(String text) { this.text=text; }
    public String getUser() { return user; }
    public void setUser(String user) { this.user=user; }
    public Date getTimestamp() { return timestamp; }
    public void setTimestamp(Date timestamp) { this.timestamp=timestamp; }
}
