import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
/* import PropTypes from "prop-types";
import { render } from '@testing-library/react'; */





class Home extends React.Component {
  state = {
    isLoading: true, // mount 되면 isLoading은 true가 된다
    movies: []
  };

  getMovies =  async() => {
    const { 
      data: {
        data: { movies }
      }
     } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false });
    // 앞의 movies는 state의 movies
    // 뒤의 movies는 axios에서 온 movies
    // 그래도 movies라고 하나만 적어도 JS는 이해함
  };


  componentDidMount() {  // component가 mount되면 호출되는 메소드
    this.getMovies();
  }


render() {
  const { isLoading, movies } = this.state;
  // const { ~~ } = this.state 는 단순히 `this.state.~~` 라는 값을 `~~`로 접근할 수 있게끔 해주는 문법
  return (<section className = "container">
    {isLoading ? (
    <div className = "loader">
      <span className="loader__text"> Loading... </span>
    </div>
    ) : (
      <div className = "movies">
        { movies.map ( movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres} /> )
        )}

      </div> 
  )}
  </section>
  );
  // 삼항 연산자. true면 앞, false면 뒷문장!
  // 원래는 isLoading말고 this.state.isLoading이라고 써야하는데,
  // 위에 const { isLoading } = this.state; 라고 써둬서 안쓰고도 가능
  }
}


export default App;






/* class App extends React.Component {
  state = {
    isLoading: true, // mount 되면 isLoading은 true가 된다
    movies: []
  };

  componentDidMount() {  // component가 mount되면 호출되는 메소드
    setTimeout( () => {  // react X, JS.
      this.setState({ isLoading: false });
    }, 3000);
  }

We are ready  Window Help
render() {
  const { isLoading } = this.state;
  // const { ~~ } = this.state 는 단순히 `this.state.~~` 라는 값을 `~~`로 접근할 수 있게끔 해주는 문법
  return <div> {isLoading ? "Loading..." : "We are ready"} </div>;
  // 삼항 연산자. true면 앞, false면 뒤!
  // 원래는 isLoading말고 this.state.isLoading이라고 써야하는데,
  // 위에 const { isLoading } = this.state; 라고 써둬서 안쓰고도 가능
  }
}

export default App; */




/* class App extends React.Component {

  state = {
    count: 0
  };

  add = () => {
    this.setState( current => ({ count: current.count +1 })); //add버튼 클릭 시 1이 나옴
  };
  minus = () => {
    this.setState( current => ({ count: current.count -1 })); //minus버튼 클릭 시 -1이 나옴
  };


  render() {
    return (
      <div>
        <h1> The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button>
      </div>
  )}
}
//{this.add()} 아님. 이건 즉시 나타내는 것. 여기선 이걸 클릭했을 때만이므로 () 안 붙임!

export default App; */





/* const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  
  },
  {
    id: 2,
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating : 4.9
  }

]; */





/* function App() {
  return (
    <div> 
      <h2> 효영이의 React 시작5456 </h2>
      <Food fav = "chukumi" />
      <Food fav = "kimchi" />
      <Food fav = "samgiopsal" /> 
      <Food fav = "ramen" />
    </div>
  ); */



/*   function Food({ name, picture, rating }) {
    // 여기에는 ({fav}) 에서 fav 대신에 props.fav라고 쓰면 동작 안 되는 듯 보임.
    // 괄호 안에 그냥 (props)
    // 속성 이름 쓸 때 중괄호 필요!
    // 여러 개 쓸 때는 중괄호 하나 안에 여러 개 적어주면 됨!
  
    return (
      <div>
        <h5> I like {name} </h5>
        <h4> {rating}/5.0 </h4>
        <img src={picture} alt={name} />
      </div>
    );
    // 여기에선 {fav} 에서 fav 대신에 props.fav라고 써도 됨
  } */
  

/*   Food.propTypes = {  // 여기서 propTypes이름은 다른 것 안 됨! 이것만.
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  } */
  // 여기서 isRequired는 필수값인지 확인하는 것





/* function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating} />
      ))}
    </div>
  );

  // {foodILike} 이렇게 쓰면 자바스크립트.
  // 여기서 dish이름이 중요한 게 아님. 각각의 item을 가리킨다는 것이 중요한 것.
  // 객체임! ★

  // div가 return 아래로 내려가버리면 안됨 ㅠㅠ!! 해결하려면 return 다음에 괄호
  // 우린 function, application 갖고 있고 이것은 html을 반환할 것임
}

export default App; */
