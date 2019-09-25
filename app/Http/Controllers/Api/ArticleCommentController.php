<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommentFormRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\CommentResource;
use App\User;
use Illuminate\Http\Request;

class ArticleCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Article $article)
    {
        $comments = CommentResource::collection($article->getComments());
        $comments->additional(['article' => new ArticleResource($article)]);
        return $comments;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return CommentResource
     */
    public function store(Article $article, CommentFormRequest $request)
    {
        $comment = request(['content']);
        return new CommentResource(User::find(1)->addComment($comment, $article));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return array
     */
    public function update(Article $article, CommentFormRequest $request, Comment $comment)
    {
        return ['completed' => $comment->update(['content' => request('content')])];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return array
     */
    public function destroy(Article $article, Comment $comment)
    {
        return ['completed' => $comment->delete()];
    }
}
