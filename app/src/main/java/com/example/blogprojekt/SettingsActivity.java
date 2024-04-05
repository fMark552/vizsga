package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;

public class SettingsActivity extends AppCompatActivity {
    private BottomNavigationView botnav;
    private Button submitBtn;
    private Date maidatum;

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
                maidatum= Calendar.getInstance().getTime();
            }
        });
    }

    public void init(){
        botnav=findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_settings);
        submitBtn=findViewById(R.id.submitButton);
    }
}