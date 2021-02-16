/**
 * 
 */
package com.assignment.search.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignment.search.domain.Keyword;

/**
 * @author samir
 *
 */
@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long> {

	Page<Keyword> findByKeywordStartsWithIgnoreCase(String entry,Pageable pageable);

}
