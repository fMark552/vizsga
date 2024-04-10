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

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

public class SettingsActivity extends AppCompatActivity implements RequestTask.OutResponse{
    private BottomNavigationView botnav;
    private Button submitBtn;
    private Date timestamp;
    private EditText textET;
    private SharedPreferences sh;
    private int id;
    private Date asd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);
        init();
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
                timestamp= Calendar.getInstance().getTime();
                String text=textET.getText().toString();
                String postString="";
                Log.d("ASD",timestamp.toString());
                try {
                    postString=new JSONObject()
                            .put("userId",id)
                            .put("text",text)
                            .put("timestamp",timestamp).toString();
                } catch (JSONException e){
                    e.printStackTrace();
                }
                RequestTask task=new RequestTask(SettingsActivity.this,"postblog","POST",postString);
                task.execute();
            }
        });
    }

    public void init(){
        botnav=findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_settings);
        submitBtn=findViewById(R.id.submitButton);
        textET=findViewById(R.id.edtInput);
        sh=getSharedPreferences("Profile", Context.MODE_PRIVATE);
        id=sh.getInt("userid",4);
    }

    @Override
    public void response(Response response){
        if (response.getResponseCode()>=400){
            Log.d("onPostExecuteError:", response.getContent());
        }
        if (response.getResponseCode()==200){
            Log.d("onPostExecuteError:", response.getContent());
            Toast.makeText(SettingsActivity.this,"Succesful post",Toast.LENGTH_SHORT).show();
            Intent main = new Intent(SettingsActivity.this, HomeActivity.class);
            startActivity(main);
            finish();
        }
    }
}