import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classes from './MainBody.module.css';
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Title from "../../components/Title/Title";
import WrittenBy from "../../components/WrittenBy/WrittenBy";
import Loader from "../../components/LoaderComponent/Loader.js";

const MainBody = props => {
  const [getPost, setGetPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const articleId = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios.get(`https://api.codecarver.dev/article/${articleId}`);
      setGetPost(response.data.result)
      setIsLoading(false)
    }
    fetchData();
  },[articleId])
const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return(
    <React.Fragment>
      {isLoading ? (
        <div className={classes.Loader}>
          <Loader />
        </div>):(
      <main className={classes.Main}>
        <div key={getPost.id}>
          <Title fontSize="60px" title={getPost.title}></Title>
          <WrittenBy date={new Date(getPost.created).toLocaleDateString("en-EN", options)}/>
          <ArticleBody source={getPost.body} />
        </div>
      </main>
      )}
    </React.Fragment>
  );
};

export default MainBody;
