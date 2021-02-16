/**
 * 
 */
package com.assignment.search.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

/**
 * @author samir
 *
 */
@Entity
public class Item {

	@Id
	@GeneratedValue
	private Long id;

	private String title;

	private String description;

	private String url;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "item_keywords", joinColumns = { @JoinColumn(name = "items_id") }, inverseJoinColumns = {
			@JoinColumn(name = "keywords_id") })
	private Set<Keyword> keywords = new HashSet<>();

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the keywords
	 */
	public Set<Keyword> getKeywords() {
		return keywords;
	}

	/**
	 * @param keywords the keywords to set
	 */
	public void setKeywords(Set<Keyword> keywords) {
		this.keywords = keywords;
	}

}
