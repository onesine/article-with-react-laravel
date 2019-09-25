<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Article extends Model
{
    public $fillable = ['title', 'slug', 'description', 'media', 'user_id'];
    protected $dates = ['created_at', 'update_at'];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            $article->slug = Str::slug($article->title, '-');
        });
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function insertArticle(array $article)
    {
        return $this->create($article);
    }

    public function getLatestArticlesPaginate(int $int)
    {
        return $this->latest()->paginate($int);
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }

    public function getRouteKeyName()
    {
        return "slug";
    }

    public function getComments()
    {
        return $this->comments()->get();
    }
}
