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
import android.widget.Toast;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import org.json.JSONException;
import org.json.JSONObject;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

public class NewPostActivity extends AppCompatActivity implements RequestTask.OutResponse{
    private BottomNavigationView botnav;
    private Button submitBtn;
    private Date timestamp;
    private EditText textET;
    private SharedPreferences sh2;
    private Date asd;
    private Date date;
    private int id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_new_post);
        init();
        Log.d("IDCHECK: ",String.valueOf(id));
        botnav.setOnItemSelectedListener(item -> {
            switch (item.getItemId()){
                case R.id.menu_home:
                    startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                    finish();
                    return true;
                case R.id.menu_profile:
                    startActivity(new Intent(getApplicationContext(), ProfileActivity.class));
                    finish();
                    return true;
                case R.id.menu_settings:
                    return true;
            }
            return false;
        });

        submitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                LocalDateTime lt=LocalDateTime.now();
                Log.d("Idő",lt.toString());
                timestamp= Calendar.getInstance().getTime();
                String text=textET.getText().toString();
                String postString="";
                Log.d("ASD",timestamp.toString());
                try {
                    postString=new JSONObject()
                            .put("userId",id)
                            .put("text",text)
                            .put("timestamp",lt)
                            .toString();
                } catch (JSONException e){
                    e.printStackTrace();
                }
                RequestTask task=new RequestTask(NewPostActivity.this,"postblog","POST",postString);
                task.execute();
            }
        });
    }

    public void init(){
        botnav=findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_settings);
        submitBtn=findViewById(R.id.submitButton);
        textET=findViewById(R.id.edtInput);
        sh2=getSharedPreferences("Profile", Context.MODE_PRIVATE);
        id=sh2.getInt("userid",0);
    }

    @Override
    public void response(Response response){
        if (response.getResponseCode()>=400){
            Toast.makeText(NewPostActivity.this,"Unsuccesful post",Toast.LENGTH_SHORT).show();
            Log.d("onPostExecuteError:", response.getContent());
        }
        if (response.getResponseCode()==200){
            Log.d("onPostExecuteError:", response.getContent());
            Toast.makeText(NewPostActivity.this,"Succesful post",Toast.LENGTH_SHORT).show();
            Intent main = new Intent(NewPostActivity.this, HomeActivity.class);
            startActivity(main);
            finish();
        }
    }
}