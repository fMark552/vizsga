package com.example.blogprojekt;

import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;

import java.io.IOException;

public class RequestTask extends AsyncTask<Void, Void, Response> {
    private String requestUrl;
    private String requestType;
    private String requestParams;
    private Context context;
    private OutResponse outResponse;

    private final String BASE_URL = "http://10.0.2.2:1997/";

    public RequestTask(Context context, String requestUrl, String requestType) {
        this.requestUrl = requestUrl;
        this.requestType = requestType;
        this.context = context;
        this.outResponse = (OutResponse) context;
    }

    public RequestTask(Context context, String requestUrl, String requestType, String requestParams) {
        this.requestUrl = requestUrl;
        this.requestType = requestType;
        this.requestParams = requestParams;
        this.context = context;
        this.outResponse = (OutResponse) context;
    }

    @Override
    protected Response doInBackground(Void... voids) {
        Response response = null;
        try {
            switch (requestType){
                case "GET":
                    response = RequestHandler.get(BASE_URL + requestUrl);
                    break;
                case "POST":
                    response = RequestHandler.post(BASE_URL + requestUrl, requestParams);
                    break;
                case "PATCH":
                    response = RequestHandler.put( BASE_URL + requestUrl, requestParams);
                    break;
                case "DELETE":
                    response = RequestHandler.delete(BASE_URL + requestUrl, requestParams);
                    break;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return response;
    }

    @Override
    protected void onPostExecute(Response response) {
        super.onPostExecute(response);
        outResponse.response(response);
    }
    public interface OutResponse {
        void response(Response response);
    }
}
