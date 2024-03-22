package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class ProfileActivity extends AppCompatActivity {
    BottomNavigationView botnav;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        init();
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
    }

    public void init(){
        botnav=findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_profile);
    }
}