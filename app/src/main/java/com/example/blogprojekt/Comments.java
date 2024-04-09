package com.example.blogprojekt;

import java.util.Date;

public class Comments {
    private int commentid;
    private String commentText;
    private Date timestamp;
    private String username;
    private int blogid;

    public Comments(int commentid,String commentText,Date timestamp,String username,int blogid){
        this.commentid=commentid;
        this.commentText=commentText;
        this.timestamp=timestamp;
        this.username=username;
        this.blogid=blogid;
    }

    public int getCommentid() {
        return commentid;
    }

    public void setCommentid(int commentid) {
        this.commentid = commentid;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getBlogid() {
        return blogid;
    }

    public void setBlogid(int blogid) {
        this.blogid = blogid;
    }
}
