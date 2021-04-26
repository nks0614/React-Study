import React from 'react'
import StarRatings from 'react-star-ratings';

const PostList = ({ post }) => {

    const { movieIdx, writer, movieTitle, movieReview, movieStar } = post;

    return (
        <div>
            <div>
                <label>
                    영화평점 게시글 아이디 : {post.movieIdx}번
                </label>
            </div>

            <div>
                <label>
                    글쓴이 : {post.writer}
                </label>    
            </div>
            
            <div>
                <label>
                    영화 제목 : {post.movieTitle}
                </label>
            </div>

            <div>
                <label style={{ wordBreak: "break-all" }}>
                    영화 평 : {post.movieReview}
                </label>    
            </div>
            
            <div>
                <label>
                    별점 : 
                    <StarRatings rating={parseFloat(post.movieStar)}
                                 starDimension="20px"
                                 starSpacing="5px"
                    />
                    {' ' + post.movieStar + '점'}
                </label>
            </div>

            <br />
        </div>
    )
}

export default PostList
