/**
 * 
 */
package com.assignment.search.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import lombok.extern.slf4j.Slf4j;

/**
 * @author samir
 *
 */
@Slf4j
@RestControllerAdvice
public class GlobalErrorHandler {

	private static class ErrorResponse {
		int code;
		String message;

		public ErrorResponse(int code, String message) {
			this.code = code;
			this.message = message;
		}

	}

	@ExceptionHandler(value = { Exception.class })
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Internal Server Error")
	public ErrorResponse resourceNotFoundException(Exception ex, WebRequest request) {
		log.error("Exception occured ", ex.getMessage());
		ErrorResponse err = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage());
		log.info("Sending error code: {}",err.code);
		log.info("Sending error message: {}",err.message);
		return err;
	}

}
