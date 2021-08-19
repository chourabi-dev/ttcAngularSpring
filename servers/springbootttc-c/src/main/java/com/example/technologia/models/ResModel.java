package com.example.technologia.models;

public class ResModel {

	private boolean success;
	private String message;
	public ResModel(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	public ResModel() {
		super();
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	
	
}
