package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.gson.Gson;

public class ProfileActivity extends AppCompatActivity implements RequestTask.OutResponse {
    private BottomNavigationView botnav;
    private SharedPreferences sh;
    private SharedPreferences sh2;
    private String username;
    private String email;
    private TextView emailTV;
    private TextView usernameTV;
    private Button logoutBtn;
    private User[] users;
    private User user;
    private int id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        init();
        usernameTV.setText("Username: " + username);
        RequestTask task = new RequestTask(ProfileActivity.this, "users/" + username, "GET");
        task.execute();

        botnav.setOnItemSelectedListener(item -> {
            switch (item.getItemId()) {
                case R.id.menu_home:
                    startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                    finish();
                    return true;
                case R.id.menu_profile:
                    return true;
                case R.id.menu_settings:
                    startActivity(new Intent(getApplicationContext(), NewPostActivity.class));
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

    public void init() {
        botnav = findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_profile);
        sh = getSharedPreferences("Main", Context.MODE_PRIVATE);
        sh2=getSharedPreferences("Profile",Context.MODE_PRIVATE);
        username = sh.getString("username", "");
        logoutBtn = findViewById(R.id.logoutButton);
        usernameTV = findViewById(R.id.profileUsernameTextView);
        emailTV = findViewById(R.id.profileEmailTextView);
    }


    @Override
    public void response(Response response) {
        Gson converter = new Gson();

        if (response.getResponseCode() >= 400) {
            Log.d("onPostExecuteError:", response.getContent());
        }
        if (response.getResponseCode() == 200) {
            Log.d("onPostExecuteError:", response.getContent());
            users = converter.fromJson(response.getContent(),User[].class);
            SharedPreferences.Editor editor=sh2.edit();
            user= users[0];
            int tesztid=user.getId();
            Log.d("ID test: ",String.valueOf(tesztid));
            editor.putInt("userid", user.getId());
            editor.commit();
            emailTV.setText("Email: "+user.getEmail());
        }
    }
}
