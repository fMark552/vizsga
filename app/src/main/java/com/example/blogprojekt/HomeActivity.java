package com.example.blogprojekt;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;



import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class HomeActivity extends AppCompatActivity implements RequestTask.OutResponse{

    private BottomNavigationView botnav;
    private ListView blogLV;
    private List<Blogs> blogsList=new ArrayList<>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        init();
        RequestTask task=new RequestTask(HomeActivity.this,"blogs","GET");
        task.execute();
        botnav.setOnItemSelectedListener(item -> {
            switch (item.getItemId()){
                case R.id.menu_home:
                    return true;
                case R.id.menu_profile:
                    startActivity(new Intent(getApplicationContext(), ProfileActivity.class));
                    finish();
                    return true;
                case R.id.menu_settings:
                    startActivity(new Intent(getApplicationContext(), SettingsActivity.class));
                    finish();
                    return true;
            }
            return false;
        });
    }

    private class BlogsAdapter extends ArrayAdapter<Blogs>{
        public BlogsAdapter(){
            super(HomeActivity.this,R.layout.post_listitem,blogsList);
        }
        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent){
            LayoutInflater inflater=getLayoutInflater();
            View view=inflater.inflate(R.layout.post_listitem,null,false);
            TextView postusername=view.findViewById(R.id.postusername);
            TextView posttimestamp=view.findViewById(R.id.posttimestamp);
            TextView posttext=view.findViewById(R.id.posttext);
            Blogs actualBlog=blogsList.get(position);
            postusername.setText(actualBlog.getUser());
            posttimestamp.setText((CharSequence) actualBlog.getTimestamp());
            posttext.setText(actualBlog.getText());

            return view;
        }
    }

    public void init(){
        botnav=findViewById(R.id.bottom_navView);
        botnav.setSelectedItemId(R.id.menu_home);
        blogLV=findViewById(R.id.blogListView);
        blogLV.setAdapter(new BlogsAdapter());
    }

    @Override
    public void response(Response response){
        Gson converter=new Gson();
        if (response.getResponseCode()>=400){
            Toast.makeText(HomeActivity.this, "Hiba történt a kérés feldolgozása során", Toast.LENGTH_SHORT).show();
            Log.d("onPostExecuteError:", response.getContent());
        }
        if (response.getResponseCode()==200){
            Blogs[] blogArray=converter.fromJson(response.getContent(),Blogs[].class);
            blogsList.clear();
            blogsList.addAll(Arrays.asList(blogArray));
            blogLV.invalidateViews();
        }
    }
}