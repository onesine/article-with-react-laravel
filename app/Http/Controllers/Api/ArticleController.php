<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleFormRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticleResourceCollection;
use App\User;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * @var Article
     */
    private $article;

    /**
     * ArticleController constructor.
     * @param Article $article
     */
    public function __construct(Article $article)
    {
        $this->article = $article;
    }

    /**
     * Display a listing of the resource.
     *
     * @return ArticleResourceCollection
     */
    public function index()
    {
        return new ArticleResourceCollection($this->article->getLatestArticlesPaginate(6));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return ArticleResource
     */
    public function store(ArticleFormRequest $request)
    {
        return new ArticleResource(User::findOrFail(1)->addArticle(request(['title', 'description'])));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return array
     */
    public function update(ArticleFormRequest $request, Article $article)
    {
        return ['completed' => $article->update(request(['title', 'description']))];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return array
     */
    public function destroy(Article $article)
    {
        dump($article);
        return ['completed' => $article->delete() ];
    }
}
