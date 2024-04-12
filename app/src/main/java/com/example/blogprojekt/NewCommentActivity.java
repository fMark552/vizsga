package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.time.LocalDateTime;

public class NewCommentActivity extends AppCompatActivity implements RequestTask.OutResponse {
    private EditText commentInput;
    private Button commentsubmit;
    private SharedPreferences sh;
    private SharedPreferences sh2;
    private int id;
    private int blogId;
    private TextView errorTV;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_new_comment);
        init();
        commentsubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                LocalDateTime lt=LocalDateTime.now();
                Log.d("Idő",lt.toString());
                String text=commentInput.getText().toString();
                String commentString="";
                if (text.isEmpty()){
                    errorTV.setText("The text field cannot be empty!");
                }
                else{
                    try {
                        commentString=new JSONObject()
                                .put("commentUserId",id)
                                .put("commentText",text)
                                .put("timestamp",lt)
                                .put("commentBlogId",blogId)
                                .toString();
                    } catch (JSONException e){
                        e.printStackTrace();
                    }
                    RequestTask task=new RequestTask(NewCommentActivity.this,"postcomment","POST",commentString);
                    task.execute();
                }
            }
        });
    }

    public void init(){
        commentInput=findViewById(R.id.commentInput);
        commentsubmit=findViewById(R.id.commentSubmitButton);
        sh2=getSharedPreferences("Profile", Context.MODE_PRIVATE);
        id=sh2.getInt("userid",0);
        errorTV=findViewById(R.id.errorTextView);
        sh=getSharedPreferences("Home", Context.MODE_PRIVATE);
        blogId=sh.getInt("blogid",0);
    }

    @Override
    public void response(Response response){
        if (response.getResponseCode()>=400){
            Toast.makeText(NewCommentActivity.this,"Unsuccesful comment post",Toast.LENGTH_SHORT).show();
            Log.d("onPostExecuteError:", response.getContent());
        }
        if (response.getResponseCode()==200){
            Log.d("onPostExecuteError:", response.getContent());
            Toast.makeText(NewCommentActivity.this,"Succesful comment post",Toast.LENGTH_SHORT).show();
            Intent main = new Intent(NewCommentActivity.this, CommentActivity.class);
            startActivity(main);
            finish();
        }
    }
}