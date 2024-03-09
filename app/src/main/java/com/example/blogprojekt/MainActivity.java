package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText usernameET;
    private EditText passwordET;
    private Button loginBtn;
    private TextView createTV;
    private TextView hibaTV;
    private Button tovaBtn;
    private String hibauzenet;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        init();

        loginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String username=usernameET.getText().toString();
                String password=passwordET.getText().toString();
                if(username.isEmpty()||password.isEmpty()) {
                    hibauzenet = "The username or password field cannot be empty!";
                    hibaTV.setText(hibauzenet);
                }
            }
        });

        tovaBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                finish();
            }
        });

        createTV.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(MainActivity.this,RegisterActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

    public void init(){
        usernameET=findViewById(R.id.usernameEditText);
        passwordET=findViewById(R.id.passwordEditText);
        loginBtn=findViewById(R.id.loginButton);
        createTV=findViewById(R.id.createTextView);
        hibaTV=findViewById(R.id.hibaTextView);
        tovaBtn=findViewById(R.id.tovabutton);
    }
}