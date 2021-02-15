/**
 * 
 */
package com.assignment.search.service.api;

import org.springframework.data.domain.Pageable;

import com.assignment.search.domain.Result;

/**
 * @author samir
 *
 */
public interface SearchService {

	Result search(String keyword,Pageable page);

}
