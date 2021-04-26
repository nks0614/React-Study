import { useCallback, useReducer, useState, useRef, useEffect } from "react";
import PostList from "./components/PostList";

function App() {
    const [Writer, setWriter] = useState("");
    const [MovieTitle, setMovieTitle] = useState("");
    const [MovieReview, setMovieReview] = useState("");
    const [MovieStar, SetMovieStar] = useState("0");

    const onWriterHandler = (e) => {
        setWriter(e.currentTarget.value);
    }

    const onMovieTitleHandler = (e) => {
        setMovieTitle(e.currentTarget.value);
    }

    const onMovieReviewHandler = (e) => {
        setMovieReview(e.currentTarget.value);
    }

    const onMovieStarHandler = (e) => {
      SetMovieStar(e.currentTarget.value);
    }

    const onIncreaseStarValue = (e) => {
        if (parseInt(MovieStar) < 5) {
            SetMovieStar(parseFloat(MovieStar) + 0.5);
        }
        e.preventDefault();
    }

    const onDecreaseStarValue = (e) => {
        if (parseFloat(MovieStar) > 0) {
            SetMovieStar(parseFloat(MovieStar) - 0.5);
        }
        e.preventDefault();
    }

    const onSubmit = useCallback(
        e => {
            onInsert(Writer, MovieTitle, MovieReview, MovieStar);
            setWriter('');
            setMovieTitle('');
            setMovieReview('');
            SetMovieStar(0);
            e.preventDefault();
        },
        [Writer, MovieTitle, MovieReview, MovieStar]
    );

    function postReducer(posts, action) {
        switch (action.type) {
            case "INSERT":
                return posts.concat(action.post);

            case "MODIFY":
              console.log(posts);
              return posts.map((post) => {
                return post.movieIdx === action.post.movieIdx ? action.post : post
              });

            default:
                return posts;
        }
    }

    function createBulkPosts() {
        const array = [];
        array.push({
            movieIdx: 1,
            writer: "nks",
            movieTitle: "웹",
            movieReview: "웹 어려움",
            movieStar: 5
        });

        return array;
    }

    const [posts, dispatch] = useReducer(postReducer, undefined, createBulkPosts);
    const nextIdx = useRef(2);
    const onInsert = useCallback(
        (writer, movieTitle, movieReview, movieStar) => {
            const post = {
                movieIdx: nextIdx.current,
                writer: writer,
                movieTitle: movieTitle,
                movieReview: movieReview,
                movieStar: movieStar
            };
            dispatch({ type: "INSERT", post });
            nextIdx.current += 1;
        },
        []
    );

    const onModify = (e) => {
        const movieIdx = prompt("수정할 영화평점 게시글 번호를 입력하세요.(숫자만)");
        const writer = prompt("수정할 사용자 명을 입력하세요.");
        const movieTitle = prompt("수정할 영화 제목을 입력하세요.");
        const movieReview = prompt("수정할 영화평을 입력하세요");
        const movieStar = prompt("수정할 영화 별점을 입력하세요.(0.5 단위 최대 5까지 가능합니다.)");

        e.preventDefault();
        e.stopPropagation();

        const post = posts.find((item) => {
            return item.movieIdx === Number(movieIdx);
        });

        if (!post) {
          return alert('해당 게시글이 존재하지 않습니다.');
        }

        if (post !== undefined) {
          post.writer = writer;
          post.movieTitle = movieTitle;
          post.movieReview = movieReview;
          post.movieStar = movieStar;
        }

        dispatch({ type: 'MODIFY', post });
      }

    return (
        <div>
            <form>
                <label>글쓴이 : </label>
                <input type="text"
                       placeholder="사용자 명을 입력해 주세요."
                       value={Writer}
                       onChange={onWriterHandler}
                />

                <br />

                <label>영화 제목 : </label>
                <input type="text"
                       placeholder="영화 제목을 입력해 주세요."
                       value={MovieTitle}
                       onChange={onMovieTitleHandler}
                />

                <br />

                <label>영화평 : </label>
                <input type="text"
                       placeholder="영화평을 입력해 주세요."
                       value={MovieReview}
                       onChange={onMovieReviewHandler}
                />

                <br />

                <label>별점 : </label>
                <span>{MovieStar}점</span>
                <button onClick={onIncreaseStarValue}>별점 +0.5</button>
                <button onClick={onDecreaseStarValue}>별점 -0.5</button>

                <br /> <br/>

                <button onClick={onSubmit}>
                    등록하기
                </button>
                <button onClick={onModify}>
                    수정하기
                </button>
            </form>

            <br />

            {posts.map(post => (
                <PostList post={post}
                          key={post.movieIdx} 
                />
            ))}
        </div>
    );
}

export default App;
