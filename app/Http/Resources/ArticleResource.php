<?php

namespace App\Http\Resources;

use App\Comment;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'media' => $this->media,
            'slug' => $this->slug,
            'created_at' => $this->created_at,
            'description' => $this->description,
            'numberComments' => count($this->comments),
            'user' => new UserResource($this->user),
        ];
    }
}
