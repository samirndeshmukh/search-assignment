/**
 * 
 */
package com.assignment.search.controller;


import java.util.Set;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.search.domain.Result;
import com.assignment.search.service.api.KeywordService;
import com.assignment.search.service.api.SearchService;

import lombok.extern.slf4j.Slf4j;



/**
 * @author samir
 *
 */
@Slf4j
@RestController
@RequestMapping("/search")
public class SearchController {

	private SearchService searchService;
	private KeywordService keywordService;

	public SearchController(SearchService searchService, KeywordService keywordService) {
		this.searchService = searchService;
		this.keywordService = keywordService;
	}

	
	@GetMapping("/keywords")
	@ResponseStatus(HttpStatus.OK)
	public Set<String> keywords(@RequestParam(name = "k",defaultValue = "") String entry){
		log.info("Get keywords: {}",entry);
		return this.keywordService.getTopMatchingKeywords(entry);
	}
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public Result search(@RequestParam("k") String keyword,Pageable page){
		log.info("Search keyword: {}",keyword);
		return this.searchService.search(keyword, page);
	}
	
}
