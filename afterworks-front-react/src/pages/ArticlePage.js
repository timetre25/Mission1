import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import API from "../services/API";
import AddArticle from "./AddArticle";


const ArticlePage = () =>{

    const [articles, setaArticles] = useState([]);

    const fetchArticles = async () => {
        try {
            const _articles = await API.getArticles();
            setaArticles(_articles);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);


    return (
        <div>
            <h2>Hello</h2>
            <h3> Ajouter un article</h3>
            <AddArticle/>
            {articles.map((a)=> {
                return (
                    <>
                        <h3><Link to={`/article/details/${a?.idArticle}`}>{a?.titre}</Link></h3>
                        <p>{a?.contenu}</p>

                    </>
                )


            })}
        </div>


    )
}
export default ArticlePage