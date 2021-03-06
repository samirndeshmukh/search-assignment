/**
 * 
 */
package com.assignment.search.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignment.search.domain.Item;

/**
 * @author samir
 *
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

	Page<Item> findDistinctByKeywords_keywordLikeIgnoreCaseOrderByTitle(String keyword, Pageable pageable);

}
