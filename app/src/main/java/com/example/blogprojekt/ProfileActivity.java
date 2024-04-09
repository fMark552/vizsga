package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class ProfileActivity extends AppCompatActivity {
    private BottomNavigationView botnav;
    private SharedPreferences sh;
    private String username;
    private String password;
    private TextView emailTV;
    private TextView usernameTV;
    private Button logoutBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        init();
        usernameTV.setText("Username: "+username);
        botnav.setOnItemSelectedListener(item -> {
            switch (item.getItemId()){
                case R.id.menu_home:
                    startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                    finish();
                    return true;
                case R.id.menu_profile:
                    return true;
                case R.id.menu_settings:
                    startActivity(new Intent(getApplicationContext(),SettingsActivity.class));
                    finish();
                    return true;
            }
            return false;
        });
        logoutBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
                finish();
            }
        });
    }

    public void init(){
        botnav=findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_profile);
        sh=getSharedPreferences("Main", Context.MODE_PRIVATE);
        username=sh.getString("username","");
        password=sh.getString("password","");
        logoutBtn=findViewById(R.id.logoutButton);
        usernameTV=findViewById(R.id.profileUsernameTextView);
        emailTV=findViewById(R.id.profileEmailTextView);
    }
}