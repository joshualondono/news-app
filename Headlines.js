import React from 'react';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a63f62608ebf43d4b855f19cde053677');

export default class Headlines extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    newsapi.v2.everything({
      q: 'trump',
      sources: 'cnn',
    //domains: test.toString(),
    // from: '2017-12-01',
      // to: '2017-12-12',
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    }).then(response => {
      const persons = response.articles.map(x => [x.description, x.url, x.publishedAt]);
    
      console.log(persons)
    
    
    });
  }

  render() {
    return (
      <h2>
        News Site, currently data is not loading
        Click edit to update news sources
      </h2>
    )
  }
}