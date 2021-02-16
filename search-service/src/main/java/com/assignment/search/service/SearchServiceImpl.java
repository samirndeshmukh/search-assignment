/**
 * 
 */
package com.assignment.search.service;

import java.util.LinkedList;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.assignment.search.domain.Item;
import com.assignment.search.domain.Result;
import com.assignment.search.repository.ItemRepository;
import com.assignment.search.service.api.SearchService;

import lombok.extern.slf4j.Slf4j;

/**
 * @author samir
 *
 */
@Slf4j
@Service
public class SearchServiceImpl implements SearchService {

	private ItemRepository itemRepository;

	public SearchServiceImpl(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	@Override
	public Result search(String keyword, Pageable pageable) {
		log.info("Searching items for keyword {}",keyword);
		String likeKeyword="%"+keyword+"%";
		Page<Item> pageItem=this.itemRepository.findByKeywords_keywordLikeIgnoreCaseOrderByTitle(likeKeyword,pageable);
		Result result=new Result();
		result.setKeyword(keyword);
		result.setPageNumber(pageable.getPageNumber());
		result.setPageSize(pageable.getPageSize());
		result.setItems(new LinkedList<>(pageItem.getContent()));
		result.setTotalRecords(pageItem.getTotalElements());
		return result;
	}
	
}
