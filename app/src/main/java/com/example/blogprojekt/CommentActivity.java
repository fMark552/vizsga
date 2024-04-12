package com.example.blogprojekt;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CommentActivity extends AppCompatActivity implements RequestTask.OutResponse{

    private Button backBtn;
    private Button newcommentBtn;
    private ListView commentLV;
    private SharedPreferences sh;
    private int blogId;
    private List<Comments> commentsList=new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_comment);
        init();
        RequestTask task=new RequestTask(CommentActivity.this,"comments/"+blogId,"GET");
        task.execute();
        newcommentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), NewCommentActivity.class));
                finish();
            }
        });
        backBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                finish();
            }
        });
    }

    private class CommentsAdapter extends ArrayAdapter<Comments> {
        public CommentsAdapter(){
            super(CommentActivity.this,R.layout.comment_listitem,commentsList);
        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent){


            LayoutInflater inflater=getLayoutInflater();
            View view=inflater.inflate(R.layout.comment_listitem,null,false);
            TextView commentusername=view.findViewById(R.id.commentUserTextView);
            TextView commenttimestamp=view.findViewById(R.id.commentTimeStampTextView);
            TextView commenttext=view.findViewById(R.id.commentTextTextView);
            Comments actualComment=commentsList.get(position);
            commentusername.setText(actualComment.getUsername());
            commenttimestamp.setText(actualComment.getTimestamp().toString());
            commenttext.setText(actualComment.getCommentText());

            return view;


        }
    }

    public void init(){
        backBtn=findViewById(R.id.backButton);
        newcommentBtn=findViewById(R.id.newcommentButton);
        commentLV=findViewById(R.id.commentListView);
        commentLV.setAdapter(new CommentsAdapter());
        sh=getSharedPreferences("Home", Context.MODE_PRIVATE);
        blogId=sh.getInt("blogid",0);
    }

    @Override
    public void response(Response response){
        Gson converter=new Gson();
        if (response.getResponseCode()>=400){
            Toast.makeText(CommentActivity.this,"Unsuccesful request!",Toast.LENGTH_SHORT).show();
            Log.d("onPostExecuteError: ",response.getContent());
        }
        if (response.getResponseCode()==200){
            Comments[] commentArray=converter.fromJson(response.getContent(),Comments[].class);
            commentsList.clear();
            commentsList.addAll(Arrays.asList(commentArray));
            Log.d("prePostExecute: ",commentsList.toString());
            commentLV.invalidateViews();
            Log.d("onPostExecute: ",response.getContent());
        }
    }
}