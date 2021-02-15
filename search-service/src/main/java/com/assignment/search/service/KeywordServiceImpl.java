/**
 * 
 */
package com.assignment.search.service;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.assignment.search.repository.KeywordRepository;
import com.assignment.search.service.api.KeywordService;

import lombok.extern.slf4j.Slf4j;

/**
 * @author samir
 *
 */
@Slf4j
@Service
public class KeywordServiceImpl implements KeywordService {

	private KeywordRepository keywordRepo;

	public KeywordServiceImpl(KeywordRepository keywordRepo) {
		this.keywordRepo = keywordRepo;
	}

	@Override
	public Set<String> getTopMatchingKeywords(String entry) {
		log.info("Service call to find matching keyword for {}",entry);
		PageRequest pageable = PageRequest.of(0, 10, Sort.by("keyword"));
		return this.keywordRepo.findDistinctByKeywordStartsWithIgnoreCase(entry, pageable).getContent().stream().map(k -> k.getKeyword())
				.collect(Collectors.toSet());
	}

}
