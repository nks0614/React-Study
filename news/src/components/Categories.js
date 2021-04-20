import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'        
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'        
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'        
    },
    {
        name: 'technology',
        text: '기술'        
    }
];

const CategroriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 1100px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.25rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: black;
    padding-bottom: 0.25rem;

    &: hover {
        color: #88949e;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #78b4e3;
        color: #78b4e3;
        &:hover {
            color: #3f9ee8;
        } 
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategroriesBlock>
            {categories.map(c=> (
                <Category 
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}>
                    {c.text}
                </Category>
            ))}
        </CategroriesBlock>
    );
};

export default Categories;