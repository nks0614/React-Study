import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width:60%;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6aa3bb2040234942bb9a6267aa5bd259`,
        );
    }, [category]);


    if(loading) {
        return <div>대기중....</div>;
    }

    if(!response) {
        return null;
    }

    if(error) {
        return <div>Error!</div>;
    }

    const {articles} = response.data;
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;