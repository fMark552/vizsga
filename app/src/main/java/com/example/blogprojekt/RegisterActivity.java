package com.example.blogprojekt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.InputQueue;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class RegisterActivity extends AppCompatActivity {

    private EditText usernameET;
    private EditText passwordET;
    private Button registerBtn;
    private TextView alreadyTV;
    private TextView hibaTV;
    private String hibauzenet;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        init();

        registerBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String username=usernameET.toString();
                String password=passwordET.toString();
                if(username.isEmpty()){
                    hibauzenet="The username field cannot be empty!";
                    hibaTV.setText(hibauzenet);
                } else if (password.isEmpty()) {
                    hibauzenet="The password field cannot be empty!";
                    hibaTV.setText(hibauzenet);
                }
            }
        });

        alreadyTV.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(RegisterActivity.this,MainActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

    public void init(){
        usernameET=findViewById(R.id.usernameEditText);
        passwordET=findViewById(R.id.passwordEditText);
        registerBtn=findViewById(R.id.registerButton);
        alreadyTV=findViewById(R.id.alreadyTextView);
        hibaTV=findViewById(R.id.hibaTextView);
    }
}