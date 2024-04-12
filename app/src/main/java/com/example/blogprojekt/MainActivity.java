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

public class MainActivity extends AppCompatActivity implements RequestTask.OutResponse {

    private EditText usernameET;
    private EditText passwordET;
    private Button loginBtn;
    private TextView createTV;
    private TextView hibaTV;
    private Button tovaBtn;
    private String hibauzenet;
    private SharedPreferences sharedpreferences;

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
                boolean isValid;
                if(username.isEmpty()||password.isEmpty()) {
                    hibauzenet = "The username or password field cannot be empty!";
                    hibaTV.setText(hibauzenet);
                    isValid=false;
                } else{
                    isValid=true;
                }
                if(isValid){
                    String loginString="";
                    try{
                        loginString=new JSONObject()
                                .put("username",username)
                                .put("password",password)
                                .toString();
                    } catch (JSONException e){
                        e.printStackTrace();
                    }
                    RequestTask login=new RequestTask(MainActivity.this,"login","POST",loginString);
                    login.execute();
                }
            }
        });

        tovaBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), NewPostActivity.class));
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

        sharedpreferences = getSharedPreferences("Main", Context.MODE_PRIVATE);
    }

    @Override
    public void response(Response response) {
        if (response.getResponseCode()>=400){

            Log.d("onPostExecuteError:", response.getContent());
            hibaTV.setText(response.getContent());
        }
        if (response.getResponseCode()==200){
            SharedPreferences.Editor editor = sharedpreferences.edit();
            editor.putString("username", usernameET.getText().toString());
            editor.putString("pwd", passwordET.getText().toString());
            editor.commit();
            Toast.makeText(MainActivity.this,"Succesful login",Toast.LENGTH_SHORT).show();
            Intent main = new Intent(MainActivity.this, ProfileActivity.class);
            startActivity(main);
            finish();
        }

        /**switch (response.getResponseCode()){
            case 401:
                hibaTV.setText("Helytelen felhasználónév vagy jelszó!");
                break;
            case 200:
                SharedPreferences.Editor editor = sharedpreferences.edit();
                editor.putString("username", usernameET.getText().toString());
                editor.putString("pwd", passwordET.getText().toString());
                editor.commit();
                Intent main = new Intent(MainActivity.this, HomeActivity.class);
                startActivity(main);
                finish();
                break;
        }*/
    }
}