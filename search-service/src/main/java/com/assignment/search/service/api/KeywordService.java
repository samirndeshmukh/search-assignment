/**
 * 
 */
package com.assignment.search.service.api;

import java.util.List;
import java.util.Set;

/**
 * @author samir
 *
 */
public interface KeywordService {

	Set<String> getTopMatchingKeywords(String entry);

}
