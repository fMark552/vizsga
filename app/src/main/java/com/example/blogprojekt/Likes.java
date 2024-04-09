package com.example.blogprojekt;

public class Likes {
    private int likeId;
    private int heartUserId;
    private int heartBlogId;

    public Likes(int likeId, int heartUserId, int heartBlogId){
        this.likeId=likeId;
        this.heartUserId=heartUserId;
        this.heartBlogId=heartBlogId;
    }

    public int getLikeId() {
        return likeId;
    }
    public void setLikeId(int id) {
        this.likeId = likeId;
    }
    public int getHeartUserId() { return heartUserId; }
    public void setHeartUserId(int heartUserId) { this.heartUserId=heartUserId; }
    public int getHeartBlogId() { return heartBlogId; }
    public void setHeartBlogId(int heartBlogId) { this.heartBlogId=heartBlogId; }
}
